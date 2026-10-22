import { company } from "@/data/company";
import EstimateForm from "@/components/EstimateForm";
import SectionHeading from "@/components/SectionHeading";
import { constructMetadata } from "@/lib/seo";
import { Calculator, ShieldCheck, Phone, MessageCircle } from "lucide-react";

export const metadata = constructMetadata({
  title: "Request an Estimate | Manjula Constructions Negombo",
  description:
    "Share your construction requirements and our team will contact you to discuss plans, provide an accurate cost estimate, and schedule a site review.",
  pathname: "/estimate",
});

export default function EstimatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#102C5C] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFD52A] bg-[#FFD52A]/15 px-3 py-1 rounded-full mb-4">
              Project Consultation & Estimation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Tell Us About Your Project
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Share your construction requirements and our team can contact you to discuss the next steps, site assessment, and project scope.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 lg:py-24 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-8">
              <EstimateForm />
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Trust Box */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#102C5C] text-[#FFD52A] flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#102C5C] mb-2">
                  Accurate & Fair Estimations
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  We prepare estimations calculated with verified material quantities and realistic rates for skilled labor in the Negombo region.
                </p>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD52A]" />
                    <span>Clear stage-wise milestone payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD52A]" />
                    <span>Quality materials specification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD52A]" />
                    <span>Zero hidden contractor surcharges</span>
                  </div>
                </div>
              </div>

              {/* Direct Call Option */}
              <div className="bg-[#102C5C] text-white p-6 sm:p-8 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-white mb-2">
                  Prefer to Inquire by Phone?
                </h3>
                <p className="text-xs text-gray-300 mb-6">
                  Our team is available to discuss your building plans and answer questions directly.
                </p>

                <div className="space-y-2.5">
                  {company.phoneNumbers.map((phone) => (
                    <a
                      key={phone.raw}
                      href={phone.tel}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs font-semibold"
                    >
                      <Phone className="w-4 h-4 text-[#FFD52A]" />
                      <span>{phone.display}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-3 rounded-lg transition-transform hover:scale-102"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry: {company.whatsapp.display}</span>
                  </a>
                </div>
              </div>

              {/* Company Location Reminder */}
              <div className="p-4 rounded-xl border border-gray-200 bg-white text-xs text-gray-600">
                <p className="font-bold text-[#102C5C] mb-1">Office Location:</p>
                <p>{company.address.full}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
