# BHASHA SETU — Backend Source Bundle for Arena

This is a single-file representation of the backend source for frontend development.

## Critical instructions
- The backend source below is the source of truth for frontend API integration.
- No real `.env` file or API secrets are included.
- Do not invent endpoints, request bodies, response formats, or unsupported features.
- Treat each `FILE:` heading as the original project-relative file path.


---

## FILE: `README.md`

```markdown
# BHASHA SETU Backend

This repository contains the cleaned backend source for the BHASHA SETU project.

## Important
- The real `.env` file and API secrets are intentionally NOT included.
- Copy `.env.example` to `.env` locally and add your own secret values.
- Never commit `.env`.
- The backend is the source of truth for the frontend API integration.

## Run locally
Install dependencies from `requirements.txt` and configure your local `.env` file before starting the FastAPI application.

```

---

## FILE: `api/routes/flashcard.py`

```python
from fastapi import APIRouter, HTTPException

from app.schemas.flashcard_schema import (
    FlashcardRequest,
    FlashcardResponse,
)
from app.services.flashcard_service import FlashcardService


router = APIRouter(
    prefix="/api/flashcard",
    tags=["Flashcard Generator"],
)

flashcard_service = FlashcardService()


@router.post(
    "/generate",
    response_model=FlashcardResponse,
)
async def generate_flashcards(
    request: FlashcardRequest,
) -> FlashcardResponse:
    """Generate structured Hindi flashcards and their Santhali translation."""

    try:
        hindi_flashcards, santhali_flashcards = (
            flashcard_service.generate_flashcards(
                topic=request.topic,
                class_level=request.class_level,
                subject=request.subject,
                number_of_cards=request.number_of_cards,
                educational_context=request.educational_context,
            )
        )

        return FlashcardResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            number_of_cards=request.number_of_cards,
            hindi_flashcards=hindi_flashcards,
            santhali_flashcards=santhali_flashcards,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    except RuntimeError as exc:
        raise HTTPException(
            status_code=503,
            detail=str(exc),
        ) from exc
```

---

## FILE: `api/routes/lesson.py`

```python
import base64

from fastapi import APIRouter, HTTPException

from app.schemas.lesson_schema import (
    LessonRequest,
    LessonResponse,
)
from app.services.lesson_service import LessonService
from app.services.tts_service import TTSService


router = APIRouter(
    prefix="/api/lesson",
    tags=["Lesson Generator"],
)

lesson_service = LessonService()
tts_service = TTSService()


@router.post(
    "/generate",
    response_model=LessonResponse,
)
async def generate_lesson(
    request: LessonRequest,
) -> LessonResponse:
    """Generate a Hindi lesson, Santhali translation, and Santhali audio."""

    try:
        hindi_lesson, santhali_lesson = lesson_service.generate_lesson(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            educational_context=request.educational_context,
        )

        audio_bytes = tts_service.synthesize_santhali(
            text=santhali_lesson,
        )

        audio_base64 = base64.b64encode(audio_bytes).decode("utf-8")

        return LessonResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            lesson_content=hindi_lesson,
            santhali_lesson_content=santhali_lesson,
            audio_base64=audio_base64,
            audio_content_type="audio/mpeg",
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    except RuntimeError as exc:
        raise HTTPException(
            status_code=503,
            detail=str(exc),
        ) from exc
```

---

## FILE: `api/routes/speech.py`

