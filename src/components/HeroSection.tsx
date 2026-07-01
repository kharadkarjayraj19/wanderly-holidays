/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Search, Compass, MapPin, Calendar, SlidersHorizontal, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

const HERO_BG_IMAGES = [
  '/src/assets/images/maharashtra_jyotirling_1782413180226.jpg',
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
];

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDuration: string;
  setSelectedDuration: (duration: string) => void;
  onExploreClick: () => void;
}

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedDuration,
  setSelectedDuration,
  onExploreClick
}: HeroSectionProps) {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_BG_IMAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'all', label: 'All Tours' },
    { id: 'day-tours', label: '☀️ Day Tours' },
    { id: 'pilgrimage', label: '📿 Pilgrimage' },
    { id: 'jyotirling', label: '🔱 Jyotirling' },
    { id: 'monsoon-maharashtra', label: '🌧️ Monsoon Maharashtra' },
    { id: 'kerala', label: '🌿 Kerala' },
    { id: 'kashmir', label: '⛰️ Kashmir' },
    { id: 'ladakh', label: '❄️ Ladakh' },
    { id: 'shillong', label: '☁️ Shillong' },
    { id: 'goa', label: '🏖️ Goa' },
  ];

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Sliding Background Images with smooth fade transitions */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_BG_IMAGES.map((img, idx) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out"
            style={{
              backgroundImage: `url(${img})`,
              opacity: bgIndex === idx ? 0.18 : 0,
              transform: bgIndex === idx ? 'scale(1.05) translateZ(0)' : 'scale(1.0) translateZ(0)',
            }}
          />
        ))}
        {/* Elegant overlay to ensure elite contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8FF]/90 via-[#F4EFFF]/85 to-[#FAF8FF]/90" />
      </div>

      {/* Background Decorative Gradient Radial */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/15 via-[#C084FC]/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#6D28D9]/10 via-purple-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        <div className="space-y-8 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100/80 text-[#8B5CF6] text-xs font-semibold tracking-wide uppercase"
          >
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            Premium India Expeditions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] max-w-4xl"
          >
            Discover India’s{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#C084FC]">
              Most Exquisite
            </span>{' '}
            Holidays
          </motion.h1>



          {/* Interactive Search Bar Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-5 sm:p-6 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl shadow-purple-900/5 max-w-3xl w-full space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Search query */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4.5 w-4.5 text-[#8B5CF6]" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search e.g. Kashmir, Houseboat..."
                  className="block w-full pl-10 pr-3 py-3 text-sm text-slate-800 placeholder-slate-400 glass-input rounded-xl focus:outline-none transition-all"
                />
              </div>

              {/* Duration Filter */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-4.5 w-4.5 text-[#8B5CF6]" />
                </span>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="block w-full pl-10 pr-8 py-3 text-sm text-slate-700 glass-input rounded-xl focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="all">Any Duration</option>
                  <option value="short">Short (1-3 Nights / Weekend Escapes)</option>
                  <option value="medium">Medium (4-5 Nights / Core Tours)</option>
                  <option value="long">Long (6+ Nights / Epic Expeditions)</option>
                </select>
              </div>
            </div>

            {/* Quick filter badges for categories */}
            <div className="flex flex-wrap gap-2 items-center justify-center pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
                <SlidersHorizontal className="w-3 h-3" />
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-md shadow-purple-600/15'
                      : 'bg-white/50 border border-purple-100/30 text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
