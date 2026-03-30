import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


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
CORS_ALLOW_CREDENTIALS = os.getenv("CORS_ALLOW_CREDENTIALS", "true").lower() == "true"

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
