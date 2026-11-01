from app.ai.ai_client import AIClient
from app.ai.prompts import build_translation_prompt


class TranslationService:
    """Handles Hindi-to-Santali educational translation."""

    def __init__(self) -> None:
        self.ai_client = AIClient()

    def translate(
        self,
        text: str,
        source_language: str,
        target_language: str,
        educational_context: str | None = None,
    ) -> dict[str, str]:
        """Translate educational content and generate teacher reading."""

        if not text or not text.strip():
            raise ValueError("Translation text cannot be empty.")

        # ---------------------------------------------------------
        # STEP 1: Hindi -> Santali translation
        # ---------------------------------------------------------

        prompt = build_translation_prompt(
            text=text,
            source_language=source_language,
            target_language=target_language,
            educational_context=educational_context,
        )

        translated_text = self.ai_client.generate(prompt)

        if not translated_text or not translated_text.strip():
            raise RuntimeError(
                "AI returned an empty translation."
            )

        # ---------------------------------------------------------
        # STEP 2: Santali -> Hindi-script teacher reading
        # ---------------------------------------------------------

        teacher_reading_prompt = f"""
You are a Santali language pronunciation and
teacher-support assistant for primary-school education.

The following text is written in Santali.

Your task is to write the SAME Santali text
using Devanagari (Hindi) script so that a
Hindi-medium teacher can read and pronounce it.

Important:
- Do NOT translate the Santali text into Hindi.
- Do NOT change its meaning.
- Do NOT replace Santali words with Hindi words.
- Preserve the exact Santali words and sentences.
- Only represent the pronunciation of the Santali
  words using Devanagari/Hindi script.
- Keep names, numbers, examples and classroom
  instructions unchanged in meaning.
- Make the Devanagari representation easy for a
  Hindi-medium teacher to read aloud.
- Return ONLY the Devanagari teacher-reading text.
- Do not add explanations.
- Do not use English transliteration.

Santali text:
{translated_text}
"""

        teacher_reading = self.ai_client.generate(
            teacher_reading_prompt
        )

        if not teacher_reading or not teacher_reading.strip():
            raise RuntimeError(
                "AI returned an empty teacher reading."
            )

        return {
            "translated_text": translated_text,
            "teacher_reading": teacher_reading,
        }