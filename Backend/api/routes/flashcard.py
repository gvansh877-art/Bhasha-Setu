# Backend/api/routes/flashcard.py

from fastapi import APIRouter, HTTPException

from app.schemas.flashcard_schema import (
    FlashcardRequest,
    FlashcardResponse,
)
from app.services.flashcard_service import FlashcardService


router = APIRouter(
    prefix="/api/flashcard",
    tags=["Flashcard"],
)

flashcard_service = FlashcardService()


@router.post(
    "/generate",
    response_model=FlashcardResponse,
)
async def generate_flashcards(
    request: FlashcardRequest,
) -> FlashcardResponse:

    try:
        result = flashcard_service.generate_flashcards(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            educational_context=request.educational_context,
        )

        return FlashcardResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            flashcards=result["flashcards"],
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    except RuntimeError as exc:
        raise HTTPException(
            status_code=503,
            detail=str(exc),
        ) from exc