'use client';

import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  iconSize?: number;
}

export default function VisualAddaLogo({
  className = '',
  showText = true,
  iconSize = 40,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dynamic Animated Brand Logo Icon */}
      <motion.div
        className="relative"
        style={{ width: iconSize, height: iconSize }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <filter id="logoGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Stylized custom 'V' and 'A' overlapping vector shape */}
          <motion.path
            d="M 20,20 
               L 42,75 
               C 44,80 50,80 52,75 
               L 58,60 
               L 40,60 
               L 33,45 
               L 64,45 
               L 75,20 
               C 77,15 72,10 67,12 
               L 48,22 
               C 46,23 44,23 42,22 
               L 23,12 
               C 18,10 13,15 15,20 Z"
            fill="url(#logoGrad)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          
          {/* Accent dynamic circular/wave visual segment */}
          <motion.path
            d="M 45,65 
               C 55,75 70,72 78,62 
               C 85,52 83,38 72,32 
               C 68,30 63,30 60,33 
               C 57,36 58,42 62,44 
               C 68,46 72,52 68,58 
               C 65,62 58,63 52,58 Z"
            fill="url(#logoGrad)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </svg>
      </motion.div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col select-none">
          <div className="flex items-baseline leading-none">
            <span className="font-display font-black text-2xl tracking-tight text-white">
              VISUAL
            </span>
            <span className="font-display font-light text-2xl tracking-wider ml-1 brand-gradient-text font-black">
              ADDA
            </span>
          </div>
          <span className="text-[7px] font-mono tracking-[0.3em] text-gray-400 mt-1 uppercase">
            Turning Vision Into Experiences
          </span>
        </div>
      )}
    </div>
  );
}
