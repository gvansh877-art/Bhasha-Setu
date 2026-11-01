from pydantic import BaseModel, Field


class LessonRequest(BaseModel):

    topic: str = Field(..., min_length=1)

    class_level: str = Field(..., min_length=1)

    subject: str = Field(..., min_length=1)

    educational_context: str | None = None


class LessonResponse(BaseModel):

    topic: str

    class_level: str

    subject: str

    lesson_content: str

    santhali_lesson_content: str

    audio_base64: str

    audio_content_type: str