# Backend/app/services/speech_service.py

from app.ai.ai_client import AIClient


class SpeechService:
    """Handles speech translation operations."""

    def __init__(self) -> None:
        self.ai_client = AIClient()

    def translate_speech_text(
        self,
        text: str,
        source_language: str,
        target_language: str,
    ) -> dict[str, str]:

        if not text or not text.strip():
            raise ValueError("Speech text cannot be empty.")

        prompt = f"""
You are an educational translation assistant.

Translate the following spoken text from
{source_language} to {target_language}.

Requirements:
- Preserve the original meaning.
- Use natural and understandable language.
- Keep the translation suitable for primary-school education.
- Do not add explanations.
- Return only the translated text.

Text:
{text}
"""

        translated_text = self.ai_client.generate(prompt)

        return {
            "translated_text": translated_text,
        }

    def translate_voice(
        self,
        audio_bytes: bytes,
        source_language: str,
        target_language: str,
    ) -> dict[str, str]:

        if not audio_bytes:
            raise ValueError("Audio data cannot be empty.")

        raise RuntimeError(
            "Voice translation is not configured yet. "
            "Text-based speech translation is available."
        )