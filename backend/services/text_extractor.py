import fitz  # PyMuPDF

def extract_text_from_pdf(pdf_path: str) -> str:
    """Extracts text from a given PDF file using PyMuPDF."""
    try:
        doc = fitz.open(pdf_path)
        text = "\n".join([page.get_text() for page in doc])
        return text.strip()
    except Exception as e:
        return f"Error extracting text: {str(e)}"
