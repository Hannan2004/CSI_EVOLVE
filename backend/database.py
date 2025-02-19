from config import config
import chromadb

# Initialize ChromaDB collection
chroma_client = chromadb.PersistentClient(path=config["DB_PATH"])
collection = chroma_client.get_or_create_collection(name="document_metadata")
