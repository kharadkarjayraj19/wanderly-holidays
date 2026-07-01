/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import PackageCard from './components/PackageCard';
import ItineraryModal from './components/ItineraryModal';
import TestimonialsSection from './components/TestimonialsSection';
import FounderSection from './components/FounderSection';
import Footer from './components/Footer';
import OutstationCabBooking from './components/OutstationCabBooking';
import { DOMESTIC_PACKAGES } from './data/destinations';
import { DestinationPackage } from './types';
import { Compass, EyeOff, Sparkles, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EXPLORE_BG_IMAGES = [
  '/src/assets/images/kashmir_dal_lake_1782411725613.jpg',
  '/src/assets/images/hero_kerala_backwaters_1782411709697.jpg',
  '/src/assets/images/rajasthan_palace_1782411738843.jpg',
  '/src/assets/images/shillong_waterfalls_1782413227355.jpg',
  '/src/assets/images/ajanta_ellora_1782413196439.jpg',
  '/src/assets/images/monsoon_maharashtra_1782413242827.jpg'
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState<DestinationPackage | null>(null);
  const [preferredOption, setPreferredOption] = useState<'both' | 'transport'>('both');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % EXPLORE_BG_IMAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Filter packages based on multi-criteria inputs
  const filteredPackages = DOMESTIC_PACKAGES.filter((pkg) => {
    // 1. Category Filter
    if (selectedCategory !== 'all' && pkg.category !== selectedCategory) {
      return false;
    }

    // 2. Duration Filter
    if (selectedDuration !== 'all') {
      const durationStr = pkg.duration.toLowerCase();
      const hasNights = durationStr.match(/(\d+)\s*night/);
      const nights = hasNights ? parseInt(hasNights[1]) : 0;

      if (selectedDuration === 'short' && nights > 3) return false;
      if (selectedDuration === 'medium' && (nights <= 3 || nights > 5)) return false;
      if (selectedDuration === 'long' && nights <= 5) return false;
    }

    // 3. Search text query filter
    if (searchQuery.trim() !== '') {
      const normalizedQuery = searchQuery.toLowerCase();
      const matchesTitle = pkg.title.toLowerCase().includes(normalizedQuery);
      const matchesSubtitle = pkg.subtitle.toLowerCase().includes(normalizedQuery);
      const matchesDesc = pkg.description.toLowerCase().includes(normalizedQuery);
      const matchesCategory = pkg.category.toLowerCase().includes(normalizedQuery);
      const matchesTags = pkg.tags.some(t => t.toLowerCase().includes(normalizedQuery));
      const matchesHighlights = pkg.highlights.some(h => h.toLowerCase().includes(normalizedQuery));
      const matchesItinerary = pkg.itinerary.some(day => 
        day.title.toLowerCase().includes(normalizedQuery) || 
        day.description.toLowerCase().includes(normalizedQuery)
      );

      return (
        matchesTitle ||
        matchesSubtitle ||
        matchesDesc ||
        matchesCategory ||
        matchesTags ||
        matchesHighlights ||
        matchesItinerary
      );
    }

    return true;
  });

  const handleOpenModal = (pkg: DestinationPackage, option: 'both' | 'transport' = 'both') => {
    setSelectedPackage(pkg);
    setPreferredOption(option);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScrollToExplore = () => {
    const element = document.getElementById('explore-tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTriggerInquiryOnly = () => {
    // If we want to trigger general inquiry, we can open the first popular package or open Munnar
    const defaultPkg = DOMESTIC_PACKAGES.find(p => p.popular) || DOMESTIC_PACKAGES[0];
    setSelectedPackage(defaultPkg);
    setIsModalOpen(true);
    // Give it a tiny moment to load, then we can assume the user wants to inquire
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDuration('all');
  };

  return (
    <div className="bg-gradient-to-b from-[#FAF9FF] via-white to-[#F5F2FF] min-h-screen font-sans selection:bg-[#C084FC]/30 selection:text-[#6D28D9] relative overflow-x-hidden">
      
      {/* Ambient Premium Purple Background Glow Auras */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#8B5CF6]/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[15%] -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#C084FC]/8 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-purple-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Premium Glassmorphism Navbar */}
      <Navbar 
        onExploreClick={handleScrollToExplore} 
        onInquireClick={handleTriggerInquiryOnly} 
      />

      {/* Hero Section with interactive Filters */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
        onExploreClick={handleScrollToExplore}
      />

      {/* Outstation Cab Booking Feature */}
      <OutstationCabBooking />

      {/* Package Collections Display */}
      <div id="explore-tours" className="py-24 bg-gradient-to-b from-[#FAFAFC] via-[#F6F2FF] to-[#FAFAFC] relative scroll-mt-16 overflow-hidden border-t border-purple-100/20">
        {/* Sliding Background Images with smooth fade transitions */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {EXPLORE_BG_IMAGES.map((img, idx) => (
            <div
              key={img}
              className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out"
              style={{
                backgroundImage: `url(${img})`,
                opacity: bgIndex === idx ? 0.07 : 0,
                transform: bgIndex === idx ? 'scale(1.05) translateZ(0)' : 'scale(1.0) translateZ(0)',
              }}
            />
          ))}
          {/* Elegant background color multiplier overlay to ensure elite contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFC] via-[#F6F2FF]/95 to-[#FAFAFC] mix-blend-multiply" />
        </div>

        {/* Organic floating glass spheres behind the cards */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-100/30 to-fuchsia-100/15 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100/25 to-purple-100/20 blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Title with Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#8B5CF6]">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Holidays
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
                Signature Domestic Tour Packages
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl">
                Unveil pristine natural lakes, royal palaces, and tropical islands of India. Accompanied by our luxury concierge and handpicked 5★ accommodations.
              </p>
            </div>

            {/* Displaying match counts */}
            <div className="text-right shrink-0">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">Available Packages</span>
              <span className="font-display font-extrabold text-2xl text-slate-800">
                {filteredPackages.length} <span className="text-sm font-medium text-slate-400">matching {filteredPackages.length === 1 ? 'tour' : 'tours'}</span>
              </span>
            </div>
          </div>

          {/* Cards Grid with Animations */}
          <AnimatePresence mode="popLayout">
            {filteredPackages.length > 0 ? (
              <motion.div 
                layout 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPackages.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    onViewItinerary={handleOpenModal}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 bg-slate-50 border border-slate-100 rounded-3xl p-8 max-w-lg mx-auto space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-purple-50 text-[#8B5CF6] border border-purple-100 flex items-center justify-center mx-auto shadow-md">
                  <EyeOff className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-800">No Tours Match Your Criteria</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-sm mx-auto">
                    We couldn't find any packages matching "{searchQuery}" in this category or duration. Try searching with alternative terms or reset the filters below.
                  </p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-purple-600/15 hover:shadow-purple-600/25 transition-all cursor-pointer"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* Guest Review Journals */}
      <TestimonialsSection />

      {/* Brand Value & Stats banner */}
      <StatsSection />

      {/* Founder Spotlight */}
      <FounderSection />

      {/* Immersive Itinerary & Consultation Modal */}
      <ItineraryModal
        pkg={selectedPackage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialOption={preferredOption}
      />

      {/* Site-Map Contact Footer */}
      <Footer 
        onInquireClick={handleTriggerInquiryOnly} 
        onExploreClick={handleScrollToExplore} 
      />

    </div>
  );
}
