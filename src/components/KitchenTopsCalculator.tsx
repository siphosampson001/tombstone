import React, { useState } from 'react';
import { EDGE_PROFILES, BUSINESS_INFO } from '../data/memorialData';
import { UtensilsCrossed, Layers, Sparkles, Check, MessageCircle, Ruler, ShieldCheck, Phone } from 'lucide-react';

export const KitchenTopsCalculator: React.FC = () => {
  const [counterLengthM, setCounterLengthM] = useState<number>(4.2);
  const [counterWidthM, setCounterWidthM] = useState<number>(0.6);
  const [selectedEdge, setSelectedEdge] = useState<string>('bevel');
  const [sinkCutouts, setSinkCutouts] = useState<number>(1);
  const [hasHobCutout, setHasHobCutout] = useState<boolean>(true);
  const [windowSillQty, setWindowSillQty] = useState<number>(4);
  const [windowSillAvgM, setWindowSillAvgM] = useState<number>(1.5);

  // Approximate realistic Zimbabwe granite pricing per square meter and cutout
  const sqm = counterLengthM * counterWidthM;
  const sillTotalLinearM = windowSillQty * windowSillAvgM;

  // $160/sqm for Zimbabwe Black Granite slab supply & mirror polishing
  const slabCost = sqm * 165;
  // Edge treatment approx $25/linear meter
  const edgeCost = counterLengthM * 25;
  // Cutouts $45 each
  const cutoutCost = sinkCutouts * 45 + (hasHobCutout ? 45 : 0);
  // Window sills approx $35/linear meter cut, polished & drip grooved
  const sillsCost = sillTotalLinearM * 35;

  const totalEstimate = Math.round(slabCost + edgeCost + cutoutCost + sillsCost);

  const getWhatsAppLink = () => {
    const message = `Hello Lowveld Skilled Craftsmens,
I would like to request a quotation for Granite Kitchen Tops & Window Sills:

*Countertop Dimensions:* ${counterLengthM}m length x ${counterWidthM}m width (${sqm.toFixed(2)} m²)
*Edge Profile:* ${EDGE_PROFILES.find((e) => e.id === selectedEdge)?.name}
*Sink Cutouts:* ${sinkCutouts}
*Stove/Hob Cutout:* ${hasHobCutout ? 'Yes' : 'No'}
*Granite Window Sills:* ${windowSillQty} units (~${sillTotalLinearM.toFixed(1)}m total)
*Estimated Total:* ~$${totalEstimate} USD

Please advise on site measurement in Chiredzi / nearby and timeline.`;

    return `https://wa.me/263775092867?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="kitchen-sills" className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-stone-100/60 text-stone-900 border-b border-stone-200 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 glow-orb-blue pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-blue-200/80 text-[#0052cc] text-xs font-bold uppercase tracking-wider shadow-xs">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#0052cc]" />
            Direct Architectural Stonework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 font-cinzel">
            Granite Kitchen Tops & Weatherproof Window Sills
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Precision cutting, mirror diamond polishing, and custom edge profiling from our Chiredzi workshop. Calculate your materials and installation estimate below.
          </p>
        </div>

        {/* 2-Column Grid: Visual & Benefits on Left, Calculator on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-white/80 shadow-2xl bg-stone-900 relative group">
              <img
                src="/src/assets/images/granite_kitchen_countertop_1788388320370.jpg"
                alt="Polished Zimbabwe Black Granite Kitchen Island and Window Sills"
                className="w-full h-84 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl glass-panel-dark text-white border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Diamond Mirror Finish
                </div>
                <h4 className="text-base font-bold font-cinzel text-white">
                  Zimbabwe Black Granite Kitchen Islands & Matching Sills
                </h4>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Heat-proof against boiling pots, scratch-resistant, and impervious to hot cooking oils and citrus acids.
                </p>
              </div>
            </div>

            {/* Quality Points with Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/80 shadow-md space-y-2">
                <div className="flex items-center gap-2.5 text-stone-950 font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span>100% Heat-Proof</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Place boiling pots directly from the stove onto the stone without scorch marks, cracks, or warping.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/80 shadow-md space-y-2">
                <div className="flex items-center gap-2.5 text-[#0052cc] font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4 text-[#0052cc]" />
                  </div>
                  <span>Exterior Window Sills</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Engineered with undermount drip grooves to channel heavy Lowveld rainwater away from wall plaster.
                </p>
              </div>
            </div>

            {/* Workshop Address Banner Styled in Glass Royal Blue */}
            <div className="glass-panel-blue text-white p-5 rounded-2xl border border-white/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-blue-100 block font-medium">Bring your architectural plans to:</span>
                <span className="font-extrabold text-white text-sm">{BUSINESS_INFO.address}</span>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean[0]}`}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 font-extrabold text-white transition-all shadow-md shrink-0 flex items-center gap-2 hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Workshop</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Estimator Form with Glassmorphism */}
          <div className="lg:col-span-6 glass-panel rounded-3xl border border-white/80 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-100/80 flex items-center justify-center text-red-600 shrink-0">
                  <Ruler className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-950 font-cinzel">
                  Dimension & Cost Estimator
                </h3>
              </div>
              <span className="text-xs font-bold text-[#0052cc] bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200/60 backdrop-blur-xs">
                Direct Workshop Rates
              </span>
            </div>

            {/* Countertop Dimensions */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                1. Kitchen Countertop Dimensions (Meters)
              </label>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel-hover p-3.5 rounded-2xl bg-white/50 border border-stone-200/80">
                  <div className="flex justify-between text-xs text-stone-600 mb-2">
                    <span className="font-medium">Run Length:</span>
                    <span className="font-bold text-stone-900">{counterLengthM} m</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="12.0"
                    step="0.2"
                    value={counterLengthM}
                    onChange={(e) => setCounterLengthM(parseFloat(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                </div>

                <div className="glass-panel-hover p-3.5 rounded-2xl bg-white/50 border border-stone-200/80">
                  <div className="flex justify-between text-xs text-stone-600 mb-2">
                    <span className="font-medium">Counter Width:</span>
                    <span className="font-bold text-stone-900">{counterWidthM} m</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="1.2"
                    step="0.05"
                    value={counterWidthM}
                    onChange={(e) => setCounterWidthM(parseFloat(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                </div>
              </div>

              <div className="text-[11px] text-stone-600 glass-pill p-2.5 rounded-xl border border-stone-200/80 flex items-center justify-between">
                <span>Calculated Surface Area:</span>
                <strong className="text-stone-950 font-mono text-xs">{sqm.toFixed(2)} m²</strong>
              </div>
            </div>

            {/* Edge Profile Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                2. Select Edge Profile
              </label>

              <div className="grid grid-cols-2 gap-3">
                {EDGE_PROFILES.map((edge) => (
                  <button
                    key={edge.id}
                    onClick={() => setSelectedEdge(edge.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedEdge === edge.id
                        ? 'border-red-600 bg-red-50/90 text-stone-900 font-semibold shadow-md ring-2 ring-red-600/20'
                        : 'border-stone-200/80 glass-panel-hover bg-white/50 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="text-xs font-bold">{edge.name}</div>
                    <div className="text-[10px] text-stone-500 mt-0.5">{edge.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Cutouts */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                3. Kitchen Openings & Cutouts
              </label>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl border border-stone-200/80 bg-white/50">
                  <div className="text-xs font-bold text-stone-800 mb-2">Sink Cutouts</div>
                  <div className="flex items-center gap-2">
                    {[0, 1, 2].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSinkCutouts(num)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                          sinkCutouts === num
                            ? 'bg-red-600 text-white shadow-xs'
                            : 'glass-pill text-stone-700 hover:bg-white border border-stone-200'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-stone-200/80 bg-white/50 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-stone-800">Stove / Hob Cutout</div>
                    <div className="text-[10px] text-stone-500">Smooth beveled edge</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasHobCutout}
                    onChange={(e) => setHasHobCutout(e.target.checked)}
                    className="w-4 h-4 accent-red-600 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Window Sills */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                4. Granite Window Sills
              </label>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl border border-stone-200/80 bg-white/50">
                  <div className="flex justify-between text-xs text-stone-600 mb-2">
                    <span>Units:</span>
                    <span className="font-bold text-stone-900">{windowSillQty} windows</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={windowSillQty}
                    onChange={(e) => setWindowSillQty(parseInt(e.target.value, 10))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                </div>

                <div className="p-3.5 rounded-2xl border border-stone-200/80 bg-white/50">
                  <div className="flex justify-between text-xs text-stone-600 mb-2">
                    <span>Avg Length:</span>
                    <span className="font-bold text-stone-900">{windowSillAvgM} m</span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="3.0"
                    step="0.1"
                    value={windowSillAvgM}
                    onChange={(e) => setWindowSillAvgM(parseFloat(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Estimated Total & Action */}
            <div className="pt-4 border-t border-stone-200/80 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-stone-500 block font-medium">Estimated Material & Fabrication:</span>
                  <span className="text-3xl font-black text-stone-950 font-cinzel">
                    ${totalEstimate} <span className="text-xs text-stone-500 font-normal">USD</span>
                  </span>
                </div>
                <div className="text-right text-[11px] text-stone-500 font-medium">
                  Includes diamond edge polishing
                </div>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Request Measurement & Quote on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
