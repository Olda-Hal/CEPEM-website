import os
import asyncio
from datetime import datetime, timedelta
from typing import Any

from fastapi import FastAPI
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx


def _env_list(name: str, default: str) -> list[str]:
    value = os.getenv(name, default)
    return [item.strip() for item in value.split(",") if item.strip()]


APP_HOST = os.getenv("APP_HOST", "http://localhost")
CORS_ALLOW_ORIGINS = _env_list(
    "CORS_ALLOW_ORIGINS",
    "http://localhost:3001,http://127.0.0.1:3001",
)
CORS_ALLOW_METHODS = _env_list("CORS_ALLOW_METHODS", "*")
CORS_ALLOW_HEADERS = _env_list("CORS_ALLOW_HEADERS", "*")
CORS_ALLOW_CREDENTIALS = os.getenv(
    "CORS_ALLOW_CREDENTIALS", "true").lower() == "true"
DATABASE_API_BASE_URL = os.getenv(
    "DATABASE_API_BASE_URL", "http://localhost:5001").rstrip("/")

app = FastAPI(title="CEPEM Backend", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ALLOW_ORIGINS,
    allow_credentials=CORS_ALLOW_CREDENTIALS,
    allow_methods=CORS_ALLOW_METHODS,
    allow_headers=CORS_ALLOW_HEADERS,
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/message")
def message() -> dict[str, str]:
    return {
        "message": "Backend is running in Docker.",
        "app_host": APP_HOST,
    }


async def _request_database_api(method: str, path: str, payload: dict[str, Any] | None = None) -> Any:
    url = f"{DATABASE_API_BASE_URL}{path}"
    last_error: Exception | None = None

    for attempt in range(1, 4):
        try:
            async with httpx.AsyncClient(timeout=20.0) as client:
                response = await client.request(method, url, json=payload)

            if response.status_code >= 400:
                raise HTTPException(
                    status_code=response.status_code,
                    detail={
                        "database_api_error": response.text,
                        "path": path,
                        "upstream": DATABASE_API_BASE_URL,
                    },
                )

            if not response.text:
                return None
            return response.json()
        except HTTPException:
            raise
        except httpx.RequestError as exc:
            last_error = exc
            if attempt < 3:
                await asyncio.sleep(0.4 * attempt)

    raise HTTPException(
        status_code=503,
        detail={
            "message": "DatabaseAPI is not reachable",
            "upstream": DATABASE_API_BASE_URL,
            "path": path,
            "error": str(last_error) if last_error else "unknown",
        },
    )


@app.get("/api/clinics")
async def get_clinics() -> list[dict[str, Any]]:
    return await _request_database_api("GET", "/api/hospitals")


@app.get("/api/clinics/{clinic_id}/services")
async def get_clinic_services(clinic_id: int) -> list[dict[str, Any]]:
    return await _request_database_api("GET", f"/api/hospitals/{clinic_id}/examination-types?language=cs")


@app.get("/api/clinics/{clinic_id}/booking-options")
async def get_clinic_booking_options(clinic_id: int) -> dict[str, Any]:
    services = await _request_database_api("GET", f"/api/hospitals/{clinic_id}/examination-types?language=cs")
    rooms = await _request_database_api("GET", f"/api/examinationrooms/{clinic_id}")

    room_results: list[dict[str, Any]] = []
    for room in rooms:
        doctors = await _request_database_api("GET", f"/api/doctorexaminationrooms/room/{room['id']}/doctors")
        room_results.append(
            {
                "id": room["id"],
                "name": room.get("name") or f"Room {room['id']}",
                "description": room.get("description"),
                "doctors": doctors,
            }
        )

    return {
        "clinicId": clinic_id,
        "services": services,
        "rooms": room_results,
    }


def _overlaps(start_a: datetime, end_a: datetime, start_b: datetime, end_b: datetime) -> bool:
    return start_a < end_b and end_a > start_b


@app.get("/api/clinics/{clinic_id}/availability")
async def get_clinic_availability(
    clinic_id: int,
    date: str,
    durationMinutes: int = 60,
    slotMinutes: int = 30,
) -> dict[str, Any]:
    if durationMinutes <= 0 or slotMinutes <= 0:
        raise HTTPException(
            status_code=400, detail="durationMinutes and slotMinutes must be positive")

    try:
        selected_day = datetime.strptime(date, "%Y-%m-%d")
    except ValueError as exc:
        raise HTTPException(
            status_code=400, detail="date must use YYYY-MM-DD format") from exc

    day_start = selected_day.replace(hour=0, minute=0, second=0, microsecond=0)
    day_end = day_start + timedelta(days=1)

    from_param = day_start.isoformat()
    to_param = day_end.isoformat()

    rooms = await _request_database_api("GET", f"/api/examinationrooms/{clinic_id}")

    opening_hour = 8
    closing_hour = 17

    room_results: list[dict[str, Any]] = []
    for room in rooms:
        room_id = int(room["id"])
        doctors = await _request_database_api("GET", f"/api/doctorexaminationrooms/room/{room_id}/doctors")
        reservations = await _request_database_api(
            "GET",
            f"/api/reservations/room/{room_id}?from={from_param}&to={to_param}",
        )

        taken_ranges: list[tuple[datetime, datetime]] = []
        for reservation in reservations:
            start_dt = datetime.fromisoformat(reservation["startDateTime"])
            end_dt = datetime.fromisoformat(reservation["endDateTime"])
            taken_ranges.append((start_dt, end_dt))

        current = day_start.replace(
            hour=opening_hour, minute=0, second=0, microsecond=0)
        latest_start = day_start.replace(
            hour=closing_hour, minute=0, second=0, microsecond=0) - timedelta(minutes=durationMinutes)

        available_slots: list[str] = []
        while current <= latest_start:
            candidate_end = current + timedelta(minutes=durationMinutes)
            is_free = not any(_overlaps(current, candidate_end, taken_start, taken_end)
                              for taken_start, taken_end in taken_ranges)
            if is_free:
                available_slots.append(current.strftime("%H:%M"))
            current += timedelta(minutes=slotMinutes)

        room_results.append(
            {
                "id": room_id,
                "name": room.get("name") or f"Room {room_id}",
                "description": room.get("description"),
                "doctors": doctors,
                "availableSlots": available_slots,
            }
        )

    return {
        "clinicId": clinic_id,
        "date": date,
        "durationMinutes": durationMinutes,
        "slotMinutes": slotMinutes,
        "rooms": room_results,
    }
