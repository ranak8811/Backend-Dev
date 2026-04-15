from pydantic import BaseModel
from typing import List, Optional, Union

class ContentItem(BaseModel):
    id: int
    type: str
    title: str
    value: str
    thumbnail: Optional[str] = None

class HighlightMetadata(BaseModel):
    term: str
    description: str
    link: Optional[str] = None

class Article(BaseModel):
    id: int
    title: str
    content: str
    highlights: List[HighlightMetadata]

class AccordionItem(BaseModel):
    id: int
    title: str
    content: str

class ExpandableData(BaseModel):
    introduction: AccordionItem
    explanation: AccordionItem
    resources: AccordionItem
