/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, Mail, Phone, MapPin, Sparkles, Shield, RefreshCw } from 'lucide-react';

interface FooterProps {
  onInquireClick: () => void;
  onExploreClick: () => void;
}

export default function Footer({ onInquireClick, onExploreClick }: FooterProps) {
  const links = [
    { label: 'Featured Tours', action: onExploreClick },
    { label: 'Why Wanderly', target: 'why-wanderly' },
    { label: 'Guest Reviews', target: 'testimonials' },
  ];

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6D28D9] via-[#8B5CF6] to-[#C084FC] flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  Wanderly
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-[#C084FC] font-semibold -mt-1">
                  Holidays
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Handcrafting elite domestic travel experiences across India’s finest destinations. Uncompromising 5-star comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-xs">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => link.action ? link.action() : handleScrollTo(link.target!)}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onInquireClick}
                className="text-left hover:text-white transition-colors cursor-pointer text-[#C084FC] font-medium"
              >
                Inquire & Customize
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Contact Us</h4>
            <div className="space-y-3 text-xs font-sans">
              <a href="tel:+918796634808" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#8B5CF6]" />
                <span>Contact: +918796634808</span>
              </a>
              <a href="mailto:curator@wanderlyholidays.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#8B5CF6]" />
                <span>curator@wanderlyholidays.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                <span>Level 4, Imperial Tower, MG Road, Bengaluru, 560001</span>
              </div>
            </div>
          </div>

          {/* Guarantee / trustbadge */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Hallmarks</h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs">
                <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Insured Transfers</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Sparkles className="w-4 h-4 text-[#C084FC] shrink-0" />
                <span>Curated Luxury Curators</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <RefreshCw className="w-4 h-4 text-sky-400 shrink-0" />
                <span>No-Questions Cancellation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separator line */}
        <div className="h-px bg-slate-800 w-full mb-8" />

        {/* Bottom copyright and compliance */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-sans">
            © {new Date().getFullYear()} Wanderly Holidays. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500">
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Domestic GST Invoices</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
