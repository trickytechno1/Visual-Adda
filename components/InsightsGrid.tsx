'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, User, BookOpen } from 'lucide-react';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'The Future of Realtime CGI Walkthroughs in Luxury Real Estate',
    category: 'CGI & SPATIAL',
    date: 'July 12, 2026',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/seed/insight1/600/400',
  },
  {
    id: 'art-2',
    title: 'Dopamine Pacing: Designing Motion Graphics for High Engagement',
    category: 'MOTION DESIGN',
    date: 'June 28, 2026',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/seed/insight2/600/400',
  },
  {
    id: 'art-3',
    title: 'Combining WebGL with Next.js App Router for Flawless 60fps Sites',
    category: 'DEVELOPMENT',
    date: 'May 15, 2026',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/seed/insight3/600/400',
  },
];

export default function InsightsGrid() {
  return (
    <section id="insights" className="py-24 px-6 md:px-12 bg-black/40 relative border-t border-white/5">
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 text-left">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
              STUDIO INTELLIGENCE
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              LATEST <span className="brand-gradient-text font-black">INSIGHTS</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-400 max-w-sm font-light leading-relaxed">
            Written reviews, strategic guides, and technical walkthroughs published directly by our lead digital architects.
          </p>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {ARTICLES.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between bg-[#0d0d11]/40 border border-white/5 rounded-xl overflow-hidden relative"
              data-cursor="READ ARTICLE"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={art.imageUrl}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Category pill indicator */}
                <span className="absolute top-4 left-4 font-mono text-[8px] text-brand-orange uppercase tracking-wider bg-black/80 border border-white/10 px-2 py-1 rounded">
                  {art.category}
                </span>
              </div>

              {/* Content Detail */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-gray-500 font-mono text-[10px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-brand-orange transition-colors leading-snug">
                    {art.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-white transition-colors cursor-pointer">
                  <span>EXPAND PUBLICATION</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Top gradient highlight strip */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
