import base64
import json

from app.ai.ai_client import AIClient
from app.services.tts_service import TTSService


class FlashcardService:
    """Generates structured primary-school flashcards and Santhali translations."""

    def __init__(self) -> None:
        self.ai_client = AIClient()
        self.tts_service = TTSService()

    def generate_flashcards(
        self,
        topic: str,
        class_level: str,
        subject: str,
        number_of_cards: int = 10,
        educational_context: str | None = None,
    ) -> tuple[dict, dict]:
        """Generate Hindi flashcards, Santhali translations and Santhali audio."""

        if not topic or not topic.strip():
            raise ValueError("Flashcard topic cannot be empty.")

        if not class_level or not class_level.strip():
            raise ValueError("Class level cannot be empty.")

        if not subject or not subject.strip():
            raise ValueError("Subject cannot be empty.")

        if number_of_cards < 1 or number_of_cards > 30:
            raise ValueError(
                "Number of flashcards must be between 1 and 30."
            )

        context = (
            educational_context
            or "Primary-school FLN classroom learning"
        )

        # ---------------------------------------------------------
        # STEP 1: Generate Hindi flashcards
        # ---------------------------------------------------------

        hindi_prompt = f"""
You are the structured flashcard generation engine of BHASHA SETU.

Create simple, useful and age-appropriate educational flashcards
for primary-school students.

Class: {class_level}
Subject: {subject}
Topic: {topic}
Number of Flashcards: {number_of_cards}
Educational context: {context}

Return ONLY valid JSON.

Use exactly this structure:

{{
  "title": "Flashcard set title in Hindi",
  "cards": [
    {{
      "card_number": 1,
      "card_type": "type of flashcard",
      "front_text": "question, word or prompt in Hindi",
      "back_text": "answer, meaning or explanation in Hindi"
    }}
  ]
}}

Requirements:

- Generate exactly {number_of_cards} flashcards.
- Use clear and child-friendly Hindi.
- Keep every card appropriate for {class_level}.
- Keep every card relevant to {topic}.
- Make the front and back useful for learning.
- Use practical flashcard types suitable for the subject.
- For Mathematics, preserve mathematical symbols and numerical values.
- Do not include unrelated information.
- Do not add teacher-facing commentary.
- Do not add markdown code fences.
- Return only valid JSON.
""".strip()

        raw_response = self.ai_client.generate(hindi_prompt)

        hindi_flashcards = self._parse_json_response(
            raw_response,
            "The AI returned an invalid Hindi flashcard structure.",
        )

        self._validate_flashcard_structure(
            hindi_flashcards,
            number_of_cards,
        )

        # ---------------------------------------------------------
        # STEP 2: Translate Hindi flashcards to Santhali
        # ---------------------------------------------------------

        santhali_flashcards = self._translate_flashcards(
            hindi_flashcards,
            context,
        )

        self._validate_flashcard_structure(
            santhali_flashcards,
            number_of_cards,
        )

        # ---------------------------------------------------------
        # STEP 3: Generate audio for EVERY Santhali flashcard
        # ---------------------------------------------------------

        self._add_santhali_audio(
            santhali_flashcards
        )

        return hindi_flashcards, santhali_flashcards

    def _translate_flashcards(
        self,
        flashcards: dict,
        educational_context: str,
    ) -> dict:
        """Translate the complete flashcard set using one AI request."""

        flashcards_json = json.dumps(
            flashcards,
            ensure_ascii=False,
            indent=2,
        )

        translation_prompt = f"""
You are the translation engine of BHASHA SETU.

Translate the following primary-school flashcard set from Hindi
to Santhali.

Educational context:
{educational_context}

Important rules:

1. Translate all Hindi educational text into natural Santhali.
2. Preserve the exact JSON structure.
3. Preserve card_number values exactly.
4. Preserve card_type values exactly.
5. Preserve mathematical expressions and numerical values.
6. Preserve names and important educational terminology.
7. Do not add new cards.
8. Do not remove any card.
9. Do not add answers that are not present in the source.
10. Do not add explanations outside the JSON.
11. Return ONLY valid JSON.
12. Do not use markdown code fences.
13. Keep the language appropriate for primary-school students.

Input flashcard set:

{flashcards_json}

Return exactly this structure:

{{
  "title": "Santhali translated title",
  "cards": [
    {{
      "card_number": 1,
      "card_type": "same card type",
      "front_text": "Santhali translated front",
      "back_text": "Santhali translated back"
    }}
  ]
}}
""".strip()

        raw_response = self.ai_client.generate(
            translation_prompt
        )

        return self._parse_json_response(
            raw_response,
            "The AI returned an invalid Santhali flashcard structure.",
        )

    def _add_santhali_audio(
        self,
        flashcards: dict,
    ) -> None:
        """
        Generate separate Santhali audio for every flashcard.

        Audio is generated from the Santhali front and back text
        so each flashcard gets its own playable audio.
        """

        cards = flashcards.get("cards", [])

        for card in cards:

            audio_text = (
                f"{card['front_text']}. "
                f"{card['back_text']}"
            )

            try:
                audio_bytes = self.tts_service.synthesize_santhali(
                    text=audio_text
                )

            except Exception as exc:
                raise RuntimeError(
                    f"Unable to generate audio for "
                    f"Santhali flashcard "
                    f"{card['card_number']}: {exc}"
                ) from exc

            if not audio_bytes:
                raise RuntimeError(
                    f"Empty audio returned for "
                    f"Santhali flashcard "
                    f"{card['card_number']}."
                )

            card["audio_base64"] = (
                base64.b64encode(audio_bytes)
                .decode("utf-8")
            )

            card["audio_content_type"] = "audio/mpeg"

    @staticmethod
    def _parse_json_response(
        raw_response: str,
        error_message: str,
    ) -> dict:
        """Parse a JSON response returned by the AI."""

        if not raw_response or not raw_response.strip():
            raise RuntimeError(error_message)

        cleaned_response = raw_response.strip()

        if cleaned_response.startswith("```"):
            lines = cleaned_response.splitlines()

            if lines and lines[0].strip().startswith("```"):
                lines = lines[1:]

            if lines and lines[-1].strip() == "```":
                lines = lines[:-1]

            cleaned_response = "\n".join(lines).strip()

        try:
            parsed_response = json.loads(cleaned_response)

        except json.JSONDecodeError as exc:
            raise RuntimeError(error_message) from exc

        if not isinstance(parsed_response, dict):
            raise RuntimeError(error_message)

        return parsed_response

    @staticmethod
    def _validate_flashcard_structure(
        flashcards: dict,
        number_of_cards: int,
    ) -> None:
        """Validate the structure returned by the AI."""

        required_fields = {
            "title",
            "cards",
        }

        if not required_fields.issubset(flashcards):
            raise RuntimeError(
                "The AI flashcard set is missing required fields."
            )

        if not isinstance(flashcards["title"], str):
            raise RuntimeError(
                "The flashcard title must be a string."
            )

        if not isinstance(flashcards["cards"], list):
            raise RuntimeError(
                "The AI flashcards must be a list."
            )

        if len(flashcards["cards"]) != number_of_cards:
            raise RuntimeError(
                "The AI did not generate the requested number "
                "of flashcards."
            )

        for index, card in enumerate(
            flashcards["cards"],
            start=1,
        ):
            if not isinstance(card, dict):
                raise RuntimeError(
                    f"Flashcard {index} has an invalid structure."
                )

            required_card_fields = {
                "card_number",
                "card_type",
                "front_text",
                "back_text",
            }

            if not required_card_fields.issubset(card):
                raise RuntimeError(
                    f"Flashcard {index} is missing required fields."
                )

            if card["card_number"] != index:
                raise RuntimeError(
                    f"Flashcard {index} has an invalid card number."
                )

            if not isinstance(card["card_type"], str):
                raise RuntimeError(
                    f"Flashcard {index} has an invalid card type."
                )

            if not isinstance(card["front_text"], str):
                raise RuntimeError(
                    f"Flashcard {index} has invalid front text."
                )

            if not isinstance(card["back_text"], str):
                raise RuntimeError(
                    f"Flashcard {index} has invalid back text."
                )

            if not card["front_text"].strip():
                raise RuntimeError(
                    f"Flashcard {index} front text cannot be empty."
                )

            if not card["back_text"].strip():
                raise RuntimeError(
                    f"Flashcard {index} back text cannot be empty."
                )