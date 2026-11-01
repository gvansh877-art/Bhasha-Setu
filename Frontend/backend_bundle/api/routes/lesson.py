import base64

from fastapi import APIRouter, HTTPException

from app.schemas.lesson_schema import (
    LessonRequest,
    LessonResponse,
)
from app.services.lesson_service import LessonService
from app.services.tts_service import TTSService


router = APIRouter(
    prefix="/api/lesson",
    tags=["Lesson Generator"],
)

lesson_service = LessonService()
tts_service = TTSService()


@router.post(
    "/generate",
    response_model=LessonResponse,
)
async def generate_lesson(
    request: LessonRequest,
) -> LessonResponse:
    """Generate a Hindi lesson, Santhali translation, and Santhali audio."""

    try:
        hindi_lesson, santhali_lesson = lesson_service.generate_lesson(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            educational_context=request.educational_context,
        )

        audio_bytes = tts_service.synthesize_santhali(
            text=santhali_lesson,
        )

        audio_base64 = base64.b64encode(audio_bytes).decode("utf-8")

        return LessonResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            lesson_content=hindi_lesson,
            santhali_lesson_content=santhali_lesson,
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