import fitz  # PyMuPDF

def extract_text(pdf_content: bytes) -> str:
    """Extracts text from a PDF file."""
    pdf_document = fitz.open(stream=pdf_content, filetype="pdf")
    text = ""

    for page in pdf_document:
        text += page.get_text()

    return text.strip()
