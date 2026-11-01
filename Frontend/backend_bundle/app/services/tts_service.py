import os
import time

import requests
from dotenv import load_dotenv


load_dotenv()


class TTSService:
    """
    Handles Santhali text-to-speech using Shunya Labs.

    Flow:
        Santhali Text
            ↓
        Shunya Labs TTS
            ↓
        MP3 Audio Bytes
    """

    TOKEN_URL = "https://app.shunyalabs.ai/api/auth/token"
    TTS_URL = "https://ttsv2.shunyalabs.ai/v1/audio/speech"

    LANGUAGE = "sat"
    VOICE = "Chandu"
    RESPONSE_FORMAT = "mp3"

    def __init__(self) -> None:
        self.api_key = os.getenv("SHUNYALABS_API_KEY")

        if not self.api_key:
            raise RuntimeError(
                "SHUNYALABS_API_KEY is not configured in Backend/.env"
            )

        self.access_token: str | None = None
        self.token_expires_at: float = 0

    def _get_access_token(self) -> str:
        """
        Get a short-lived Shunya Labs access token.
        Reuse the existing token until it is close to expiry.
        """

        current_time = time.time()

        if (
            self.access_token
            and current_time < self.token_expires_at - 30
        ):
            return self.access_token

        try:
            response = requests.post(
                self.TOKEN_URL,
                headers={
                    "api-key": self.api_key,
                },
                timeout=30,
            )

            response.raise_for_status()

            data = response.json()

            token = data.get("access_token") or data.get("token")

            if not token:
                raise RuntimeError(
                    "Shunya Labs token response did not contain an access token."
                )

            expires_in = data.get("expires_in", 900)

            self.access_token = token
            self.token_expires_at = current_time + int(expires_in)

            return token

        except requests.RequestException as exc:
            raise RuntimeError(
                f"Unable to get Shunya Labs access token: {exc}"
            ) from exc

    def synthesize_santhali(self, text: str) -> bytes:
        """
        Convert Santhali text into MP3 audio bytes.
        """

        if not text or not text.strip():
            raise ValueError("Santhali text cannot be empty.")

        access_token = self._get_access_token()

        try:
            response = requests.post(
                self.TTS_URL,
                headers={
                    "Authorization": f"Bearer {access_token}",
                    "Content-Type": "application/json",
                },
                json={
                    "input": text.strip(),
                    "voice": self.VOICE,
                    "language": self.LANGUAGE,
                    "response_format": self.RESPONSE_FORMAT,
                },
                timeout=60,
            )

            response.raise_for_status()

            if not response.content:
                raise RuntimeError(
                    "Shunya Labs returned an empty audio response."
                )

            return response.content

        except requests.RequestException as exc:
            raise RuntimeError(
                f"Unable to generate Santhali speech: {exc}"
            ) from exc