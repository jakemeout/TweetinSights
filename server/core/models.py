from datetime import date
from server.core.db import Base
from sqlalchemy import Column, BigInteger, Integer, String, DateTime
from server.core import db
from datetime import datetime

class Tweet(Base):

    __tablename__ = "tweets"

    id = Column(BigInteger, primary_key=True)
    twitter_id = Column(BigInteger, nullable=False)
    text = Column(String(length=280))
    created_at = Column(DateTime)
    modified_at = Column(DateTime)
