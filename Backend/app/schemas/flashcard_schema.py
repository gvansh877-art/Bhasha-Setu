# Backend/app/schemas/flashcard_schema.py

from pydantic import BaseModel, Field


class Flashcard(BaseModel):
    question: str
    answer: str
    santhali_question: str
    santhali_answer: str

    # Kept for frontend compatibility.
    # TTS is currently bypassed.
    audio_base64: str | None = None
    audio_content_type: str | None = None


class FlashcardRequest(BaseModel):
    topic: str = Field(..., min_length=1)
    class_level: str = Field(..., min_length=1)
    subject: str = Field(..., min_length=1)
    educational_context: str | None = None


class FlashcardResponse(BaseModel):
    topic: str
    class_level: str
    subject: str
    flashcards: list[Flashcard]