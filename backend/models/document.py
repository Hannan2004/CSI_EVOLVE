from pydantic import BaseModel
from typing import Optional

class DocumentMetadata(BaseModel):
    filename: str
    content: str
    processed_text: Optional[str] = None
