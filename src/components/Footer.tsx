import React from 'react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/memorialData';
import { MapPin, Phone, Mail, MessageCircle, Hammer, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCardModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCardModal }) => {
  return (
    <footer className="relative bg-stone-950 text-stone-300 border-t-2 border-[#0052cc] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-10 w-96 h-96 glow-orb-blue pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 glow-orb-red pointer-events-none opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-lg ring-2 ring-red-600/30">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black text-red-500 tracking-wider font-cinzel block leading-tight">
                  {BUSINESS_INFO.primaryBrand}
                </span>
                <span className="text-xs font-bold text-blue-400 font-cinzel">
                  {BUSINESS_INFO.divisionBrand} • {BUSINESS_INFO.subtitle}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline}. Rooted in the rich mineral quarries of Zimbabwe, bringing dignity to memorials and elegance to modern homes.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-stone-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.province}</span>
              </div>
              <div className="flex items-center gap-2.5 text-stone-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean[0]}`} className="hover:text-white font-semibold">
                  {BUSINESS_INFO.phoneNumbers[0]}
                </a>
                <span>/</span>
                <a href={`tel:${BUSINESS_INFO.phoneClean[1]}`} className="hover:text-white font-semibold">
                  {BUSINESS_INFO.phoneNumbers[1]}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-stone-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white font-semibold">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Specialties */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-cinzel">
              Specialist Services
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate(srv.id === 'tombstones' ? 'catalog' : srv.id === 'kitchen-tops' || srv.id === 'window-sills' ? 'kitchen-sills' : 'services')}
                    className="hover:text-red-400 transition-colors cursor-pointer text-left flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-125 transition-transform"></span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-cinzel">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-red-400 transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-red-400 transition-colors cursor-pointer">
                  Tombstone Catalog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('customizer')} className="hover:text-red-400 transition-colors cursor-pointer">
                  Memorial Designer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kitchen-sills')} className="hover:text-red-400 transition-colors cursor-pointer">
                  Kitchen Tops & Sills
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mining')} className="hover:text-red-400 transition-colors cursor-pointer">
                  Mining & Exploration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-red-400 transition-colors cursor-pointer">
                  Works Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-red-400 transition-colors cursor-pointer">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Call to Action */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-cinzel">
              Immediate Assistance
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Have a sketch, dimension list, or photo from a cemetery? Send it to our craftsmen via WhatsApp for instant estimation.
            </p>

            <a
              href={`https://wa.me/263775092867?text=${encodeURIComponent(
                'Hello Mawere Tombstones, I would like to inquire about granite work.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: 0775 092 867</span>
            </a>

            <button
              onClick={onOpenCardModal}
              className="w-full py-3 px-4 rounded-xl glass-panel-dark text-white font-bold text-xs border border-white/10 hover:border-white/30 transition-all cursor-pointer flex items-center justify-center gap-2 hover:bg-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-xs"></span>
              <span>View Business Card & Credentials</span>
            </button>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div>
            © {new Date().getFullYear()} Lowveld Skilled Craftsmens & Mawere Tombstones. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-stone-300 font-medium">
            <span>Stand D749 Masasa Drive, Chiredzi, Zimbabwe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
