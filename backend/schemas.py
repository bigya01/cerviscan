from pydantic import BaseModel


class ContactItem(BaseModel):
    name: str
    email: str
    phone: str | None = None
    message: str