from fastapi import FastAPI
from routers import upload, query

app = FastAPI()

# Include routers
app.include_router(upload.router, prefix="/upload", tags=["upload"])
app.include_router(query.router, prefix="/query", tags=["query"])

@app.get("/")
def home():
    return {"message": "Welcome to the Document Analyzer API"}
