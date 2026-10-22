"use client";

import ProjectGallery from "@/components/ProjectGallery";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { useLanguage } from "@/context/LanguageContext";
import { translations, localizedProjects } from "@/data/translations";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const currentProjects = localizedProjects[language] || localizedProjects.en;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              {t.projectsEyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              {t.projectsPageTitle}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {t.projectsPageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section with category filtering */}
      <section className="py-20 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow={t.projectsEyebrow}
            title={t.projectsCategoryShowcase}
            description={t.projectsCategoryShowcaseDesc}
          />

          <ProjectGallery projects={currentProjects} />
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
