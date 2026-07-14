'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ExternalLink, Sparkles, MoveRight, HelpCircle, Eye, ShieldCheck, Zap } from 'lucide-react';
import { Project, PROJECTS } from '@/lib/projectsData';
import Image from 'next/image';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateToProject: (projectId: string) => void;
}

export default function CaseStudyModal({
  project,
  onClose,
  onNavigateToProject,
}: CaseStudyModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Force scroll to top when project changes
  useEffect(() => {
    if (project && containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project]);

  // Lock body scroll when case study is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  // Find next project for the "Next Project" CTA
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black flex justify-end">
      {/* Immersive Cinematic Curtain Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Floating Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.3 }}
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white cursor-pointer interactive-hover"
        data-cursor="CLOSE"
        aria-label="Close Case Study"
      >
        <X className="w-5 h-5" />
      </motion.button>

      {/* Primary Scrollable Core Container */}
      <motion.div
        ref={containerRef}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 180 }}
        className="relative w-full lg:w-[85vw] h-full overflow-y-auto bg-dark-bg text-white z-40 select-text scrollbar-thin border-l border-white/5"
      >
        {/* ======================================== */}
        {/* 1. HERO SECTION                          */}
        {/* ======================================== */}
        <section className="relative h-[65vh] md:h-[80vh] w-full flex items-end p-8 md:p-16 lg:p-24 overflow-hidden">
          {/* Background image with parallax scale effect */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover opacity-60 scale-105"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Elegant Cinematic Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-mono tracking-widest mb-6 uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>{project.caseStudy.heroTag}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-none mb-6 text-gradient"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mb-8 font-light"
            >
              {project.subtitle}
            </motion.p>

            {/* Quick Metadata Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/10 text-left"
            >
              <div>
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-1">CLIENT</span>
                <span className="font-sans text-sm font-medium text-white">{project.client}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-1">CATEGORY</span>
                <span className="font-sans text-sm font-medium text-brand-orange">{project.category}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-1">YEAR</span>
                <span className="font-sans text-sm font-medium text-white">{project.year}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-1">DURATION</span>
                <span className="font-sans text-sm font-medium text-white">8 Weeks</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}
        {/* INTRODUCTION & PHILOSOPHY                */}
        {/* ======================================== */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-dark-bg">
          <div className="max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white uppercase mb-4">
                  The Brief
                </h2>
                <div className="w-12 h-1 bg-brand-orange mb-4" />
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                  CINEMATIC INTENSITY &amp; LUXURY EXPERIENCE
                </p>
              </div>
              <div className="lg:col-span-2">
                <p className="font-sans text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                  &ldquo;{project.caseStudy.description}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 2. PROBLEM & RESEARCH                    */}
        {/* ======================================== */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-black border-y border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-mono text-xs font-bold border border-brand-orange/20">
                  !
                </span>
                <h3 className="font-display font-semibold text-xl md:text-2xl tracking-tight text-white uppercase">
                  The Core Challenge
                </h3>
              </div>
              <p className="font-sans text-base text-gray-400 leading-relaxed font-light">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-mono text-xs font-bold border border-brand-purple/20">
                  ?
                </span>
                <h3 className="font-display font-semibold text-xl md:text-2xl tracking-tight text-white uppercase">
                  Strategic Discovery &amp; Research
                </h3>
              </div>
              <p className="font-sans text-base text-gray-400 leading-relaxed font-light">
                {project.caseStudy.research}
              </p>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 3. WIREFRAMES & INTERACTION MAP          */}
        {/* ======================================== */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-dark-bg">
          <div className="max-w-5xl">
            <div className="mb-12">
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block mb-2">
                SPATIAL INTERACTION MAP
              </span>
              <h3 className="font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase">
                Wireframes &amp; Blueprint
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 relative aspect-video bg-black/40 rounded-xl border border-white/10 overflow-hidden group">
                {/* Simulated high-tech architectural blueprint sketch layout */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <svg className="w-full h-full text-white/5" viewBox="0 0 100 50">
                    <rect x="10" y="5" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="10" y1="5" x2="90" y2="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="90" y1="5" x2="10" y2="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                    <circle cx="50" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="0" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
                {/* Tech HUD markers */}
                <div className="absolute top-4 left-4 font-mono text-[9px] text-brand-orange tracking-widest uppercase bg-black/80 px-2 py-1 rounded">
                  Viewport: Grid Node Alpha
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[9px] text-gray-500 uppercase">
                  Ref: P-42 // 60FPS STABLE
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                  {project.caseStudy.wireframes}
                </p>
                <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-ping" />
                    <span>User Journey Hotspots Map</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-full" />
                    <span>Cinematic Camera Sightlines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 4. BRAND STRATEGY & VISUAL IDENTITY      */}
        {/* ======================================== */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-black border-t border-white/5">
          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block mb-2">
                ESTABLISHING THE DNA
              </span>
              <h3 className="font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase">
                Brand Strategy
              </h3>
              <p className="font-sans text-lg text-gray-300 font-light mt-4 max-w-3xl leading-relaxed">
                {project.caseStudy.brandStrategy}
              </p>
            </div>

            {/* Visual Identity Section */}
            <div className="pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Color Swatches Grid */}
              <div className="space-y-6">
                <h4 className="font-display font-bold text-xl uppercase tracking-tight text-white">
                  Color Archetypes
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.caseStudy.visualIdentity.colors.map((color, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-lg bg-dark-bg border border-white/5 text-left"
                    >
                      <div
                        className="w-full h-12 rounded-md mb-3"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="font-display font-semibold text-xs block truncate text-white">{color.name}</span>
                      <span className="font-mono text-[10px] text-gray-500 block">{color.hex}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-6">
                <h4 className="font-display font-bold text-xl uppercase tracking-tight text-white">
                  Typography Pairing
                </h4>
                <div className="space-y-4">
                  {project.caseStudy.visualIdentity.typography.map((type, i) => (
                    <div key={i} className="p-4 rounded-lg bg-dark-bg border border-white/5 flex justify-between items-center">
                      <div>
                        <span className="font-display font-bold text-lg block text-gradient">{type.title}</span>
                        <span className="text-xs text-gray-400 block mt-1">{type.desc}</span>
                      </div>
                      <span className="font-mono text-[9px] text-brand-orange uppercase border border-brand-orange/30 px-2 py-0.5 rounded bg-brand-orange/15">
                        {i === 0 ? 'Display' : 'Body'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 5. MOTION & DEVELOPMENT                  */}
        {/* ======================================== */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-dark-bg border-b border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block mb-2">
                INTERACTIVE CHOREOGRAPHY
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl lg:text-4xl tracking-tight uppercase">
                Motion Experience
              </h3>
              <p className="font-sans text-base text-gray-400 leading-relaxed font-light">
                {project.caseStudy.motion}
              </p>
              <div className="flex items-center gap-2 text-brand-yellow font-mono text-xs">
                <Zap className="w-4 h-4" />
                <span>60FPS Springs &amp; Smooth Dampening</span>
              </div>
            </div>

            <div className="space-y-6">
              <span className="font-mono text-xs text-brand-purple uppercase tracking-widest block mb-2">
                BESPOKE ENGINEERING
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl lg:text-4xl tracking-tight uppercase">
                Interactive Dev Stack
              </h3>
              <p className="font-sans text-base text-gray-400 leading-relaxed font-light">
                {project.caseStudy.development}
              </p>
              <div className="flex items-center gap-2 text-brand-purple font-mono text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>React 19 + TypeScript + Next Standalone</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 6. OUTSTANDING RESULTS                   */}
        {/* ======================================== */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-black">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div>
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block mb-2">
                MEASURABLE OUTCOMES
              </span>
              <h3 className="font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-gradient">
                Campaign Deliverable Results
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              {project.caseStudy.results.map((res, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="p-8 rounded-xl bg-dark-bg border border-white/5 space-y-4 text-center hover:border-brand-orange/30 transition-colors"
                >
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block">
                    {res.label}
                  </span>
                  <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white brand-gradient-text">
                    {res.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 7. GALLERY                               */}
        {/* ======================================== */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-dark-bg border-t border-white/5">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <span className="font-mono text-xs text-brand-purple uppercase tracking-widest block mb-2">
                CINEMATIC CAPTURES
              </span>
              <h3 className="font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase">
                Project Showcase Gallery
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.caseStudy.galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video sm:aspect-square bg-black rounded-lg overflow-hidden border border-white/5 group cursor-zoom-in"
                >
                  <Image
                    src={img}
                    alt={`Gallery ${i}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* 8. NEXT PROJECT TRANSITION CTA           */}
        {/* ======================================== */}
        <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center p-8 text-center overflow-hidden bg-black border-t border-white/10 group">
          <div className="absolute inset-0 z-0">
            <Image
              src={nextProject.imageUrl}
              alt={nextProject.title}
              fill
              className="object-cover opacity-20 scale-105 group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
              NEXT EXPERIENCE
            </span>
            <button
              onClick={() => onNavigateToProject(nextProject.id)}
              className="font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white hover:text-brand-orange transition-colors cursor-pointer block w-full outline-none"
            >
              {nextProject.title}
              <MoveRight className="inline-block ml-4 w-10 h-10 text-brand-orange group-hover:translate-x-3 transition-transform" />
            </button>
            <span className="font-sans text-sm text-gray-500 block uppercase tracking-widest">
              {nextProject.category} | Click to load case study
            </span>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
