

from pydantic import BaseModel, Field


class WorksheetRequest(BaseModel):
    topic: str = Field(..., min_length=1)
    class_level: str = Field(..., min_length=1)
    subject: str = Field(..., min_length=1)
    number_of_questions: int = Field(default=5, ge=1, le=20)
    educational_context: str | None = None


class WorksheetQuestion(BaseModel):
    question_number: int
    question_type: str
    question_text: str


class WorksheetContent(BaseModel):
    title: str
    instructions: str
    questions: list[WorksheetQuestion]


class WorksheetResponse(BaseModel):
    topic: str
    class_level: str
    subject: str
    number_of_questions: int

    hindi_worksheet: WorksheetContent
    santhali_worksheet: WorksheetContent

    # TTS is currently bypassed.
    audio_base64: str
    audio_content_type: str