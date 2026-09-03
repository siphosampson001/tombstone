import React from 'react';
import { Shield, Sparkles, MapPin, ArrowRight, MessageCircle, Phone, Award, Mail, Hammer } from 'lucide-react';
import { BUSINESS_INFO } from '../data/memorialData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenCardModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-white via-slate-50/50 to-stone-100 text-stone-900 overflow-hidden pt-8 pb-16 lg:py-20 border-b border-stone-200">
      {/* Ambient glassmorphism glowing orbs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] glow-orb-red rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] glow-orb-blue rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Direct Credentials & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Glass Pill Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-white/80 shadow-xs text-xs font-semibold text-stone-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-red-600 font-bold uppercase tracking-wider">Chiredzi Master Stonemasons</span>
              <span className="text-stone-300">•</span>
              <span className="text-[#0052cc] font-bold">100% Zimbabwe Black Granite</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-red-600 font-black tracking-wider text-2xl sm:text-3xl uppercase font-cinzel">
                {BUSINESS_INFO.primaryBrand}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight font-cinzel">
                Enduring Granite Memorials & Architectural Stone Craftsmanship
              </h1>
              <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#0052cc] font-cinzel">
                <span>{BUSINESS_INFO.divisionBrand}</span>
                <span className="text-stone-400">•</span>
                <span className="text-[#0052cc] font-extrabold">{BUSINESS_INFO.subtitle}</span>
              </div>
            </div>

            {/* Subtext with the exact specializations */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl">
              Specialists in bespoke <strong className="text-red-700 font-bold">Tombstones</strong>, precision <strong className="text-stone-900 font-semibold">Stone Cutting & Mirror Polishing</strong>, custom <strong className="text-[#0052cc] font-bold">Kitchen Tops</strong>, weatherproof <strong className="text-stone-900 font-semibold">Window Sills</strong>, artistic <strong className="text-stone-900 font-semibold">Stone Curving</strong>, and structural <strong className="text-stone-900 font-semibold">Carpentry</strong>. Direct from our Chiredzi workshop.
            </p>

            {/* Royal Blue Glassmorphism Credentials Panel */}
            <div className="rounded-2xl glass-panel-blue text-white p-5 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-100">
                  <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="text-white font-bold">{BUSINESS_INFO.address}, Chiredzi</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-blue-100">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <a href={`tel:${BUSINESS_INFO.phoneClean[0]}`} className="text-white font-bold hover:text-amber-200">
                      {BUSINESS_INFO.phoneNumbers[0]}
                    </a>
                    <span>/</span>
                    <a href={`tel:${BUSINESS_INFO.phoneClean[1]}`} className="text-white font-bold hover:text-amber-200">
                      {BUSINESS_INFO.phoneNumbers[1]}
                    </a>
                  </div>
                  <span className="hidden sm:inline text-blue-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-200 shrink-0" />
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-amber-200">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-[#0052cc] font-extrabold text-xs shadow-md transition-all shrink-0 cursor-pointer hover:scale-105"
              >
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Visit Showyard</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('customizer')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all cursor-pointer hover:translate-y-[-2px]"
              >
                <span>Design Custom Memorial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('catalog')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel text-stone-900 font-bold text-sm shadow-md transition-all hover:bg-white cursor-pointer hover:translate-y-[-1px]"
              >
                <span>Tombstone Catalog</span>
              </button>

              <a
                href={`https://wa.me/263775092867?text=${encodeURIComponent(
                  'Hello Lowveld Skilled Craftsmens, I would like to request a quote for granite tombstones / kitchen tops.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md shadow-emerald-600/20 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* Glass Trust Metric Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200/80">
              <div className="space-y-0.5 glass-panel p-3 rounded-xl border border-white/60 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  <span>100% Solid</span>
                </div>
                <p className="text-xs text-stone-600 font-medium">Zimbabwe Black Granite</p>
              </div>

              <div className="space-y-0.5 glass-panel p-3 rounded-xl border border-white/60 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0052cc] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Mirror Finish</span>
                </div>
                <p className="text-xs text-stone-600 font-medium">Diamond disc water polish</p>
              </div>

              <div className="space-y-0.5 glass-panel p-3 rounded-xl border border-white/60 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Direct Quarry</span>
                </div>
                <p className="text-xs text-stone-600 font-medium">Exploration & mining rates</p>
              </div>

              <div className="space-y-0.5 glass-panel p-3 rounded-xl border border-white/60 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Fitting & Setup</span>
                </div>
                <p className="text-xs text-stone-600 font-medium">Chiredzi & nationwide</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase with Glassmorphism Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame - Polished Granite Monument */}
              <div className="relative rounded-3xl overflow-hidden border border-white/40 shadow-2xl bg-stone-950 group">
                <img
                  src="/src/assets/images/granite_tombstone_memorial_1788388305103.jpg"
                  alt="Mawere Polished Black Granite Memorial Tombstone"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>

                {/* Overlaid Glassmorphism Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel-dark text-white border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                        Signature Memorial Craft
                      </span>
                      <h4 className="text-base font-bold text-white font-cinzel">
                        "NKOSI" Executive Black Granite Memorial
                      </h4>
                      <p className="text-xs text-stone-300">
                        Arched apex, ceramic photo medallion & gold leaf lettering
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate('customizer')}
                      className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shrink-0 cursor-pointer transition-all shadow-md ml-2 hover:scale-105"
                    >
                      Customize
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Mini Glass Tile 1: Kitchen tops & window sills */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-2xl glass-panel border border-white/80 shadow-2xl max-w-[250px] animate-fadeIn">
                <img
                  src="/src/assets/images/granite_kitchen_countertop_1788388320370.jpg"
                  alt="Granite Kitchen Island and Sills"
                  className="w-14 h-14 rounded-xl object-cover border border-stone-200 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-stone-900">Kitchen Tops & Sills</div>
                  <div className="text-[11px] text-[#0052cc] font-semibold">Precision cut & beveled</div>
                </div>
              </div>

              {/* Floating Mini Glass Tile 2: Workshop craftsmanship */}
              <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-panel border border-white/80 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                <span className="text-xs font-bold text-stone-900">
                  Stand D749 Masasa Dr, Chiredzi
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

