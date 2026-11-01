from pydantic import BaseModel, Field


class TranslationRequest(BaseModel):

    text: str = Field(..., min_length=1)

    source_language: str = Field(default="hi")

    target_language: str

    educational_context: str | None = None


class TranslationResponse(BaseModel):

    source_text: str

    translated_text: str

    # Santali translation ko Hindi/Devanagari
    # script mein teacher ke liye readable form.
    teacher_reading: str

    source_language: str

    target_language: str

    # Kept for frontend compatibility.
    # TTS ko abhi bypass kiya gaya hai.
    audio_base64: str

    audio_content_type: str