"use client";

import { company } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              {t.contactHeroBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              {t.contactHeroTitle}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {t.contactHeroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Left Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Office Address Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#102C5C] text-[#FFD52A] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#102C5C] mb-2">
                  {t.contactCompanyLocation}
                </h2>
                <address className="not-italic text-sm text-gray-600 leading-relaxed mb-4">
                  <strong>{company.name}</strong><br />
                  {company.address.line1}<br />
                  {company.address.city}<br />
                  {company.address.country}
                </address>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#102C5C] font-semibold bg-[#102C5C]/5 px-3 py-1.5 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD52A]" />
                  <span>{t.contactServingArea}</span>
                </div>
              </div>

              {/* Contact Numbers Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#FFD52A] text-[#102C5C] flex items-center justify-center font-bold mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#102C5C] mb-2">
                  {t.contactPhoneLines}
                </h2>
                <p className="text-xs text-gray-500 mb-4">
                  {t.contactPhoneHelp}
                </p>

                <div className="space-y-3">
                  {company.phoneNumbers.map((phone, i) => (
                    <a
                      key={phone.raw}
                      href={phone.tel}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-[#102C5C] hover:bg-[#F4F3EF] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#102C5C]/10 text-[#102C5C] flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="text-sm font-bold text-gray-900 group-hover:text-[#102C5C]">
                          {phone.display}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#102C5C] group-hover:underline">
                        {t.contactCallAction}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#102C5C] text-white p-6 sm:p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">{t.chatWhatsApp}</h3>
                    <p className="text-xs text-gray-300">{t.contactWhatsAppSub}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {t.contactWhatsAppDesc}
                </p>
                <a
                  href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.openWhatsApp} ({company.whatsapp.display})</span>
                </a>
              </div>

            </div>

            {/* Contact Form & Map Right Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-[#102C5C] mb-2">
                  {t.contactSendMessageTitle}
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  {t.contactSendMessageDesc}
                </p>
                <ContactForm />
              </div>

              {/* Google Maps Location Embed */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-sm text-[#102C5C] uppercase tracking-wider">
                      {t.contactServiceLocation}
                    </h3>
                    <span className="text-xs text-gray-500">{t.topBarLocation}</span>
                  </div>
                  <a
                    href={company.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102C5C] hover:text-[#FFD52A] hover:underline transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FFD52A]" />
                    <span>Open in Maps ↗</span>
                  </a>
                </div>
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-200 shadow-inner">
                  <iframe
                    title="Manjula Constructions location in Kochchikade, Negombo"
                    src={company.address.mapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <p className="text-[11px] text-gray-500 mt-3 text-center">
                  {company.address.full} · Coordinates: 7.2373444, 79.8769673
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
