import React, { useState, useEffect } from "react";
import { fetchContent, fetchArticle, fetchExpandable } from "./utils/api";
import InteractiveCard from "./components/InteractiveCard";
import HighlightedTerm from "./components/HighlightedTerm";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";

const App = () => {
  const [contentItems, setContentItems] = useState([]);
  const [article, setArticle] = useState(null);
  const [expandable, setExpandable] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedContent, setSelectedContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [c, a, e] = await Promise.all([
          fetchContent(),
          fetchArticle(),
          fetchExpandable(),
        ]);
        setContentItems(c);
        setArticle(a);
        setExpandable(e);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleCardClick = (item) => {
    setSelectedContent(item);
    setIsModalOpen(true);
  };

  const handleTermClick = (term) => {
    const highlight = article.highlights.find(h => h.term === term);
    if (highlight) {
      setSelectedContent({
        type: 'text',
        title: `শব্দকোষ: ${term}`,
        value: highlight.description
      });
      setIsModalOpen(true);
    }
  };

  const renderArticleContent = (content) => {
    if (!content) return null;
    
    // Split by <span> tags
    const parts = content.split(/(<span>.*?<\/span>)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('<span>') && part.endsWith('</span>')) {
        const term = part.substring(6, part.length - 7);
        return (
          <HighlightedTerm 
            key={index} 
            term={term} 
            onClick={() => handleTermClick(term)} 
          />
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600 font-medium">Loading content...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header with Blue Gradient */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-12 px-4 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">
          Interactive Teaching Platform
        </h1>
        <p className="text-lg opacity-90 text-gray-200">
          Click on highlighted terms to explore multimedia content
        </p>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-2rem]">
        {/* Left and Middle Column - Article and Content */}
        <div className="md:col-span-2 space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">
              Multimedia Content Examples
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {contentItems.map((item) => (
                <InteractiveCard
                  key={item.id}
                  type={item.type}
                  title={item.title}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">
              News Article with Interactive Elements
            </h2>
            <div className="prose max-w-none text-gray-800 leading-relaxed bg-blue-50/30 p-6 rounded-lg border border-blue-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {article?.title}
              </h3>
              <div className="text-lg text-gray-700 leading-loose">
                {renderArticleContent(article?.content)}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Expandable Content */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">
            Expandable Content
          </h2>
          <div className="space-y-1">
            {expandable &&
              Object.entries(expandable).map(([key, item]) => (
                <Accordion 
                  key={key}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === key}
                  onToggle={() => toggleAccordion(key)}
                />
              ))}
          </div>
        </div>
      </main>

      {/* Modal System */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={selectedContent}
      />
    </div>
  );
};

export default App;
