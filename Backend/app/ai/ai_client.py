import os
from pathlib import Path

from dotenv import load_dotenv
from groq import Groq


# Load Backend/.env
BACKEND_DIR = Path(__file__).resolve().parents[2]
ENV_FILE = BACKEND_DIR / ".env"

load_dotenv(ENV_FILE)


class AIClient:
    """Central Groq AI client for BHASHA SETU."""

    def __init__(self) -> None:
        self.api_key = os.getenv("GROQ_API_KEY")

        if not self.api_key:
            raise RuntimeError(
                "GROQ_API_KEY is not configured in Backend/.env."
            )

        self.model = os.getenv(
            "GROQ_MODEL",
            "llama-3.3-70b-versatile",
        )

        self.client = Groq(
            api_key=self.api_key
        )

    def generate(self, prompt: str) -> str:
        """Generate an AI response for the supplied prompt."""

        if not prompt or not prompt.strip():
            raise ValueError(
                "AI prompt cannot be empty."
            )

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
        )

        if (
            not response
            or not response.choices
            or not response.choices[0].message
            or not response.choices[0].message.content
        ):
            raise RuntimeError(
                "Groq returned an empty response."
            )

        return response.choices[0].message.content.strip()