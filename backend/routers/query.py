from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.langchain_agent import ask_groq

router = APIRouter()

class QueryRequest(BaseModel):
    text: str

@router.post("/")
async def query_document(request: QueryRequest):
    response = ask_groq(request.text)
    return {"response": response}
