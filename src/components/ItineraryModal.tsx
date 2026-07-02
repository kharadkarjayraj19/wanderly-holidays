/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, FileText, Check, AlertCircle, Sparkles, Send, MapPin } from 'lucide-react';
import { DestinationPackage, InquiryFormData } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ItineraryModalProps {
  pkg: DestinationPackage | null;
  isOpen: boolean;
  onClose: () => void;
  initialOption?: 'both' | 'transport';
}

export default function ItineraryModal({ pkg, isOpen, onClose, initialOption = 'both' }: ItineraryModalProps) {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'details' | 'inquire'>('itinerary');
  const [selectedOption, setSelectedOption] = useState<'both' | 'transport'>(initialOption);
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    guests: 2,
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // Synchronize options when modal is opened for a different package
  React.useEffect(() => {
    if (isOpen) {
      setSelectedOption(initialOption);
      setActiveTab('itinerary');
      setSubmitSuccess(false);
    }
  }, [isOpen, initialOption]);

  if (!pkg || !isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value,
    }));
  };

  const handleWhatsAppBook = () => {
    if (!pkg) return;
    const phone = '918796634808';
    const optionName = selectedOption === 'transport' ? '🚗 Transport Only' : '🏨 Transport + Stay';
    const priceText = formatPrice(selectedOption === 'transport' ? pkg.transportPrice : pkg.price);
    
    const message = `Hi Wanderly Holidays! I would like to book a tour with you:

✨ *Tour Details* ✨
• *Tour:* ${pkg.title}
• *Duration:* ${pkg.duration}
• *Option Selected:* ${optionName}
• *Price:* ${priceText} per person

Please let me know the availability and payment details. Thanks!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API logging
    setTimeout(() => {
      const randomId = 'WL-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryId(randomId);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      const phone = '918796634808';
      const optionName = selectedOption === 'transport' ? '🚗 Transport Only' : '🏨 Transport + Stay';
      const priceText = formatPrice(selectedOption === 'transport' ? pkg.transportPrice : pkg.price);
      
      const message = `Hi Wanderly Holidays! I am submitting an inquiry for a tour:

👤 *Contact Information*
• *Name:* ${formData.name}
• *Email:* ${formData.email}
• *Phone:* ${formData.phone}

📅 *Trip Details*
• *Tour:* ${pkg.title}
• *Travel Date:* ${formData.travelDate || 'Flexible'}
• *Guests:* ${formData.guests} Guests
• *Selected Option:* ${optionName}
• *Est. Price:* ${priceText} per person

📝 *Additional Notes:*
${formData.notes || 'None'}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      travelDate: '',
      guests: 2,
      notes: '',
    });
    setSubmitSuccess(false);
    setActiveTab('itinerary');
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative bg-white/95 backdrop-blur-2xl w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-100/30 flex flex-col md:flex-row h-[90vh] md:h-[85vh] z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/40 hover:bg-slate-950/60 text-white backdrop-blur-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Hero Card / Sticky Details Panel (40%) */}
          <div className="w-full md:w-[38%] bg-slate-900 text-white flex flex-col relative shrink-0">
            {/* Visual Header */}
            <div className="relative h-44 sm:h-52 md:h-64 shrink-0">
              <img
                src={pkg.image}
                alt={pkg.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C084FC]">
                  {pkg.duration}
                </span>
                <h2 className="font-display font-extrabold text-2xl tracking-tight leading-tight mt-1 text-white">
                  {pkg.title}
                </h2>
              </div>
            </div>

            {/* Static Core details */}
            <div className="p-6 flex-grow flex flex-col justify-between overflow-y-auto max-h-[calc(100%-11rem)] sm:max-h-[calc(100%-13rem)] md:max-h-none">
              <div className="space-y-4">
                <p className="text-slate-400 text-xs leading-relaxed font-sans">
                  {pkg.subtitle}
                </p>

                {/* Inclusion badging */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <h4 className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest">Inclusions</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedOption === 'both' && (
                      <span className="text-[10px] bg-[#8B5CF6]/15 text-[#C084FC] px-2.5 py-1 rounded-md font-semibold border border-[#8B5CF6]/20">
                        🏢 4★ Stays
                      </span>
                    )}
                    <span className="text-[10px] bg-[#8B5CF6]/15 text-[#C084FC] px-2.5 py-1 rounded-md font-semibold border border-[#8B5CF6]/20">
                      🚗 Private Cab
                    </span>
                    {selectedOption === 'both' && (
                      <span className="text-[10px] bg-[#8B5CF6]/15 text-[#C084FC] px-2.5 py-1 rounded-md font-semibold border border-[#8B5CF6]/20">
                        ☕ Daily Breakfast
                      </span>
                    )}
                    <span className="text-[10px] bg-[#8B5CF6]/15 text-[#C084FC] px-2.5 py-1 rounded-md font-semibold border border-[#8B5CF6]/20">
                      🛠️ Tolls & Fuel
                    </span>
                  </div>
                </div>

                {/* Option Toggle inside Modal */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <h4 className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest">Select Package Option</h4>
                  <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                    <button
                      type="button"
                      onClick={() => setSelectedOption('transport')}
                      className={`flex-1 text-center py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedOption === 'transport'
                          ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🚗 Transport Only
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedOption('both')}
                      className={`flex-1 text-center py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedOption === 'both'
                          ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🏨 Transport + Stay
                    </button>
                  </div>
                </div>

                {/* Small Exclusions alert */}
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] text-slate-300 flex items-start gap-2 leading-relaxed">
                  <AlertCircle className="w-3.5 h-3.5 text-[#C084FC] shrink-0 mt-0.5" />
                  {selectedOption === 'transport' ? (
                    <span>Price covers dedicated private air-conditioned vehicle transfers, highway tolls, parking fees, and complete driver allowance. Stay is self-managed.</span>
                  ) : (
                    <span>Price covers premium 4★ hotel rooms with daily breakfast, private air-conditioned vehicle transfers, tolls, and taxes. No flight overheads.</span>
                  )}
                </div>
              </div>

              {/* Pricing section */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                    {selectedOption === 'transport' ? 'Transport Only (Cab)' : 'Transport + Stay'}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display font-extrabold text-[#C084FC]">
                      {formatPrice(selectedOption === 'transport' ? pkg.transportPrice : pkg.price)}
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      {formatPrice(selectedOption === 'transport' ? pkg.transportOriginalPrice : pkg.originalPrice)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleWhatsAppBook}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-950/40 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.4 0 9.786-4.391 9.789-9.795.002-2.618-1.01-5.083-2.86-6.933C16.294 2.025 13.829.98 11.22.978c-5.4 0-9.786 4.39-9.79 9.794-.002 1.705.457 3.371 1.332 4.887l-1.01 3.694 3.79-.993zM18.13 14.5c-.326-.163-1.934-.954-2.26-1.073-.326-.118-.564-.177-.8.177-.236.354-.916 1.157-1.122 1.39-.205.234-.411.263-.737.1-.326-.163-1.378-.508-2.625-1.62-1-.892-1.675-1.993-1.872-2.33-.197-.336-.02-.518.144-.681.148-.147.326-.382.49-.572.162-.191.217-.327.326-.546.11-.218.054-.41-.027-.572-.08-.163-.8-1.934-1.1-2.64-.29-.7-.58-.6-.8-.61-.206-.01-.44-.01-.676-.01-.237 0-.623.09-1.05.547-.427.458-1.63 1.593-1.63 3.886 0 2.293 1.66 4.512 1.892 4.823.23.31 3.264 4.985 7.91 6.99 1.104.477 1.967.761 2.64.975 1.11.353 2.12.3 2.92.18.892-.133 1.934-.79 2.2-1.512.263-.724.263-1.345.185-1.474-.08-.129-.294-.206-.62-.369z"/>
                  </svg>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Detailed Tab Panel (60%) */}
          <div className="w-full md:w-[62%] bg-white flex flex-col h-full overflow-hidden">
            
            {/* Modal Tabs Header */}
            <div className="flex border-b border-slate-100 shrink-0 bg-slate-50/50">
              <button
                onClick={() => { setActiveTab('itinerary'); setSubmitSuccess(false); }}
                className={`flex-1 py-4 text-center text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'itinerary' && !submitSuccess
                    ? 'border-[#8B5CF6] text-[#8B5CF6]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                📅 Day-by-Day Plan
              </button>
              <button
                onClick={() => { setActiveTab('details'); setSubmitSuccess(false); }}
                className={`flex-1 py-4 text-center text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'details' && !submitSuccess
                    ? 'border-[#8B5CF6] text-[#8B5CF6]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                🔍 Inclusions & Exclusions
              </button>
              <button
                onClick={() => setActiveTab('inquire')}
                className={`flex-1 py-4 text-center text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'inquire' || submitSuccess
                    ? 'border-[#8B5CF6] text-[#8B5CF6]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                💌 Quick Inquiry
              </button>
            </div>

            {/* Scrollable Tab Content */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8">
              
              {/* Day-by-Day Itinerary Tab */}
              {activeTab === 'itinerary' && !submitSuccess && (
                <div className="space-y-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                    <h3 className="font-display font-bold text-lg text-slate-900">Your Tailored Travel Story</h3>
                  </div>
                  
                  {/* Timeline structure */}
                  <div className="relative border-l border-slate-200 ml-3 pl-6 space-y-8 py-2">
                    {pkg.itinerary.map((dayPlan, idx) => (
                      <div key={idx} className="relative">
                        {/* Bullet point indicator */}
                        <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-2 border-[#8B5CF6] flex items-center justify-center text-[10px] font-bold text-[#8B5CF6] shadow-sm">
                          {dayPlan.day}
                        </span>

                        {/* Title */}
                        <h4 className="font-display font-bold text-base text-slate-900 leading-tight mb-2">
                          Day {dayPlan.day}: {dayPlan.title}
                        </h4>

                        {/* Description */}
                        <p className="font-sans text-xs text-slate-600 leading-relaxed mb-3">
                          {dayPlan.description}
                        </p>

                        {/* Custom micro highlights checklist */}
                        <div className="flex flex-wrap gap-1.5">
                          {dayPlan.activities.map((act, aIdx) => (
                            <span
                              key={aIdx}
                              className="text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5"
                            >
                              📍 {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions and Exclusions Tab */}
              {activeTab === 'details' && !submitSuccess && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column: Inclusions */}
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      What is Included
                    </h4>
                    <ul className="space-y-2.5">
                      {pkg.inclusions.map((inc, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Exclusions */}
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      What is Excluded
                    </h4>
                    <ul className="space-y-2.5">
                      {pkg.exclusions.map((exc, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2.5 text-xs text-slate-500 font-sans leading-relaxed">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Inquiry Form Tab */}
              {(activeTab === 'inquire' || submitSuccess) && (
                <div className="max-w-md mx-auto">
                  {!submitSuccess ? (
                    <div className="space-y-6">
                      <div className="text-center space-y-1.5">
                        <h3 className="font-display font-bold text-xl text-slate-900">Request Custom Pricing</h3>
                        <p className="text-xs text-slate-500 font-sans">
                          Let our travel specialists customize this tour specifically to your dates and party size.
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        {/* Name input */}
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-slate-400" />
                          </span>
                          <input
                            type="text"
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            className="block w-full pl-9 pr-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 glass-input rounded-xl focus:outline-none transition-all"
                          />
                        </div>

                        {/* Email / Phone group */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-4 w-4 text-[#8B5CF6]" />
                            </span>
                            <input
                              type="email"
                              required
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Email Address"
                              className="block w-full pl-9 pr-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 glass-input rounded-xl focus:outline-none transition-all"
                            />
                          </div>

                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone className="h-4 w-4 text-[#8B5CF6]" />
                            </span>
                            <input
                              type="tel"
                              required
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Phone Number"
                              className="block w-full pl-9 pr-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 glass-input rounded-xl focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Date / Guests group */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Calendar className="h-4 w-4 text-[#8B5CF6]" />
                            </span>
                            <input
                              type="date"
                              required
                              name="travelDate"
                              value={formData.travelDate}
                              onChange={handleInputChange}
                              className="block w-full pl-9 pr-3 py-2.5 text-xs text-slate-700 glass-input rounded-xl focus:outline-none transition-all"
                            />
                          </div>

                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-4 w-4 text-[#8B5CF6]" />
                            </span>
                            <select
                              name="guests"
                              value={formData.guests}
                              onChange={handleInputChange}
                              className="block w-full pl-9 pr-8 py-2.5 text-xs text-slate-700 glass-input rounded-xl focus:outline-none transition-all appearance-none cursor-pointer"
                            >
                              <option value="1">1 Guest</option>
                              <option value="2">2 Guests</option>
                              <option value="3">3 Guests</option>
                              <option value="4">4 Guests</option>
                              <option value="5">5+ Guests</option>
                            </select>
                          </div>
                        </div>

                        {/* Notes input */}
                        <div className="relative">
                          <span className="absolute top-3 left-3 flex items-center pointer-events-none">
                            <FileText className="h-4 w-4 text-[#8B5CF6]" />
                          </span>
                          <textarea
                            rows={3}
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="Do you have any specific requests? (e.g. wheelchair, vegetarian, honeymoon decor)"
                            className="block w-full pl-9 pr-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 glass-input rounded-xl focus:outline-none transition-all resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-purple-600/15 hover:shadow-purple-600/25 transition-all duration-300 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending Inquiry...
                            </>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              Submit Inquiry request
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto shadow-md">
                        <Check className="w-8 h-8 stroke-[3]" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-2xl text-slate-900">Inquiry Received</h3>
                        <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                          Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our premium travel curator has logged your request for <strong className="text-slate-800">{pkg.title}</strong>.
                        </p>
                      </div>

                      {/* Ticket id board */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 max-w-xs mx-auto text-left space-y-2.5">
                        <div className="flex justify-between items-center text-xs text-slate-500">
                          <span>Reference ID:</span>
                          <span className="font-mono font-bold text-[#8B5CF6] text-sm bg-[#8B5CF6]/5 px-2 py-0.5 rounded border border-[#8B5CF6]/10">
                            {inquiryId}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-xs text-slate-500">
                          <span>Date Logged:</span>
                          <span className="font-semibold text-slate-800">{new Date().toLocaleDateString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs text-slate-500">
                          <span>Est. Callback:</span>
                          <span className="font-semibold text-emerald-600 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Within 2 Hours
                          </span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={resetForm}
                          className="px-6 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          Submit another inquiry
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
