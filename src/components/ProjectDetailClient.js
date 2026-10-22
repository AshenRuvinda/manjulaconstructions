"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { translations, localizedProjects } from "@/data/translations";
import ProjectCard from "@/components/ProjectCard";
import ContactCTA from "@/components/ContactCTA";
import {
  MapPin,
  Layers,
  ArrowRight,
  CheckCircle2,
  Phone,
  ArrowLeft,
} from "lucide-react";

export default function ProjectDetailClient({ slug, fallbackProject }) {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const currentProjects = localizedProjects[language] || localizedProjects.en;

  const project = currentProjects.find((p) => p.slug === slug) || fallbackProject;

  const relatedProjects = currentProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const displayStatus =
    project.status === "Completed"
      ? t.projectStatusCompleted
      : project.status === "Under Construction"
      ? t.projectStatusUnderConstruction
      : project.status;

  return (
    <>
      {/* Detail Hero */}
      <section className="bg-[#102C5C] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFD52A] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.backToProjects}</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#FFD52A] text-[#102C5C] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {project.category}
            </span>
            <span className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
              {displayStatus}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 max-w-4xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FFD52A]" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FFD52A]" />
              <span>{t.projectScopeHeading}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Gallery Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Primary Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Additional Gallery Photos */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.slice(1).map((imgUrl, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${project.title} gallery photo ${i + 2}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 30vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar Right Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Project Summary */}
              <div className="bg-[#F4F3EF] p-6 sm:p-8 rounded-2xl border border-gray-200">
                <h2 className="text-xl font-black text-[#102C5C] mb-4">
                  {t.projectOverviewHeading}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {project.summary}
                </p>

                <h3 className="text-xs uppercase font-extrabold text-[#102C5C] tracking-wider mb-3">
                  {t.servicesProvidedHeading}:
                </h3>
                <ul className="space-y-2 mb-6">
                  {project.servicesPerformed.map((srv, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD52A] shrink-0" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/estimate?project=${encodeURIComponent(project.title)}`}
                  className="block text-center w-full bg-[#FFD52A] hover:bg-[#F2C71B] text-[#102C5C] font-black text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-sm transition-all"
                >
                  {t.requestEstimate}
                </Link>
              </div>

              {/* Execution Details & Challenges */}
              <div className="space-y-4">
                <div className="border-l-4 border-[#102C5C] pl-4 py-1">
                  <h3 className="font-bold text-[#102C5C] text-sm mb-1">
                    {t.projectScopeHeading}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="border-l-4 border-[#FFD52A] pl-4 py-1">
                  <h3 className="font-bold text-[#102C5C] text-sm mb-1">
                    {t.engineeringChallengeHeading}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Call directly */}
              <div className="p-4 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium">{t.estimatePreferPhone}</p>
                  <p className="text-sm font-bold text-[#102C5C]">
                    {company.phoneNumbers[0].display}
                  </p>
                </div>
                <a
                  href={company.phoneNumbers[0].tel}
                  className="p-2.5 rounded-lg bg-[#102C5C] text-white hover:bg-[#0A1E40] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFD52A]" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-[#F4F3EF] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-[#102C5C]">
                {t.relatedProjectsHeading}
              </h2>
              <Link
                href="/projects"
                className="text-xs font-bold uppercase tracking-wider text-[#102C5C] hover:underline flex items-center gap-1"
              >
                <span>{t.viewAllProjects}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD52A]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.slug} project={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
