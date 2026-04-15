import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HighlightedTerm = ({ term, onClick }) => {
  return (
    <span 
      onClick={onClick}
      className="inline-flex items-center gap-1 text-red-600 font-bold cursor-pointer hover:bg-red-50 px-1 rounded transition-colors group"
    >
      {term}
      <FaSearch size={12} className="text-red-400 group-hover:text-red-600" />
    </span>
  );
};

export default HighlightedTerm;
