from sqlalchemy.orm import Session
from . import models, schemas

def get_projects(db: Session):
    return db.query(models.Project).all()

def create_message(db: Session, message: schemas.ContactIn):
    db_msg = models.ContactMessage(
        name=message.name, email=message.email, message=message.message
    )
    db.add(db_msg)
    db.commit()
    db.refresh(db_msg)
    return db_msg


def create_project(db: Session, project: schemas.ProjectCreate):
    db_project = models.Project(
        title=project.title,
        description=project.description,
        tech_stack=project.tech_stack,
        repo_url=str(project.repo_url),  # Convert HttpUrl to str
        demo_url=str(project.demo_url)   # Convert HttpUrl to str
    )
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project
