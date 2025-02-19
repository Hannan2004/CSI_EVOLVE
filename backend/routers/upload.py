from fastapi import APIRouter, UploadFile, File, HTTPException
import pymupdf  # Correct module

from services.text_extractor import extract_text

router = APIRouter()

@router.post("/")
async def upload_file(file: UploadFile = File(...)):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed")

    pdf_content = await file.read()
    extracted_text = extract_text(pdf_content)

    return {"filename": file.filename, "extracted_text": extracted_text}
