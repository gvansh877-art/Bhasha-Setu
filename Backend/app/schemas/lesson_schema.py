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

    # Original Hindi lesson
    lesson_content: str

    # Santali translation
    santhali_lesson_content: str

    # Santali pronunciation written in Devanagari
    # so a Hindi-medium teacher can read it.
    teacher_reading: str

    # Kept for frontend compatibility.
    # TTS is currently bypassed.
    audio_base64: str
    audio_content_type: str