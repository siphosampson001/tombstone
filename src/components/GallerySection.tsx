import React, { useState } from 'react';
import { Sparkles, Eye, CheckCircle2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tombstones' | 'kitchens' | 'workshop'>('all');

  const galleryItems = [
    {
      id: 1,
      title: "Executive Zimbabwe Black Granite Monument",
      category: "tombstones",
      image: "/src/assets/images/granite_tombstone_memorial_1788388305103.jpg",
      caption: "Hand-carved apex, porcelain ceramic photo medallion, gold leaf lettering, and polished sub-base with integrated granite flower vases."
    },
    {
      id: 2,
      title: "Mirror-Polished Kitchen Island & Window Sills",
      category: "kitchens",
      image: "/src/assets/images/granite_kitchen_countertop_1788388320370.jpg",
      caption: "Seamless beveled edging, custom sink and stove cutouts, complemented by matching rain-drip exterior granite window sills."
    },
    {
      id: 3,
      title: "Diamond Water Sawing & Surface Polishing",
      category: "workshop",
      image: "/src/assets/images/granite_workshop_cutting_1788388335031.jpg",
      caption: "Industrial diamond gang saws and high-speed multi-stage water polishing in our Stand D749 Masasa Drive workshop."
    },
    {
      id: 4,
      title: "Double Companion Memorial Headstone",
      category: "tombstones",
      image: "/src/assets/images/granite_tombstone_memorial_1788388305103.jpg",
      caption: "Extended 1.4-meter wide solid granite memorial for beloved parents with dual photo medallions and engraved tree of life."
    }
  ];

  const filtered = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-stone-100/60 text-stone-900 border-b border-stone-200 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 glow-orb-blue pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-red-200/80 text-red-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            Craftsmanship Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 font-cinzel">
            Executed Stonework & Memorial Installations
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Take a look at our recent monuments, kitchen countertops, and custom stone fabrication completed across Chiredzi and the Lowveld.
          </p>
        </div>

        {/* Filter Buttons with Glassmorphic Pills */}
        <div className="flex justify-center gap-2.5 mb-12 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'tombstones', label: 'Tombstones & Memorials' },
            { id: 'kitchens', label: 'Kitchen Tops & Sills' },
            { id: 'workshop', label: 'Workshop & Cutting' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/25 scale-105'
                  : 'glass-pill text-stone-700 hover:text-stone-950 hover:bg-white/80 border border-stone-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/80 shadow-md hover:shadow-2xl transition-all group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-64 bg-stone-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider glass-panel-dark px-3 py-1 rounded-xl backdrop-blur-md border border-white/10">
                    {item.category === 'tombstones' ? 'Memorial' : item.category === 'kitchens' ? 'Countertop' : 'Craft'}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-base font-bold text-stone-950 font-cinzel group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.caption}
                </p>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="flex items-center gap-1.5 text-[#0052cc] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Chiredzi Fabricated
                  </span>
                  <span className="font-semibold text-stone-700">100% Zimbabwe Granite</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
