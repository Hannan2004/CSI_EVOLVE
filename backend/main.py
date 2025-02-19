from fastapi import FastAPI
from routers import upload, query

app = FastAPI()

# Include Routers
app.include_router(upload.router)
app.include_router(query.router)

@app.get("/")
async def root():
    return {"message": "Document Analysis API is running"}
