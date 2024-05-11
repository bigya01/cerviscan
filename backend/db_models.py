# handling forms 
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from .database import Base

class ContactData(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    message = Column(String)