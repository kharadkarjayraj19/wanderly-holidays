/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onExploreClick: () => void;
  onInquireClick: () => void;
}

export default function Navbar({ onExploreClick, onInquireClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Explore Tours', action: onExploreClick },
    { label: 'Why Wanderly', target: 'why-wanderly' },
    { label: 'Guest Reviews', target: 'testimonials' },
  ];

  const handleScrollToSection = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-purple-900/5 py-3.5 border-b border-purple-100/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6D28D9] via-[#8B5CF6] to-[#C084FC] flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
                <Compass className="w-5.5 h-5.5 animate-spin-slow" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#C084FC] bg-clip-text text-transparent">
                  Wanderly
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold -mt-1">
                  Holidays
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => item.action ? item.action() : handleScrollToSection(item.target!)}
                  className="font-sans text-sm font-semibold text-slate-600 hover:text-[#8B5CF6] transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B5CF6] after:transition-all hover:after:w-full"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-5">
              <a 
                href="tel:+918796634808" 
                className="flex items-center gap-2 text-slate-600 hover:text-[#8B5CF6] font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8B5CF6]" />
                <span className="hidden lg:inline">Contact: +918796634808</span>
              </a>
              <button
                onClick={onInquireClick}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white font-bold text-sm shadow-md shadow-purple-600/15 hover:shadow-purple-600/25 hover:opacity-95 transition-all duration-300 transform active:scale-98 flex items-center gap-1.5 cursor-pointer"
              >
                Plan My Trip
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-slate-600 hover:text-[#8B5CF6] hover:bg-purple-50/50 transition-colors focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu slide-out */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white/90 backdrop-blur-xl border-b border-purple-100/40 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => item.action ? (item.action(), setMobileMenuOpen(false)) : handleScrollToSection(item.target!)}
                    className="block w-full text-left px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-purple-50/60 hover:text-[#8B5CF6] transition-all cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-purple-100/30 pt-4 px-3 flex flex-col gap-4">
                  <a 
                    href="tel:+918796634808" 
                    className="flex items-center gap-2 text-slate-600 hover:text-[#8B5CF6] font-semibold"
                  >
                    <Phone className="w-4 h-4 text-[#8B5CF6]" />
                    <span>Contact: +918796634808</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onInquireClick();
                    }}
                    className="w-full text-center py-3.5 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white font-bold shadow-md shadow-purple-600/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Plan My Trip
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
