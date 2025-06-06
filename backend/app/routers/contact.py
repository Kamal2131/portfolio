from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from .. import schemas, crud
from ..database import get_db

router = APIRouter(prefix="/contact", tags=["contact"])

@router.post("/", status_code=status.HTTP_201_CREATED)
def create_contact_message(msg: schemas.ContactIn, db: Session = Depends(get_db)):
    created = crud.create_message(db, msg)
    return {"detail": "Message received", "id": created.id}
