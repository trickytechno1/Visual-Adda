'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Globe, Layers, Phone, Compass, MessageSquare, Sun, Moon } from 'lucide-react';
import VisualAddaLogo from './VisualAddaLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
      if (savedTheme) return savedTheme;
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Apply current theme to html root
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const navItems = [
    { label: 'WORK', href: '#work', desc: 'Case studies & spatial assets' },
    { label: 'STUDIO', href: '#studio', desc: 'Philosophy & verified stats' },
    { label: 'SERVICES', href: '#services', desc: 'CGI, 3D, Walkthrough & Motion' },
    { label: 'PROCESS', href: '#process', desc: 'Discovery through Launch' },
    { label: 'AWARDS', href: '#awards', desc: 'Awwwards, CSSDA, FWA' },
    { label: 'INSIGHTS', href: '#insights', desc: 'Strategic guides & briefs' },
    { label: 'CONTACT', href: '#contact', desc: 'Instant briefs & Calendly' },
  ];

  return (
    <>
      {/* Sticky Header Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo Link */}
          <a href="#" className="outline-none" aria-label="Visual Adda Home">
            <VisualAddaLogo showText={true} iconSize={35} />
          </a>

          {/* Desktop inline Menu (Minimalistic Swiss Style) */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em] text-gray-400 font-bold">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="hover:text-brand-orange transition-colors duration-300 relative group uppercase"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile trigger block */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors focus:outline-none interactive-hover"
              aria-label="Toggle Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              data-cursor={theme === 'dark' ? 'LIGHT' : 'DARK'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-brand-orange" />
              ) : (
                <Moon className="w-4 h-4 text-brand-purple" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 py-2 px-4 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-white font-mono text-[10px] tracking-widest font-bold uppercase hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 interactive-hover"
              data-cursor="INQUIRE NOW"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Hamburger Trigger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors focus:outline-none interactive-hover"
              data-cursor="PORTAL"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isOpen ? <X className="w-4 h-4 text-brand-orange" /> : <Menu className="w-4 h-4 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Immersive Interactive Mega Menu Portal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-30 bg-black overflow-y-auto"
          >
            {/* Background Interactive Cyber Grid & Blur Blobs */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
            <div className="absolute top-10 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="min-h-screen w-full flex flex-col justify-between p-8 md:p-16 lg:p-24 relative z-10 pt-32">
              
              {/* Menu Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* Left Side: Massive Navigation Items */}
                <div className="lg:col-span-8 space-y-4 text-left">
                  <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block mb-4">
                    STUDIO GATEWAY
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b border-white/5 pb-4"
                      >
                        <span className="font-display font-black text-white/20 text-xl md:text-2xl group-hover:text-brand-orange transition-colors">
                          {('0' + (index + 1)).slice(-2)}
                        </span>
                        
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="font-display font-black text-4xl md:text-6xl text-white hover:text-brand-orange transition-colors tracking-tighter"
                        >
                          {item.label}
                        </a>

                        <span className="font-sans text-xs text-gray-500 font-light md:ml-auto group-hover:text-gray-300 transition-colors uppercase">
                          {item.desc}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Curated Highlights */}
                <div className="lg:col-span-4 space-y-8 text-left">
                  
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
                    <span className="font-mono text-[9px] text-brand-orange uppercase tracking-widest font-bold block">
                      CREATING EXPERIENCES // DELIVERING IMPACT
                    </span>
                    <h4 className="font-display font-bold text-lg uppercase text-white">
                      ONE STUDIO. ENDLESS POSSIBILITIES.
                    </h4>
                    <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                      Transforming raw blueprints and abstract copy-writing ideas into cinematic spatial models and high-conversion web networks.
                    </p>
                  </div>

                  {/* Quick coordinates */}
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">COORDINATES</span>
                    <div className="space-y-1 text-xs text-gray-400 font-light">
                      <p>Creative Suite 404, Innovation Park</p>
                      <p>hello@visualadda.com</p>
                      <p>+1 (800) 555-848</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom bar of Mega Menu */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-12 border-t border-white/5 gap-4">
                <span className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                  © {new Date().getFullYear()} VISUAL ADDA STUDIO. ALL RIGHTS RESERVED.
                </span>
                
                <div className="flex gap-4 text-gray-500 font-mono text-[10px]">
                  <a href="#" className="hover:text-brand-orange uppercase tracking-wider">TWITTER</a>
                  <a href="#" className="hover:text-brand-orange uppercase tracking-wider">INSTAGRAM</a>
                  <a href="#" className="hover:text-brand-orange uppercase tracking-wider">VIMEO</a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
