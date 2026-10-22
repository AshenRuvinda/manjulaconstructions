import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { companyValues } from "@/data/testimonials";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { constructMetadata } from "@/lib/seo";
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

export const metadata = constructMetadata({
  title: "About Us | Manjula Constructions Negombo",
  description:
    "Learn about Manjula Constructions — a trusted home design & construction firm based in Daluwakotuwa, Kochchikade, Negombo, Sri Lanka.",
  pathname: "/about",
});

const iconMap = {
  BadgeDollarSign,
  ShieldCheck,
  Hammer,
  UserCheck,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              Our Story & Standards
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Building with Purpose.{" "}
              <span className="text-[#FFD52A]">Working with Trust.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Manjula Constructions is a dedicated home design and construction company based in Kochchikade, Negombo. We specialize in residential builds, precision masonry, and turnkey home finishing.
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
                eyebrow="Who We Are"
                title="Your Reliable Partner for Residential Construction"
                description="Located conveniently in Kochchikade, Negombo, Manjula Constructions was founded on straightforward principles: build every house as if it were our own, provide clear cost estimates, and maintain uncompromising standards in every stage of masonry and finishing."
              />

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-8">
                <p>
                  Building a home in Sri Lanka requires navigating changing material costs, tropical weather patterns, and coordination between masons, electricians, and tilers. We provide complete hands-on management so homeowners have peace of mind from ground-breaking to key handover.
                </p>
                <p>
                  Whether starting a brand-new multi-story house, adding partition walls, fixing imported porcelain tiles, or creating modern gypsum false ceilings with ambient cove lighting, we ensure experienced workmanship and dependable results.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD52A] shrink-0" />
                  <span className="text-sm font-semibold text-[#102C5C]">
                    Accurate Cost Estimation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD52A] shrink-0" />
                  <span className="text-sm font-semibold text-[#102C5C]">
                    Quality Construction Materials
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD52A] shrink-0" />
                  <span className="text-sm font-semibold text-[#102C5C]">
                    Direct On-Site Supervision
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD52A] shrink-0" />
                  <span className="text-sm font-semibold text-[#102C5C]">
                    Experienced Tradesmen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (Editable draft copy for owner) */}
      <section className="py-20 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Guiding Principles"
            title="Our Mission & Vision"
            description="Our organizational commitment to home builders and property owners across Negombo."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#102C5C] bg-[#102C5C]/10 px-3 py-1 rounded-full mb-4 inline-block">
                  Our Mission
                </span>
                <h3 className="text-2xl font-bold text-[#102C5C] mb-4">
                  Quality Homes Built with Integrity
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To deliver durable, beautiful residential construction through transparent pricing, vetted quality materials, and experienced tradesmen — turning each client&apos;s home vision into a lasting reality.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFD52A] bg-[#FFD52A]/20 px-3 py-1 rounded-full mb-4 inline-block">
                  Our Vision
                </span>
                <h3 className="text-2xl font-bold text-[#102C5C] mb-4">
                  Negombo&apos;s Most Trusted Home Builder
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be the preferred residential construction and home finishing specialist in Kochchikade, Negombo, recognized for dependable commitments, fair dealing, and craftsmanship that stands the test of time.
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
            eyebrow="Our Construction Approach"
            title="How We Maintain Quality on Every Build"
            description="We apply disciplined standards to material selection, structural integrity, and financial transparency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((val) => {
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
                Official Company Flyer & Contact Details
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Connect Directly with Our Leadership
              </h2>
              <p className="text-sm text-gray-300">
                You can reach us at any of our three active contact numbers:{" "}
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
                Request an Estimate
              </Link>
              <Link
                href="/services"
                className="bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                Explore Services
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
