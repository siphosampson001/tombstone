import React from 'react';
import {
  SERVICES_LIST,
  BUSINESS_INFO
} from '../data/memorialData';
import {
  Sparkles,
  UtensilsCrossed,
  Layers,
  Gem,
  Hammer,
  Mountain,
  CheckCircle2,
  ArrowRight,
  Landmark,
  Phone,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

interface ServicesOverviewProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Monument':
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-red-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0052cc]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-red-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#0052cc]" />;
      case 'Gem':
        return <Gem className="w-6 h-6 text-amber-600" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-red-600" />;
      case 'Mountain':
        return <Mountain className="w-6 h-6 text-[#0052cc]" />;
      default:
        return <Sparkles className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-stone-100/60 via-slate-50 to-white text-stone-900 border-b border-stone-200 overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 glow-orb-blue pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 glow-orb-red pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-red-200/80 text-red-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            Master Masonry & Stonework Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 font-cinzel">
            Our Core Craftsmanship Specialties
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Serving Chiredzi, the Lowveld, and nationwide Zimbabwe with end-to-end stone exploration, custom fabrication, and meticulous on-site installation.
          </p>
        </div>

        {/* Services Grid with Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between group border border-white/80 shadow-lg relative overflow-hidden"
            >
              {/* Subtle accent top border indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-[#0052cc] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/90 border border-stone-200/80 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-red-50/80 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold text-[#0052cc] bg-blue-100/60 border border-blue-200/60 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                    Specialty #{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-stone-950 tracking-tight font-cinzel group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-[#0052cc] mt-1 uppercase tracking-wide">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2.5 pt-3 border-t border-stone-200/60">
                  {service.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/60">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl glass-pill hover:bg-red-600 hover:text-white text-stone-800 text-xs font-bold transition-all border border-stone-300/80 hover:border-red-600 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Explore {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Glassmorphism Action Panel */}
        <div className="mt-14 glass-panel-blue text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/20 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <h4 className="text-2xl font-bold font-cinzel text-white">
              Need a Custom Stone Project or Grave Site Inspection in Chiredzi?
            </h4>
            <p className="text-sm text-blue-100 max-w-2xl leading-relaxed">
              We travel to grave sites across Chiredzi, Hippo Valley, and rural homesteads for exact measurements, or measure your residential kitchen counter layouts directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0 z-10">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean[0]}`}
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-[#0052cc] text-xs font-extrabold transition-all shadow-lg flex items-center gap-2 hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#0052cc]" />
              <span>Call: {BUSINESS_INFO.phoneNumbers[0]}</span>
            </a>
            <a
              href={`https://wa.me/263775092867?text=${encodeURIComponent(
                'Hello Lowveld Skilled Craftsmens, I would like to schedule a site inspection or quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition-all shadow-lg flex items-center gap-2 hover:scale-105 border border-white/20"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Inspection</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
