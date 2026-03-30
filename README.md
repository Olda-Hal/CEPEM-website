# CEPEM Website

React frontend (Vite) with a simple Python backend (FastAPI).

## Prerequisites

- Node.js 20+
- Docker + Docker Compose

## Environment Configuration

All runtime configuration is centralized in `.env` (root of the project).

Main variables:

- `APP_HOST` - public host where the app is deployed.
- `FRONTEND_PORT` - host port mapped to frontend container.
- `BACKEND_PORT` - host port mapped to backend container.
- `CORS_ALLOW_ORIGINS` - comma separated CORS origins for backend.
- `CORS_ALLOW_METHODS` - allowed CORS methods.
- `CORS_ALLOW_HEADERS` - allowed CORS headers.
- `CORS_ALLOW_CREDENTIALS` - whether credentials are allowed in CORS.

If needed, start from `.env.example` values and adjust them in `.env`.

## Run Locally Without Docker

Frontend only:

1. Install dependencies:
   `npm install`
2. Start frontend dev server:
   `npm run dev`
3. Open:
   `http://localhost:3000`

Backend only:

1. Go to backend folder:
   `cd backend`
2. Create virtual environment (optional):
   `python -m venv .venv && source .venv/bin/activate`
3. Install dependencies:
   `pip install -r requirements.txt`
4. Start backend:
   `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`
5. Open docs:
   `http://localhost:8000/docs`

## Run Full Stack In Docker

From project root:

1. Build and start all services:
   `docker compose up --build`
2. Frontend URL:
   `http://localhost:<FRONTEND_PORT>`
3. Backend URL:
   `http://localhost:<BACKEND_PORT>`
4. Backend health check:
   `http://localhost:<BACKEND_PORT>/health`

Stop services:

`docker compose down`

## Useful npm Scripts

- `npm run docker:up` - Build and start Docker services.
- `npm run docker:down` - Stop Docker services.
- `npm run docker:logs` - Stream Docker logs.