```python
import base64

from fastapi import (
    APIRouter,
    File,
    Form,
    HTTPException,
    Response,
    UploadFile,
)

from app.schemas.speech_schema import (
    SpeechStatusResponse,
    SpeechTranslationRequest,
    SpeechTranslationResponse,
    TextToSpeechRequest,
    VoiceTranslationResponse,
)
from app.services.speech_service import SpeechService


router = APIRouter(
    prefix="/api/speech",
    tags=["Speech"],
)


speech_service = SpeechService()


@router.post(
    "/translate",
    response_model=SpeechTranslationResponse,
)
async def translate_speech_text(
    request: SpeechTranslationRequest,
) -> SpeechTranslationResponse:
    """Translate text or transcribed speech text."""

    try:
        translated_text = speech_service.translate_text(
            text=request.text,
            source_language=request.source_language,
            target_language=request.target_language,
            educational_context=request.educational_context,
        )

        return SpeechTranslationResponse(
            source_text=request.text,
            translated_text=translated_text,
            source_language=request.source_language,
            target_language=request.target_language,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    except RuntimeError as exc:
        raise HTTPException(
            status_code=503,
            detail=str(exc),
        ) from exc


@router.post(
    "/voice-translate",
    response_model=VoiceTranslationResponse,
)
async def translate_voice(
    audio: UploadFile = File(...),
    source_language: str = Form(...),
    target_language: str = Form(...),
    educational_context: str | None = Form(None),
) -> VoiceTranslationResponse:
    """
    Complete voice translation pipeline.

    Hindi audio
        ↓
    Speech-to-text
        ↓
    Hindi → Santhali
        ↓
    Santhali text-to-speech
        ↓
    Base64 MP3 audio
    """

    try:
        audio_bytes = await audio.read()

        (
            transcribed_text,
            translated_text,
            audio_output,
        ) = speech_service.translate_audio(
            audio_bytes=audio_bytes,
            filename=audio.filename or "recording.webm",
            source_language=source_language,
            target_language=target_language,
            educational_context=educational_context,
        )

        audio_base64 = base64.b64encode(
            audio_output
        ).decode("utf-8")

        return VoiceTranslationResponse(
            transcribed_text=transcribed_text,
            translated_text=translated_text,
            source_language=source_language,
            target_language=target_language,
            audio_base64=audio_base64,
            audio_content_type="audio/mpeg",
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    except RuntimeError as exc:
        raise HTTPException(
            status_code=503,
            detail=str(exc),
        ) from exc


@router.post("/text-to-speech")
async def generate_speech(
    request: TextToSpeechRequest,
):
    """
    Convert Santhali text into speech audio.
    """

    try:
        audio_bytes = speech_service.synthesize_santhali(
            text=request.text,
        )

        return Response(
            content=audio_bytes,
            media_type="audio/mpeg",
            headers={
                "Content-Disposition": (
                    'inline; filename="bhasha_setu_audio.mp3"'
                )
            },
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    except RuntimeError as exc:
        raise HTTPException(
            status_code=503,
            detail=str(exc),
        ) from exc


@router.get(
    "/status",
    response_model=SpeechStatusResponse,
)
async def speech_status() -> SpeechStatusResponse:
    """Return the current speech capability status."""

    return speech_service.speech_status()
```

---

## FILE: `api/routes/translation.py`

```python
import base64

from fastapi import APIRouter, HTTPException

from app.schemas.translation_schema import (
    TranslationRequest,
    TranslationResponse,
)
from app.services.translation.translation_service import TranslationService
from app.services.tts_service import TTSService


router = APIRouter(
    prefix="/api/translation",
    tags=["Translation"],
)

translation_service = TranslationService()
tts_service = TTSService()


@router.post(
    "/translate",
    response_model=TranslationResponse,
)
async def translate_text(
    request: TranslationRequest,
) -> TranslationResponse:
    """Translate educational content and generate Santhali audio."""

    try:
        translated_text = translation_service.translate(
            text=request.text,
            source_language=request.source_language,
            target_language=request.target_language,
            educational_context=request.educational_context,
        )

        audio_bytes = tts_service.synthesize_santhali(
            text=translated_text,
        )

        audio_base64 = base64.b64encode(audio_bytes).decode("utf-8")

        return TranslationResponse(
            source_text=request.text,
            translated_text=translated_text,
            source_language=request.source_language,
            target_language=request.target_language,
            audio_base64=audio_base64,
            audio_content_type="audio/mpeg",
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    except RuntimeError as exc:
        raise HTTPException(
            status_code=503,
            detail=str(exc),
        ) from exc
```

---

## FILE: `api/routes/worksheet.py`

