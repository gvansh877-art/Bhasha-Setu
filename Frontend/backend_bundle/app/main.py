from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes.translation import router as translation_router
from api.routes.lesson import router as lesson_router
from api.routes.worksheet import router as worksheet_router
from api.routes.flashcard import router as flashcard_router
from api.routes.speech import router as speech_router

from app.services.health_service import get_backend_health


app = FastAPI(
    title="BHASHA SETU API",
    description=(
        "AI-powered vernacular pedagogy and real-time "
        "translation backend for mother tongue-based education."
    ),
    version="2.0.0",
)


# Allow frontend applications to communicate with the backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# API Routers
app.include_router(translation_router)
app.include_router(lesson_router)
app.include_router(worksheet_router)
app.include_router(flashcard_router)
app.include_router(speech_router)


@app.get("/api/health")
async def health_check():
    """Check whether the BHASHA SETU backend is running."""

    return get_backend_health()