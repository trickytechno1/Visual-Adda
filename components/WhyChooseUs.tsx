'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, Sparkles, TrendingUp, Zap, ZapOff, Scale } from 'lucide-react';

interface MetricComparison {
  feature: string;
  ourValue: string;
  theirValue: string;
  description: string;
  icon: React.ElementType;
}

const COMPARISONS: MetricComparison[] = [
  {
    feature: 'Faster Delivery',
    ourValue: '3x Faster Pipeline',
    theirValue: '8-12 Weeks Static Deliveries',
    description: 'We run on accelerated GPU-based rendering arrays and direct AI-assisted visual layout suites, shipping world-class creative assets in weeks, not months.',
    icon: Zap,
  },
  {
    feature: 'Creative Excellence',
    ourValue: 'Top 1% Global Talent Only',
    theirValue: 'Junior Outsourced Personnel',
    description: 'Every designer, 3D modeler, CGI artist, and web developer working on your project has award-winning experience, eliminating rookie translation errors.',
    icon: Sparkles,
  },
  {
    feature: 'Conversion Focus',
    ourValue: '+142% Avg Engagement Boost',
    theirValue: 'Standard Brochure Bounce Rate',
    description: 'We do not build generic visual loops. We combine dopamine-pacing animations with crisp micro-interactions, leading directly to higher buyer interest.',
    icon: TrendingUp,
  },
  {
    feature: 'Technical Performance',
    ourValue: '95+ Lighthouse / 60FPS Stable',
    theirValue: 'Slow, bloated themes',
    description: 'Our digital architectures are built using raw Next.js server-side static hydration and light React components, flying past standard load delays.',
    icon: Scale,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 px-6 md:px-12 bg-black relative border-t border-white/5">
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
            THE MEASURABLE COMPARISON
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
            WHY PARTNER WITH <span className="brand-gradient-text font-black">VISUAL ADDA</span>
          </h2>
          <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
            Unlike traditional boutique agencies that prioritize subjective taste over corporate results, we engineer high-performance visual masterpieces with mathematically verified conversion outcomes.
          </p>
        </div>

        {/* Dynamic Comparison Matrix Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          {COMPARISONS.map((item, index) => {
            const FeatureIcon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-brand-orange/30 transition-all duration-500 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  {/* Feature Title and Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                      <FeatureIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                      {item.feature}
                    </h3>
                  </div>
                  
                  <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Split comparison bar visual */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 text-left">
                  <div className="space-y-1.5 p-3 rounded-lg bg-brand-orange/5 border border-brand-orange/15">
                    <span className="font-mono text-[8px] text-brand-orange uppercase tracking-widest flex items-center gap-1.5 font-bold">
                      <Check className="w-3 h-3" /> VISUAL ADDA
                    </span>
                    <span className="font-display font-black text-sm md:text-base text-white block">
                      {item.ourValue}
                    </span>
                  </div>

                  <div className="space-y-1.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                      <X className="w-3 h-3 text-red-500" /> OTHERS
                    </span>
                    <span className="font-display font-semibold text-xs md:text-sm text-gray-500 block">
                      {item.theirValue}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