```python
import base64

from fastapi import APIRouter, HTTPException

from app.schemas.worksheet_schema import (
    WorksheetRequest,
    WorksheetResponse,
)
from app.services.worksheet_service import WorksheetService
from app.services.tts_service import TTSService


router = APIRouter(
    prefix="/api/worksheet",
    tags=["Worksheet Generator"],
)

worksheet_service = WorksheetService()
tts_service = TTSService()


@router.post(
    "/generate",
    response_model=WorksheetResponse,
)
async def generate_worksheet(
    request: WorksheetRequest,
) -> WorksheetResponse:
    """Generate a structured Hindi worksheet, Santhali translation, and Santhali audio."""

    try:
        hindi_worksheet, santhali_worksheet = (
            worksheet_service.generate_worksheet(
                topic=request.topic,
                class_level=request.class_level,
                subject=request.subject,
                number_of_questions=request.number_of_questions,
                educational_context=request.educational_context,
            )
        )

        # Build one combined text from the complete Santhali worksheet
        audio_text_parts = [
            santhali_worksheet.title,
            santhali_worksheet.instructions,
        ]

        for question in santhali_worksheet.questions:
            audio_text_parts.append(
                f"{question.question_number}. "
                f"{question.question_text}"
            )

        audio_text = "\n".join(audio_text_parts)

        # Generate Santhali audio
        audio_bytes = tts_service.synthesize_santhali(
            text=audio_text,
        )

        audio_base64 = base64.b64encode(
            audio_bytes
        ).decode("utf-8")

        return WorksheetResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            number_of_questions=request.number_of_questions,
            hindi_worksheet=hindi_worksheet,
            santhali_worksheet=santhali_worksheet,
            audio_base64=audio_base64,
            audio_content_type="audio/mpeg",
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    except RuntimeError as exc:
        raise HTTPException(
            status_code=503,
            detail=str(exc),
        ) from exc
```

---

## FILE: `app/__init__.py`

```python

```

---

## FILE: `app/ai/ai_client.py`

```python
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
```

---

## FILE: `app/ai/prompts.py`

```python
TRANSLATION_SYSTEM_PROMPT = """
You are the AI translation engine of BHASHA SETU.

Your task is to translate primary-school educational content
from Hindi into Santhali.

Translation requirements:

1. Preserve the exact educational meaning of the Hindi input.
2. Use natural and appropriate Santhali suitable for primary-school learners.
3. Do not perform literal word-for-word translation when it reduces meaning.
4. Preserve the classroom context and intended learning objective.
5. Keep the language clear enough for a teacher to use directly in class.
6. Preserve numbers, names, questions, instructions and assessment meaning.
7. Do not change numerical values or mathematical symbols.
8. Do not add explanations, examples, facts or information that are not present
   in the original text.
9. If a technical or educational term has no reliable Santhali equivalent,
   preserve the meaning using the most appropriate natural expression.
10. Return ONLY the Santhali translation.
11. Do not return English, Hindi, explanations, labels or commentary.

This system is currently being used for the BHASHA SETU prototype,
where Hindi is the source language and Santhali is the target language.
"""


def build_translation_prompt(
    text: str,
    source_language: str,
    target_language: str,
    educational_context: str | None = None,
) -> str:
    context = educational_context or "Primary-school classroom instruction"

    return f"""
{TRANSLATION_SYSTEM_PROMPT}

Source language: {source_language}
Target language: {target_language}
Educational context: {context}

Text to translate:
{text}
""".strip()
```

---

## FILE: `app/main.py`

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes.translation import router as translation_router
from api.routes.lesson import router as lesson_router
from api.routes.worksheet import router as worksheet_router
from api.routes.flashcard import router as flashcard_router
from api.routes.speech import router as speech_router

from app.services.health_service import get_backend_health


app = FastAPI(
    title="BHASHA SETU API",
    description=(
        "AI-powered vernacular pedagogy and real-time "
        "translation backend for mother tongue-based education."
    ),
    version="2.0.0",
)


# Allow frontend applications to communicate with the backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# API Routers
app.include_router(translation_router)
app.include_router(lesson_router)
app.include_router(worksheet_router)
app.include_router(flashcard_router)
app.include_router(speech_router)


@app.get("/api/health")
async def health_check():
    """Check whether the BHASHA SETU backend is running."""

    return get_backend_health()
```

---

## FILE: `app/schemas/flashcard_schema.py`

```python
from pydantic import BaseModel, Field


class Flashcard(BaseModel):

    card_number: int = Field(..., ge=1)

    card_type: str = Field(..., min_length=1)

    front_text: str = Field(..., min_length=1)

    back_text: str = Field(..., min_length=1)

    audio_base64: str | None = None

    audio_content_type: str | None = None


class FlashcardContent(BaseModel):

    title: str = Field(..., min_length=1)

    cards: list[Flashcard] = Field(..., min_length=1)


class FlashcardRequest(BaseModel):

    topic: str = Field(..., min_length=1)

    class_level: str = Field(..., min_length=1)

    subject: str = Field(..., min_length=1)

    number_of_cards: int = Field(
        default=10,
        ge=1,
        le=30,
    )

    educational_context: str | None = None


