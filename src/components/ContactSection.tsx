import React, { useState } from 'react';
import { BUSINESS_INFO, FAQ_ITEMS } from '../data/memorialData';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2, ChevronDown, Compass } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceRequired: 'Tombstone & Memorial Headstone',
    location: 'Chiredzi / Masvingo Province',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello Lowveld Skilled Craftsmens / Mawere Tombstones,
I would like to request an official consultation:
- *Name:* ${formData.fullName || 'Customer'}
- *Phone:* ${formData.phone || 'Not provided'}
- *Service:* ${formData.serviceRequired}
- *Location/Cemetery:* ${formData.location}
- *Notes:* ${formData.notes || 'Please contact me regarding pricing and options.'}`;

    const url = `https://wa.me/263775092867?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-stone-100/60 via-slate-50 to-white text-stone-900 border-b border-stone-200 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 glow-orb-red pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 glow-orb-blue pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-blue-200/80 text-[#0052cc] text-xs font-bold uppercase tracking-wider shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            Stand D749 Masasa Drive, Chiredzi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-950 font-cinzel">
            Visit Our Chiredzi Yard or Connect Direct
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We welcome families, contractors, and diaspora clients. Call our master craftsmen directly, visit our Masasa Drive workshop, or send an instant WhatsApp inquiry.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information Cards on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Company Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Company Credentials Glass Card */}
            <div className="p-7 rounded-3xl glass-panel border border-white/80 shadow-xl space-y-6">
              <div className="border-b border-stone-200/80 pb-5">
                <span className="text-sm font-black text-red-600 tracking-wider font-cinzel block">
                  {BUSINESS_INFO.primaryBrand}
                </span>
                <h3 className="text-2xl font-bold text-[#0052cc] font-cinzel mt-1">
                  {BUSINESS_INFO.divisionBrand}
                </h3>
                <p className="text-xs font-bold text-stone-700 mt-1">
                  {BUSINESS_INFO.subtitle}
                </p>
              </div>

              {/* Physical Workshop Location */}
              <div className="flex items-start gap-3.5 text-stone-800">
                <div className="w-10 h-10 rounded-xl bg-red-100/80 border border-red-200/80 flex items-center justify-center shrink-0 text-red-600 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Workshop & Showyard Address
                  </div>
                  <p className="text-sm font-bold text-stone-950 mt-0.5 font-cinzel">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-stone-600">
                    {BUSINESS_INFO.province}
                  </p>
                </div>
              </div>

              {/* Direct Phone Numbers */}
              <div className="flex items-start gap-3.5 text-stone-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200/80 flex items-center justify-center shrink-0 text-emerald-600 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Direct Telephone / Cell
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean[0]}`}
                      className="text-sm font-bold text-[#0052cc] hover:underline"
                    >
                      {BUSINESS_INFO.phoneNumbers[0]}
                    </a>
                    <span className="text-stone-400">/</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean[1]}`}
                      className="text-sm font-bold text-[#0052cc] hover:underline"
                    >
                      {BUSINESS_INFO.phoneNumbers[1]}
                    </a>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Call anytime during working hours for immediate assistance
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-stone-800">
                <div className="w-10 h-10 rounded-xl bg-blue-100/80 border border-blue-200/80 flex items-center justify-center shrink-0 text-[#0052cc] shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Official Email
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm font-bold text-[#0052cc] hover:underline transition-colors mt-0.5 block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-stone-500">
                    Send architectural drawings or cemetery permits
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 text-stone-800">
                <div className="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-200/80 flex items-center justify-center shrink-0 text-amber-600 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Operating Hours
                  </div>
                  <p className="text-xs font-semibold text-stone-700 mt-0.5">
                    {BUSINESS_INFO.operatingHours}
                  </p>
                </div>
              </div>

              {/* Quick WhatsApp Button */}
              <a
                href={`https://wa.me/263775092867?text=${encodeURIComponent(
                  'Hello Mawere Tombstones, I am reaching out from your website and would like to speak to a master craftsman.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat Directly on WhatsApp (+263 77 509 2867)</span>
              </a>

            </div>

            {/* Service Coverage Area */}
            <div className="p-5 rounded-2xl glass-panel border border-white/80 text-xs text-stone-600 shadow-md space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <Compass className="w-4 h-4 text-red-600" />
                <span>Areas & Regions Covered:</span>
              </div>
              <p className="leading-relaxed">{BUSINESS_INFO.regionsServed}</p>
            </div>

          </div>

          {/* Right Column: Inquiry Form & FAQs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Consultation Request Form */}
            <div className="p-7 sm:p-9 rounded-3xl glass-panel border border-white/80 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950 font-cinzel mb-1">
                Request an Official Quote or Grave Site Visit
              </h3>
              <p className="text-xs text-stone-600 mb-6 leading-relaxed">
                Tell us about your project. We provide free initial estimates, grave plot advice, and stone slab consultations.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl glass-panel bg-emerald-50/90 border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-950 font-cinzel">Thank You for Reaching Out</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. You can also forward your details directly to our craftsman on WhatsApp for immediate response.
                  </p>
                  <button
                    onClick={handleSendToWhatsApp}
                    className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Open on WhatsApp</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Tendai Moyo"
                        className="w-full px-4 py-3 rounded-xl glass-input text-stone-900 text-xs font-medium focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Phone Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 077X XXX XXX"
                        className="w-full px-4 py-3 rounded-xl glass-input text-stone-900 text-xs font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-input text-stone-900 text-xs font-medium focus:outline-none cursor-pointer"
                      >
                        <option>Tombstone & Memorial Headstone</option>
                        <option>Full Kerbing Grave Monument</option>
                        <option>Granite Kitchen Countertop</option>
                        <option>Granite Window Sills</option>
                        <option>Stone Cutting & Polishing</option>
                        <option>Stone Curving & Curious Products</option>
                        <option>Carpentry & Substructures</option>
                        <option>Quarry Granite Block Order</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Installation Town / Cemetery
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Chiredzi Town, Triangle, Rural Homestead"
                        className="w-full px-4 py-3 rounded-xl glass-input text-stone-900 text-xs font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                      Project Notes or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify dates, inscription preferences, kitchen counter linear meters, or cemetery requirements..."
                      className="w-full px-4 py-3 rounded-xl glass-input text-stone-900 text-xs font-medium focus:outline-none leading-relaxed"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-stone-950 font-cinzel">
                Frequently Asked Questions
              </h4>
              <div className="space-y-2.5">
                {FAQ_ITEMS.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/80 glass-panel overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-red-600 cursor-pointer transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? 'rotate-180 text-red-600' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-4 sm:px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
