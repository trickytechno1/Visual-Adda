'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '@/lib/projectsData';
import { Eye, ArrowUpRight, Sparkles, Film } from 'lucide-react';
import Image from 'next/image';

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['ALL', 'CGI', '3D', 'MOTION', 'BRANDING', 'AI'];

export default function ProjectsGrid({ onSelectProject }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toUpperCase() === selectedCategory);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-black relative border-t border-white/5">
      {/* Decorative Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 text-left">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
              OUR SELECTED PORTFOLIO
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              FEATURED <span className="brand-gradient-text font-black">PROJECTS</span>
            </h2>
          </div>

          {/* Filter Categories Track (Swiss design inspired capsule pills) */}
          <div className="flex flex-wrap gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`py-2 px-4 rounded-full text-xs font-mono tracking-widest uppercase cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-brand-orange border-brand-orange text-white'
                      : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: 'spring', damping: 20 }}
                onClick={() => onSelectProject(project)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent cursor-pointer"
                data-cursor="CASE STUDY"
              >
                {/* Image backdrop container with smooth hover zoom */}
                <div className="absolute inset-0 w-full h-full z-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Cinematic Shadow overlay vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 opacity-90 group-hover:opacity-70 transition-opacity" />
                </div>

                {/* Video Play Overlay Indicator if supported */}
                {project.videoUrl && (
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/70">
                    <Film className="w-4 h-4 text-brand-orange animate-pulse" />
                  </div>
                )}

                {/* Project Details Content Card (Bottom Aligned) */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10 flex flex-col justify-end text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-brand-orange uppercase tracking-wider border border-brand-orange/30 px-2 py-0.5 rounded bg-brand-orange/15 font-bold">
                      {project.category}
                    </span>
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">
                      CLIENT // {project.client}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-300 font-light truncate">
                    {project.subtitle}
                  </p>

                  {/* Micro Interaction Arrow trigger */}
                  <div className="pt-2 flex items-center gap-1 text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Thin bottom brand bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
