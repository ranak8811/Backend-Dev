# Interactive Teaching Platform

A modern, full-stack interactive learning application designed to provide a rich multimedia experience. This platform allows educators to present content through interactive text, images, audio, video, and expandable sections, similar to features found in professional word processors but optimized for the web.

![Project Preview](/assets/backend.png)

## 🌐 Live Demo

- **Frontend:** [astonishing-strudel-af8a9f.netlify.app](https://astonishing-strudel-af8a9f.netlify.app/)
- **Backend API:** [backend-dev-06xl.onrender.com](https://backend-dev-06xl.onrender.com/content)

## ✨ Key Features

### 1. Multimedia Content Hub

- **Interactive Cards:** Reusable components that trigger specific media players.
- **Support for Multiple Types:** Handles Text snippets, Images, HTML5 Audio, Local Video, and YouTube embeds seamlessly via a centralized Modal system.

### 2. Interactive News Article

- **Dynamic Content Parsing:** Automatically identifies and highlights specific Bengali terms within the article.
- **Vocabulary Tooltips:** Clicking highlighted terms (e.g., "সন্দেহে") opens a detailed modal with legal definitions and context.
- **Rich Typography:** Supports bold, italic, and span-based styling delivered dynamically from the backend.

### 3. Expandable Resource Sidebar

- **Custom Accordions:** A sleek, indigo-themed accordion system for organized information delivery.
- **State Management:** Ensures clear focus by managing expanded/collapsed states for Introduction, Explanation, and Resources.

## 🚀 Tech Stack

### Frontend

- **React 19:** Functional components with Hooks for state and effect management.
- **Tailwind CSS:** Modern utility-first styling for a responsive and polished UI.
- **React Icons:** High-quality iconography from FontAwesome and Material Design sets.
- **Vite:** Next-generation frontend tooling for lightning-fast development.

### Backend

- **FastAPI:** High-performance Python framework for building APIs.
- **Pydantic:** Robust data validation and settings management.
- **SQLAlchemy:** SQL toolkit and Object Relational Mapper (ORM) for future database scalability.
- **Uvicorn:** Lightning-fast ASGI server implementation.

## 🛠️ Installation & Setup

### Prerequisites

- Python 3.10+
- Node.js 18+

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the server:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and set the API URL:
   ```env
   VITE_API_URL=http://localhost:8000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## ☁️ Deployment

### Backend (Render.com)

- **Root Directory:** `backend`
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port 10000`

### Frontend (Netlify)

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Redirects:** Includes `_redirects` file for SPA routing support.

## 📝 License

This project is developed as a technical task for Python/Full-stack developer evaluation.
