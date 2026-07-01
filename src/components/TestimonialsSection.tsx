/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/destinations';
import { motion } from 'motion/react';

export default function TestimonialsSection() {
  return (
    <div id="testimonials" className="py-24 bg-gradient-to-b from-white via-[#FAF7FF] to-white relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-purple-50/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-indigo-50/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1 bg-purple-50 text-[#8B5CF6] text-xs font-bold px-3 py-1 rounded-full border border-purple-100">
            <Heart className="w-3.5 h-3.5 fill-[#8B5CF6]" />
            Guest Journals
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Loved by Travelers Alike
          </h2>
          <p className="font-sans text-sm text-slate-500">
            Hear from our discerning guests about their authentic five-star journeys with Wanderly Holidays.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 rounded-[2rem] relative shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100/30 bg-gradient-to-b from-white/50 to-white/30"
            >
              {/* Quote Icon watermark */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-200/40" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5 text-yellow-400">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                "{test.comment}"
              </p>

              {/* Separator line */}
              <div className="h-px bg-slate-200/50 w-full mb-5" />

              {/* Guest Profile */}
              <div className="flex items-center gap-3.5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-purple-100 shadow-inner shrink-0"
                />
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 leading-none">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1">
                    From {test.location}
                  </p>
                  <span className="inline-block text-[9px] font-bold text-[#8B5CF6] bg-purple-50 px-2 py-0.5 rounded-md mt-1.5 border border-purple-100">
                    Visited: {test.destinationVisited}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
