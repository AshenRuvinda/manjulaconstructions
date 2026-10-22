import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { company } from "@/data/company";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { constructMetadata } from "@/lib/seo";
import {
  Home,
  Grid,
  PaintBucket,
  Layers,
  Sun,
  Zap,
  Wrench,
  Shield,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Services | House Construction & Finishing in Negombo",
  description:
    "Explore our complete range of construction services: house building, partition walls, plastering, tile fixing, ceiling work, electrical, plumbing, aluminium work, and finishes.",
  pathname: "/services",
});

const iconMap = {
  Home,
  Grid,
  PaintBucket,
  Layers,
  Sun,
  Zap,
  Wrench,
  Shield,
  Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              Comprehensive House Construction
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Construction Services for Every Stage of Your Home
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              We undertake all types of residential construction and house finishing work in Kochchikade, Negombo. Using high-grade materials and experienced workmanship, we build homes with longevity and finesse.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitment Notice */}
      <section className="bg-[#F4F3EF] py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs uppercase font-bold text-[#102C5C] tracking-wider">
                Our Guarantee of Material Standards
              </p>
              <p className="text-sm text-gray-600">
                Construction using quality materials is standard practice across every single trade we perform.
              </p>
            </div>
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 bg-[#102C5C] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg hover:bg-[#0A1E40] transition-colors shrink-0"
            >
              <span>Inquire for Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFD52A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Services Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((srv, index) => {
            const IconComponent = iconMap[srv.icon] || Home;
            const isReversed = index % 2 !== 0;

            return (
              <div
                id={srv.id}
                key={srv.id}
                className="scroll-mt-24 pt-6 border-t border-gray-100 first:border-none first:pt-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual / Image */}
                  <div
                    className={`lg:col-span-6 relative ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#102C5C] text-[#FFD52A] flex items-center justify-center font-bold">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400">
                        SERVICE 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102C5C] mb-4">
                      {srv.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                      {srv.fullDescription}
                    </p>

                    {/* Typical Requirements */}
                    <div className="mb-6 p-4 rounded-xl bg-[#F4F3EF] border border-gray-200">
                      <p className="text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-1">
                        Typical Application & Need:
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {srv.requirementsAddressed}
                      </p>
                    </div>

                    {/* Features list */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {srv.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#FFD52A] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={`/estimate?service=${encodeURIComponent(srv.title)}`}
                        className="inline-flex items-center gap-2 bg-[#FFD52A] hover:bg-[#F2C71B] text-[#102C5C] font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-sm transition-all hover:scale-105"
                      >
                        <span>Request Service Estimate</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={company.phoneNumbers[0].tel}
                        className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold text-xs px-4 py-3 rounded-lg transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#102C5C]" />
                        <span>Call to Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to inquire about a service */}
      <section className="py-16 bg-[#F4F3EF] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Easy Inquiries"
            title="How to Get Started with Any Service"
            description="Whether you require individual plastering and tiling work or a full turnkey house build, our team is ready to consult with you."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <span className="w-10 h-10 rounded-full bg-[#102C5C] text-[#FFD52A] font-bold text-sm inline-flex items-center justify-center mb-4">
                1
              </span>
              <h3 className="font-bold text-[#102C5C] mb-2">Share Your Requirements</h3>
              <p className="text-xs text-gray-600">
                Call our team or submit our simple estimate form detailing what work is needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <span className="w-10 h-10 rounded-full bg-[#102C5C] text-[#FFD52A] font-bold text-sm inline-flex items-center justify-center mb-4">
                2
              </span>
              <h3 className="font-bold text-[#102C5C] mb-2">Site Assessment & Scope</h3>
              <p className="text-xs text-gray-600">
                We review drawings or visit your location in Negombo to confirm exact measurements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <span className="w-10 h-10 rounded-full bg-[#102C5C] text-[#FFD52A] font-bold text-sm inline-flex items-center justify-center mb-4">
                3
              </span>
              <h3 className="font-bold text-[#102C5C] mb-2">Transparent Estimate</h3>
              <p className="text-xs text-gray-600">
                Receive an accurate, itemized quotation reflecting fair market prices and quality materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
