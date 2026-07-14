'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Play, Star, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  videoThumb: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Visual Adda completely redesigned our spatial pre-visualization pipeline. The hyper-realistic CGI walkthroughs allowed us to close our Series B real-estate investment rounds two months ahead of schedule. Absolutely world-class craftsmanship.",
    name: "Marcus Vesper",
    role: "Managing Director",
    company: "Vesper Luxury Estates",
    avatar: "https://picsum.photos/seed/marcus/100/100",
    videoThumb: "https://picsum.photos/seed/vthumb1/600/400",
    rating: 5,
  },
  {
    quote: "The motivational AV and cinematic motion graphics created by Visual Adda took our global sports campaign viral. Over 42 million views, but more importantly, it established our brand as the premier innovator in athletic gravity gear.",
    name: "Aria Thorne",
    role: "Chief Marketing Officer",
    company: "Gravity Athletics Corp",
    avatar: "https://picsum.photos/seed/aria/100/100",
    videoThumb: "https://picsum.photos/seed/vthumb2/600/400",
    rating: 5,
  },
  {
    quote: "Exceptional UI design, Next.js engineering speed, and beautiful attention to micro-interactions. Our brand conversion rose by 142% within the first month. They are the Awwwards-standard benchmark of modern digital creation.",
    name: "David Chen",
    role: "VP of Product",
    company: "Lumina Labs Inc.",
    avatar: "https://picsum.photos/seed/david/100/100",
    videoThumb: "https://picsum.photos/seed/vthumb3/600/400",
    rating: 5,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-dark-bg relative border-t border-white/5">
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
              VERIFIED FEEDBACK
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              CLIENT <span className="brand-gradient-text font-black">TESTIMONIALS</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/5 flex items-center justify-center text-white cursor-pointer interactive-hover"
              data-cursor="PREV"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/5 flex items-center justify-center text-white cursor-pointer interactive-hover"
              data-cursor="NEXT"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinematic Testimonial Layout (Text on Left, Cinematic Video Preview on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Quote Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="relative">
              <Quote className="absolute -top-10 -left-6 w-16 h-16 text-brand-orange/10 pointer-events-none" />
              <p className="font-sans text-xl md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed relative z-10">
                &ldquo;{active.quote}&rdquo;
              </p>
            </div>

            {/* Client Metadata Card */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-brand-orange/30">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white uppercase">
                  {active.name}
                </h4>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  {active.role} | <span className="text-brand-orange">{active.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Video Testimonial Preview frame */}
          <div className="lg:col-span-5">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black group"
            >
              <Image
                src={active.videoThumb}
                alt="Video testimonial preview"
                fill
                className="object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Play overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
              
              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center cursor-pointer shadow-lg shadow-brand-orange/40"
                  data-cursor="PLAY VIDEO"
                >
                  <Play className="w-6 h-6 fill-white ml-1" />
                </motion.div>
              </div>

              {/* Verified verification badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono text-white tracking-widest">
                <UserCheck className="w-3.5 h-3.5 text-brand-purple" />
                <span>VERIFIED AUDIO // ACTIVE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
