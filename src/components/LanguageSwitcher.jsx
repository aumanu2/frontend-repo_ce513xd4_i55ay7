import React from 'react';

const LanguageSwitcher = ({ lang, onChange }) => {
  return (
    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white/40 shadow-sm rounded-full px-2 py-1">
      <button
        aria-label="Switch to English"
        onClick={() => onChange('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          lang === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        aria-label="Switch to Indonesian"
        onClick={() => onChange('id')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          lang === 'id'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        ID
      </button>
    </div>
  );
};

export default LanguageSwitcher;
