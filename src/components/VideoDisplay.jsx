import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoDisplay = ({ show, loading, t }) => {
  const videoUrl = 'https://player.vimeo.com/external/449973587.sd.mp4?s=0e1b2a4b19f2b7e0c0a3c1ab7d7e2c3b3b9d6a88&profile_id=165&oauth2_token_id=57447761';

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-4xl mx-auto mt-6"
        >
          <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-6">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
              </div>
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                <video src={videoUrl} controls className="w-full h-full" />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoDisplay;
