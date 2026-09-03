import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Menu, X, Hammer, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/memorialData';

interface NavbarProps {
  onOpenCardModal?: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'services', label: 'Specialties' },
    { id: 'catalog', label: 'Tombstones & Memorials' },
    { id: 'customizer', label: 'Live Memorial Designer' },
    { id: 'kitchen-sills', label: 'Kitchen Tops & Sills' },
    { id: 'mining', label: 'Mining & Quarrying' },
    { id: 'gallery', label: 'Portfolio' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/85 text-stone-900 shadow-sm border-b border-white/60 transition-all">
      {/* Top Utility Bar with Direct Workshop Contact */}
      <div className="bg-[#0052cc]/95 backdrop-blur-md px-4 py-2 text-xs text-white shadow-inner border-b border-blue-600/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-blue-50 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>{BUSINESS_INFO.address}, Chiredzi</span>
            </span>
            <span className="hidden sm:inline-block text-blue-300/60">|</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-amber-200 transition-colors text-blue-100"
            >
              <Mail className="w-3.5 h-3.5 text-blue-200 shrink-0" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-blue-100/90 hidden lg:inline text-[11px] font-medium uppercase tracking-wider">
              Direct Workshop Line:
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean[0]}`}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-amber-300 transition-colors bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/20"
            >
              <Phone className="w-3 h-3 text-amber-300 shrink-0" />
              <span>{BUSINESS_INFO.phoneNumbers[0]}</span>
            </a>
            <span className="text-blue-300 hidden sm:inline">/</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean[1]}`}
              className="hidden sm:inline-flex items-center gap-1 font-bold text-white hover:text-amber-300 transition-colors"
            >
              <span>{BUSINESS_INFO.phoneNumbers[1]}</span>
            </a>

            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 ml-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Genuine Zimbabwe Granite</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name - Vivid Red & Royal Blue */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-600/25 border border-red-500/40 shrink-0 group-hover:scale-105 transition-all duration-300">
              <Hammer className="w-6 h-6 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-red-600 font-cinzel">
                  LOWVELD
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 font-cinzel">
                  SKILLED CRAFTSMENS
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider">
                <span className="text-stone-800 font-cinzel">MAWERE TOMBSTONES</span>
                <span className="text-stone-400">•</span>
                <span className="text-[#0052cc] font-extrabold uppercase tracking-wide">EXPLORATION & MINING</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items with modern glass pill hover states */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'text-red-600 bg-red-50/80 shadow-xs border border-red-200/60 font-bold'
                    : 'text-stone-700 hover:text-red-600 hover:bg-stone-100/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => handleNavClick('customizer')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-wide shadow-sm transition-all hover:scale-105 cursor-pointer border border-stone-700"
            >
              <span>Design Memorial</span>
            </button>
            <a
              href={`https://wa.me/263775092867?text=${encodeURIComponent(
                'Hello Lowveld Skilled Craftsmens / Mawere Tombstones, I would like to inquire about your custom granite services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`https://wa.me/263775092867`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-600 text-white shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-800 hover:bg-stone-100/80 backdrop-blur-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Glassmorphism */}
      {mobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-2xl bg-white/95 border-t border-stone-200/80 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeSection === item.id
                  ? 'bg-red-50 text-red-600 font-bold border border-red-200'
                  : 'text-stone-700 hover:bg-stone-100/80 hover:text-red-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-200/80 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean[0]}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 text-stone-900 font-bold text-sm hover:bg-slate-200 shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call: {BUSINESS_INFO.phoneNumbers[0]}</span>
            </a>
            <a
              href={`https://wa.me/263775092867?text=${encodeURIComponent(
                'Hello Mawere Tombstones, I would like to inquire about custom granite monuments and stonework.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (+263 77 509 2867)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

