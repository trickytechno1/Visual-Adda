'use client';

import React from 'react';
import { ArrowUp, Mail, Send, Linkedin, Github, Compass, Sparkles } from 'lucide-react';
import VisualAddaLogo from './VisualAddaLogo';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 relative overflow-hidden select-none py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Massive callout display block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 text-left space-y-6">
            <VisualAddaLogo showText={true} iconSize={40} />
            
            <p className="font-sans text-xl md:text-2xl text-gray-400 font-light max-w-md leading-relaxed">
              We design cinematic visual pipelines and high-performance interfaces that make your target audience believe.
            </p>
          </div>

          {/* Quick links and newsletter */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {/* Quick Links column */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                EXPLORE PORTAL
              </span>
              <ul className="space-y-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                <li><a href="#work" className="hover:text-brand-orange transition-colors">Portfolios</a></li>
                <li><a href="#studio" className="hover:text-brand-orange transition-colors">Manifesto</a></li>
                <li><a href="#services" className="hover:text-brand-orange transition-colors">Offerings</a></li>
                <li><a href="#process" className="hover:text-brand-orange transition-colors">Methodology</a></li>
                <li><a href="#awards" className="hover:text-brand-orange transition-colors">Trophy Room</a></li>
              </ul>
            </div>

            {/* Newsletter Subscription column */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                NEWSLETTER INSIGHTS
              </span>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                Join 14,000+ brand owners reading our bi-weekly spatial CGI and modern design summaries.
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  className="bg-white/[0.03] border border-white/10 rounded px-3 py-2 text-xs font-light text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange flex-1"
                />
                <button
                  type="submit"
                  className="px-3 bg-brand-orange text-white rounded hover:bg-brand-orange/90 transition-all flex items-center justify-center cursor-pointer interactive-hover"
                  data-cursor="SUB"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Large Brand Watermark */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-mono text-[9px] text-gray-500 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} VISUAL ADDA STUDIO. ALL RIGHTS RESERVED.
          </span>

          {/* Social icons */}
          <div className="flex gap-6 font-mono text-[10px] text-gray-500">
            <a href="#" className="hover:text-brand-orange uppercase tracking-widest">Twitter</a>
            <a href="#" className="hover:text-brand-orange uppercase tracking-widest">Instagram</a>
            <a href="#" className="hover:text-brand-orange uppercase tracking-widest">Vimeo</a>
            <a href="#" className="hover:text-brand-orange uppercase tracking-widest">Behance</a>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer interactive-hover"
            data-cursor="SCROLL UP"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
