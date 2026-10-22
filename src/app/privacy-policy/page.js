import { company } from "@/data/company";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy | Manjula Constructions",
  description:
    "Privacy and data collection notice for website visitors and construction inquiry submissions with Manjula Constructions.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-6 border-b border-gray-200">
          <span className="text-xs font-bold uppercase tracking-wider text-[#102C5C] bg-[#102C5C]/10 px-3 py-1 rounded-full mb-3 inline-block">
            Legal & Data Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#102C5C] mb-3">
            Privacy Notice
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: October 2026 · {company.name}
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#102C5C] mb-2">1. Overview</h2>
            <p>
              At <strong>{company.name}</strong>, we respect your privacy and are committed to protecting the personal information you choose to share with us when using our website or submitting an inquiry regarding residential construction and finishing services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#102C5C] mb-2">2. Information We Collect</h2>
            <p>
              We only collect information voluntarily provided by you when submitting an inquiry or requesting a construction estimate through our website forms:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Contact telephone number</li>
              <li>Email address (if supplied)</li>
              <li>Project location and construction description</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#102C5C] mb-2">3. How We Use Your Information</h2>
            <p>
              Your contact details are strictly used to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Review your construction requirements</li>
              <li>Contact you via phone, WhatsApp, or email to discuss project feasibility and site assessment</li>
              <li>Provide accurate cost estimates and schedule site meetings</li>
            </ul>
            <p className="mt-2">
              We do <strong>not</strong> sell, rent, or lease your personal contact details to third-party marketers or advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#102C5C] mb-2">4. Cookies & Tracking</h2>
            <p>
              This website is designed primarily as an informational portfolio. We do not employ intrusive behavioral tracking or third-party advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#102C5C] mb-2">5. Contact Information</h2>
            <p>
              If you have any questions or wish to update any contact details previously provided, you can reach us at:
            </p>
            <div className="p-4 rounded-lg bg-[#F4F3EF] border border-gray-200 mt-2">
              <p className="font-bold text-[#102C5C]">{company.name}</p>
              <p>{company.address.full}</p>
              <p>Phone: {company.phoneNumbers[0].display}</p>
              <p>Email: {company.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