class FlashcardResponse(BaseModel):

    topic: str

    class_level: str

    subject: str

    number_of_cards: int

    hindi_flashcards: FlashcardContent

    santhali_flashcards: FlashcardContent
```

---

## FILE: `app/schemas/lesson_schema.py`

```python
from pydantic import BaseModel, Field


class LessonRequest(BaseModel):

    topic: str = Field(..., min_length=1)

    class_level: str = Field(..., min_length=1)

    subject: str = Field(..., min_length=1)

    educational_context: str | None = None


class LessonResponse(BaseModel):

    topic: str

    class_level: str

    subject: str

    lesson_content: str

    santhali_lesson_content: str

    audio_base64: str

    audio_content_type: str
```

---

## FILE: `app/schemas/speech_schema.py`

```python
from pydantic import BaseModel, Field


class SpeechTranslationRequest(BaseModel):

    text: str = Field(..., min_length=1)

    source_language: str = Field(..., min_length=2)

    target_language: str = Field(..., min_length=2)

    educational_context: str | None = None


class SpeechTranslationResponse(BaseModel):

    source_text: str

    translated_text: str

    source_language: str

    target_language: str


class TextToSpeechRequest(BaseModel):

    text: str = Field(..., min_length=1)

    language: str = Field(..., min_length=2)


class SpeechStatusResponse(BaseModel):

    available: bool

    message: str


class VoiceTranslationResponse(BaseModel):

    transcribed_text: str

    translated_text: str

    source_language: str

    target_language: str

    audio_base64: str

    audio_content_type: str
```

---

## FILE: `app/schemas/translation_schema.py`

```python
from pydantic import BaseModel, Field


class TranslationRequest(BaseModel):

    text: str = Field(..., min_length=1)

    source_language: str = Field(default="hi")

    target_language: str

    educational_context: str | None = None


class TranslationResponse(BaseModel):

    source_text: str

    translated_text: str

    source_language: str

    target_language: str

    audio_base64: str

    audio_content_type: str
```

---

## FILE: `app/schemas/worksheet_schema.py`

```python
from pydantic import BaseModel, Field


class WorksheetQuestion(BaseModel):
    question_number: int = Field(..., ge=1)
    question_type: str = Field(..., min_length=1)
    question_text: str = Field(..., min_length=1)


class WorksheetContent(BaseModel):
    title: str = Field(..., min_length=1)
    instructions: str = Field(..., min_length=1)
    questions: list[WorksheetQuestion] = Field(..., min_length=1)


class WorksheetRequest(BaseModel):
    topic: str = Field(..., min_length=1)
    class_level: str = Field(..., min_length=1)
    subject: str = Field(..., min_length=1)
    number_of_questions: int = Field(default=10, ge=1, le=30)
    educational_context: str | None = None


class WorksheetResponse(BaseModel):
    topic: str
    class_level: str
    subject: str
    number_of_questions: int
    hindi_worksheet: WorksheetContent
    santhali_worksheet: WorksheetContent
    audio_base64: str
    audio_content_type: str
```

---

## FILE: `app/services/flashcard_service.py`

```python
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
```

---

## FILE: `app/services/health_service.py`

```python
def get_backend_health() -> dict:
    return {
        "status": "healthy",
        "service": "Bhasha Setu Backend",
        "version": "2.0.0"
    }
```

---

## FILE: `app/services/lesson_service.py`

```python
from app.ai.ai_client import AIClient
from app.services.translation.translation_service import TranslationService


class LessonService:
    """Generates primary-school lessons and translates them into Santhali."""

    def __init__(self) -> None:
        self.ai_client = AIClient()
        self.translation_service = TranslationService()

    def generate_lesson(
        self,
        topic: str,
        class_level: str,
        subject: str,
        educational_context: str | None = None,
    ) -> tuple[str, str]:
        """Generate a Hindi lesson and translate it into Santhali."""

        if not topic or not topic.strip():
            raise ValueError("Lesson topic cannot be empty.")

        if not class_level or not class_level.strip():
            raise ValueError("Class level cannot be empty.")

        if not subject or not subject.strip():
            raise ValueError("Subject cannot be empty.")

        context = educational_context or "Primary-school classroom instruction"

        prompt = f"""
You are the lesson generation engine of BHASHA SETU.

Create a simple, practical and age-appropriate primary-school lesson.

Class: {class_level}
Subject: {subject}
Topic: {topic}
Educational context: {context}

The lesson must contain:

1. Learning Objective
2. Simple Explanation
3. Classroom Activity
4. Practice Questions
5. Short Assessment

Requirements:
- Use clear and child-friendly language.
- Keep the lesson suitable for the specified class level.
- Keep activities practical for a classroom.
- Preserve the educational objective.
- Do not invent unrelated information.
- Do not include teacher-facing commentary outside the requested lesson.
- Return only the lesson content.

Generate the lesson in Hindi so that it can be passed through
BHASHA SETU's Hindi-to-Santhali translation engine.
""".strip()

        hindi_lesson = self.ai_client.generate(prompt)

        santhali_lesson = self.translation_service.translate(
            text=hindi_lesson,
            source_language="hi",
            target_language="sat",
            educational_context=context,
        )

        return hindi_lesson, santhali_lesson
