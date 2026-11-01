import os
from pathlib import Path

from dotenv import load_dotenv
from google import genai


# Load Backend/.env
BACKEND_DIR = Path(__file__).resolve().parents[2]
ENV_FILE = BACKEND_DIR / ".env"

load_dotenv(ENV_FILE)


class AIClient:
    """Central Gemini AI client for BHASHA SETU."""

    def __init__(self) -> None:
        self.api_key = os.getenv("GEMINI_API_KEY")

        if not self.api_key:
            raise RuntimeError(
                "GEMINI_API_KEY is not configured in Backend/.env."
            )

        self.model = os.getenv(
            "GEMINI_MODEL",
            "gemini-3.6-flash",
        )

        self.client = genai.Client(api_key=self.api_key)

    def generate(self, prompt: str) -> str:
        """Generate an AI response for the supplied prompt."""

        if not prompt or not prompt.strip():
            raise ValueError("AI prompt cannot be empty.")

        response = self.client.models.generate_content(
            model=self.model,
            contents=prompt,
        )

        if not response or not response.text:
            raise RuntimeError(
                "Gemini returned an empty response."
            )

        return response.text.strip()