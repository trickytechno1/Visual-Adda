'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Layers, Award, Image as ImageIcon, Video, HelpCircle, Monitor, Compass, Terminal, Cpu, PenTool } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Spacial & CGI' | 'Cinema & Motion' | 'Strategy & Design' | 'AI & Tech';
  icon: React.ElementType;
  gradient: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'cgi-3d',
    title: 'CGI & 3D CONTENT',
    tagline: 'Realistic 3D visuals that create immersive experiences.',
    description: 'Hyper-realistic lighting, custom material engineering, and state-of-the-art physics simulation to construct spaces and digital objects that feel physically present.',
    category: 'Spacial & CGI',
    icon: Layers,
    gradient: 'from-brand-purple to-brand-pink',
  },
  {
    id: 'walkthroughs',
    title: 'WALKTHROUGHS',
    tagline: 'Architectural & experiential walkthroughs that bring spaces to life.',
    description: 'Take clients through virtual spaces before they exist. Perfect for premium real estate development, high-end hospitality, and spatial installations.',
    category: 'Spacial & CGI',
    icon: Compass,
    gradient: 'from-brand-pink to-brand-orange',
  },
  {
    id: 'motion-graphics',
    title: '2D/3D ANIMATIONS & MOTION',
    tagline: 'Engaging visuals that communicate and captivate.',
    description: 'Translating complex narratives into beautifully paced, high-framerate kinetic animations and visual flows that keep viewers locked on your story.',
    category: 'Cinema & Motion',
    icon: Play,
    gradient: 'from-brand-orange to-brand-yellow',
  },
  {
    id: 'video-prod',
    title: 'DIGITAL VIDEO PRODUCTION',
    tagline: 'High-quality videos that tell your story with impact.',
    description: 'End-to-end cinema production, high-fidelity color grading, and dynamic sound composition tailored for social, web, and internal campaigns.',
    category: 'Cinema & Motion',
    icon: Video,
    gradient: 'from-brand-purple to-brand-orange',
  },
  {
    id: 'scripted-av',
    title: 'MOTIVATIONAL SCRIPTED AV',
    tagline: 'Story-driven AVs that motivate, engage & drive change.',
    description: 'A blend of raw human scriptwriting, high-impact background tracks, and fast pacing. Tagline: "BELIEVE. ACHIEVE. INSPIRE."',
    category: 'Cinema & Motion',
    icon: Award,
    gradient: 'from-brand-yellow to-brand-orange',
  },
  {
    id: 'digital-activities',
    title: 'DIGITAL ACTIVITIES',
    tagline: 'Interactive digital experiences that engage and connect.',
    description: 'Transform passive viewers into active participants through physical gesture triggers, touchscreen environments, and dynamic real-time installations.',
    category: 'AI & Tech',
    icon: Monitor,
    gradient: 'from-brand-purple to-brand-pink',
  },
  {
    id: 'website-design',
    title: 'WEBSITE DESIGN & DEV',
    tagline: 'Awwwards-level interactive web experiences.',
    description: 'Crafting responsive, secure web products packed with custom micro-interactions, smooth scrolling, and perfect SEO to boost user conversions by default.',
    category: 'Strategy & Design',
    icon: Terminal,
    gradient: 'from-brand-pink to-brand-yellow',
  },
  {
    id: 'brand-strategy',
    title: 'BRAND STRATEGY',
    tagline: 'Defining the visual and conceptual soul of your product.',
    description: 'Establish positioning grids, corporate identity systems, and consistent marketing visual rules that automatically command a high premium.',
    category: 'Strategy & Design',
    icon: PenTool,
    gradient: 'from-brand-orange to-brand-purple',
  },
  {
    id: 'ai-content',
    title: 'AI CONTENT & CONSULTING',
    tagline: 'Cutting-edge AI-assisted creation and strategic consulting.',
    description: 'Consulting and pipeline design utilizing custom-trained neural diffusion and language models to accelerate video and graphical output by up to 3x.',
    category: 'AI & Tech',
    icon: Cpu,
    gradient: 'from-brand-yellow to-brand-purple',
  }
];

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-black/80 relative">
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
              OUR SERVICE MATRIX
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              ONE STUDIO.<br />
              <span className="brand-gradient-text">ENDLESS POSSIBILITIES.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-400 max-w-md font-light leading-relaxed">
            Combining high-end aesthetic vision with top-tier cinematic technology to deliver digital experiences that leave a permanent mark on your customers.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6 }}
                className="glass-card relative overflow-hidden rounded-xl p-8 flex flex-col justify-between aspect-square group transition-all duration-300 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent cursor-pointer"
                data-cursor="EXPAND"
              >
                {/* Accent Corner Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full blur-xl`} />

                {/* Service Header: Category and Icon */}
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest border border-white/10 px-2.5 py-1 rounded-full bg-white/[0.02]">
                    {service.category}
                  </span>
                  
                  {/* Glowing Icon Frame */}
                  <div className={`w-12 h-12 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-brand-orange/30 group-hover:bg-brand-orange/5 transition-all duration-300`}>
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-brand-orange group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-4 pt-12">
                  <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">
                    {service.tagline}
                  </p>

                  {/* Micro interaction details visible on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isHovered ? 'auto' : 0,
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-gray-500 pt-2 border-t border-white/5 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </div>

                {/* Expanding bottom visual indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
