/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { DestinationPackage } from '../types';
import { motion } from 'motion/react';

interface PackageCardProps {
  key?: string;
  pkg: DestinationPackage;
  onViewItinerary: (pkg: DestinationPackage, preferredOption: 'both' | 'transport') => void;
}

export default function PackageCard({ pkg, onViewItinerary }: PackageCardProps) {
  const [selectedOption, setSelectedOption] = useState<'both' | 'transport'>('both');

  // Format prices to India locale
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const displayedPrice = selectedOption === 'transport' ? pkg.transportPrice : pkg.price;
  const displayedOriginalPrice = selectedOption === 'transport' ? pkg.transportOriginalPrice : pkg.originalPrice;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className={`glass-card glass-card-hover p-4 sm:p-5 rounded-[2rem] overflow-hidden flex flex-col h-full relative group ${
        pkg.popular ? 'ring-2 ring-[#8B5CF6]/30 shadow-lg shadow-purple-100/40 bg-gradient-to-b from-white/60 to-white/40' : ''
      }`}
    >
      {/* Package Image & Badges */}
      <div className="relative aspect-[4/3] w-full bg-slate-50 rounded-[1.5rem] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 glass-badge px-3 py-1.5 rounded-full text-[10px] font-extrabold text-slate-700 uppercase tracking-widest">
          {pkg.category === 'pilgrimage' ? '📿 Pilgrimage' :
           pkg.category === 'jyotirling' ? '🔱 Jyotirling' :
           pkg.category === 'monsoon-maharashtra' ? '🌧️ Monsoon MH' :
           pkg.category === 'kerala' ? '🌿 Kerala' :
           pkg.category === 'kashmir' ? '⛰️ Kashmir' :
           pkg.category === 'ladakh' ? '❄️ Ladakh' :
           pkg.category === 'shillong' ? '☁️ Shillong' :
           pkg.category === 'day-tours' ? '☀️ Day Tour' :
           pkg.category === 'goa' ? '🏖️ Goa' : 
           pkg.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </div>

        {/* Popular / Bestseller Badge */}
        {pkg.popular && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase">
            🔥 Bestseller
          </div>
        )}

        {/* Custom Tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[90%]">
          {pkg.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Package Details */}
      <div className="pt-5 flex flex-col flex-grow">
        {/* Duration & Rating */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-medium">
          <span className="flex items-center gap-1.5 bg-purple-50/60 text-[#8B5CF6] px-2.5 py-1 rounded-full text-[11px] font-semibold">
            <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-full font-extrabold text-[11px]">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            {pkg.rating} ({pkg.reviewsCount})
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-[#8B5CF6] transition-colors mb-2 line-clamp-1">
          {pkg.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
          {pkg.description}
        </p>

        {/* Option Toggle Selector */}
        <div className="flex bg-slate-100/75 p-1 rounded-full mb-4 border border-purple-100/10">
          <button
            type="button"
            onClick={() => setSelectedOption('transport')}
            className={`flex-1 text-center py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedOption === 'transport'
                ? 'bg-white text-[#8B5CF6] shadow-sm font-extrabold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            🚗 Transport Only
          </button>
          <button
            type="button"
            onClick={() => setSelectedOption('both')}
            className={`flex-1 text-center py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedOption === 'both'
                ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-sm font-extrabold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            🏨 Transport + Stay
          </button>
        </div>

        {/* Core Highlights Checklist */}
        <div className="space-y-2 mb-4 flex-grow">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Highlights</p>
          {pkg.highlights.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-[11px] text-slate-600 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>

        {/* Personalized/Customized WhatsApp CTA Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            const phone = '918796634808';
            const optionLabel = selectedOption === 'transport' ? '🚗 Transport Only' : '🏨 Transport + Stay';
            const message = `Hi Wanderly Holidays! I am interested in customizing/personalizing a tour package:\n\n✨ *Tour Package:* ${pkg.title}\n• *Duration:* ${pkg.duration}\n• *Option Selected:* ${optionLabel}\n\nPlease share options and customized pricing for our group. Thanks!`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
          }}
          className="w-full mb-4 py-2 px-3 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 hover:bg-[#8B5CF6]/10 text-[#6D28D9] font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
        >
          <svg className="w-3.5 h-3.5 fill-current shrink-0 text-[#8B5CF6]" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.4 0 9.786-4.391 9.789-9.795.002-2.618-1.01-5.083-2.86-6.933C16.294 2.025 13.829.98 11.22.978c-5.4 0-9.786 4.39-9.79 9.794-.002 1.705.457 3.371 1.332 4.887l-1.01 3.694 3.79-.993zM18.13 14.5c-.326-.163-1.934-.954-2.26-1.073-.326-.118-.564-.177-.8.177-.236.354-.916 1.157-1.122 1.39-.205.234-.411.263-.737.1-.326-.163-1.378-.508-2.625-1.62-1-.892-1.675-1.993-1.872-2.33-.197-.336-.02-.518.144-.681.148-.147.326-.382.49-.572.162-.191.217-.327.326-.546.11-.218.054-.41-.027-.572-.08-.163-.8-1.934-1.1-2.64-.29-.7-.58-.6-.8-.61-.206-.01-.44-.01-.676-.01-.237 0-.623.09-1.05.547-.427.458-1.63 1.593-1.63 3.886 0 2.293 1.66 4.512 1.892 4.823.23.31 3.264 4.985 7.91 6.99 1.104.477 1.967.761 2.64.975 1.11.353 2.12.3 2.92.18.892-.133 1.934-.79 2.2-1.512.263-.724.263-1.345.185-1.474-.08-.129-.294-.206-.62-.369z"/>
          </svg>
          🎨 Personalize This Tour
        </button>

        {/* Pricing & Button CTA */}
        <div className="pt-4 border-t border-purple-100/30 flex items-center justify-between">
          <div>
            <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">
              {selectedOption === 'transport' ? 'Cab Only Per Person' : 'Cab + Hotel Per Person'}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-display font-extrabold text-[#6D28D9]">
                {formatPrice(displayedPrice)}
              </span>
              <span className="text-xs text-slate-400 line-through font-semibold">
                {formatPrice(displayedOriginalPrice)}
              </span>
            </div>
          </div>

          <button
            onClick={() => onViewItinerary(pkg, selectedOption)}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-950 to-slate-800 text-white font-bold text-xs shadow-md hover:from-[#6D28D9] hover:to-[#8B5CF6] hover:shadow-purple-600/20 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            Explore Plan
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
