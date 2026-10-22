"use client";

import ProcessTimeline from "@/components/ProcessTimeline";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { useLanguage } from "@/context/LanguageContext";
import { translations, localizedProcess } from "@/data/translations";
import { MessageSquare, CheckCircle, ShieldCheck } from "lucide-react";

export default function ProcessPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const currentProcess = localizedProcess[language] || localizedProcess.en;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              {t.processHeroBadge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              {t.processPageTitle}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {t.processPageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Process Transparency Explanation */}
      <section className="py-12 bg-[#F4F3EF] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-6 h-6 text-[#102C5C] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#102C5C] text-sm mb-1">{t.processClearComm}</h3>
                <p className="text-xs text-gray-600">{t.processClearCommDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#FFD52A] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#102C5C] text-sm mb-1">{t.processAgreedScope}</h3>
                <p className="text-xs text-gray-600">{t.processAgreedScopeDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#102C5C] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#102C5C] text-sm mb-1">{t.processCostTrans}</h3>
                <p className="text-xs text-gray-600">{t.processCostTransDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Process Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow={t.processProposedEyebrow}
            title={t.processProposedTitle}
            description={t.processProposedDesc}
          />

          <ProcessTimeline steps={currentProcess} />
        </div>
      </section>

      {/* CTA */}
      <ContactCTA
        title={t.processCtaTitle}
        description={t.processCtaDesc}
      />
    </>
  );
}
