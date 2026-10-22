import { processSteps } from "@/data/process";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { constructMetadata } from "@/lib/seo";
import { MessageSquare, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Our Construction Process | Manjula Constructions",
  description:
    "Discover how Manjula Constructions manages residential builds from initial discussion and site assessment to accurate estimates, construction, and final key handover.",
  pathname: "/process",
});

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              Step-by-Step Construction Journey
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              From Planning to Completion
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              We believe a successful home build relies on clear milestones, open communication, and honest financial planning at each stage.
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
                <h3 className="font-bold text-[#102C5C] text-sm mb-1">Clear Communication</h3>
                <p className="text-xs text-gray-600">Continuous updates throughout excavation, casting, brickwork, and roof trusses.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#FFD52A] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#102C5C] text-sm mb-1">Agreed Project Scope</h3>
                <p className="text-xs text-gray-600">Every door, tile specification, and electrical point is detailed before work begins.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#102C5C] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#102C5C] text-sm mb-1">Cost Transparency</h3>
                <p className="text-xs text-gray-600">Fair prices with milestone-based payment schedules that match verified site progress.</p>
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
            eyebrow="Our Proposed Process"
            title="The 6 Stages of Building Your Home"
            description="Our proposed workflow provides structure and confidence. (Stages can be customized to match specific site conditions or client timelines)."
          />

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* CTA */}
      <ContactCTA
        title="Ready to Start Step 1?"
        description="Reach out today for your initial project discussion with our experienced team in Kochchikade, Negombo."
      />
    </>
  );
}
