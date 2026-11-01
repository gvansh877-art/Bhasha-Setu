# Backend/api/routes/speech.py

from fastapi import APIRouter, HTTPException, UploadFile, File

from app.schemas.speech_schema import (
    SpeechTranslationRequest,
    SpeechTranslationResponse,                                                                                                      
    VoiceTranslationResponse,
    TextToSpeechRequest,
)
from app.services.speech_service import SpeechService


router = APIRouter(
    prefix="/api/speech",
    tags=["Speech"],
)

speech_service = SpeechService()


@router.post(
    "/translate",
    response_model=SpeechTranslationResponse,
)
async def translate_speech_text(
    request: SpeechTranslationRequest,
) -> SpeechTranslationResponse:

    try:
        result = speech_service.translate_speech_text(
            text=request.text,
            source_language=request.source_language,
            target_language=request.target_language,
        )

        return SpeechTranslationResponse(
            source_text=request.text,
            translated_text=result["translated_text"],
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


@router.post(
    "/voice-translate",
    response_model=VoiceTranslationResponse,
)
async def translate_voice(
    audio: UploadFile = File(...),
    source_language: str = "hi",
    target_language: str = "sat",
) -> VoiceTranslationResponse:

    try:
        audio_bytes = await audio.read()

        if not audio_bytes:
            raise ValueError("Uploaded audio is empty.")

        result = speech_service.translate_voice(
            audio_bytes=audio_bytes,
            source_language=source_language,
            target_language=target_language,
        )

        return VoiceTranslationResponse(
            source_text=result["source_text"],
            translated_text=result["translated_text"],
            source_language=source_language,
            target_language=target_language,
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


@router.post(
    "/text-to-speech",
)
async def text_to_speech(
    request: TextToSpeechRequest,
) -> dict:

    # TTS is intentionally bypassed for now.
    # The complete TTS integration will be added at the end.

    return {
        "text": request.text,
        "audio_base64": "",
        "audio_content_type": "",
        "message": "TTS is currently bypassed.",
    }


@router.get("/status")
async def speech_status() -> dict:
    return {
        "status": "available",
        "tts": "bypassed",
        "message": "Speech services are currently running without TTS.",
    }