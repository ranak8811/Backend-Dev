import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from .schemas import ContentItem, Article, HighlightMetadata, ExpandableData, AccordionItem

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy Data
DUMMY_CONTENT: List[ContentItem] = [
    ContentItem(id=1, type="text", title="Text Interaction", value="This is a highlighted text segment that provides more context about the subject matter."),
    ContentItem(id=2, type="image", title="Visual Learning", value="https://images.unsplash.com/photo-1542831371-29b0f74f9713", thumbnail="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=200"),
    ContentItem(id=3, type="audio", title="Listen Carefully", value="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"),
    ContentItem(id=4, type="video", title="System Tutorial", value="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"),
    ContentItem(id=5, type="youtube", title="External Insight", value="https://www.youtube.com/embed/dQw4w9WgXcQ"),
]

DUMMY_ARTICLE = Article(
    id=1,
    title="রাজধানীর শপিং: এক অনন্য অভিজ্ঞতা",
    content="""রাজধানীর শপিং এখন আরও সহজ। আপনি চাইলে <b>বোল্ড</b> অথবা <i>ইটালিক</i> কন্টেন্ট দেখতে পারেন। 
    এখানে আমরা <span>শপিং কমপ্লেক্স</span> এবং <span>পণ্য তালিকা</span> নিয়ে আলোচনা করব। 
    এটি একটি ইন্টারেক্টিভ কন্টেন্ট যেখানে ব্যবহারকারীরা সরাসরি বিভিন্ন ফিচারের সাথে পরিচিত হতে পারেন।""",
    highlights=[
        HighlightMetadata(term="শপিং কমপ্লেক্স", description="শহরের প্রধান শপিং সেন্টারগুলো যেখানে সব ধরণের ব্র্যান্ড পাওয়া যায়।", link="https://example.com/shopping"),
        HighlightMetadata(term="পণ্য তালিকা", description="আপনার প্রয়োজনীয় সব পণ্যের একটি বিস্তারিত তালিকা যা আমাদের সিস্টেমে পাওয়া যাবে।", link="https://example.com/products")
    ]
)

DUMMY_EXPANDABLE = ExpandableData(
    introduction=AccordionItem(id=1, title="Introduction", content="This project aims to provide an interactive learning platform inspired by Microsoft Word features but tailored for dynamic web content."),
    explanation=AccordionItem(id=2, title="Detailed Explanation", content="We use FastAPI for the backend to serve content efficiently. The interactive elements like modals for text and media players for audio/video enhance the user experience."),
    resources=AccordionItem(id=3, title="Resources", content="You can find the documentation at fastapi.tiangolo.com and learn more about React at reactjs.org.")
)

@app.get("/content", response_model=List[ContentItem])
async def get_content():
    return DUMMY_CONTENT

@app.get("/article", response_model=Article)
async def get_article():
    return DUMMY_ARTICLE

@app.get("/expandable", response_model=ExpandableData)
async def get_expandable():
    return DUMMY_EXPANDABLE

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
