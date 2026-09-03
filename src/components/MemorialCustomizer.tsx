import React, { useState } from 'react';
import { MemorialCustomizerState, TombstoneModel } from '../types';
import { GRANITE_COLORS, BUSINESS_INFO } from '../data/memorialData';
import {
  Sparkles,
  MessageCircle,
  Copy,
  Check,
  RotateCcw,
  Camera,
  Heart,
  BookOpen,
  Info,
  ShieldCheck
} from 'lucide-react';

interface MemorialCustomizerProps {
  initialState?: Partial<MemorialCustomizerState>;
}

export const MemorialCustomizer: React.FC<MemorialCustomizerProps> = ({ initialState }) => {
  const [copied, setCopied] = useState(false);

  const [state, setState] = useState<MemorialCustomizerState>({
    shape: initialState?.shape || 'executive',
    graniteColor: initialState?.graniteColor || 'black',
    letteringColor: initialState?.letteringColor || 'gold',
    baseText: initialState?.baseText || 'NKOSI',
    fullName: initialState?.fullName || 'Elizabeth Lily Sithole',
    sunriseDate: initialState?.sunriseDate || '14 May 1948',
    sunsetDate: initialState?.sunsetDate || '28 October 2023',
    epitaph:
      initialState?.epitaph ||
      'A loving mother, grandmother, and pillar of our family. Forever cherished in our hearts.',
    includePhotoMedallion:
      initialState?.includePhotoMedallion !== undefined
        ? initialState.includePhotoMedallion
        : true,
    includeSideVases:
      initialState?.includeSideVases !== undefined
        ? initialState.includeSideVases
        : true,
    includeKerbing:
      initialState?.includeKerbing !== undefined
        ? initialState.includeKerbing
        : false,
    specialNotes: initialState?.specialNotes || '',
  });

  // Calculate estimated price based on configuration
  const calculatePrice = () => {
    let base = 480;
    if (state.shape === 'executive') base += 250;
    if (state.shape === 'scroll') base += 180;
    if (state.shape === 'double') base += 350;
    if (state.shape === 'cross') base += 120;
    if (state.shape === 'heart') base += 140;

    if (state.graniteColor === 'emerald') base += 70;
    if (state.graniteColor === 'red') base += 50;

    if (state.includePhotoMedallion) base += 65;
    if (state.includeSideVases) base += 45;
    if (state.includeKerbing) base += 450;

    return base;
  };

  const estimatedTotal = calculatePrice();

  const handleCopySpec = () => {
    const text = `Lowveld Skilled Craftsmens / Mawere Tombstones Memorial Order Spec:
- Shape: ${state.shape.toUpperCase()}
- Granite Material: ${state.graniteColor.toUpperCase()}
- Base Family Name: ${state.baseText}
- Inscription Name: ${state.fullName}
- Dates: ${state.sunriseDate} - ${state.sunsetDate}
- Epitaph: "${state.epitaph}"
- Photo Medallion: ${state.includePhotoMedallion ? 'YES' : 'NO'}
- Side Vases: ${state.includeSideVases ? 'YES (Pair)' : 'NO'}
- Full Kerbing: ${state.includeKerbing ? 'YES' : 'NO'}
- Estimated Total: $${estimatedTotal} USD
- Workshop: Stand D749 Masasa Drive, Chiredzi`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateWhatsAppUrl = () => {
    const message = `Hello Mawere Tombstones (Lowveld Skilled Craftsmens),
I configured a custom memorial on your website:

*Model Shape:* ${state.shape.toUpperCase()}
*Granite:* ${state.graniteColor.toUpperCase()}
*Base Text:* ${state.baseText}
*Name on Stone:* ${state.fullName}
*Dates:* ${state.sunriseDate} to ${state.sunsetDate}
*Epitaph:* "${state.epitaph}"
*Porcelain Photo Medallion:* ${state.includePhotoMedallion ? 'Included' : 'None'}
*Granite Vases:* ${state.includeSideVases ? 'Yes' : 'No'}
*Full Kerbing:* ${state.includeKerbing ? 'Yes' : 'No'}
*Estimated Cost:* ~$${estimatedTotal} USD

Please confirm availability, stone cutting timeline, and installation at our cemetery/homestead.`;

    return `https://wa.me/263775092867?text=${encodeURIComponent(message)}`;
  };

  // Helper for simulated stone background
  const getGraniteBgClass = () => {
    switch (state.graniteColor) {
      case 'black':
        return 'granite-black';
      case 'grey':
        return 'granite-grey';
      case 'emerald':
        return 'granite-emerald';
      case 'red':
        return 'granite-red';
      default:
        return 'granite-black';
    }
  };

  // Helper for lettering classes
  const getLetteringClass = () => {
    switch (state.letteringColor) {
      case 'gold':
        return 'engraved-gold';
      case 'silver':
        return 'engraved-silver';
      case 'white':
        return 'engraved-white';
      default:
        return 'engraved-gold';
    }
  };

  return (
    <section id="customizer" className="relative py-20 bg-gradient-to-b from-stone-100/80 via-slate-100 to-white text-stone-900 border-b border-stone-200 overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 glow-orb-red pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 glow-orb-blue pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            Interactive 3D Memorial Designer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 font-cinzel">
            Design & Inscribe Your Tombstone Tribute
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Select authentic Zimbabwe granite materials, customize the memorial apex, and preview family inscriptions in real time with our Chiredzi workshop estimator.
          </p>
        </div>

        {/* 2-Column Layout: Controls on Left, Live Headstone Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) with Glassmorphism */}
          <div className="lg:col-span-7 glass-panel rounded-3xl border border-white/80 p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Step 1: Memorial Headstone Shape */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                1. Select Memorial Headstone Shape
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'executive', label: 'Executive Scallop Apex', desc: 'Carved crown & chiseled base' },
                  { id: 'arch', label: 'Classic Roman Arch', desc: 'Curved top perimeter' },
                  { id: 'scroll', label: 'Open Bible / Scroll', desc: 'Dual sculpted pages' },
                  { id: 'heart', label: 'Tribute Heart', desc: 'Heart shaped field' },
                  { id: 'cross', label: 'Celtic Cross Arch', desc: 'Carved cross apex' },
                  { id: 'double', label: 'Companion Double', desc: 'Twin tribute stone' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setState((prev) => ({ ...prev, shape: item.id as any }))}
                    className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                      state.shape === item.id
                        ? 'bg-red-50/90 border-red-600 text-red-700 shadow-md ring-2 ring-red-600/30 font-medium'
                        : 'glass-panel-hover border-stone-200/80 text-stone-700 hover:border-stone-400 bg-white/50'
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight">{item.label}</div>
                    <div className="text-[10px] text-stone-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Granite Material & Color */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                2. Select Quarry Granite Stone
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {GRANITE_COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setState((prev) => ({ ...prev, graniteColor: color.id as any }))}
                    className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                      state.graniteColor === color.id
                        ? 'bg-blue-50/90 border-[#0052cc] ring-2 ring-[#0052cc]/30 text-[#0052cc] shadow-md'
                        : 'glass-panel-hover border-stone-200/80 text-stone-700 hover:border-stone-400 bg-white/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="w-4 h-4 rounded-full border border-stone-400 shadow-xs shrink-0"
                        style={{ backgroundColor: color.colorHex }}
                      ></span>
                      <span className="text-xs font-bold truncate">{color.name.split(' ')[0]}</span>
                    </div>
                    <div className="text-[10px] text-stone-500 line-clamp-1">{color.origin}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Lettering & Inscription Colors */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                3. Engraved Lettering Finish
              </label>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { id: 'gold', label: 'Gold Leaf Infill (Traditional & Sacred)', color: '#f59e0b' },
                  { id: 'white', label: 'Crisp Enamel White (High Contrast)', color: '#ffffff' },
                  { id: 'silver', label: 'Reflective Silver Metallic', color: '#94a3b8' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setState((prev) => ({ ...prev, letteringColor: opt.id as any }))}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 border cursor-pointer transition-all ${
                      state.letteringColor === opt.id
                        ? 'bg-slate-900 border-stone-900 text-white shadow-md'
                        : 'glass-panel-hover border-stone-200/80 text-stone-700 bg-white/60'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-stone-300 shrink-0" style={{ backgroundColor: opt.color }}></span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Text Inscription Fields */}
            <div className="space-y-4 pt-4 border-t border-stone-200/80">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                4. Memorial Text & Dedication
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Base Surname / Clan Name (e.g. NKOSI)
                  </label>
                  <input
                    type="text"
                    value={state.baseText}
                    onChange={(e) => setState((prev) => ({ ...prev, baseText: e.target.value.toUpperCase() }))}
                    placeholder="e.g. NKOSI or MAWERE"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-stone-900 font-bold tracking-wider text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Full Name of Beloved
                  </label>
                  <input
                    type="text"
                    value={state.fullName}
                    onChange={(e) => setState((prev) => ({ ...prev, fullName: e.target.value }))}
                    placeholder="e.g. Elizabeth Lily Sithole"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Sunrise (Birth Date)
                  </label>
                  <input
                    type="text"
                    value={state.sunriseDate}
                    onChange={(e) => setState((prev) => ({ ...prev, sunriseDate: e.target.value }))}
                    placeholder="e.g. 14 May 1948"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Sunset (Passing Date)
                  </label>
                  <input
                    type="text"
                    value={state.sunsetDate}
                    onChange={(e) => setState((prev) => ({ ...prev, sunsetDate: e.target.value }))}
                    placeholder="e.g. 28 October 2023"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                  Memorial Epitaph or Sacred Verse
                </label>
                <textarea
                  rows={2}
                  value={state.epitaph}
                  onChange={(e) => setState((prev) => ({ ...prev, epitaph: e.target.value }))}
                  placeholder="e.g. Rest in Eternal Peace. Gone from our sight, but never from our hearts."
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 leading-relaxed"
                />
              </div>
            </div>

            {/* Step 5: Toggles for Accessories & Kerbing */}
            <div className="space-y-3 pt-4 border-t border-stone-200/80">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                5. Accessories & Additional Stonework
              </label>

              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3.5 rounded-xl glass-panel-hover border border-stone-200/80 cursor-pointer bg-white/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Camera className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="text-xs font-semibold text-stone-900">
                        Porcelain Ceramic Photo Medallion
                      </div>
                      <div className="text-[10px] text-stone-500">
                        Weatherproof full-color or black & white photo fired at 900°C
                      </div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={state.includePhotoMedallion}
                    onChange={(e) => setState((prev) => ({ ...prev, includePhotoMedallion: e.target.checked }))}
                    className="w-4 h-4 accent-red-600 rounded"
                  />
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl glass-panel-hover border border-stone-200/80 cursor-pointer bg-white/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-[#0052cc]" />
                    <div>
                      <div className="text-xs font-semibold text-stone-900">
                        Dual Integrated Solid Granite Flower Vases
                      </div>
                      <div className="text-[10px] text-stone-500">
                        Matching polished granite flower vases mounted to the base
                      </div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={state.includeSideVases}
                    onChange={(e) => setState((prev) => ({ ...prev, includeSideVases: e.target.checked }))}
                    className="w-4 h-4 accent-red-600 rounded"
                  />
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl glass-panel-hover border border-stone-200/80 cursor-pointer bg-white/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Heart className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-xs font-semibold text-stone-900">
                        Full Grave Kerbing Walls & White Stone Chips
                      </div>
                      <div className="text-[10px] text-stone-500">
                        2.2m perimeter solid granite curbing covering entire grave plot
                      </div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={state.includeKerbing}
                    onChange={(e) => setState((prev) => ({ ...prev, includeKerbing: e.target.checked }))}
                    className="w-4 h-4 accent-red-600 rounded"
                  />
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Simulated Granite Headstone & Action Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* Live Granite Rendering Canvas in Deep Black Granite Presentation */}
            <div className="glass-panel-dark rounded-3xl border border-stone-700/60 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Simulated Inscription Preview
                </span>
                <span className="text-[11px] text-stone-400 font-mono">
                  Scale 1:10
                </span>
              </div>

              {/* The Headstone Simulation Box */}
              <div className="relative flex flex-col items-center justify-center pt-6 pb-2">
                
                {/* Main Headstone Body */}
                <div
                  className={`w-72 sm:w-80 min-h-[380px] p-6 rounded-t-3xl border-2 border-stone-500/40 relative shadow-2xl flex flex-col items-center justify-between transition-all duration-300 ${getGraniteBgClass()}`}
                >
                  {/* Subtle inner bevel highlight */}
                  <div className="absolute inset-1.5 rounded-t-2xl border border-stone-400/20 pointer-events-none"></div>

                  {/* Top Arch / Crest */}
                  <div className="text-center pt-2 space-y-1">
                    <div className="w-6 h-6 mx-auto flex items-center justify-center opacity-80 mb-1">
                      <span className={`text-lg font-cinzel ${getLetteringClass()}`}>†</span>
                    </div>

                    <div className={`text-[11px] font-extrabold uppercase tracking-widest font-cinzel ${getLetteringClass()}`}>
                      IN LOVING MEMORY OF
                    </div>
                  </div>

                  {/* Photo Medallion (If checked) */}
                  {state.includePhotoMedallion && (
                    <div className="relative my-2">
                      <div className="w-16 h-20 rounded-[50%] bg-stone-900 border-2 border-amber-400/80 shadow-lg overflow-hidden flex flex-col items-center justify-center p-1">
                        <div className="w-full h-full rounded-[50%] bg-stone-800 flex items-center justify-center text-center">
                          <Camera className="w-5 h-5 text-amber-300 opacity-60" />
                        </div>
                      </div>
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] bg-stone-950 px-1.5 py-0.5 rounded text-stone-300 whitespace-nowrap border border-stone-700">
                        Ceramic Photo
                      </span>
                    </div>
                  )}

                  {/* Loved One's Name */}
                  <div className="text-center px-2 py-1 space-y-1 w-full">
                    <h3 className={`text-lg sm:text-xl font-bold tracking-wide font-cinzel break-words ${getLetteringClass()}`}>
                      {state.fullName || 'Beloved Name'}
                    </h3>

                    {/* Dates */}
                    <div className={`text-[11px] font-medium tracking-wider font-cinzel ${getLetteringClass()}`}>
                      <span>Sunrise: {state.sunriseDate || '—'}</span>
                      <br />
                      <span>Sunset: {state.sunsetDate || '—'}</span>
                    </div>
                  </div>

                  {/* Epitaph Divider */}
                  <div className="w-3/4 h-[1px] bg-amber-400/30 my-2"></div>

                  {/* Epitaph verse */}
                  <div className="text-center px-3 pb-3">
                    <p className={`text-[10px] italic leading-relaxed ${getLetteringClass()}`}>
                      "{state.epitaph || 'Forever in our thoughts and prayers.'}"
                    </p>
                  </div>
                </div>

                {/* Granite Sub-Base with Raised Family Clan Name */}
                <div className="w-80 sm:w-92 h-14 bg-stone-950 rounded-sm border-2 border-stone-600 shadow-2xl flex items-center justify-between px-4 relative z-10">
                  {/* Left vase hole */}
                  <div className="w-5 h-5 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-800"></div>
                  </div>

                  {/* Chiseled Base Surname */}
                  <div className="text-center">
                    <span className={`text-base sm:text-lg font-black tracking-widest font-cinzel ${getLetteringClass()}`}>
                      {state.baseText || 'SURNAME'}
                    </span>
                    <div className="text-[8px] text-stone-500 tracking-wider font-mono">
                      LOWVELD SKILLED CRAFTSMENS
                    </div>
                  </div>

                  {/* Right vase hole */}
                  <div className="w-5 h-5 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-800"></div>
                  </div>
                </div>

                {/* Simulated Kerbing if enabled */}
                {state.includeKerbing && (
                  <div className="w-80 sm:w-92 h-10 mt-1 bg-stone-900/90 rounded border border-stone-700 flex items-center justify-center text-[10px] text-emerald-400 font-semibold">
                    ✓ Full 2.2m Granite Kerbing & White Marble Chips Included
                  </div>
                )}
              </div>

              {/* Price & Specs Summary Card */}
              <div className="mt-6 pt-6 border-t border-stone-800 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Estimated Fabrication Cost</span>
                    <span className="text-3xl font-black text-amber-400 font-cinzel">
                      ${estimatedTotal} <span className="text-xs text-stone-400 font-normal">USD</span>
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-200 bg-stone-800/80 px-3 py-1 rounded-full border border-stone-700 backdrop-blur-xs">
                    Includes Cutting & Engraving
                  </span>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Custom Design via WhatsApp</span>
                  </a>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCopySpec}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer backdrop-blur-xs"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied Specification!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-400" />
                          <span>Copy Order Spec</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() =>
                        setState({
                          shape: 'executive',
                          graniteColor: 'black',
                          letteringColor: 'gold',
                          baseText: 'NKOSI',
                          fullName: 'Elizabeth Lily Sithole',
                          sunriseDate: '14 May 1948',
                          sunsetDate: '28 October 2023',
                          epitaph:
                            'A loving mother, grandmother, and pillar of our family. Forever cherished in our hearts.',
                          includePhotoMedallion: true,
                          includeSideVases: true,
                          includeKerbing: false,
                          specialNotes: '',
                        })
                      }
                      className="p-2.5 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-400 hover:text-white border border-stone-700 transition-colors cursor-pointer"
                      title="Reset to Sample"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-[11px] text-stone-300 bg-stone-950/80 p-3.5 rounded-xl border border-stone-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Our masons at <strong>Stand D749 Masasa Drive, Chiredzi</strong> will verify plot measurements and coordinate installation dates directly with your family.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

