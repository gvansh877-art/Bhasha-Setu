from fastapi import APIRouter, HTTPException
from google.genai import errors

from app.schemas.translation_schema import (
    TranslationRequest,
    TranslationResponse,
)
from app.services.translation.translation_service import TranslationService


router = APIRouter(
    prefix="/api/translation",
    tags=["Translation"],
)

translation_service = TranslationService()


@router.post(
    "/translate",
    response_model=TranslationResponse,
)
async def translate_text(
    request: TranslationRequest,
) -> TranslationResponse:

    try:
        result = translation_service.translate(
            text=request.text,
            source_language=request.source_language,
            target_language=request.target_language,
            educational_context=request.educational_context,
        )

        return TranslationResponse(
            source_text=request.text,
            translated_text=result["translated_text"],
            teacher_reading=result["teacher_reading"],
            source_language=request.source_language,
            target_language=request.target_language,
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

    except errors.APIError as exc:
        raise HTTPException(
            status_code=503,
            detail=f"Gemini API error: {exc}",
    
        ) from exc