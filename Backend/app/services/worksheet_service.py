# Backend/app/services/worksheet_service.py

import json

from app.ai.ai_client import AIClient


class WorksheetService:
    """Handles AI-powered primary-school worksheet generation."""

    def __init__(self) -> None:
        self.ai_client = AIClient()

    def generate_worksheet(
        self,
        topic: str,
        class_level: str,
        subject: str,
        number_of_questions: int = 5,
        educational_context: str | None = None,
    ) -> dict:
        if not topic or not topic.strip():
            raise ValueError("Worksheet topic cannot be empty.")

        if not class_level or not class_level.strip():
            raise ValueError("Class level cannot be empty.")

        if not subject or not subject.strip():
            raise ValueError("Worksheet subject cannot be empty.")

        if number_of_questions < 1:
            raise ValueError("Number of questions must be at least 1.")

        context = (
            educational_context
            or "Primary-school FLN classroom"
        )

        # ---------------------------------------------------------
        # STEP 1: Generate structured Hindi worksheet
        # ---------------------------------------------------------

        hindi_prompt = f"""
You are an expert primary-school worksheet generator.

Create a structured worksheet in simple Hindi for:

Class: {class_level}
Subject: {subject}
Topic: {topic}

Educational context:
{context}

Number of questions:
{number_of_questions}

Requirements:
- Suitable for primary-school children.
- Use simple and clear Hindi.
- Make it teacher-friendly.
- Include a clear worksheet title.
- Include short instructions.
- Create exactly {number_of_questions} questions.
- Use suitable question types such as:
  fill_in_the_blank,
  multiple_choice,
  short_answer,
  activity.
- Keep the difficulty suitable for the given class.
- Do not include answers.
- Do not add unrelated information.

Return ONLY valid JSON.
Do not use markdown.
Do not use code fences.

Return exactly this structure:

{{
    "title": "Worksheet title in Hindi",
    "instructions": "Short instructions in Hindi",
    "questions": [
        {{
            "question_number": 1,
            "question_type": "short_answer",
            "question_text": "Question in Hindi"
        }}
    ]
}}

The questions array must contain exactly
{number_of_questions} questions.
"""

        hindi_response = self.ai_client.generate(hindi_prompt)

        if not hindi_response or not hindi_response.strip():
            raise RuntimeError(
                "AI returned an empty Hindi worksheet."
            )

        try:
            hindi_worksheet = json.loads(hindi_response)
        except json.JSONDecodeError as exc:
            raise RuntimeError(
                "AI returned invalid Hindi worksheet JSON."
            ) from exc

        self._validate_worksheet_structure(
            hindi_worksheet,
            "Hindi worksheet",
            number_of_questions,
        )

        # ---------------------------------------------------------
        # STEP 2: Convert structured Hindi worksheet to Santali
        # ---------------------------------------------------------

        santhali_prompt = f"""
You are an expert Santali primary-school education assistant.

Convert the following Hindi worksheet into natural,
child-friendly Santali.

Class: {class_level}
Subject: {subject}
Topic: {topic}

IMPORTANT:
- Preserve the complete worksheet structure.
- Preserve the title meaning.
- Preserve the instructions meaning.
- Preserve question numbering.
- Preserve question types.
- Preserve the meaning of every question.
- Preserve numbers and options.
- Do not add answers.
- Do not add unrelated information.
- Return ONLY valid JSON.
- Do not use markdown.
- Do not use code fences.

Return exactly this structure:

{{
    "title": "Worksheet title in Santali",
    "instructions": "Instructions in Santali",
    "questions": [
        {{
            "question_number": 1,
            "question_type": "short_answer",
            "question_text": "Question in Santali"
        }}
    ]
}}

The questions array must contain exactly
{number_of_questions} questions.

Hindi worksheet:
{json.dumps(hindi_worksheet, ensure_ascii=False)}
"""

        santhali_response = self.ai_client.generate(
            santhali_prompt
        )

        if not santhali_response or not santhali_response.strip():
            raise RuntimeError(
                "AI returned an empty Santali worksheet."
            )

        try:
            santhali_worksheet = json.loads(
                santhali_response
            )
        except json.JSONDecodeError as exc:
            raise RuntimeError(
                "AI returned invalid Santali worksheet JSON."
            ) from exc

        self._validate_worksheet_structure(
            santhali_worksheet,
            "Santali worksheet",
            number_of_questions,
        )

        # ---------------------------------------------------------
        # STEP 3: Generate Teacher Reading
        # Santali -> Devanagari pronunciation representation
        # ---------------------------------------------------------

        teacher_reading_prompt = f"""
You are a Santali pronunciation and teacher-support assistant.

Convert the following Santali worksheet into a
teacher-readable Devanagari pronunciation version.

Purpose:
A Hindi-medium primary-school teacher should be able
to read the Santali worksheet aloud.

IMPORTANT:
- This is NOT a Hindi translation.
- Do NOT replace Santali words with Hindi words.
- Do NOT change the meaning.
- Do NOT summarize.
- Preserve the complete worksheet structure.
- Preserve the title.
- Preserve the instructions.
- Preserve question numbering.
- Preserve question types.
- Preserve names and numbers.
- Only represent the Santali pronunciation using
  Devanagari script.
- Make it easy for a Hindi-medium teacher to read aloud.
- Do not use English transliteration.
- Return ONLY valid JSON.
- Do not use markdown.
- Do not use code fences.

Return exactly this structure:

{{
    "title": "Santali title written in Devanagari",
    "instructions": "Santali instructions written in Devanagari",
    "questions": [
        {{
            "question_number": 1,
            "question_type": "short_answer",
            "question_text": "Santali question written in Devanagari"
        }}
    ]
}}

The questions array must contain exactly
{number_of_questions} questions.

Santali worksheet:
{json.dumps(santhali_worksheet, ensure_ascii=False)}
"""

        teacher_reading_response = self.ai_client.generate(
            teacher_reading_prompt
        )

        if (
            not teacher_reading_response
            or not teacher_reading_response.strip()
        ):
            raise RuntimeError(
                "AI returned an empty teacher reading."
            )

        try:
            teacher_reading = json.loads(
                teacher_reading_response
            )
        except json.JSONDecodeError as exc:
            raise RuntimeError(
                "AI returned invalid teacher reading JSON."
            ) from exc

        self._validate_worksheet_structure(
            teacher_reading,
            "Teacher reading",
            number_of_questions,
        )

        # ---------------------------------------------------------
        # FINAL RESULT
        # ---------------------------------------------------------

        return {
            "hindi_worksheet": hindi_worksheet,
            "santhali_worksheet": santhali_worksheet,
            "teacher_reading": teacher_reading,
        }

    # -------------------------------------------------------------
    # Internal validation
    # -------------------------------------------------------------

    @staticmethod
    def _validate_worksheet_structure(
        worksheet: dict,
        name: str,
        number_of_questions: int,
    ) -> None:
        if not isinstance(worksheet, dict):
            raise RuntimeError(
                f"{name} must be a JSON object."
            )

        if not isinstance(
            worksheet.get("title"),
            str,
        ):
            raise RuntimeError(
                f"{name} title is missing or invalid."
            )

        if not isinstance(
            worksheet.get("instructions"),
            str,
        ):
            raise RuntimeError(
                f"{name} instructions are missing or invalid."
            )

        questions = worksheet.get("questions")

        if not isinstance(questions, list):
            raise RuntimeError(
                f"{name} questions must be a list."
            )

        if len(questions) != number_of_questions:
            raise RuntimeError(
                f"{name} must contain exactly "
                f"{number_of_questions} questions."
            )

        for index, question in enumerate(
            questions,
            start=1,
        ):
            if not isinstance(question, dict):
                raise RuntimeError(
                    f"{name} question {index} is invalid."
                )

            if not isinstance(
                question.get("question_number"),
                int,
            ):
                raise RuntimeError(
                    f"{name} question {index} has an invalid "
                    "question number."
                )

            if not isinstance(
                question.get("question_type"),
                str,
            ):
                raise RuntimeError(
                    f"{name} question {index} has an invalid "
                    "question type."
                )

            if not isinstance(
                question.get("question_text"),
                str,
            ):
                raise RuntimeError(
                    f"{name} question {index} has invalid "
                    "question text."
                )