from fastapi import APIRouter, HTTPException

from app.schemas.worksheet_schema import (
    WorksheetRequest,
    WorksheetResponse,
)
from app.services.worksheet_service import WorksheetService


router = APIRouter(
    prefix="/api/worksheet",
    tags=["Worksheet"],
)

worksheet_service = WorksheetService()


@router.post(
    "/generate",
    response_model=WorksheetResponse,
)
async def generate_worksheet(
    request: WorksheetRequest,
) -> WorksheetResponse:

    try:
        result = worksheet_service.generate_worksheet(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            number_of_questions=request.number_of_questions,
            educational_context=request.educational_context,
        )

        return WorksheetResponse(
            topic=request.topic,
            class_level=request.class_level,
            subject=request.subject,
            number_of_questions=request.number_of_questions,
            hindi_worksheet=result["hindi_worksheet"],
            santhali_worksheet=result["santhali_worksheet"],
            audio_base64="",
            audio_content_type="",
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