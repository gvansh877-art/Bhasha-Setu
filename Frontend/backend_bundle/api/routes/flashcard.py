from fastapi import APIRouter, HTTPException

from app.schemas.flashcard_schema import (
    FlashcardRequest,
    FlashcardResponse,
)
from app.services.flashcard_service import FlashcardService


router = APIRouter(
    prefix="/api/flashcard",
    tags=["Flashcard Generator"],
)

flashcard_service = FlashcardService()


@router.post(
    "/generate",
    response_model=FlashcardResponse,
)
async def generate_flashcards(
    request: FlashcardRequest,
) -> FlashcardResponse:
    """Generate structured Hindi flashcards and their Santhali translation."""

    try:
        hindi_flashcards, santhali_flashcards = (
            flashcard_service.generate_flashcards(
                topic=request.topic,
                class_level=request.class_level,
                subject=request.subject,
                number_of_cards=request.number_of_cards,
                educational_context=request.educational_context,
            )
        )

        return FlashcardResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            number_of_cards=request.number_of_cards,
            hindi_flashcards=hindi_flashcards,
            santhali_flashcards=santhali_flashcards,
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