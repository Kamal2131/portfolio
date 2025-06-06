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
