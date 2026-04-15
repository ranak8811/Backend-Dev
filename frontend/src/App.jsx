import React, { useState, useEffect } from "react";
import { fetchContent, fetchArticle, fetchExpandable } from "./api";
import { FaFileAlt, FaImage, FaVolumeUp, FaVideo, FaYoutube, FaChevronDown, FaSearch } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";

const App = () => {
  const [contentItems, setContentItems] = useState([]);
  const [article, setArticle] = useState(null);
  const [expandable, setExpandable] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [c, a, e] = await Promise.all([
          fetchContent(),
          fetchArticle(),
          fetchExpandable()
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

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header with Blue Gradient */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-12 px-4 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Interactive Teaching Platform</h1>
        <p className="text-lg opacity-90 text-gray-200">Click on highlighted terms to explore multimedia content</p>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-2rem]">
        {/* Left and Middle Column - Article and Content */}
        <div className="md:col-span-2 space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">Multimedia Content Examples</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {contentItems.map((item) => (
                <button key={item.id} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
                  <span className="text-blue-600 group-hover:scale-110 transition-transform text-xl">
                    {item.type === 'text' && <FaFileAlt />}
                    {item.type === 'image' && <FaImage />}
                    {item.type === 'audio' && <FaVolumeUp />}
                    {item.type === 'video' && <FaVideo />}
                    {item.type === 'youtube' && <FaYoutube className="text-red-600" />}
                  </span>
                  <span className="font-medium text-gray-700">{item.title}</span>
                  <FaSearch size={14} className="ml-auto text-gray-400" />
                </button>
              ))}
            </div>
          </section>

          <section>
             <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">News Article with Interactive Elements</h2>
             <div className="prose max-w-none text-gray-800 leading-relaxed">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{article?.title}</h3>
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article?.content }} 
                />
             </div>
          </section>
        </div>

        {/* Right Column - Expandable Content */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">Expandable Content</h2>
          <div className="space-y-3">
            {expandable && Object.entries(expandable).map(([key, item]) => (
              <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full flex items-center justify-between p-4 bg-indigo-900 text-white hover:bg-indigo-800 transition-colors">
                  <span className="font-medium">{item.title}</span>
                  <FaChevronDown size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        .article-content span {
          color: #dc2626;
          font-weight: 600;
          cursor: pointer;
          border-bottom: 1px dashed #dc2626;
        }
        .article-content span:hover {
          background-color: #fee2e2;
        }
      `}</style>
    </div>
  );
};

export default App;
