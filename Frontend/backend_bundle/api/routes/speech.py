import base64

from fastapi import (
    APIRouter,
    File,
    Form,
    HTTPException,
    Response,
    UploadFile,
)

from app.schemas.speech_schema import (
    SpeechStatusResponse,
    SpeechTranslationRequest,
    SpeechTranslationResponse,
    TextToSpeechRequest,
    VoiceTranslationResponse,
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
    """Translate text or transcribed speech text."""

    try:
        translated_text = speech_service.translate_text(
            text=request.text,
            source_language=request.source_language,
            target_language=request.target_language,
            educational_context=request.educational_context,
        )

        return SpeechTranslationResponse(
            source_text=request.text,
            translated_text=translated_text,
            source_language=request.source_language,
            target_language=request.target_language,
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
    source_language: str = Form(...),
    target_language: str = Form(...),
    educational_context: str | None = Form(None),
) -> VoiceTranslationResponse:
    """
    Complete voice translation pipeline.

    Hindi audio
        ↓
    Speech-to-text
        ↓
    Hindi → Santhali
        ↓
    Santhali text-to-speech
        ↓
    Base64 MP3 audio
    """

    try:
        audio_bytes = await audio.read()

        (
            transcribed_text,
            translated_text,
            audio_output,
        ) = speech_service.translate_audio(
            audio_bytes=audio_bytes,
            filename=audio.filename or "recording.webm",
            source_language=source_language,
            target_language=target_language,
            educational_context=educational_context,
        )

        audio_base64 = base64.b64encode(
            audio_output
        ).decode("utf-8")

        return VoiceTranslationResponse(
            transcribed_text=transcribed_text,
            translated_text=translated_text,
            source_language=source_language,
            target_language=target_language,
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


@router.post("/text-to-speech")
async def generate_speech(
    request: TextToSpeechRequest,
):
    """
    Convert Santhali text into speech audio.
    """

    try:
        audio_bytes = speech_service.synthesize_santhali(
            text=request.text,
        )

        return Response(
            content=audio_bytes,
            media_type="audio/mpeg",
            headers={
                "Content-Disposition": (
                    'inline; filename="bhasha_setu_audio.mp3"'
                )
            },
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


@router.get(
    "/status",
    response_model=SpeechStatusResponse,
)
async def speech_status() -> SpeechStatusResponse:
    """Return the current speech capability status."""

    return speech_service.speech_status()