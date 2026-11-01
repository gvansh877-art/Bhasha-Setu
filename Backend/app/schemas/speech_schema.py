# Backend/app/schemas/speech_schema.py

from pydantic import BaseModel, Field


class SpeechTranslationRequest(BaseModel):
    text: str = Field(..., min_length=1)
    source_language: str = Field(default="hi")
    target_language: str = Field(default="sat")


class SpeechTranslationResponse(BaseModel):
    source_text: str
    translated_text: str
    source_language: str
    target_language: str

    # Kept for frontend compatibility.
    # TTS is currently bypassed.
    audio_base64: str
    audio_content_type: str


class VoiceTranslationResponse(BaseModel):
    source_text: str
    translated_text: str
    source_language: str
    target_language: str

    # Kept for frontend compatibility.
    # TTS is currently bypassed.
    audio_base64: str
    audio_content_type: str


class TextToSpeechRequest(BaseModel):
    text: str = Field(..., min_length=1)
    language: str = Field(default="sat")