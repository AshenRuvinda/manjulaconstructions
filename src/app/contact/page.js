import { company } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { constructMetadata } from "@/lib/seo";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact Us | Manjula Constructions Negombo",
  description:
    "Get in touch with Manjula Constructions in Kochchikade, Negombo. Call 077 808 8058, 076 323 1495, or 076 889 8293 for residential building inquiries.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Contact Manjula Constructions
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Have questions about your upcoming home project, architectural finishing, or need an accurate site estimate? We are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Left Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Office Address Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#102C5C] text-[#FFD52A] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#102C5C] mb-2">
                  Company Location
                </h2>
                <address className="not-italic text-sm text-gray-600 leading-relaxed mb-4">
                  <strong>{company.name}</strong><br />
                  {company.address.line1}<br />
                  {company.address.city}<br />
                  {company.address.country}
                </address>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#102C5C] font-semibold bg-[#102C5C]/5 px-3 py-1.5 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD52A]" />
                  <span>Serving Negombo & Western Province</span>
                </div>
              </div>

              {/* Contact Numbers Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#FFD52A] text-[#102C5C] flex items-center justify-center font-bold mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#102C5C] mb-2">
                  Direct Phone Lines
                </h2>
                <p className="text-xs text-gray-500 mb-4">
                  Tap any number below to connect directly with our builders:
                </p>

                <div className="space-y-3">
                  {company.phoneNumbers.map((phone, i) => (
                    <a
                      key={phone.raw}
                      href={phone.tel}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-[#102C5C] hover:bg-[#F4F3EF] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#102C5C]/10 text-[#102C5C] flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="text-sm font-bold text-gray-900 group-hover:text-[#102C5C]">
                          {phone.display}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#102C5C] group-hover:underline">
                        Call &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#102C5C] text-white p-6 sm:p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Chat on WhatsApp</h3>
                    <p className="text-xs text-gray-300">Quick inquiries & photo sharing</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  You can message us directly with floor plans, site photos, or questions at our confirmed WhatsApp number.
                </p>
                <a
                  href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp ({company.whatsapp.display})</span>
                </a>
              </div>

            </div>

            {/* Contact Form & Map Right Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-[#102C5C] mb-2">
                  Send a Direct Message
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Fill in your contact details below and our team will get in touch with you promptly.
                </p>
                <ContactForm />
              </div>

              {/* Google Maps Location Embed */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-sm text-[#102C5C] uppercase tracking-wider">
                    Our Service Location
                  </h3>
                  <span className="text-xs text-gray-500">Kochchikade, Negombo</span>
                </div>
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    title="Manjula Constructions location in Kochchikade, Negombo"
                    src="https://maps.google.com/maps?q=Daluwakotuwa,+Kochchikade,+Negombo,+Sri+Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <p className="text-[11px] text-gray-500 mt-3 text-center">
                  Coordinates verified for Daluwakotuwa, Kochchikade, Negombo, Sri Lanka.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
