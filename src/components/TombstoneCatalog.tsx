import React, { useState } from 'react';
import { TOMBSTONE_CATALOG, BUSINESS_INFO } from '../data/memorialData';
import { TombstoneModel } from '../types';
import { MessageCircle, Check, Layers, SlidersHorizontal, Sparkles, Search } from 'lucide-react';

interface TombstoneCatalogProps {
  onCustomizeModel: (model: TombstoneModel) => void;
}

export const TombstoneCatalog: React.FC<TombstoneCatalogProps> = ({ onCustomizeModel }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Memorials' },
    { id: 'executive', label: 'Executive Monuments' },
    { id: 'classic', label: 'Classic Arches' },
    { id: 'kerbing', label: 'Full Kerbing & Ledgers' },
    { id: 'scroll', label: 'Open Bible & Scrolls' },
    { id: 'companion', label: 'Companion Doubles' },
  ];

  const filteredModels = TOMBSTONE_CATALOG.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.graniteType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="catalog" className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-stone-100/70 text-stone-900 border-b border-stone-200 overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 glow-orb-blue pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              Mawere Tombstones Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 font-cinzel">
              Enduring Memorial Monuments & Headstones
            </h2>
            <p className="text-stone-600 text-base">
              Handcrafted in Chiredzi from genuine Zimbabwe Black Granite. Every memorial is carved to honor family memories with supreme dignity, permanence, and diamond mirror polish.
            </p>
          </div>

          {/* Glass Search Input */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search designs or stone types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-stone-900 placeholder-stone-400 text-xs focus:outline-none transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <SlidersHorizontal className="w-4 h-4 text-stone-500 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25 scale-[1.02]'
                  : 'glass-pill text-stone-700 hover:text-red-600 hover:bg-white border border-stone-200/80 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl overflow-hidden border flex flex-col justify-between transition-all group glass-panel hover:bg-white shadow-md hover:shadow-2xl ${
                item.popular
                  ? 'border-red-500/80 ring-2 ring-red-500/20'
                  : 'border-white/80 hover:border-red-300'
              }`}
            >
              <div>
                {/* Visual Headstone Simulator Header in Authentic Polished Jet Black Granite */}
                <div className="relative p-6 pt-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 border-b border-stone-800 text-center flex flex-col items-center justify-center min-h-[230px] overflow-hidden">
                  {/* Subtle polished light sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>

                  {item.popular && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                      Flagship Model
                    </div>
                  )}

                  {/* Visual simulated headstone shape in Black Granite with Gold Inscription */}
                  <div className="w-44 py-6 px-4 rounded-t-2xl granite-black border border-stone-600/70 shadow-2xl relative flex flex-col items-center justify-center text-center group-hover:scale-[1.04] transition-transform duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 mb-1 shadow-sm"></div>
                    <div className="text-[10px] font-bold text-amber-300 uppercase tracking-widest font-cinzel">
                      IN LOVING MEMORY
                    </div>
                    <div className="text-xs font-black text-amber-200 mt-1 font-cinzel tracking-wider engraved-gold">
                      {item.id === 'NKOSI-EXEC' ? 'NKOSI' : item.name.split(' ')[0]}
                    </div>
                    <div className="text-[9px] text-stone-300 mt-1">
                      1954 - 2024
                    </div>
                    <div className="w-full h-0.5 bg-stone-700 my-2"></div>
                    <div className="text-[8px] text-amber-200/90 italic font-serif">
                      "Forever in our hearts"
                    </div>

                    {/* Base */}
                    <div className="w-52 h-4 mt-3 bg-stone-800 rounded-sm border-t border-stone-600 shadow-md flex items-center justify-center">
                      <span className="text-[7px] text-stone-400 tracking-wider font-mono">MAWERE CHISELED BASE</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold text-[#0052cc] uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/50">
                        {item.graniteType}
                      </span>
                      <span className="text-base font-black text-stone-900">
                        ~${item.priceEstimateUSD} <span className="text-xs text-stone-500 font-semibold">USD</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-950 font-cinzel mt-2 group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 text-[11px] text-stone-500 flex items-center gap-1.5 font-medium">
                    <Layers className="w-3.5 h-3.5 text-[#0052cc] shrink-0" />
                    <span>{item.dimensions}</span>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-200/70">
                    {item.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                <button
                  onClick={() => onCustomizeModel(item)}
                  className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-red-600/20 hover:scale-[1.02]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Customize Inscription & Design</span>
                </button>

                <a
                  href={`https://wa.me/263775092867?text=${encodeURIComponent(
                    `Hello Lowveld Skilled Craftsmens / Mawere Tombstones, I would like to order / inquire about the "${item.name}" (Ref: ${item.id}). Estimated price: $${item.priceEstimateUSD}. Please share availability and delivery details to my location.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-50/80 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Footer note */}
        <div className="mt-14 text-center text-xs text-stone-700 glass-panel p-5 rounded-2xl border border-white/80 shadow-md">
          <span className="font-bold text-stone-950">Custom Dimensions & Bespoke Shapes Available:</span> If you have a photograph or sketch of another headstone design, our master masons can replica-cut and mirror polish any monument to your precise dimensions at our Chiredzi workshop. Call <strong className="text-red-600">0775 092 867</strong> or email <strong className="text-[#0052cc]">enockshons@gmail.com</strong>.
        </div>

      </div>
    </section>
  );
};

