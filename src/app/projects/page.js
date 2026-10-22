import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Projects & Portfolio | Manjula Constructions Negombo",
  description:
    "Explore residential construction projects, ongoing structural builds, and home finishing executed in Negombo, Kochchikade, and Western Province.",
  pathname: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              Our Construction Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Spaces Built with Purpose & Precision
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Explore our residential construction projects, ongoing site work, and architectural finishing in Negombo and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Development Transparency Banner */}
      <div className="bg-[#FFF7D6] border-y border-[#FFD52A]/30 py-3 text-xs text-[#102C5C] text-center px-4 font-medium">
        <span>
          💡 <strong>Portfolio Note:</strong> The sample images and project representations below showcase our construction capability and aesthetic standards. Real project photographs will be updated as owner-verified case studies are finalized.
        </span>
      </div>

      {/* Gallery Section with category filtering */}
      <section className="py-20 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Architectural Showcase"
            title="Featured Residential Works"
            description="Filter through house construction, active job sites, and interior renovations."
          />

          <ProjectGallery projects={projects} />
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
