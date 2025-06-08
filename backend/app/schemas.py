from pydantic import BaseModel, HttpUrl, EmailStr
from typing import Optional


class ProjectOut(BaseModel):
    id: int
    title: str
    description: str
    tech_stack: str
    repo_url: HttpUrl
    demo_url: Optional[HttpUrl] = None

    class Config:
        orm_mode = True
        from_attributes = True

class ContactIn(BaseModel):
    name: str
    email: EmailStr
    message: str