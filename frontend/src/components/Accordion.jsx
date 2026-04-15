import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Accordion = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3 shadow-sm">
      <button 
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 transition-colors ${
          isOpen ? 'bg-indigo-900 text-white' : 'bg-indigo-800 text-white hover:bg-indigo-700'
        }`}
      >
        <span className="font-semibold text-lg">{title}</span>
        <FaChevronDown 
          size={18} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 bg-white text-gray-700 leading-relaxed border-t border-gray-100">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
