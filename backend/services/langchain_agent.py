import requests
from config import config  # Import API key from config

GROQ_API_URL = "https://api.groq.com/v1/chat/completions"

def ask_groq(prompt: str) -> str:
    """Sends a query to Groq API and returns the response."""
    headers = {
        "Authorization": f"Bearer {config.GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "llama3-8b",  # Change model if needed
        "messages": [{"role": "user", "content": prompt}]
    }

    response = requests.post(GROQ_API_URL, json=payload, headers=headers)

    if response.status_code == 200:
        return response.json()["choices"][0]["message"]["content"]
    else:
        return f"Error: {response.status_code}, {response.text}"
