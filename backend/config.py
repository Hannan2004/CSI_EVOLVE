import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

config = {
    "GROQ_API_KEY": os.getenv("GROQ_API_KEY"),
    "DB_PATH": os.getenv("DB_PATH", "chromadb"),
}
