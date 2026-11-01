from pydantic import BaseModel, Field


class TranslationRequest(BaseModel):

    text: str = Field(..., min_length=1)

    source_language: str = Field(default="hi")

    target_language: str

    educational_context: str | None = None


class TranslationResponse(BaseModel):

    source_text: str

    translated_text: str

    source_language: str

    target_language: str

    audio_base64: str

    audio_content_type: str