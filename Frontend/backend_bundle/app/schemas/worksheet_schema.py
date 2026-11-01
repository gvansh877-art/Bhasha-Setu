from pydantic import BaseModel, Field


class WorksheetQuestion(BaseModel):
    question_number: int = Field(..., ge=1)
    question_type: str = Field(..., min_length=1)
    question_text: str = Field(..., min_length=1)


class WorksheetContent(BaseModel):
    title: str = Field(..., min_length=1)
    instructions: str = Field(..., min_length=1)
    questions: list[WorksheetQuestion] = Field(..., min_length=1)


class WorksheetRequest(BaseModel):
    topic: str = Field(..., min_length=1)
    class_level: str = Field(..., min_length=1)
    subject: str = Field(..., min_length=1)
    number_of_questions: int = Field(default=10, ge=1, le=30)
    educational_context: str | None = None


class WorksheetResponse(BaseModel):
    topic: str
    class_level: str
    subject: str
    number_of_questions: int
    hindi_worksheet: WorksheetContent
    santhali_worksheet: WorksheetContent
    audio_base64: str
    audio_content_type: str