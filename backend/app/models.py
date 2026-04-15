from sqlalchemy import Column, Integer, String, JSON
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class ContentModel(Base):
    __tablename__ = "contents"
    id = Column(Integer, primary_key=True, index=True)
    type = Column(String)
    title = Column(String)
    value = Column(String)
    thumbnail = Column(String, nullable=True)

class ArticleModel(Base):
    __tablename__ = "articles"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    content = Column(String)
    highlights = Column(JSON)  # Storing highlights as JSON list

class AccordionModel(Base):
    __tablename__ = "accordions"
    id = Column(Integer, primary_key=True, index=True)
    section = Column(String)  # 'introduction', 'explanation', 'resources'
    title = Column(String)
    content = Column(String)
