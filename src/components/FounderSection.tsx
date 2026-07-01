/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, Sparkles, Award, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function FounderSection() {
  return (
    <div className="py-24 bg-gradient-to-b from-white via-[#FAF8FF] to-[#FAF5FF] relative overflow-hidden border-t border-purple-100/30">
      {/* Background Glow Auras */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/10 via-[#C084FC]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-purple-100/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Styled like Guest Journals in Purple */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-purple-50 text-[#8B5CF6] text-xs font-bold px-3 py-1 rounded-full border border-purple-100">
            <Sparkles className="w-3.5 h-3.5 fill-[#8B5CF6]/25" />
            Meet Our Founder
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            The Visionary Behind Wanderly
          </h2>
        </div>

        {/* Founder Bio - Not a Card, open and elegant layout */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Founder Metadata */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#6D28D9] via-[#8B5CF6] to-[#C084FC] p-[3px] shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Compass className="w-9 h-9 text-[#8B5CF6] animate-spin-slow" />
              </div>
            </div>
            <div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                Jayraj Kharadkar
              </h3>
              <p className="text-xs text-[#8B5CF6] font-bold uppercase tracking-widest mt-1">
                Alumnus, IITTM Gwalior • 9 Years Travel Expertise
              </p>
            </div>
          </div>

          {/* Rephrased elegant grey bio paragraph */}
          <div className="space-y-4 text-slate-500 font-sans text-sm sm:text-base leading-relaxed pt-2">
            <p>
              Wanderly Holidays was born from a profound passion to cultivate unmatched travel memories. Our founder,{' '}
              <span className="font-bold text-slate-700">Jayraj Kharadkar</span>, an alumnus of the prestigious{' '}
              <span className="font-semibold text-slate-800">Indian Institute of Tourism and Travel Management (IITTM, Gwalior)</span>,
              launched this venture with a singular vision: to deliver the ultimate travel experiences across India while unveiling its most pristine, unexplored locations.
            </p>
            <p>
              With over <span className="font-semibold text-slate-800">9 years of dedicated expertise</span> in high-end domestic tourism,
              Jayraj's absolute commitment remains focused on delivering premier customer satisfaction, impeccable safety, and seamless five-star hospitality. Every itinerary under Wanderly Holidays is handpicked and customized under his direct supervision.
            </p>
          </div>

          {/* Elegant signature / quote styling */}
          <div className="pt-6">
            <p className="font-sans italic text-xs text-slate-400">
              "We don't just plan tours; we curate moments that stay with you forever."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
