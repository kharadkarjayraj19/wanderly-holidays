/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, ShieldCheck, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function StatsSection() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-[#8B5CF6]" />,
      title: 'Curated 5-Star Luxury',
      desc: 'Inspected handpicked stays meeting strict comfort standards.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />,
      title: 'Private Chauffeured Fleet',
      desc: 'Premium private SUVs with dedicated local drivers.',
    },
    {
      icon: <Star className="w-6 h-6 text-[#8B5CF6]" />,
      title: 'Elite Guest Satisfaction',
      desc: 'Top-rated seamless support for an effortless vacation.',
    },
  ];

  const stats = [
    { value: '100%', label: '5-Star Stays' },
    { value: '4.95 ★', label: 'Guest Rating' },
    { value: '24/7', label: 'Private Support' },
    { value: '0', label: 'Hidden Fees' },
  ];

  return (
    <div id="why-wanderly" className="py-10 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Features Grid - Combined into a single majestic card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="p-4 sm:p-7 rounded-2xl md:rounded-[2rem] glass-card border border-purple-100/50 shadow-lg shadow-purple-950/5 mb-8 md:mb-16 relative overflow-hidden bg-white/40 backdrop-blur-md"
        >
          {/* Top border highlight */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#C084FC]" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-purple-100/40">
            {features.map((feat, index) => (
              <div key={index} className={`space-y-1.5 md:space-y-3 pt-3 md:pt-0 ${index > 0 ? 'pt-3 md:pl-8' : ''}`}>
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-purple-50/80 border border-purple-100/50 flex items-center justify-center shadow-inner">
                  <div className="scale-70 md:scale-95">{feat.icon}</div>
                </div>
                <h3 className="font-display font-extrabold text-xs md:text-base text-slate-900">
                  {feat.title}
                </h3>
                <p className="font-sans text-[10.5px] md:text-[13px] text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Big Stats Counter Board */}
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#6D28D9]/95 via-[#8B5CF6]/90 to-[#818CF8]/85 backdrop-blur-xl p-5 sm:p-12 text-white relative overflow-hidden shadow-2xl shadow-purple-900/10 border border-white/20">
          {/* Subtle starry details */}
          <div className="absolute top-2 right-2 text-white/10 pointer-events-none">
            <Sparkles className="w-16 h-16 md:w-32 md:h-32" />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1 md:space-y-2">
                <p className="font-display font-extrabold text-xl sm:text-5xl tracking-tight">
                  {stat.value}
                </p>
                <div className="w-8 md:w-12 h-0.5 bg-white/30 mx-auto" />
                <p className="text-[9px] sm:text-sm font-medium text-purple-100 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
