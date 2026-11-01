from pydantic import BaseModel, Field


class Flashcard(BaseModel):

    card_number: int = Field(..., ge=1)

    card_type: str = Field(..., min_length=1)

    front_text: str = Field(..., min_length=1)

    back_text: str = Field(..., min_length=1)

    audio_base64: str | None = None

    audio_content_type: str | None = None


class FlashcardContent(BaseModel):

    title: str = Field(..., min_length=1)

    cards: list[Flashcard] = Field(..., min_length=1)


class FlashcardRequest(BaseModel):

    topic: str = Field(..., min_length=1)

    class_level: str = Field(..., min_length=1)

    subject: str = Field(..., min_length=1)

    number_of_cards: int = Field(
        default=10,
        ge=1,
        le=30,
    )

    educational_context: str | None = None


class FlashcardResponse(BaseModel):

    topic: str

    class_level: str

    subject: str

    number_of_cards: int

    hindi_flashcards: FlashcardContent

    santhali_flashcards: FlashcardContent