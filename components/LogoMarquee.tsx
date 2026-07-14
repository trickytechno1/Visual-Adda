'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Cpu, Zap, Activity, CircleDot, PlayCircle, Layers } from 'lucide-react';

const CLIENTS = [
  'GOOGLE',
  'META',
  'ADOBE',
  'STRIPE',
  'NETFLIX',
  'NVIDIA',
  'EPIC GAMES',
  'AUTODESK',
];

export default function LogoMarquee() {
  return (
    <section className="py-16 bg-black/60 relative overflow-hidden select-none border-y border-white/5">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block mb-2">
            TRUSTED BY THE BEST
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight uppercase">
            Global Creative Partnerships
          </h2>
        </div>
        <p className="font-sans text-xs text-gray-500 max-w-xs font-light">
          Co-creating immersive visual products for world-leading brands and entertainment entities.
        </p>
      </div>

      {/* Marquee Track 1: Leftward Scrolling */}
      <div className="relative flex overflow-hidden py-4 border-t border-white/5 bg-dark-bg/20">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16 min-w-full">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div key={i} className="flex items-center gap-4 text-white/40 hover:text-white transition-colors cursor-default">
              <span className="font-display font-black text-4xl md:text-5xl tracking-widest uppercase">
                {client}
              </span>
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Track 2: Rightward Scrolling */}
      <div className="relative flex overflow-hidden py-4 border-t border-white/5 bg-dark-bg/40">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-16 pr-16 min-w-full">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div key={i} className="flex items-center gap-4 text-white/20 hover:text-white transition-colors cursor-default">
              <span className="font-display font-light text-3xl md:text-4xl tracking-widest uppercase">
                {client}
              </span>
              <CircleDot className="w-4 h-4 text-brand-purple" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
