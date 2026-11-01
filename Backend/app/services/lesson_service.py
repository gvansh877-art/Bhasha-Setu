from app.ai.ai_client import AIClient


class LessonService:
    """Handles AI-powered primary-school lesson generation."""

    def __init__(self) -> None:
        self.ai_client = AIClient()

    def generate_lesson(
        self,
        topic: str,
        class_level: str,
        subject: str,
        educational_context: str | None = None,
    ) -> dict[str, str]:

        if not topic or not topic.strip():
            raise ValueError("Lesson topic cannot be empty.")

        if not class_level or not class_level.strip():
            raise ValueError("Lesson class level cannot be empty.")

        if not subject or not subject.strip():
            raise ValueError("Lesson subject cannot be empty.")

        context = (
            educational_context
            or "Primary-school FLN classroom"
        )

        # --------------------------------------------------
        # STEP 1: Generate Hindi lesson
        # --------------------------------------------------
        hindi_prompt = f"""
You are an expert primary-school teacher
and educational content generator.

Create a simple, engaging Hindi lesson for:

Class: {class_level}
Subject: {subject}
Topic: {topic}

Educational context:
{context}

Requirements:
- Suitable for primary-school children.
- Use simple Hindi.
- Make the lesson teacher-friendly.
- Include a clear lesson introduction.
- Explain the topic in an age-appropriate way.
- Include simple examples.
- Include a short classroom activity.
- Include a few assessment questions.
- Keep the content practical and easy to teach.
- Do not use unnecessary advanced terminology.

Return only the lesson content.
"""

        hindi_lesson = self.ai_client.generate(
            hindi_prompt
        )

        if not hindi_lesson or not hindi_lesson.strip():
            raise RuntimeError(
                "AI returned an empty Hindi lesson."
            )

        # --------------------------------------------------
        # STEP 2: Convert Hindi lesson to Santali
        # --------------------------------------------------
        santhali_prompt = f"""
You are an expert multilingual
primary-school education assistant.

Convert the following Hindi lesson into
natural, child-friendly Santali (Santhali/Santali
language) for a primary-school classroom.

Class: {class_level}
Subject: {subject}
Topic: {topic}

Requirements:
- Preserve the meaning of the Hindi lesson.
- Use natural and understandable Santali.
- Keep classroom instructions clear.
- Preserve numbers, examples, questions
  and activity meaning.
- Do not add unrelated information.
- Do not explain the translation process.
- Return only the Santali lesson content.

Hindi lesson:
{hindi_lesson}
"""

        santhali_lesson = self.ai_client.generate(
            santhali_prompt
        )

        if not santhali_lesson or not santhali_lesson.strip():
            raise RuntimeError(
                "AI returned an empty Santali lesson."
            )

        # --------------------------------------------------
        # STEP 3: Create Teacher Reading
        # --------------------------------------------------
        teacher_reading_prompt = f"""
You are a Santali language pronunciation
and teacher-support assistant.

The following text is written in Santali.

Create a teacher-readable pronunciation version
of the SAME Santali text using Devanagari
(Hindi) script.

Purpose:
A Hindi-medium primary-school teacher should be
able to read the Santali text aloud even if they
cannot read Santali Ol Chiki script.

IMPORTANT:
- Do NOT translate Santali into Hindi.
- Do NOT replace Santali words with Hindi words.
- Do NOT change the meaning.
- Do NOT summarize the text.
- Preserve the same Santali words, sentences,
  names, numbers, examples and instructions.
- Only represent the pronunciation of the Santali
  text using Devanagari script.
- Make the Devanagari representation easy for a
  Hindi-medium teacher to read aloud.
- Do not use English transliteration.
- Do not add explanations.
- Return ONLY the Devanagari teacher-reading text.

Santali lesson:
{santhali_lesson}
"""

        teacher_reading = self.ai_client.generate(
            teacher_reading_prompt
        )

        if not teacher_reading or not teacher_reading.strip():
            raise RuntimeError(
                "AI returned an empty teacher reading."
            )

        return {
            "lesson_content": hindi_lesson,
            "santhali_lesson_content": santhali_lesson,
            "teacher_reading": teacher_reading,
        }