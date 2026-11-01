from app.ai.ai_client import AIClient
from app.ai.prompts import build_translation_prompt


class TranslationService:
    """Handles Hindi-to-tribal-language educational translation."""

    def __init__(self) -> None:
        self.ai_client = AIClient()

    def translate(
        self,
        text: str,
        source_language: str,
        target_language: str,
        educational_context: str | None = None,
    ) -> str:
        """Translate educational content using the configured AI layer."""

        if not text or not text.strip():
            raise ValueError("Translation text cannot be empty.")

        prompt = build_translation_prompt(
            text=text,
            source_language=source_language,
            target_language=target_language,
            educational_context=educational_context,
        )

        return self.ai_client.generate(prompt)