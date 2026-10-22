"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations, localizedCompanyValues } from "@/data/translations";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { ShieldCheck, MessageSquare, BadgeDollarSign, Hammer, UserCheck, ArrowRight } from "lucide-react";

const valueIconMap = {
  BadgeDollarSign,
  ShieldCheck,
  Hammer,
  UserCheck,
};

export default function TestimonialsPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const values = localizedCompanyValues[language] || localizedCompanyValues.en;
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              {t.testHeroBadge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              {t.testHeroTitle}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {t.testHeroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials or Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasTestimonials ? (
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((item) => {
                  const clientName = language === "si" ? item.clientNameSi || item.clientName : item.clientName;
                  const comment = language === "si" ? item.commentSi || item.comment : item.comment;
                  const location = language === "si" ? item.locationSi || item.location : item.location;
                  const projectType = language === "si" ? item.projectTypeSi || item.projectType : item.projectType;

                  return (
                    <div
                      key={item.id}
                      className="bg-[#F4F3EF] p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* 5-star rating */}
                        <div className="flex items-center gap-1 text-[#FFD52A] mb-4" aria-label="5 stars rating">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs font-semibold text-gray-500 ml-1.5">{item.date}</span>
                        </div>

                        <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
                          &ldquo;{comment}&rdquo;
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-bold text-[#102C5C] text-sm">{clientName}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{location}</p>
                        <span className="inline-block mt-2 text-[11px] font-semibold text-[#102C5C] bg-white px-2.5 py-1 rounded-md border border-gray-200">
                          {projectType}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Company Core Values Showcase */}
              <div>
                <SectionHeading
                  centered
                  eyebrow={t.testFoundationEyebrow}
                  title={t.testFoundationTitle}
                  description={t.testFoundationDesc}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((val) => {
                    const Icon = valueIconMap[val.icon] || ShieldCheck;
                    return (
                      <div
                        key={val.title}
                        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#FFD52A] text-[#102C5C] flex items-center justify-center font-bold mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-[#102C5C] text-base mb-2">
                          {val.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Graceful Empty / Values State per specification */
            <div className="space-y-16">
              <div className="max-w-3xl mx-auto text-center bg-[#F4F3EF] p-8 sm:p-12 rounded-2xl border border-gray-200">
                <div className="w-14 h-14 rounded-full bg-[#102C5C] text-[#FFD52A] flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-[#102C5C] mb-3">
                  {t.testPolicyTitle}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl mx-auto mb-6">
                  {t.testPolicyDesc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#102C5C] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-[#0A1E40] transition-colors"
                >
                  <span>{t.testSpeakTeam}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFD52A]" />
                </Link>
              </div>

              {/* Company Core Values Showcase */}
              <div>
                <SectionHeading
                  centered
                  eyebrow={t.testFoundationEyebrow}
                  title={t.testFoundationTitle}
                  description={t.testFoundationDesc}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((val) => {
                    const Icon = valueIconMap[val.icon] || ShieldCheck;
                    return (
                      <div
                        key={val.title}
                        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#FFD52A] text-[#102C5C] flex items-center justify-center font-bold mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-[#102C5C] text-base mb-2">
                          {val.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
