import React from 'react';
import { BUSINESS_INFO } from '../data/memorialData';
import { Mountain, Sparkles, Gem, Hammer, CheckCircle, ShieldCheck, Phone, ArrowRight } from 'lucide-react';

export const CraftsmanshipMining: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Exploration & Quarry Extraction",
      desc: "We explore and select solid geological veins of authentic Zimbabwe Black Granite, testing for structural density and micro-fractures before blocks are transported to our Chiredzi cutting yard.",
      icon: Mountain
    },
    {
      step: "02",
      title: "Diamond Saw Precision Cutting",
      desc: "Raw blocks are sliced with industrial diamond continuous-rim blades with water flood cooling, ensuring laser-straight tolerances down to 1 millimeter for countertops, sills, and tombstone slabs.",
      icon: Sparkles
    },
    {
      step: "03",
      title: "7-Stage Diamond Mirror Polishing",
      desc: "Our masons polish stone faces through seven grit stages (from 50-grit coarse to 3000-grit ultra-fine diamond pads) yielding a glass-like reflective obsidian finish that never dulls.",
      icon: Gem
    },
    {
      step: "04",
      title: "Curving, Curious Products & Joinery",
      desc: "Master sculptors hand-curve intricate crests, floral borders, and custom curios, while our carpentry department fits reinforced timber plinths and transport frames.",
      icon: Hammer
    }
  ];

  return (
    <section id="mining" className="relative py-20 bg-gradient-to-b from-stone-100/60 via-slate-50 to-white text-stone-900 border-b border-stone-200 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 glow-orb-red pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-red-200/80 text-red-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Mountain className="w-3.5 h-3.5 text-red-600" />
            Mawere Tombstones Exploration & Mining
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 font-cinzel">
            From Lowveld Geological Rock to Eternal Memorials
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Operating our own exploration, stone sawing, and diamond polishing infrastructure allows Lowveld Skilled Craftsmens to guarantee 100% pure Zimbabwe granite with no synthetic resins or artificial coatings.
          </p>
        </div>

        {/* Big Visual & Process Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Workshop Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/80 shadow-2xl bg-stone-950 group">
              <img
                src="/src/assets/images/granite_workshop_cutting_1788388335031.jpg"
                alt="Skilled stonemason cutting and water polishing black granite in Chiredzi workshop"
                className="w-full h-84 sm:h-100 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl glass-panel-dark text-white border border-white/10 backdrop-blur-xl">
                <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block">
                  Chiredzi Workshop Yard
                </span>
                <p className="text-sm text-white font-bold font-cinzel mt-0.5">
                  Stand D749 Masasa Drive, Chiredzi • Zimbabwe
                </p>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Water-cooled industrial cutting saws & precision hand diamond polishers
                </p>
              </div>
            </div>
          </div>

          {/* Right: Exploration & Quality Credo */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-950 font-cinzel leading-snug">
                Why Zimbabwe Black Granite is Globally Renowned
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Zimbabwe Black Granite is classified by mineralogists as one of the hardest, most uniform gabbroic and norite rock formations on Earth. Unlike softer marbles or porous sandstones, genuine Zimbabwe Black will not absorb groundwater or stain from surrounding red soil.
              </p>
            </div>

            <div className="space-y-3.5">
              {[
                "Zero Artificial Resins: Our mirror finish is achieved purely through mechanical diamond friction and water cooling, not chemical sealers that peel in the sun.",
                "Direct Exploration Advantage: Because we oversee mining and raw extraction, you bypass multiple middlemen and save hundreds of dollars.",
                "Laser Precision & Chisel Carving: Combining modern laser etching for crisp photographic portraits with deep chisel carving for prominent family clan names.",
                "Local Pride: Rooted firmly in Chiredzi, supporting local artisans, stonemasons, and carpenters."
              ].map((point, idx) => (
                <div key={idx} className="glass-panel p-3.5 rounded-2xl border border-white/80 shadow-xs flex items-start gap-3 text-xs sm:text-sm text-stone-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="glass-panel-blue p-5 rounded-2xl border border-white/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <div>
                <span className="text-xs font-medium text-blue-100">Questions about stone grades & tolerances?</span>
                <div className="text-base font-bold text-white font-cinzel">Speak with Lead Mason Enock</div>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean[0]}`}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs transition-all shadow-md shrink-0 flex items-center gap-2 hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0775 092 867</span>
              </a>
            </div>

          </div>

        </div>

        {/* 4-Step Process Timeline with Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover border border-white/80 rounded-3xl p-6 relative group transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-red-600 font-cinzel">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl glass-pill flex items-center justify-center text-[#0052cc] group-hover:scale-110 group-hover:bg-[#0052cc] group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-stone-950 font-cinzel mb-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
