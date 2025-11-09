import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PromptResult = ({ prompt, t, onGenerateVideo, loadingVideo }) => {
  return (
    <AnimatePresence>
      {prompt && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-3xl mx-auto mt-6"
        >
          <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">{t('generatedPromptTitle')}</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{prompt}</p>
            <div className="pt-2">
              <button
                onClick={onGenerateVideo}
                disabled={loadingVideo}
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white shadow-md transition-colors ${
                  loadingVideo ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {loadingVideo ? t('generatingVideo') : t('generateVideo')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromptResult;
