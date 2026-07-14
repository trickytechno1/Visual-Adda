'use client';

import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HeroVideoBackground() {
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // YouTube Video ID
  const videoId = 'vQDgWrLdn4I';

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
      {/* Dark Cinematic Vignette & Ambient Glow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 via-transparent to-dark-bg/90 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" /> {/* Cinematic tint */}

      {/* Embedded YouTube Player */}
      <div className="absolute inset-0 w-full h-full pointer-events-none scale-105 md:scale-110 lg:scale-115">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${videoId}&playsinline=1&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
          title="Visual Adda Showreel Background"
          className="w-full h-full object-cover scale-[1.35]"
          allow="autoplay; encrypted-media"
          onLoad={() => setVideoLoaded(true)}
          style={{ border: 'none', pointerEvents: 'none' }}
        />
      </div>

      {/* Fallback & Loading Visual Cover */}
      <AnimatePresence>
        {!videoLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-dark-bg flex items-center justify-center z-20"
          >
            {/* Elegant luxury loading spinner or visual placeholder */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-t-2 border-brand-orange animate-spin" />
                <div className="absolute inset-2 rounded-full border-b-2 border-brand-purple animate-spin-slow" />
              </div>
              <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-gray-500 animate-pulse">
                Buffering Cinematic Reel...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio controls for immersive award-winning interactive experience */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMuted(!isMuted)}
          className="w-10 h-10 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer interactive-hover"
          data-cursor={isMuted ? 'UNMUTE REEL' : 'MUTE REEL'}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-brand-orange" />
          ) : (
            <Volume2 className="w-4 h-4 text-brand-yellow animate-pulse" />
          )}
        </motion.button>

        {/* Cinematic mode visual feedback */}
        <div className="hidden md:flex items-center gap-2 bg-black/40 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-gray-400">
          <Eye className="w-3.5 h-3.5 text-brand-purple" />
          <span>4K REEL ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
