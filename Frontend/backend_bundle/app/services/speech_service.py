import os
import tempfile
from pathlib import Path

from app.ai.ai_client import AIClient
from app.services.translation.translation_service import TranslationService
from app.services.tts_service import TTSService


class SpeechService:
    """
    Handles:
    1. Speech-to-text
    2. Text translation
    3. Santhali text-to-speech
    4. Complete voice translation pipeline

    Flow:

        Hindi Speech
            ↓
        Gemini Transcription
            ↓
        Hindi Text
            ↓
        Hindi → Santhali Translation
            ↓
        Santhali Text
            ↓
        Shunya Labs TTS
            ↓
        Santhali Audio
    """

    TRANSCRIPTION_MODEL = "gemini-3.5-transcribe"

    def __init__(self) -> None:
        self.ai_client = AIClient()
        self.translation_service = TranslationService()
        self.tts_service = TTSService()

    # ============================================================
    # TEXT TRANSLATION
    # ============================================================

    def translate_text(
        self,
        text: str,
        source_language: str,
        target_language: str,
        educational_context: str | None = None,
    ) -> str:
        """
        Translate text using the existing TranslationService.
        """

        if not text or not text.strip():
            raise ValueError("Speech text cannot be empty.")

        return self.translation_service.translate(
            text=text.strip(),
            source_language=source_language,
            target_language=target_language,
            educational_context=educational_context,
        )

    # ============================================================
    # SPEECH TO TEXT
    # ============================================================

    def transcribe_audio(
        self,
        audio_bytes: bytes,
        filename: str,
    ) -> str:
        """
        Convert uploaded Hindi speech audio into text
        using Gemini 3.5 Transcribe.
        """

        if not audio_bytes:
            raise ValueError("Audio file cannot be empty.")

        suffix = Path(filename).suffix.lower() or ".ogg"
        temporary_path: str | None = None

        try:
            # ----------------------------------------------------
            # 1. Save uploaded audio temporarily
            # ----------------------------------------------------

            with tempfile.NamedTemporaryFile(
                delete=False,
                suffix=suffix,
            ) as temporary_file:
                temporary_file.write(audio_bytes)
                temporary_path = temporary_file.name

            print("\n" + "=" * 60)
            print("BHASHA SETU - SPEECH TRANSCRIPTION")
            print("=" * 60)
            print(f"Original filename : {filename}")
            print(f"Audio format      : {suffix}")
            print(f"Audio size        : {len(audio_bytes)} bytes")
            print(f"Temporary file    : {temporary_path}")

            # ----------------------------------------------------
            # 2. Upload audio to Gemini
            # ----------------------------------------------------

            uploaded_audio = self.ai_client.client.files.upload(
                file=temporary_path
            )

            print("Audio uploaded to Gemini successfully.")

            # ----------------------------------------------------
            # 3. Gemini transcription
            # ----------------------------------------------------

            interaction = self.ai_client.client.interactions.create(
                model=self.TRANSCRIPTION_MODEL,
                input=[
                    {
                        "type": "audio",
                        "uri": uploaded_audio.uri,
                        "mime_type": uploaded_audio.mime_type,
                    }
                ],
                generation_config={
                    "transcription_config": {
                        "language_codes": ["hi-IN"],
                    }
                },
            )

            # ----------------------------------------------------
            # 4. Extract transcription
            # ----------------------------------------------------

            transcribed_text = interaction.output_text

            if not transcribed_text:
                raise RuntimeError(
                    "Gemini returned an empty transcription."
                )

            transcribed_text = transcribed_text.strip()

            print("\n" + "-" * 60)
            print("TRANSCRIPTION RESULT")
            print("-" * 60)
            print(transcribed_text)
            print("-" * 60)
            print("=" * 60 + "\n")

            return transcribed_text

        except ValueError:
            raise

        except RuntimeError:
            raise

        except Exception as exc:
            print("\n" + "=" * 60)
            print("SPEECH TRANSCRIPTION ERROR")
            print("=" * 60)
            print(str(exc))
            print("=" * 60 + "\n")

            raise RuntimeError(
                f"Unable to transcribe the audio: {exc}"
            ) from exc

        finally:
            # ----------------------------------------------------
            # 5. Remove temporary audio file
            # ----------------------------------------------------

            if temporary_path and os.path.exists(temporary_path):
                try:
                    os.remove(temporary_path)
                except OSError:
                    pass

    # ============================================================
    # TEXT TO SANthALI SPEECH
    # ============================================================

    def synthesize_santhali(
        self,
        text: str,
    ) -> bytes:
        """
        Convert Santhali translated text into MP3 audio
        using Shunya Labs.
        """

        if not text or not text.strip():
            raise ValueError("Santhali text cannot be empty.")

        print("\n" + "=" * 60)
        print("BHASHA SETU - SANTHALI TEXT TO SPEECH")
        print("=" * 60)
        print("Input text:")
        print(text)
        print("=" * 60)

        audio_bytes = self.tts_service.synthesize_santhali(
            text=text.strip()
        )

        if not audio_bytes:
            raise RuntimeError(
                "Santhali text-to-speech returned empty audio."
            )

        print("Santhali audio generated successfully.")
        print(f"Audio size: {len(audio_bytes)} bytes")
        print("=" * 60 + "\n")

        return audio_bytes

    # ============================================================
    # COMPLETE VOICE TRANSLATION
    # ============================================================

    def translate_audio(
        self,
        audio_bytes: bytes,
        filename: str,
        source_language: str,
        target_language: str,
        educational_context: str | None = None,
    ) -> tuple[str, str, bytes]:
        """
        Complete voice translation pipeline.

        Audio
          ↓
        Speech-to-text
          ↓
        Translation
          ↓
        Santhali text
          ↓
        Santhali speech
        """

        # --------------------------------------------------------
        # Step 1: Speech → Hindi text
        # --------------------------------------------------------

        transcribed_text = self.transcribe_audio(
            audio_bytes=audio_bytes,
            filename=filename,
        )

        # --------------------------------------------------------
        # Step 2: Hindi → target language
        # --------------------------------------------------------

        translated_text = self.translate_text(
            text=transcribed_text,
            source_language=source_language,
            target_language=target_language,
            educational_context=educational_context,
        )

        # --------------------------------------------------------
        # Step 3: Santhali text → Santhali audio
        # --------------------------------------------------------

        audio_output = self.synthesize_santhali(
            text=translated_text,
        )

        return (
            transcribed_text,
            translated_text,
            audio_output,
        )

    # ============================================================
    # SPEECH STATUS
    # ============================================================

    def speech_status(self) -> dict:
        """
        Return current speech capability status.
        """

        return {
            "available": True,
            "transcription": True,
            "translation": True,
            "text_to_speech": True,
            "source_language": "hi",
            "target_language": "san",
            "audio_format": "mp3",
            "message": (
                "Hindi speech can be transcribed, "
                "translated into Santhali, and converted "
                "into Santhali speech."
            ),
        }