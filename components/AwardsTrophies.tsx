'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, ShieldAlert, Award, StarHalf } from 'lucide-react';

interface AwardItem {
  platform: string;
  category: string;
  year: string;
  project: string;
  icon: React.ElementType;
}

const AWARDS: AwardItem[] = [
  { platform: 'AWWWARDS', category: 'Site of the Day (SOTD)', year: '2026', project: 'Cybernetic Realities', icon: Trophy },
  { platform: 'FWA', category: 'FWA of the Day (FOTD)', year: '2026', project: 'Kinetic Gravity AV', icon: Star },
  { platform: 'CSS DESIGN AWARDS', category: 'Best UI / UX / Innovation', year: '2025', project: 'Lumina Spatial Brand', icon: Award },
  { platform: 'BEHANCE', category: 'Motion Design Feature', year: '2025', project: 'Synthetic Dreams AI', icon: Trophy },
  { platform: 'DRIBBBLE', category: 'UI Interaction Showcase', year: '2026', project: 'Vesper Walkthroughs', icon: StarHalf },
];

export default function AwardsTrophies() {
  return (
    <section id="awards" className="py-24 px-6 md:px-12 bg-dark-bg/60 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
              ACCOLADES &amp; VERIFICATION
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              CREATIVE <span className="brand-gradient-text font-black">EXCELLENCE</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-400 max-w-sm font-light leading-relaxed">
            Highly-coveted honors from the world’s elite web, architecture, and visual design juries. Verified and recognized internationally.
          </p>
        </div>

        {/* List layout of awards (editorial Swiss-modern styling) */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {AWARDS.map((award, i) => {
            const AwardIcon = award.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingLeft: '24px', paddingRight: '24px' }}
                className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 px-4 group cursor-default"
              >
                {/* Platform Name and Icon */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                    <AwardIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl md:text-2xl text-white tracking-tight uppercase group-hover:text-brand-orange transition-colors">
                      {award.platform}
                    </h3>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block">
                      {award.year} PLATINUM HONOR
                    </span>
                  </div>
                </div>

                {/* Award Category */}
                <div className="flex-1 md:text-center">
                  <span className="font-sans text-sm md:text-base text-gray-300 font-light block">
                    {award.category}
                  </span>
                </div>

                {/* Associated Project */}
                <div className="text-right flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-500 group-hover:text-brand-purple transition-colors uppercase">
                    PROJECT // {award.project}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
