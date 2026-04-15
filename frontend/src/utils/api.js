const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const fetchContent = async () => {
    const response = await fetch(`${API_BASE_URL}/content`);
    if (!response.ok) throw new Error("Failed to fetch content");
    return response.json();
};

export const fetchArticle = async () => {
    const response = await fetch(`${API_BASE_URL}/article`);
    if (!response.ok) throw new Error("Failed to fetch article");
    return response.json();
};

export const fetchExpandable = async () => {
    const response = await fetch(`${API_BASE_URL}/expandable`);
    if (!response.ok) throw new Error("Failed to fetch expandable data");
    return response.json();
};
