import openai
from config import config

openai.api_key = config.GOOGLE_API_KEY

def generate_answer(prompt: str) -> str:
    """Uses Google's LLM API to generate a response based on extracted text."""
    response = openai.ChatCompletion.create(
        model="gpt-4",  # Adjust as needed
        messages=[{"role": "user", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"]
