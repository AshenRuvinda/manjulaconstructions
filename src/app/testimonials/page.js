import Link from "next/link";
import { testimonials, companyValues } from "@/data/testimonials";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { constructMetadata } from "@/lib/seo";
import { ShieldCheck, MessageSquare, BadgeDollarSign, Hammer, UserCheck, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Client Testimonials & Values | Manjula Constructions",
  description:
    "Review genuine client feedback and our unwavering core commitments to quality, honest pricing, and trustworthy residential construction in Negombo.",
  pathname: "/testimonials",
});

const valueIconMap = {
  BadgeDollarSign,
  ShieldCheck,
  Hammer,
  UserCheck,
};

export default function TestimonialsPage() {
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              Feedback & Core Commitments
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Built on Trust & Proven Standards
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              We take pride in our honest reputation throughout Kochchikade and Negombo. We never invent reviews or fabricate client stories.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials or Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasTestimonials ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-[#F4F3EF] p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between"
                >
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                  <div>
                    <h4 className="font-bold text-[#102C5C] text-sm">{t.clientName}</h4>
                    <p className="text-xs text-gray-500">{t.location} · {t.projectType}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Graceful Empty / Values State per specification */
            <div className="space-y-16">
              <div className="max-w-3xl mx-auto text-center bg-[#F4F3EF] p-8 sm:p-12 rounded-2xl border border-gray-200">
                <div className="w-14 h-14 rounded-full bg-[#102C5C] text-[#FFD52A] flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-[#102C5C] mb-3">
                  Verified Client Feedback Policy
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl mx-auto mb-6">
                  At Manjula Constructions, integrity is central to everything we do. We do not display artificial ratings or fabricated customer testimonials. Verified feedback from completed homeowners will appear here upon authorization.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#102C5C] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-[#0A1E40] transition-colors"
                >
                  <span>Speak with Our Team Directly</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFD52A]" />
                </Link>
              </div>

              {/* Company Core Values Showcase */}
              <div>
                <SectionHeading
                  centered
                  eyebrow="Our Foundation"
                  title="The Values That Guide Every Build"
                  description="What you can depend on when choosing Manjula Constructions for your home."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {companyValues.map((val) => {
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