```

---

## FILE: `app/services/speech_service.py`

```python
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
```

---

## FILE: `app/services/translation/translation_service.py`

```python
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
```

---

## FILE: `app/services/tts_service.py`

```python
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
```

---

## FILE: `app/services/worksheet_service.py`

```python
import json

from app.ai.ai_client import AIClient
from app.schemas.worksheet_schema import (
    WorksheetContent,
    WorksheetQuestion,
)


class WorksheetService:
    """Generates structured primary-school worksheets and Santhali translations."""

    def __init__(self) -> None:
        self.ai_client = AIClient()

    def generate_worksheet(
        self,
        topic: str,
        class_level: str,
        subject: str,
        number_of_questions: int = 10,
        educational_context: str | None = None,
    ) -> tuple[WorksheetContent, WorksheetContent]:
        """Generate a structured Hindi worksheet and its Santhali translation."""

        if not topic or not topic.strip():
            raise ValueError("Worksheet topic cannot be empty.")

        if not class_level or not class_level.strip():
            raise ValueError("Class level cannot be empty.")

        if not subject or not subject.strip():
            raise ValueError("Subject cannot be empty.")

        if number_of_questions < 1 or number_of_questions > 30:
            raise ValueError(
                "Number of questions must be between 1 and 30."
            )

        context = (
            educational_context
            or "Primary-school FLN classroom worksheet"
        )

        hindi_prompt = f"""
You are the structured worksheet generation engine of BHASHA SETU.

Create a simple, practical and age-appropriate worksheet
for primary-school students.

Class: {class_level}
Subject: {subject}
Topic: {topic}
Number of Questions: {number_of_questions}
Educational context: {context}

Return ONLY valid JSON.

Use exactly this structure:

{{
  "title": "Worksheet title in Hindi",
  "instructions": "Simple instructions in Hindi",
  "questions": [
    {{
      "question_number": 1,
      "question_type": "type of question",
      "question_text": "question in Hindi"
    }}
  ]
}}

Requirements:

- Generate exactly {number_of_questions} questions.
- Use clear and child-friendly Hindi.
- Keep questions appropriate for {class_level}.
- Keep every question relevant to {topic}.
- Keep the worksheet suitable for classroom use.
- Use practical question types where appropriate.
- Preserve mathematical expressions and numerical values.
- Do not include answers.
- Do not include explanations outside the JSON.
- Do not add markdown code fences.
- Do not add teacher-facing commentary.
- Ensure the JSON is valid and complete.
""".strip()

        # ---------------------------------------------------------
        # STEP 1: Generate Hindi worksheet
        # ---------------------------------------------------------

        raw_response = self.ai_client.generate(hindi_prompt)

        hindi_worksheet = self._parse_json_response(
            raw_response,
            "The AI returned an invalid Hindi worksheet structure.",
        )

        self._validate_worksheet_structure(
            hindi_worksheet,
            number_of_questions,
        )

        # ---------------------------------------------------------
        # STEP 2: Translate complete worksheet into Santhali
        # ---------------------------------------------------------

        santhali_worksheet = self._translate_worksheet(
            hindi_worksheet,
            context,
        )

        self._validate_worksheet_structure(
            santhali_worksheet,
            number_of_questions,
        )

        # ---------------------------------------------------------
        # STEP 3: Convert dictionaries into Pydantic models
        #
        # The route expects:
        #     santhali_worksheet.title
        #     santhali_worksheet.instructions
        #     santhali_worksheet.questions
        #
        # AI returns dictionaries, so convert them here.
        # ---------------------------------------------------------

        hindi_worksheet_model = WorksheetContent(
            title=hindi_worksheet["title"],
            instructions=hindi_worksheet["instructions"],
            questions=[
                WorksheetQuestion(
                    question_number=question["question_number"],
                    question_type=question["question_type"],
                    question_text=question["question_text"],
                )
                for question in hindi_worksheet["questions"]
            ],
        )

        santhali_worksheet_model = WorksheetContent(
            title=santhali_worksheet["title"],
            instructions=santhali_worksheet["instructions"],
            questions=[
                WorksheetQuestion(
                    question_number=question["question_number"],
                    question_type=question["question_type"],
                    question_text=question["question_text"],
                )
                for question in santhali_worksheet["questions"]
            ],
        )

        return (
            hindi_worksheet_model,
            santhali_worksheet_model,
        )

    def _translate_worksheet(
        self,
        worksheet: dict,
        educational_context: str,
    ) -> dict:
        """
        Translate the complete worksheet from Hindi to Santhali
        using a single AI request.
        """

        worksheet_json = json.dumps(
            worksheet,
            ensure_ascii=False,
            indent=2,
        )

        translation_prompt = f"""
You are the translation engine of BHASHA SETU.

Translate the following primary-school worksheet from Hindi
to Santhali.

Educational context:
{educational_context}

Important rules:

1. Translate ALL Hindi natural-language content into Santhali.
2. Preserve the exact JSON structure.
3. Preserve question_number values exactly.
4. Preserve question_type values exactly.
5. Preserve mathematical expressions and numerical values.
6. Do not add answers.
7. Do not add explanations.
8. Do not remove any question.
9. Do not add any new question.
10. Return ONLY valid JSON.
11. Do not use markdown code fences.
12. Keep the language natural and appropriate for primary-school students.

Input worksheet:

{worksheet_json}

Return exactly this structure:

{{
  "title": "Santhali translated title",
  "instructions": "Santhali translated instructions",
  "questions": [
    {{
      "question_number": 1,
      "question_type": "same question type",
      "question_text": "Santhali translated question"
    }}
  ]
}}
""".strip()

        raw_response = self.ai_client.generate(
            translation_prompt
        )

        return self._parse_json_response(
            raw_response,
            "The AI returned an invalid Santhali worksheet structure.",
        )

    @staticmethod
    def _parse_json_response(
        raw_response: str,
        error_message: str,
    ) -> dict:
        """Parse a JSON response returned by the AI."""

        if not raw_response or not raw_response.strip():
            raise RuntimeError(error_message)

        cleaned_response = raw_response.strip()

        # Remove markdown code fences if Gemini adds them.
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
    def _validate_worksheet_structure(
        worksheet: dict,
        number_of_questions: int,
    ) -> None:
        """Validate the structure returned by the AI."""

        required_fields = {
            "title",
            "instructions",
            "questions",
        }

        if not required_fields.issubset(worksheet):
            raise RuntimeError(
                "The AI worksheet is missing required fields."
            )

        if not isinstance(worksheet["title"], str):
            raise RuntimeError(
                "The worksheet title must be a string."
            )

        if not isinstance(worksheet["instructions"], str):
            raise RuntimeError(
                "The worksheet instructions must be a string."
            )

        if not isinstance(worksheet["questions"], list):
            raise RuntimeError(
                "The AI worksheet questions must be a list."
            )

        if len(worksheet["questions"]) != number_of_questions:
            raise RuntimeError(
                "The AI did not generate the requested number of questions."
            )

        for index, question in enumerate(
            worksheet["questions"],
            start=1,
        ):
            if not isinstance(question, dict):
                raise RuntimeError(
                    f"Worksheet question {index} has an invalid structure."
                )

            required_question_fields = {
                "question_number",
                "question_type",
                "question_text",
            }

            if not required_question_fields.issubset(question):
                raise RuntimeError(
                    f"Worksheet question {index} is missing required fields."
                )

            if question["question_number"] != index:
                raise RuntimeError(
                    f"Worksheet question {index} has an invalid question number."
                )

            if not isinstance(question["question_type"], str):
                raise RuntimeError(
                    f"Worksheet question {index} has an invalid question type."
                )

            if not isinstance(question["question_text"], str):
                raise RuntimeError(
                    f"Worksheet question {index} has an invalid question text."
                )

            if not question["question_text"].strip():
                raise RuntimeError(
                    f"Worksheet question {index} cannot be empty."
                )
```

---

## FILE: `requirements.txt`

```
fastapi
uvicorn[standard]
pydantic
python-dotenv
google-genai
python-multipart
```
