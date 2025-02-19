import fitz  # PyMuPDF
import re

def extract_text_from_pdf(pdf_path: str) -> str:
    """Extracts text from a PDF file."""
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text("text") + "\n"
    return text.strip()

def preprocess_text(text: str) -> str:
    """Cleans extracted text for better AI processing."""
    text = re.sub(r'\s+', ' ', text)  # Remove extra whitespace
    text = re.sub(r'\n+', '\n', text)  # Normalize newlines
    return text.strip()
