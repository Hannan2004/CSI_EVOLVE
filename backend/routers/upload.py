from fastapi import APIRouter, File, UploadFile, HTTPException
import os
from services.text_extractor import extract_text_from_pdf

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        # Save the uploaded file
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as f:
            f.write(file.file.read())

        # Extract text
        extracted_text = extract_text_from_pdf(file_path)
        return {"filename": file.filename, "extracted_text": extracted_text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
