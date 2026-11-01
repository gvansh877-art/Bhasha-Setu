from pydantic import BaseModel, Field


class SpeechTranslationRequest(BaseModel):

    text: str = Field(..., min_length=1)

    source_language: str = Field(..., min_length=2)

    target_language: str = Field(..., min_length=2)

    educational_context: str | None = None


class SpeechTranslationResponse(BaseModel):

    source_text: str

    translated_text: str

    source_language: str

    target_language: str


class TextToSpeechRequest(BaseModel):

    text: str = Field(..., min_length=1)

    language: str = Field(..., min_length=2)


class SpeechStatusResponse(BaseModel):

    available: bool

    message: str


class VoiceTranslationResponse(BaseModel):

    transcribed_text: str

    translated_text: str

    source_language: str

    target_language: str

    audio_base64: str

    audio_content_type: str