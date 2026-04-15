import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">{content.title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {content.type === 'text' && (
            <div className="text-gray-700 leading-relaxed text-lg">
              {content.value}
            </div>
          )}

          {content.type === 'image' && (
            <div className="flex justify-center">
              <img 
                src={content.value} 
                alt={content.title} 
                className="rounded-lg max-w-full h-auto shadow-md"
              />
            </div>
          )}

          {content.type === 'audio' && (
            <div className="flex flex-col items-center py-8">
              <div className="bg-blue-50 p-6 rounded-full mb-6">
                <img src="/icons.svg#audio" className="w-12 h-12" alt="" />
              </div>
              <audio controls className="w-full max-w-md">
                <source src={content.value} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {content.type === 'video' && (
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-lg">
              <video controls className="w-full h-full">
                <source src={content.value} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          )}

          {content.type === 'youtube' && (
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={content.value}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
