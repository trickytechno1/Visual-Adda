'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Target, Film, Rocket, ShieldCheck, Compass, Sparkles } from 'lucide-react';

interface PhilPoint {
  title: string;
  sub: string;
  icon: React.ElementType;
  desc: string;
}

const PHIL_POINTS: PhilPoint[] = [
  {
    title: 'CREATIVE MINDS',
    sub: 'Fostering uninhibited aesthetic vision.',
    icon: Lightbulb,
    desc: 'We explore non-traditional design grids and fluid visual directions to separate your brand from the copy-paste noise of mainstream digital markets.'
  },
  {
    title: 'STRATEGIC THINKING',
    sub: 'Engineering results with commercial resonance.',
    icon: Target,
    desc: 'Aesthetic masterwork has no value if it fails to convert. We construct targeted communication journeys backed by strict user behavior modeling.'
  },
  {
    title: 'FLAWLESS EXECUTION',
    sub: '60fps micro-engineered cinematic assets.',
    icon: Film,
    desc: 'From custom-rendered 8K CGI assets to highly optimized Next.js standalone server bundles, we guarantee responsive performance with absolute zero lag.'
  },
  {
    title: 'IMPACTFUL RESULTS',
    sub: 'Building enterprise value and audience loyalty.',
    icon: Rocket,
    desc: 'Our projects average a +142% engagement lift, driving real pre-orders, securing funding rounds, and building lasting emotional resonance.'
  }
];

export default function AboutStudio() {
  return (
    <section id="studio" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Editorial Layout: Big Bold Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 text-left">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block mb-4">
              STUDIO PHILOSOPHY &amp; MANIFESTO
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase text-white leading-tight">
              WE BRING <br />
              <span className="brand-gradient-text font-black">IDEAS</span> TO LIFE.
            </h2>
            <p className="font-mono text-[9px] text-gray-500 uppercase tracking-[0.4em] mt-4 block">
              TURNING VISION INTO EXPERIENCES // EST. 2026
            </p>
          </div>
          
          <div className="lg:col-span-7 text-left space-y-6">
            <p className="font-sans text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Visual Adda is a bespoke premium creative experience studio bridging artistic cinematography with modern digital performance. We design experiences that people remember.
            </p>
            <p className="font-sans text-sm md:text-base text-gray-500 font-light leading-relaxed">
              Through visual storytelling, high-end CGI, 3D content, walkthroughs, and cutting-edge web development, we construct immersive visual pipelines. Our workflow eliminates typical friction, creating flawless cinematic masterworks that capture hearts and command higher enterprise valuations.
            </p>
          </div>
        </div>

        {/* Four pillars extracted directly from the attached image */}
        <div className="pt-12 border-t border-white/10">
          <div className="mb-12 text-left">
            <span className="font-mono text-xs text-brand-purple uppercase tracking-widest block mb-2">
              CORE PRINCIPLES
            </span>
            <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-white">
              The Four Pillars of Visual Adda
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHIL_POINTS.map((pt, i) => {
              const PillarIcon = pt.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent hover:border-brand-orange/30 transition-all duration-300 text-left space-y-4"
                >
                  {/* Glowing Icon Container */}
                  <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-brand-orange">
                    <PillarIcon className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-black text-sm uppercase tracking-wider text-white">
                      {pt.title}
                    </h4>
                    <span className="font-sans text-xs font-semibold text-brand-orange block">
                      {pt.sub}
                    </span>
                    <p className="font-sans text-xs text-gray-400 font-light leading-relaxed pt-2 border-t border-white/5">
                      {pt.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Animated Statistics Underneath */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10 text-left">
          <div className="space-y-1">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">COMPLETED PROJECTS</span>
            <div className="font-display font-black text-4xl md:text-5xl text-white">350+</div>
            <p className="font-sans text-[11px] text-gray-400 font-light">Cinematic visual assets delivered</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">CLIENT ENGAGEMENT</span>
            <div className="font-display font-black text-4xl md:text-5xl brand-gradient-text">+142%</div>
            <p className="font-sans text-[11px] text-gray-400 font-light">Average customer conversion lift</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">STABLE FRAMERATE</span>
            <div className="font-display font-black text-4xl md:text-5xl text-white">60FPS</div>
            <p className="font-sans text-[11px] text-gray-400 font-light">Optimized real-time graphics pipelines</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">EXPERIENCE</span>
            <div className="font-display font-black text-4xl md:text-5xl text-white">10+ YRS</div>
            <p className="font-sans text-[11px] text-gray-400 font-light">Refining high-fidelity art pipelines</p>
          </div>
        </div>

      </div>
    </section>
  );
}
