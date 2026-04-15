from pydantic import BaseModel
from typing import List, Optional, Union

class ContentItem(BaseModel):
    id: int
    type: str  # 'text', 'image', 'audio', 'video', 'youtube'
    title: str
    value: str  # URL or text content
    thumbnail: Optional[str] = None

class HighlightMetadata(BaseModel):
    term: str
    description: str
    link: Optional[str] = None

class Article(BaseModel):
    id: int
    title: str
    content: str  # Text with placeholders for highlights
    highlights: List[HighlightMetadata]

class AccordionItem(BaseModel):
    id: int
    title: str
    content: str

class ExpandableData(BaseModel):
    introduction: AccordionItem
    explanation: AccordionItem
    resources: AccordionItem
