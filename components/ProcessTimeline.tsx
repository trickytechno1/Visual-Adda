'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, PenTool, Layout, Terminal, Rocket, CheckCircle } from 'lucide-react';

interface ProcessStep {
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery',
    description: 'We sit down with your brand stakeholders to map out customer archetypes, technical boundaries, and aesthetic goals. We analyze competitors to locate blue-ocean positioning.',
    icon: Compass,
    duration: 'Week 1-2',
  },
  {
    num: '02',
    title: 'Strategy',
    description: 'Developing cohesive communication narratives and establishing mechanical workflows. This defines the core cinematic theme and functional content strategy.',
    icon: Lightbulb,
    duration: 'Week 2-3',
  },
  {
    num: '03',
    title: 'Design',
    description: 'High-fidelity visual storytelling. Creating storyboards, high-resolution style frames, custom UI blueprints, and typographic layout matrices.',
    icon: PenTool,
    duration: 'Week 3-5',
  },
  {
    num: '04',
    title: 'Prototype',
    description: 'Constructing low-latency wireframe interactions, fluid motion pre-visualizations, and test 3D scene renders to gauge look and feel before full asset generation.',
    icon: Layout,
    duration: 'Week 5-6',
  },
  {
    num: '05',
    title: 'Development',
    description: 'Compiling high-performance WebGL shaders, full-stack Next.js routes, database bindings, and raw rendering processes. Fully optimized for 60fps.',
    icon: Terminal,
    duration: 'Week 6-8',
  },
  {
    num: '06',
    title: 'Launch',
    description: 'Production deployment to Cloud Run containers, SEO indexing audits, and live user tracking configuration. Delivering impact and ongoing growth insights.',
    icon: Rocket,
    duration: 'Ongoing',
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-black relative border-t border-white/5">
      {/* Dynamic Grid Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
            HOW WE CREATE MAGIC
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
            THE CHOREOGRAPHED <span className="brand-gradient-text">PROCESS</span>
          </h2>
          <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
            A meticulous, systematic execution pipeline bridging pure abstract creativity with robust engineering reliability.
          </p>
        </div>

        {/* Desktop Interactive horizontal progress connector */}
        <div className="hidden lg:block relative py-12">
          {/* Base Connection line */}
          <div className="absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-white/10" />
          
          {/* Active Progress Filler */}
          <motion.div
            className="absolute top-[52px] left-[5%] h-0.5 bg-gradient-to-r from-brand-purple to-brand-orange"
            animate={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 90}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />

          <div className="grid grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index <= activeStep;
              const isSelected = index === activeStep;

              return (
                <div key={index} className="flex flex-col items-center text-center relative group">
                  {/* Bubble button */}
                  <motion.button
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 cursor-pointer z-10 transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/30'
                        : isActive
                        ? 'bg-brand-purple border-brand-purple text-white'
                        : 'bg-dark-bg border-white/10 text-gray-500 hover:border-white/30'
                    }`}
                    data-cursor={`STEP ${step.num}`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </motion.button>

                  <div className="mt-4 space-y-2">
                    <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block">
                      {step.num}
                    </span>
                    <h3 className={`font-display font-bold text-sm uppercase transition-colors duration-300 ${isSelected ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Focused Step Detail card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 md:p-12 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden"
          >
            {/* Massive background number watermark */}
            <div className="absolute -bottom-8 -right-8 font-display font-black text-[12rem] text-white/[0.02] leading-none pointer-events-none select-none">
              {PROCESS_STEPS[activeStep].num}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
              <div className="md:col-span-1 space-y-4">
                <span className="font-mono text-xs text-brand-orange uppercase tracking-wider block">
                  STAGE {PROCESS_STEPS[activeStep].num} | {PROCESS_STEPS[activeStep].duration}
                </span>
                <h3 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-orange rounded-full" />
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <p className="font-sans text-lg text-gray-300 font-light leading-relaxed">
                  {PROCESS_STEPS[activeStep].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="font-mono text-[10px] text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                    ✓ High Quality Deliverable
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                    ✓ Direct Stakeholder Review
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                    ✓ Full Visual Storyboarding
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile quick list selector (horizontal row of circles) */}
        <div className="flex lg:hidden justify-center gap-3">
          {PROCESS_STEPS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${i === activeStep ? 'bg-brand-orange scale-125' : 'bg-white/20'}`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
