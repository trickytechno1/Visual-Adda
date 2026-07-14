'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle2, Globe, Linkedin, ArrowUpRight, Award, Compass } from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'CGI & 3D CONTENT',
    budget: '$10k - $25k',
    message: '',
  });

  const [calcService, setCalcService] = useState('CGI & 3D CONTENT');
  const [assetCount, setAssetCount] = useState(3);
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'express'>('standard');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  // Dynamic estimate calculations
  const getBasePrice = () => {
    switch (calcService) {
      case 'CGI & 3D CONTENT': return 2500;
      case 'WALKTHROUGHS': return 6000;
      case '2D/3D ANIMATIONS': return 3500;
      case 'WEBSITE BESPOKE DESIGN': return 8000;
      default: return 3000;
    }
  };

  const estimatedCost = getBasePrice() * assetCount * (deliverySpeed === 'express' ? 1.35 : 1.0);
  const estimatedWeeks = Math.max(2, Math.ceil((assetCount * 1.5) / (deliverySpeed === 'express' ? 1.5 : 1.0)));

  const applyEstimateToForm = () => {
    let budgetCategory = '$5k - $10k';
    if (estimatedCost > 50000) budgetCategory = '$50k+';
    else if (estimatedCost > 25000) budgetCategory = '$25k - $50k';
    else if (estimatedCost > 10000) budgetCategory = '$10k - $25k';

    setFormState({
      ...formState,
      service: calcService,
      budget: budgetCategory,
      message: `Hi Visual Adda, I calculated an instant estimate of $${estimatedCost.toLocaleString()} for ${assetCount} deliverables under ${calcService} with ${deliverySpeed} delivery (Timeline: approx. ${estimatedWeeks} weeks). I would like to lock this rate in.`,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-performance server route call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        service: 'CGI & 3D CONTENT',
        budget: '$10k - $25k',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black relative border-t border-white/5">
      {/* Background Neon Blob Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 text-left">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest block">
              COLLABORATION HUB
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              START YOUR <span className="brand-gradient-text font-black">JOURNEY</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-400 max-w-sm font-light leading-relaxed">
            Ready to turn your artistic vision into cinematic digital results? Book a slot or drop us an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          {/* Left Column: Coordinates & Map & Calendly trigger */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl uppercase text-white tracking-tight">
                Studio Coordinates
              </h3>
              
              <div className="space-y-4">
                <a href="mailto:hello@visualadda.com" className="flex items-center gap-4 text-gray-400 hover:text-brand-orange transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-brand-orange/30 group-hover:text-brand-orange transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs tracking-wider">hello@visualadda.com</span>
                </a>

                <a href="tel:+1800555848" className="flex items-center gap-4 text-gray-400 hover:text-brand-orange transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-brand-orange/30 group-hover:text-brand-orange transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs tracking-wider">+1 (800) 555-848</span>
                </a>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-xs font-light leading-relaxed">
                    Creative Zone Suite 404, Sector 7, Innovation Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Calendly booking simulated section */}
            <div className="p-6 rounded-2xl glass-card border border-white/5 space-y-4 relative overflow-hidden bg-gradient-to-br from-brand-purple/10 to-transparent">
              <div className="flex items-center gap-2 text-brand-orange font-mono text-xs font-bold">
                <Calendar className="w-4 h-4" />
                <span>INSTANT BOOKING ACTIVE</span>
              </div>
              <h4 className="font-display font-bold text-lg uppercase text-white tracking-tight">
                Schedule a 15-Min Briefing
              </h4>
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                Connect directly with our Lead CGI Architect and Creative Director to flesh out scope expectations.
              </p>
              
              <button
                onClick={() => setShowCalendly(true)}
                className="w-full py-3 px-4 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-white font-mono text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 cursor-pointer interactive-hover"
                data-cursor="BOOK TIME"
              >
                <span>Select Slot via Calendly</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Beautiful Custom Interactive Cost & Timeline Estimator */}
            <div className="p-6 rounded-2xl glass-card border border-white/5 bg-gradient-to-br from-brand-orange/5 to-transparent space-y-5 text-left">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest font-bold">
                  Interactive Pipeline Estimator
                </span>
                <span className="bg-brand-orange/15 text-brand-orange font-mono text-[9px] px-2 py-0.5 rounded-full font-bold">
                  Conversion Booster
                </span>
              </div>
              
              <div className="space-y-4">
                {/* Service Select */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block">
                    Pipeline Stream
                  </label>
                  <select
                    value={calcService}
                    onChange={(e) => setCalcService(e.target.value)}
                    className="w-full bg-[#0d0d11]/80 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:border-brand-orange focus:outline-none transition-all font-light"
                  >
                    <option value="CGI & 3D CONTENT">CGI &amp; 3D Content</option>
                    <option value="WALKTHROUGHS">Walkthrough Simulation</option>
                    <option value="2D/3D ANIMATIONS">2D/3D Animation</option>
                    <option value="WEBSITE BESPOKE DESIGN">Bespoke Web App</option>
                  </select>
                </div>

                {/* Deliverable Count */}
                <div className="space-y-1.5">
                  <div className="flex justify-between font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                    <span>Deliverables / Scenes</span>
                    <span className="text-white font-bold">{assetCount}x</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={assetCount}
                    onChange={(e) => setAssetCount(parseInt(e.target.value))}
                    className="w-full accent-brand-orange h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Speed Toggle */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block">
                    Execution Velocity
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliverySpeed('standard')}
                      className={`py-1.5 px-3 rounded-lg border text-[10px] font-mono transition-all cursor-pointer text-center ${
                        deliverySpeed === 'standard'
                          ? 'border-brand-purple bg-brand-purple/10 text-white'
                          : 'border-white/10 bg-black/20 text-gray-400'
                      }`}
                    >
                      Standard (High Fidelity)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliverySpeed('express')}
                      className={`py-1.5 px-3 rounded-lg border text-[10px] font-mono transition-all cursor-pointer text-center ${
                        deliverySpeed === 'express'
                          ? 'border-brand-orange bg-brand-orange/10 text-white'
                          : 'border-white/10 bg-black/20 text-gray-400'
                      }`}
                    >
                      Express Priority
                    </button>
                  </div>
                </div>

                {/* Calculated Results Block */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-[10px] text-gray-400 font-light">Est. Investment:</span>
                    <span className="font-display font-black text-xl text-gradient">
                      ${estimatedCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-[10px] text-gray-400 font-light">Timeframe:</span>
                    <span className="font-mono text-xs text-white font-bold">
                      ~ {estimatedWeeks} {estimatedWeeks === 1 ? 'Week' : 'Weeks'}
                    </span>
                  </div>
                </div>

                {/* CTA Action Conversion Button */}
                <button
                  type="button"
                  onClick={applyEstimateToForm}
                  className="w-full py-2.5 px-4 rounded-lg bg-brand-purple hover:bg-brand-purple/95 text-white font-mono text-[10px] uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer interactive-hover"
                >
                  <span>Apply Estimate to Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2 text-left">
                    <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/30 transition-all font-light"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2 text-left">
                    <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/30 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-2 text-left">
                    <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
                      COMPANY / ENTITY
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/30 transition-all font-light"
                    />
                  </div>

                  {/* Service Needed */}
                  <div className="space-y-2 text-left">
                    <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
                      SERVICE INTERFERENCE
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-[#0d0d11] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/30 transition-all font-light"
                    >
                      <option value="CGI & 3D CONTENT">CGI &amp; 3D CONTENT</option>
                      <option value="WALKTHROUGHS">WALKTHROUGHS</option>
                      <option value="2D/3D ANIMATIONS">2D/3D ANIMATIONS</option>
                      <option value="DIGITAL VIDEO PRODUCTION">DIGITAL VIDEO PRODUCTION</option>
                      <option value="MOTIVATIONAL AV">MOTIVATIONAL AV</option>
                      <option value="WEBSITE BESPOKE DESIGN">WEBSITE BESPOKE DESIGN</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2 text-left">
                  <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
                    PROJECT BUDGET MATRIX
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+'].map((budget) => {
                      const isSelected = formState.budget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormState({ ...formState, budget })}
                          className={`py-2.5 px-3 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                            isSelected
                              ? 'border-brand-orange bg-brand-orange/10 text-white'
                              : 'border-white/10 bg-black/20 text-gray-400 hover:border-white/20'
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2 text-left">
                  <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
                    PROJECT SCOPE BRIEF *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your brand goals, required assets, and targeted timeline..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/30 transition-all font-light resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-brand-purple to-brand-orange hover:opacity-90 text-white font-mono text-sm uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 interactive-hover"
                  data-cursor="TRANSMIT"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                {/* Success Message Banner */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Transmission completed! Our executive producer will follow up in 12 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Simulated Calendly Embed Modal */}
      <AnimatePresence>
        {showCalendly && (
          <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCalendly(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-dark-bg border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full z-10 space-y-6"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block font-bold">
                    CALENDLY INTEGRATION
                  </span>
                  <h4 className="font-display font-bold text-xl uppercase text-white">
                    Briefing Session Scheduler
                  </h4>
                </div>
                <button
                  onClick={() => setShowCalendly(false)}
                  className="p-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Simulated Calendly scheduling slots */}
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">
                  AVAILABLE SLOTS FOR TOMORROW
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {['09:00 AM EST', '11:30 AM EST', '02:00 PM EST', '04:30 PM EST'].map((slot, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        alert(`Briefing slot booked for ${slot}! (Simulation successful)`);
                        setShowCalendly(false);
                      }}
                      className="py-3 px-4 rounded-lg bg-white/[0.02] border border-white/10 text-xs font-mono text-gray-300 hover:border-brand-orange hover:bg-brand-orange/5 transition-all text-center cursor-pointer"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <p className="font-sans text-[11px] text-gray-500 text-center font-light leading-relaxed">
                * Slot validation synced directly via Calendly real-time API nodes.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
