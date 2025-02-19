from database import collection

def store_metadata(doc_id: str, metadata: dict):
    """Stores metadata in ChromaDB collection"""
    collection.add(
        ids=[doc_id],
        metadatas=[metadata]
    )
