"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import {
  translations,
  localizedServices,
  localizedProjects,
  localizedProcess,
  localizedCompanyValues,
} from "@/data/translations";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ContactCTA from "@/components/ContactCTA";
import AnimatedSection, { fadeIn, fadeInLeft, fadeInRight } from "@/components/AnimatedSection";
import {
  ArrowRight,
  Phone,
  Calculator,
  ShieldCheck,
  Layers,
  Hammer,
  BadgeDollarSign,
  UserCheck,
} from "lucide-react";

const valueIconMap = {
  Calculator,
  ShieldCheck,
  Layers,
  Hammer,
  BadgeDollarSign,
  UserCheck,
};

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const currentServices = localizedServices[language] || localizedServices.en;
  const currentProjects = localizedProjects[language] || localizedProjects.en;
  const currentProcess = localizedProcess[language] || localizedProcess.en;
  const currentValues = localizedCompanyValues[language] || localizedCompanyValues.en;

  const featuredServices = currentServices.slice(0, 9);
  const featuredProjects = currentProjects.slice(0, 3);

  return (
    <>
      {/* SECTION A: HERO */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] bg-[#0A1E40] text-white flex items-center overflow-hidden">
        {/* Background Image with slow cinematic scale entrance */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.03, opacity: 0.45 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero-modern-house.jpg"
            alt="Modern luxury house built with architectural excellence"
            fill
            priority
            className="object-cover object-center mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E40] via-[#102C5C]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E40] via-transparent to-transparent" />
        </motion.div>

        {/* Big blurred watermark brand logo positioned on the left side with motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -30 }}
          animate={{
            opacity: [0, 0.22, 0.18],
            scale: [0.85, 1.02, 1],
            x: 0,
            y: ["-50%", "-52%", "-48%", "-50%"],
          }}
          transition={{
            opacity: { duration: 1.6, ease: "easeOut" },
            scale: { duration: 1.8, ease: "easeOut" },
            x: { duration: 1.4, ease: "easeOut" },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute left-[-16%] sm:left-[-10%] lg:left-[-2%] top-1/2 w-[380px] sm:w-[520px] lg:w-[680px] aspect-square pointer-events-none select-none z-0 blur-sm mix-blend-screen"
        >
          <Image
            src="/logo.png"
            alt="Manjula Constructions Logo Watermark"
            fill
            sizes="(max-width: 640px) 380px, (max-width: 1024px) 520px, 680px"
            className="object-contain"
            priority
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow badge entrance */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD52A]/15 border border-[#FFD52A]/30 text-[#FFD52A] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm"
            >
              <span>{t.heroBadge}</span>
            </motion.div>

            {/* Main Heading Entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="sinhala-gemunu text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] sm:leading-[1.1] text-white mb-6"
            >
              <span className="sinhala-gemunu">{t.heroTitleLine1}</span>{" "}
              <span className="sinhala-gemunu text-[#FFD52A] block sm:inline">
                {t.heroTitleLine2}
              </span>
            </motion.h1>

            {/* Description Entrance */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="text-sm sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl"
            >
              {t.heroDescription}
            </motion.p>

            {/* CTAs Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pb-2"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD52A] hover:bg-[#F2C71B] text-[#102C5C] font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-[1.02] text-center"
              >
                <span>{t.exploreProjects}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>

              <Link
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-lg border border-white/25 backdrop-blur-sm transition-all text-center"
              >
                <span>{t.discussProject}</span>
              </Link>
            </motion.div>

            {/* Quick metrics entrance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-left"
            >
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
                <p className="text-xl sm:text-2xl font-black text-[#FFD52A] leading-tight mb-1">{t.heroMetric1Title}</p>
                <p className="text-xs text-gray-300 leading-relaxed">{t.heroMetric1Desc}</p>
              </div>
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
                <p className="text-xl sm:text-2xl font-black text-white leading-tight mb-1">{t.heroMetric2Title}</p>
                <p className="text-xs text-gray-300 leading-relaxed">{t.heroMetric2Desc}</p>
              </div>
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
                <p className="text-xl sm:text-2xl font-black text-[#FFD52A] leading-tight mb-1">{t.heroMetric3Title}</p>
                <p className="text-xs text-gray-300 leading-relaxed">{t.heroMetric3Desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION B: COMPANY INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-[#F4F3EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column Entrance from Left */}
            <AnimatedSection variants={fadeInLeft} className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                <Image
                  src="/images/about-construction-team.jpg"
                  alt="Manjula Constructions site team reviewing blueprint architectural plans"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-[#102C5C] text-white p-5 rounded-xl shadow-xl max-w-xs border border-white/15"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFD52A] text-[#102C5C] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h4 className="font-bold text-sm">Kochchikade, Negombo</h4>
                </div>
                <p className="text-xs text-gray-300 leading-snug">
                  Based in Daluwakotuwa, serving residential construction throughout Negombo & surrounding coastal areas.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Content Column Entrance from Right */}
            <AnimatedSection variants={fadeInRight} className="lg:col-span-6">
              <SectionHeading
                eyebrow={t.introEyebrow}
                title={t.introTitle}
                description={t.introPara1}
              />

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFD52A] text-[#102C5C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>{t.introFeature1}:</strong> {t.introFeature1Desc}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFD52A] text-[#102C5C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>{t.introFeature2}:</strong> {t.introFeature2Desc}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFD52A] text-[#102C5C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>{t.introFeature4}:</strong> {t.introFeature4Desc}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#102C5C] hover:bg-[#0A1E40] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-colors"
                >
                  <span>{t.navAbout}</span>
                  <ArrowRight className="w-4 h-4 text-[#FFD52A]" />
                </Link>

                <a
                  href={company.phoneNumbers[0].tel}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#102C5C] hover:text-[#1A3E7D] px-4 py-3"
                >
                  <Phone className="w-4 h-4 text-[#FFD52A]" />
                  <span>{t.ctaCallText} {company.phoneNumbers[0].display}</span>
                </a>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* SECTION C: SERVICES OVERVIEW */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow={t.servicesEyebrow}
            title={t.servicesTitle}
            description={t.servicesDescription}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <AnimatedSection delay={0.2} className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#102C5C] hover:bg-[#0A1E40] text-white font-bold text-sm px-8 py-4 rounded-lg shadow-md transition-all hover:scale-105"
            >
              <span>{t.exploreServices}</span>
              <ArrowRight className="w-4 h-4 text-[#FFD52A]" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION D: FEATURED PROJECTS */}
      <section className="py-20 lg:py-28 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#102C5C] bg-[#102C5C]/10 px-3 py-1 rounded-full mb-3 inline-block">
                {t.projectsEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C5C] tracking-tight">
                {t.projectsTitle}
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#102C5C] hover:text-[#1A3E7D]"
            >
              <span>{t.viewAllProjects}</span>
              <ArrowRight className="w-4 h-4 text-[#FFD52A]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-[#102C5C] text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            light
            eyebrow={t.howWeMaintainQuality}
            title={t.commitmentsTitle}
            description={t.howWeMaintainQualityDesc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {currentValues.map((point, index) => {
              const Icon = valueIconMap[point.icon] || ShieldCheck;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-[#0A1E40] border border-white/10 rounded-xl p-8 hover:border-[#FFD52A]/40 transition-all shadow-md"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#FFD52A] text-[#102C5C] flex items-center justify-center font-bold mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION F: PROCESS PREVIEW */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow={t.processEyebrow}
            title={t.processTitle}
            description={t.processDescription}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {currentProcess.slice(0, 5).map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#F4F3EF] rounded-xl p-6 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#FFD52A] block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-[#102C5C] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <span className="text-[11px] font-semibold text-[#102C5C]">
                    {t.milestoneVerified}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="mt-12 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#102C5C] hover:underline"
            >
              <span>{t.exploreFullProcess}</span>
              <ArrowRight className="w-4 h-4 text-[#FFD52A]" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION G: COMPANY VALUES / COMMITMENTS */}
      <section className="py-20 lg:py-28 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow={t.commitmentsEyebrow}
            title={t.commitmentsTitle}
            description={t.commitmentsDescription}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentValues.map((val, idx) => {
              const Icon = valueIconMap[val.icon] || ShieldCheck;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#102C5C]/5 text-[#102C5C] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#102C5C]" />
                  </div>
                  <h3 className="font-bold text-[#102C5C] text-base mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION H: FINAL CTA */}
      <ContactCTA />
    </>
  );
}
