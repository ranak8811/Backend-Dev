import React from 'react';
import { FaFileAlt, FaImage, FaVolumeUp, FaVideo, FaYoutube, FaSearch } from 'react-icons/fa';

const InteractiveCard = ({ type, title, onClick }) => {
  const getIcon = () => {
    switch (type) {
      case 'text': return <FaFileAlt />;
      case 'image': return <FaImage />;
      case 'audio': return <FaVolumeUp />;
      case 'video': return <FaVideo />;
      case 'youtube': return <FaYoutube className="text-red-600" />;
      default: return <FaSearch />;
    }
  };

  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all group active:scale-95"
    >
      <span className="text-blue-600 group-hover:scale-110 transition-transform text-xl">
        {getIcon()}
      </span>
      <span className="font-medium text-gray-700">{title}</span>
      <FaSearch size={14} className="ml-auto text-gray-400 group-hover:text-blue-400" />
    </button>
  );
};

export default InteractiveCard;
