import base64

from fastapi import APIRouter, HTTPException

from app.schemas.worksheet_schema import (
    WorksheetRequest,
    WorksheetResponse,
)
from app.services.worksheet_service import WorksheetService
from app.services.tts_service import TTSService


router = APIRouter(
    prefix="/api/worksheet",
    tags=["Worksheet Generator"],
)

worksheet_service = WorksheetService()
tts_service = TTSService()


@router.post(
    "/generate",
    response_model=WorksheetResponse,
)
async def generate_worksheet(
    request: WorksheetRequest,
) -> WorksheetResponse:
    """Generate a structured Hindi worksheet, Santhali translation, and Santhali audio."""

    try:
        hindi_worksheet, santhali_worksheet = (
            worksheet_service.generate_worksheet(
                topic=request.topic,
                class_level=request.class_level,
                subject=request.subject,
                number_of_questions=request.number_of_questions,
                educational_context=request.educational_context,
            )
        )

        # Build one combined text from the complete Santhali worksheet
        audio_text_parts = [
            santhali_worksheet.title,
            santhali_worksheet.instructions,
        ]

        for question in santhali_worksheet.questions:
            audio_text_parts.append(
                f"{question.question_number}. "
                f"{question.question_text}"
            )

        audio_text = "\n".join(audio_text_parts)

        # Generate Santhali audio
        audio_bytes = tts_service.synthesize_santhali(
            text=audio_text,
        )

        audio_base64 = base64.b64encode(
            audio_bytes
        ).decode("utf-8")

        return WorksheetResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            number_of_questions=request.number_of_questions,
            hindi_worksheet=hindi_worksheet,
            santhali_worksheet=santhali_worksheet,
            audio_base64=audio_base64,
            audio_content_type="audio/mpeg",
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