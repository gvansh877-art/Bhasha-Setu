# Backend/app/services/flashcard_service.py

import json

from app.ai.ai_client import AIClient


class FlashcardService:
    """Handles AI-powered primary-school flashcard generation."""

    def __init__(self) -> None:
        self.ai_client = AIClient()

    def generate_flashcards(
        self,
        topic: str,
        class_level: str,
        subject: str,
        educational_context: str | None = None,
    ) -> dict:

        if not topic or not topic.strip():
            raise ValueError("Flashcard topic cannot be empty.")

        if not class_level or not class_level.strip():
            raise ValueError("Flashcard class level cannot be empty.")

        if not subject or not subject.strip():
            raise ValueError("Flashcard subject cannot be empty.")

        context = (
            educational_context
            or "Primary-school FLN classroom"
        )

        prompt = f"""
You are an expert primary-school educational content generator.

Create flashcards for:

Class: {class_level}
Subject: {subject}
Topic: {topic}

Educational context:
{context}

Requirements:
- Create 6 useful flashcards.
- Suitable for primary-school children.
- Use simple Hindi.
- Keep questions short and clear.
- Each flashcard must contain a question and answer.
- Focus on important concepts from the topic.
- Keep the difficulty suitable for the given class.
- Do not add unrelated information.

Return ONLY valid JSON in this exact structure:

{{
    "flashcards": [
        {{
            "question": "Question in Hindi",
            "answer": "Answer in Hindi",
            "santhali_question": "Question in Santali",
            "santhali_answer": "Answer in Santali"
        }}
    ]
}}

Do not use markdown.
Do not wrap the JSON in code fences.
"""

        response = self.ai_client.generate(prompt)

        try:
            data = json.loads(response)
        except json.JSONDecodeError as exc:
            raise RuntimeError(
                "AI returned an invalid flashcard format."
            ) from exc

        flashcards = data.get("flashcards")

        if not isinstance(flashcards, list) or not flashcards:
            raise RuntimeError(
                "AI returned no flashcards."
            )

        formatted_flashcards = []

        for card in flashcards:
            if not isinstance(card, dict):
                continue

            formatted_flashcards.append(
                {
                    "question": str(
                        card.get("question", "")
                    ),
                    "answer": str(
                        card.get("answer", "")
                    ),
                    "santhali_question": str(
                        card.get("santhali_question", "")
                    ),
                    "santhali_answer": str(
                        card.get("santhali_answer", "")
                    ),
                    "audio_base64": None,
                    "audio_content_type": None,
                }
            )

        if not formatted_flashcards:
            raise RuntimeError(
                "AI returned invalid flashcard data."
            )

        return {
            "flashcards": formatted_flashcards
        }