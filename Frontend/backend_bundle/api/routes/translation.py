import base64

from fastapi import APIRouter, HTTPException

from app.schemas.translation_schema import (
    TranslationRequest,
    TranslationResponse,
)
from app.services.translation.translation_service import TranslationService
from app.services.tts_service import TTSService


router = APIRouter(
    prefix="/api/translation",
    tags=["Translation"],
)

translation_service = TranslationService()
tts_service = TTSService()


@router.post(
    "/translate",
    response_model=TranslationResponse,
)
async def translate_text(
    request: TranslationRequest,
) -> TranslationResponse:
    """Translate educational content and generate Santhali audio."""

    try:
        translated_text = translation_service.translate(
            text=request.text,
            source_language=request.source_language,
            target_language=request.target_language,
            educational_context=request.educational_context,
        )

        audio_bytes = tts_service.synthesize_santhali(
            text=translated_text,
        )

        audio_base64 = base64.b64encode(audio_bytes).decode("utf-8")

        return TranslationResponse(
            source_text=request.text,
            translated_text=translated_text,
            source_language=request.source_language,
            target_language=request.target_language,
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