from app.ai.ai_client import AIClient
from app.services.translation.translation_service import TranslationService


class LessonService:
    """Generates primary-school lessons and translates them into Santhali."""

    def __init__(self) -> None:
        self.ai_client = AIClient()
        self.translation_service = TranslationService()

    def generate_lesson(
        self,
        topic: str,
        class_level: str,
        subject: str,
        educational_context: str | None = None,
    ) -> tuple[str, str]:
        """Generate a Hindi lesson and translate it into Santhali."""

        if not topic or not topic.strip():
            raise ValueError("Lesson topic cannot be empty.")

        if not class_level or not class_level.strip():
            raise ValueError("Class level cannot be empty.")

        if not subject or not subject.strip():
            raise ValueError("Subject cannot be empty.")

        context = educational_context or "Primary-school classroom instruction"

        prompt = f"""
You are the lesson generation engine of BHASHA SETU.

Create a simple, practical and age-appropriate primary-school lesson.

Class: {class_level}
Subject: {subject}
Topic: {topic}
Educational context: {context}

The lesson must contain:

1. Learning Objective
2. Simple Explanation
3. Classroom Activity
4. Practice Questions
5. Short Assessment

Requirements:
- Use clear and child-friendly language.
- Keep the lesson suitable for the specified class level.
- Keep activities practical for a classroom.
- Preserve the educational objective.
- Do not invent unrelated information.
- Do not include teacher-facing commentary outside the requested lesson.
- Return only the lesson content.

Generate the lesson in Hindi so that it can be passed through
BHASHA SETU's Hindi-to-Santhali translation engine.
""".strip()

        hindi_lesson = self.ai_client.generate(prompt)

        santhali_lesson = self.translation_service.translate(
            text=hindi_lesson,
            source_language="hi",
            target_language="sat",
            educational_context=context,
        )

        return hindi_lesson, santhali_lesson