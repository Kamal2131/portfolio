from fastapi import APIRouter

router = APIRouter(prefix="/about", tags=["about"])

@router.get("/", summary="Get About Me info")
def read_about():
    return {
        "name": "Kamal Krishna Ghosh",
        "bio": "B.Tech CSE student | Aspiring Software Engineer | Full-Stack Developer",
        "skills": ["Java", "Python", "FastAPI", "React", "SQLAlchemy", "Docker"],
        "contact_links": {
            "linkedin": "https://www.linkedin.com/in/kamal-krishna-ghosh",
            "github": "https://github.com/your-username"
        }
    }
