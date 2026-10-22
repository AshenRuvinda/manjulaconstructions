"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { translations, localizedCompanyValues } from "@/data/translations";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import {
  ShieldCheck,
  CheckCircle,
  MapPin,
  Phone,
  ArrowRight,
  Hammer,
  BadgeDollarSign,
  UserCheck,
} from "lucide-react";

const iconMap = {
  BadgeDollarSign,
  ShieldCheck,
  Hammer,
  UserCheck,
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const currentValues = localizedCompanyValues[language] || localizedCompanyValues.en;

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              {t.aboutHeroBadge}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              {t.aboutHeroTitle}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {t.aboutHeroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction & Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative border border-gray-100">
                <Image
                  src="/images/about-construction-team.jpg"
                  alt="On-site construction engineers and builders at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 p-6 bg-[#F4F3EF] rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 text-[#102C5C] font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4 text-[#FFD52A]" />
                  <span>Located in Daluwakotuwa, Kochchikade</span>
                </div>
                <p className="text-xs text-gray-600">
                  {company.address.full}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow={t.aboutWhoWeAreEyebrow}
                title={t.aboutWhoWeAreTitle}
                description={t.aboutWhoWeAreDesc}
              />

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-8">
                <p>{t.aboutStoryP1}</p>
                <p>{t.aboutStoryP2}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD52A] shrink-0" />
                  <span className="text-sm font-semibold text-[#102C5C]">
                    {t.introFeature1}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD52A] shrink-0" />
                  <span className="text-sm font-semibold text-[#102C5C]">
                    {t.introFeature2}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD52A] shrink-0" />
                  <span className="text-sm font-semibold text-[#102C5C]">
                    {t.introFeature4}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD52A] shrink-0" />
                  <span className="text-sm font-semibold text-[#102C5C]">
                    {t.introFeature3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow={t.valuesGuidingPrinciples}
            title={t.valuesMissionTitle}
            description={t.valuesMissionSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#102C5C] bg-[#102C5C]/10 px-3 py-1 rounded-full mb-4 inline-block">
                  {t.missionLabel}
                </span>
                <h3 className="text-2xl font-bold text-[#102C5C] mb-4">
                  {t.missionHeading}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.missionBody}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFD52A] bg-[#FFD52A]/20 px-3 py-1 rounded-full mb-4 inline-block">
                  {t.visionLabel}
                </span>
                <h3 className="text-2xl font-bold text-[#102C5C] mb-4">
                  {t.visionHeading}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.visionBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach to Materials & Estimates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow={t.valuesGuidingPrinciples}
            title={t.howWeMaintainQuality}
            description={t.howWeMaintainQualityDesc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentValues.map((val) => {
              const Icon = iconMap[val.icon] || ShieldCheck;
              return (
                <div
                  key={val.title}
                  className="bg-[#F4F3EF] p-6 rounded-xl border border-gray-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#102C5C] text-[#FFD52A] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#102C5C] text-lg mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promotional flyer notice */}
      <section className="py-16 bg-[#0A1E40] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102C5C] border border-white/10 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold text-[#FFD52A] tracking-wider mb-2 block">
                {t.aboutFlyerBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {t.aboutFlyerTitle}
              </h2>
              <p className="text-sm text-gray-300">
                {t.aboutFlyerDesc}{" "}
                <span className="text-white font-bold">077 808 8058</span>,{" "}
                <span className="text-white font-bold">076 323 1495</span>, or{" "}
                <span className="text-white font-bold">076 889 8293</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/estimate"
                className="bg-[#FFD52A] text-[#102C5C] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-[#F2C71B] transition-colors"
              >
                {t.requestEstimate}
              </Link>
              <Link
                href="/services"
                className="bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                {t.exploreServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA />
    </>
  );
}
