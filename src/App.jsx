import React, { useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import LanguageSwitcher from './components/LanguageSwitcher';
import PromptInput from './components/PromptInput';
import PromptResult from './components/PromptResult';
import VideoDisplay from './components/VideoDisplay';

const translations = {
  en: {
    title: 'AI Video Prompt Generator',
    ideaLabel: 'Your short idea',
    ideaPlaceholder: 'e.g., kids playing in the park',
    categoryLabel: 'Category',
    generatePrompt: 'Generate Prompt',
    generatedPromptTitle: 'Generated Prompt',
    generateVideo: 'Generate Video',
    generatingVideo: 'Generating…',
    heroSubtitle: 'Turn a simple idea into a professional video prompt.',
  },
  id: {
    title: 'Generator Prompt Video AI',
    ideaLabel: 'Ide singkat Anda',
    ideaPlaceholder: 'misal: anak-anak bermain di taman',
    categoryLabel: 'Kategori',
    generatePrompt: 'Buat Prompt',
    generatedPromptTitle: 'Prompt yang Dihasilkan',
    generateVideo: 'Buat Video',
    generatingVideo: 'Sedang membuat…',
    heroSubtitle: 'Ubah ide sederhana menjadi prompt video profesional.',
  },
};

const categoryStyles = {
  fun: 'playful, vibrant colors, dynamic pacing',
  adventure: 'epic scope, sweeping camera, bold atmosphere',
  fantasy: 'magical elements, ethereal lighting, imaginative worlds',
  realistic: 'natural lighting, documentary style, authentic textures',
  cinematic: 'film grain, anamorphic bokeh, dramatic lighting, 24fps',
  anime: 'cel-shaded, expressive motion, stylized backgrounds',
};

export default function App() {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => (key) => translations[lang][key] || key, [lang]);

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [videoLoading, setVideoLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const expandIdea = ({ idea, category }) => {
    // Simple local expansion logic; placeholder for backend/AI integration
    const style = categoryStyles[category] || '';
    const prompt = `Create a high-quality video sequence based on: "${idea}". Style: ${style}. Use detailed scene composition, clear subject focus, thoughtful color grading, and cinematic sound design cues. Include establishing, medium, and close-up shots. Emphasize storytelling, atmosphere, and pacing. Output as descriptive text suitable for an AI video generator.`;
    setGeneratedPrompt(prompt);
    setShowVideo(false);
  };

  const handleGenerateVideo = async () => {
    // Placeholder for future AI video API call (e.g., Pika Labs, Runway ML, Emergent AI)
    setVideoLoading(true);
    setShowVideo(true);
    await new Promise((r) => setTimeout(r, 1800));
    setVideoLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900">
      <header className="relative">
        <div className="absolute inset-0 h-[60vh]">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 pt-6 flex justify-end">
            <LanguageSwitcher lang={lang} onChange={setLang} />
          </div>

          <div className="max-w-6xl mx-auto px-4 pt-10 pb-16">
            <div className="text-center">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                {t('title')}
              </h1>
              <p className="mt-3 text-gray-600">
                {t('heroSubtitle')}
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />
      </header>

      <main className="relative z-10 -mt-24 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <PromptInput lang={lang} t={t} onGenerate={expandIdea} />

          <PromptResult
            prompt={generatedPrompt}
            t={t}
            onGenerateVideo={handleGenerateVideo}
            loadingVideo={videoLoading}
          />

          <VideoDisplay show={showVideo} loading={videoLoading} t={t} />
        </div>
      </main>

      <footer className="text-center text-xs text-gray-500 pb-8">
        <p>
          Built for the theme “AI Video Prompt Generator”. This UI uses smooth transitions and is ready for API integration.
        </p>
      </footer>
    </div>
  );
}
