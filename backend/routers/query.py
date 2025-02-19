from fastapi import APIRouter
from services.langchain_agent import ask_groq

router = APIRouter()

@router.post("/query/")
async def query_document(text: str):
    response = ask_groq(text)
    return {"response": response}
