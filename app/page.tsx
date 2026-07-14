'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Play, Sparkles, MoveRight, Layers, Film, Compass, ChevronRight } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import LoadingScreen from '@/components/LoadingScreen';
import LogoMarquee from '@/components/LogoMarquee';
import ProjectsGrid from '@/components/ProjectsGrid';
import CaseStudyModal from '@/components/CaseStudyModal';
import AboutStudio from '@/components/AboutStudio';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessTimeline from '@/components/ProcessTimeline';
import AwardsTrophies from '@/components/AwardsTrophies';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import InsightsGrid from '@/components/InsightsGrid';

import { Project } from '@/lib/projectsData';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Quick navigate between projects inside the Case Study viewer
  const handleNavigateProject = (projectId: string) => {
    import('@/lib/projectsData').then(({ PROJECTS }) => {
      const found = PROJECTS.find((p) => p.id === projectId);
      if (found) {
        setSelectedProject(found);
      }
    });
  };

  return (
    <>
      {/* 1. Global Custom Animated Cursor */}
      <CustomCursor />

      {/* 2. Premium Loading Preloader */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen bg-dark-bg text-white overflow-hidden selection:bg-brand-orange"
          >
            {/* Header Navigation */}
            <Header />

            {/* ======================================== */}
            {/* 3. FULLSCREEN HERO SECTION               */}
            {/* ======================================== */}
            <section className="relative h-screen w-full flex items-center justify-center px-6 md:px-12 select-none overflow-hidden">
              {/* Loop Video Frame */}
              <HeroVideoBackground />

              {/* Ambient Glows from High Density Theme */}
              <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-pink/10 blur-[100px] pointer-events-none" />

              {/* Foreground Hero Content Card (Awwwards Display Typography) */}
              <div className="relative z-20 text-center max-w-6xl mx-auto space-y-8 mt-12">
                
                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                  <a
                    href="#contact"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-orange text-white font-mono text-xs uppercase tracking-widest font-bold hover:shadow-lg hover:shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 cursor-pointer interactive-hover"
                    data-cursor="INQUIRE NOW"
                  >
                    <span>Start Your Project</span>
                    <MoveRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#work"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-white/15 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer interactive-hover"
                    data-cursor="PORTFOLIO"
                  >
                    <span>View Work</span>
                    <ArrowDown className="w-4 h-4 text-brand-orange" />
                  </a>
                </motion.div>
              </div>

              {/* Scroll down animated mouse helper badge (Bottom Aligned) */}
              <div className="absolute bottom-10 left-10 z-20 hidden md:flex items-center gap-3">
                <div className="h-10 w-6 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-1.5 h-1.5 bg-brand-orange rounded-full"
                  />
                </div>
                <span className="font-mono text-[9px] tracking-[0.3em] text-gray-500 uppercase">
                  SCROLL TO EXPLORE
                </span>
              </div>

              {/* Right-aligned Navigation Rail & Dot indicators (High Density HUD) */}
              <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 items-center z-20">
                <div className="font-mono text-[9px] tracking-[0.25em] text-white/40 uppercase [writing-mode:vertical-rl] rotate-180">
                  SCROLL TO EXPLORE
                </div>
                <div className="w-[1px] h-20 bg-gradient-to-b from-brand-purple/60 via-brand-pink/60 to-transparent" />
                <div className="flex flex-col gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Floating Glass Status Widget (High Density HUD) */}
              <div className="absolute right-6 md:right-12 bottom-12 z-20 hidden lg:block w-72 glass p-5 rounded-2xl electric-glow backdrop-blur-xl text-left border border-white/10">
                <div className="text-[9px] font-mono uppercase tracking-widest text-brand-orange mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                  Featured Release
                </div>
                <div className="aspect-video bg-neutral-900 rounded-lg mb-3 overflow-hidden relative border border-white/5">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-70"
                  >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-electronic-circuit-board-close-up-1579-large.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-2 left-2 font-mono text-[9px] font-bold tracking-widest text-white uppercase bg-black/60 px-1.5 py-0.5 rounded">
                    AETHER // 2026
                  </div>
                </div>
                <p className="font-sans text-[11px] font-light leading-relaxed text-gray-300">
                  Immersive WebGL design and cinema 3D pipeline walkthrough for futuristic architectures.
                </p>
              </div>
            </section>

            {/* ======================================== */}
            {/* 4. LOGO MARQUEE / PARTNERSHIPS           */}
            {/* ======================================== */}
            <LogoMarquee />

            {/* ======================================== */}
            {/* 5. ABOUT STUDIO & 4 PILLARS              */}
            {/* ======================================== */}
            <AboutStudio />

            {/* ======================================== */}
            {/* 6. PROJECTS INTERACTIVE SHIFT GRID        */}
            {/* ======================================== */}
            <ProjectsGrid onSelectProject={(p) => setSelectedProject(p)} />

            {/* ======================================== */}
            {/* 7. SERVICES GRID COMPONENT               */}
            {/* ======================================== */}
            <ServicesGrid />

            {/* ======================================== */}
            {/* 8. WHY CHOOSE US MATRIX                  */}
            {/* ======================================== */}
            <WhyChooseUs />

            {/* ======================================== */}
            {/* 9. AWARDS & ACCREDITATIONS               */}
            {/* ======================================== */}
            <AwardsTrophies />

            {/* ======================================== */}
            {/* 10. TESTIMONIALS SECTION                 */}
            {/* ======================================== */}
            <Testimonials />

            {/* ======================================== */}
            {/* 11. METHODOLOGY & PROCESS TIMELINE       */}
            {/* ======================================== */}
            <ProcessTimeline />

            {/* ======================================== */}
            {/* 12. INSIGHTS / BLOG JOURNAL              */}
            {/* ======================================== */}
            <InsightsGrid />

            {/* ======================================== */}
            {/* 13. COLLABORATION INQUIRY FORM           */}
            {/* ======================================== */}
            <ContactForm />

            {/* Dynamic Footing elements */}
            <Footer />

            {/* Immersive Case Study full-screen portal modal */}
            <AnimatePresence>
              {selectedProject && (
                <CaseStudyModal
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                  onNavigateToProject={handleNavigateProject}
                />
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
