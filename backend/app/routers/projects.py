from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import schemas, models, crud
from ..database import get_db

router = APIRouter(prefix="/projects", tags=["projects"])

@router.get("/", response_model=List[schemas.ProjectOut])
def read_projects(db: Session = Depends(get_db)):
    projects = crud.get_projects(db)
    if not projects:
        raise HTTPException(status_code=404, detail="No projects found")
    return projects
