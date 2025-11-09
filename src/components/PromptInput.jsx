import React, { useState } from 'react';

const categories = [
  { key: 'fun', en: 'Fun', id: 'Seru' },
  { key: 'adventure', en: 'Adventure', id: 'Petualangan' },
  { key: 'fantasy', en: 'Fantasy', id: 'Fantasi' },
  { key: 'realistic', en: 'Realistic', id: 'Realistis' },
  { key: 'cinematic', en: 'Cinematic', id: 'Sinematik' },
  { key: 'anime', en: 'Anime', id: 'Anime' },
];

const PromptInput = ({ lang, t, onGenerate }) => {
  const [idea, setIdea] = useState('');
  const [category, setCategory] = useState('cinematic');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    onGenerate({ idea: idea.trim(), category });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('ideaLabel')}
          </label>
          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder={t('ideaPlaceholder')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('categoryLabel')}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {categories.map((c) => (
                <option key={c.key} value={c.key}>
                  {lang === 'en' ? c.en : c.id}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-colors"
            >
              {t('generatePrompt')}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PromptInput;
