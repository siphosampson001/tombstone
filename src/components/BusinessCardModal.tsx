import React from 'react';
import { X, Phone, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/memorialData';

interface BusinessCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessCardModal: React.FC<BusinessCardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel-dark rounded-3xl shadow-2xl overflow-hidden border border-white/20 text-stone-100">
        
        {/* Modal Header */}
        <div className="px-6 py-4 flex items-center justify-between text-white border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-xs"></span>
            <h3 className="text-sm font-bold tracking-wide uppercase font-cinzel">
              Company Credentials & Contact Details
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Canvas - Structured company card presentation */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-stone-900/60 to-stone-950/80 flex flex-col items-center justify-center">
          
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col sm:flex-row relative">
            
            {/* Left/Bottom Blue Stripe */}
            <div className="bg-[#0052cc] sm:w-32 p-5 text-white flex flex-col justify-between items-center sm:items-start text-center sm:text-left shrink-0">
              <div className="space-y-4 text-xs leading-tight">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-blue-200">Address</span>
                  <p className="font-bold text-[11px] text-white mt-1">
                    Stand D749 Masasa Drive, Chiredzi
                  </p>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-blue-200">Contact</span>
                  <p className="font-bold text-[11px] text-amber-300 mt-1">
                    0775 092 867
                  </p>
                  <p className="font-bold text-[11px] text-amber-300">
                    0774 565 131
                  </p>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-blue-200">Email</span>
                  <p className="text-[10px] text-white break-all mt-1 font-medium">
                    enockshons@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Main Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-stone-900">
              {/* Header */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-red-600 tracking-tight font-cinzel leading-none">
                  LOWVELD SKILLED CRAFTSMENS
                </h2>
                <p className="text-[10px] sm:text-[11px] text-stone-700 font-semibold mt-1.5 leading-snug">
                  Specialists In Tombstones, Cutting & Polishing, Kitchen Tops, Window Sills, Curving, Curious Products, & Carpentry
                </p>
              </div>

              {/* Center Division Banner */}
              <div className="py-2.5 border-y border-stone-200 text-center bg-stone-50 rounded-lg">
                <div className="text-lg font-black text-stone-950 tracking-wider font-cinzel">
                  MAWERE TOMBSTONES
                </div>
                <div className="text-xs font-extrabold text-[#0052cc] tracking-widest uppercase">
                  EXPLORATION & MINING
                </div>
              </div>

              {/* Graphical imagery preview */}
              <div className="grid grid-cols-2 gap-3 items-center">
                {/* Kitchen tops */}
                <div className="rounded-xl overflow-hidden border border-stone-300 bg-stone-900 h-24 relative group">
                  <img
                    src="/src/assets/images/granite_kitchen_countertop_1788388320370.jpg"
                    alt="Polished Kitchen Tops & Sills"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1 left-1 right-1 text-[8px] bg-stone-900/90 text-white font-bold px-1.5 py-0.5 rounded text-center truncate">
                    Kitchen Tops & Sills
                  </div>
                </div>

                {/* Memorial Tombstone */}
                <div className="rounded-xl overflow-hidden border border-stone-300 bg-stone-950 h-24 relative group">
                  <img
                    src="/src/assets/images/granite_tombstone_memorial_1788388305103.jpg"
                    alt="Nkosi Granite Memorial"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1 left-1 right-1 text-[8px] bg-stone-900/90 text-amber-300 font-extrabold px-1.5 py-0.5 rounded text-center truncate">
                    "NKOSI" Memorial
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-stone-500 text-center font-medium">
                Certified Zimbabwe Granite Craftsmen • Masvingo Province
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-white/5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-300">
            Direct Lines: <strong className="text-white">0775 092 867</strong> / <strong className="text-white">0774 565 131</strong>
          </div>

          <div className="flex gap-2.5">
            <a
              href={`https://wa.me/263775092867?text=${encodeURIComponent(
                'Hello Lowveld Skilled Craftsmens / Mawere Tombstones, I am contacting you from the website.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl glass-pill text-white text-xs font-semibold hover:bg-white/20 transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
