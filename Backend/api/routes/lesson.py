from fastapi import APIRouter, HTTPException
from google.genai import errors

from app.schemas.lesson_schema import (
    LessonRequest,
    LessonResponse,
)
from app.services.lesson_service import LessonService


router = APIRouter(
    prefix="/api/lesson",
    tags=["Lesson"],
)

lesson_service = LessonService()


@router.post(
    "/generate",
    response_model=LessonResponse,
)
async def generate_lesson(
    request: LessonRequest,
) -> LessonResponse:

    try:
        result = lesson_service.generate_lesson(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            educational_context=request.educational_context,
        )

        return LessonResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            lesson_content=result["lesson_content"],
            santhali_lesson_content=result[
                "santhali_lesson_content"
            ],
            teacher_reading=result["teacher_reading"],
            audio_base64="",
            audio_content_type="",
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

    except errors.ServerError as exc:
        raise HTTPException(
            status_code=503,
            detail=(
                "AI lesson generation service is temporarily "
                "unavailable. Please try again in a moment."
            ),
        ) from exc

    except errors.APIError as exc:
        raise HTTPException(
            status_code=503,
            detail=(
                "AI lesson generation service is temporarily "
                "unavailable. Please try again in a moment."
            ),
        ) from exc