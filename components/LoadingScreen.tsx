'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import VisualAddaLogo from './VisualAddaLogo';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Fast but incremental cinematic loader simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600); // Allow fadeout animation to complete
          }, 800);
          return 100;
        }
        // Organic acceleration/deceleration
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-between p-12 select-none"
        >
          {/* Top HUD text */}
          <div className="w-full flex justify-between items-center text-gray-500 font-mono text-[9px] tracking-[0.3em] uppercase">
            <span>VISUAL ADDA CORE // ENGINE LOAD</span>
            <span>EST. NODE // 2026 v3.1</span>
          </div>

          {/* Core Animated Brand Logo */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <VisualAddaLogo showText={true} iconSize={60} />
            </motion.div>
            
            {/* Cinematic Slogan reveal */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-sans text-[11px] tracking-[0.4em] uppercase text-gray-300 font-light text-center"
            >
              Creating Experiences. Delivering Impact.
            </motion.p>
          </div>

          {/* Bottom loading progress and bars */}
          <div className="w-full max-w-lg space-y-4">
            <div className="flex justify-between items-end">
              <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">
                {progress < 100 ? 'INITIALIZING SPATIAL BUFFERS' : 'SYSTEM ONLINE'}
              </span>
              <span className="font-display font-black text-4xl text-white tracking-tighter">
                {progress}%
              </span>
            </div>

            {/* Premium Dual Segment progress indicator bar */}
            <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="flex justify-between text-gray-600 font-mono text-[8px] tracking-widest uppercase">
              <span>CGI // walk-throughs // 3D CONTENT</span>
              <span>STABLE // 60FPS</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
