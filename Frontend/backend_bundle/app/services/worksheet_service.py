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