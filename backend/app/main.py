import uvicorn
from fastapi import FastAPI
from .database import engine, Base
from .routers import about, projects, contact
from fastapi.middleware.cors import CORSMiddleware

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, specify your frontend domain
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(about.router)
app.include_router(projects.router)
app.include_router(contact.router)  # remove if not using contact

# Root endpoint
@app.get("/")
def root():
    return {"message": "Welcome to my Portfolio API"}

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="localhost", port=8000, reload=True)
