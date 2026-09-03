/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { TombstoneCatalog } from './components/TombstoneCatalog';
import { MemorialCustomizer } from './components/MemorialCustomizer';
import { KitchenTopsCalculator } from './components/KitchenTopsCalculator';
import { CraftsmanshipMining } from './components/CraftsmanshipMining';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BusinessCardModal } from './components/BusinessCardModal';
import { TombstoneModel } from './types';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from './data/memorialData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);
  const [customizerPreset, setCustomizerPreset] = useState<{
    shape?: 'arch' | 'scroll' | 'heart' | 'cross' | 'double' | 'executive';
    baseText?: string;
  }>({
    shape: 'executive',
    baseText: 'NKOSI',
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCustomizeModel = (model: TombstoneModel) => {
    setCustomizerPreset({
      shape: model.shapeStyle,
      baseText: model.id === 'NKOSI-EXEC' ? 'NKOSI' : 'MAWERE',
    });
    scrollToSection('customizer');
  };

  const handleSelectService = (serviceId: string) => {
    if (serviceId === 'tombstones') {
      scrollToSection('catalog');
    } else if (serviceId === 'kitchen-tops' || serviceId === 'window-sills') {
      scrollToSection('kitchen-sills');
    } else if (serviceId === 'mining-exploration' || serviceId === 'cutting-polishing') {
      scrollToSection('mining');
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenCardModal={() => setIsCardModalOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onNavigate={scrollToSection}
          onOpenCardModal={() => setIsCardModalOpen(true)}
        />

        <ServicesOverview onSelectService={handleSelectService} />

        <TombstoneCatalog onCustomizeModel={handleCustomizeModel} />

        <MemorialCustomizer
          key={`${customizerPreset.shape}-${customizerPreset.baseText}`}
          initialState={customizerPreset}
        />

        <KitchenTopsCalculator />

        <CraftsmanshipMining />

        <GallerySection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenCardModal={() => setIsCardModalOpen(true)}
      />

      {/* Business Card Reference Modal */}
      <BusinessCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />

      {/* Floating Quick WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/263775092867?text=${encodeURIComponent(
            'Hello Lowveld Skilled Craftsmens / Mawere Tombstones, I would like to make an inquiry.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl transition-all hover:scale-105 border-2 border-white/20"
          aria-label="Direct WhatsApp Contact"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
