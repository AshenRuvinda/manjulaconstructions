"use client";

import { useState } from "react";
import { validateEstimateForm } from "@/lib/validation";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from "lucide-react";

const baseProjectTypeOptions = [
  "Complete House Construction",
  "Partition Wall Construction",
  "Plastering & Tile Fixing",
  "Ceiling Work",
  "Electrical Installations",
  "Plumbing & Sanitary Work",
  "Iron & Aluminium Works",
  "Other Construction & Finishing",
];

export default function EstimateForm() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectType: "",
    projectLocation: "",
    budget: "",
    startDate: "",
    projectDescription: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateEstimateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "estimate",
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setServerMsg(data.message || "Thank you. Your estimate request has been received.");
      } else {
        setStatus("error");
        setServerMsg(data.error || "Failed to submit estimate request. Please call us directly.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Network issue occurred. You can reach us directly via phone or WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-green-200 shadow-xl text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-[#102C5C] mb-3">
          Estimate Request Received
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {serverMsg}
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Our team from Kochchikade will review your project details and contact you at <strong className="text-gray-900">{formData.phone}</strong> to discuss requirements and site assessment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(
              `Hello Manjula Constructions, I just submitted an estimate request for ${formData.projectType} in ${formData.projectLocation}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm px-5 py-3 rounded-lg hover:bg-[#20ba5a] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                projectType: "",
                projectLocation: "",
                budget: "",
                startDate: "",
                projectDescription: "",
                consent: false,
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-xl space-y-6"
      noValidate
    >
      {status === "error" && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
          <div>
            <p className="font-semibold">Submission Note</p>
            <p>{serverMsg}</p>
          </div>
        </div>
      )}

      {/* Row 1: Full Name & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-2">
            {t.formFullName} <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder={t.formFullNamePlaceholder}
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.fullName ? "border-red-400 bg-red-50/30" : "border-gray-300"
            } focus:ring-2 focus:ring-[#102C5C] focus:border-transparent outline-none text-sm transition-all`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-2">
            {t.formPhone} <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={t.formPhonePlaceholder}
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? "border-red-400 bg-red-50/30" : "border-gray-300"
            } focus:ring-2 focus:ring-[#102C5C] focus:border-transparent outline-none text-sm transition-all`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Project Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-2">
            {t.formEmail}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t.formEmailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? "border-red-400 bg-red-50/30" : "border-gray-300"
            } focus:ring-2 focus:ring-[#102C5C] focus:border-transparent outline-none text-sm transition-all`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-2">
            {t.formProjectType} <span className="text-red-500">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.projectType ? "border-red-400 bg-red-50/30" : "border-gray-300"
            } focus:ring-2 focus:ring-[#102C5C] focus:border-transparent outline-none text-sm bg-white transition-all`}
          >
            <option value="">{t.formProjectTypePlaceholder}</option>
            {baseProjectTypeOptions.map((type) => (
              <option key={type} value={type}>
                {t.projectTypes[type] || type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1 text-xs text-red-600">{errors.projectType}</p>
          )}
        </div>
      </div>

      {/* Row 3: Location & Preferred Start Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectLocation" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-2">
            {t.formProjectLocation} <span className="text-red-500">*</span>
          </label>
          <input
            id="projectLocation"
            name="projectLocation"
            type="text"
            required
            placeholder={t.formProjectLocationPlaceholder}
            value={formData.projectLocation}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.projectLocation ? "border-red-400 bg-red-50/30" : "border-gray-300"
            } focus:ring-2 focus:ring-[#102C5C] focus:border-transparent outline-none text-sm transition-all`}
          />
          {errors.projectLocation && (
            <p className="mt-1 text-xs text-red-600">{errors.projectLocation}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-2">
            {t.formBudget}
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            placeholder={t.formBudgetPlaceholder}
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#102C5C] focus:border-transparent outline-none text-sm transition-all"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-2">
          {t.formDescription} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={4}
          required
          placeholder={t.formDescriptionPlaceholder}
          value={formData.projectDescription}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.projectDescription ? "border-red-400 bg-red-50/30" : "border-gray-300"
          } focus:ring-2 focus:ring-[#102C5C] focus:border-transparent outline-none text-sm transition-all`}
        />
        {errors.projectDescription && (
          <p className="mt-1 text-xs text-red-600">{errors.projectDescription}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#102C5C] border-gray-300 rounded focus:ring-[#102C5C]"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            {t.formConsent}
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#FFD52A] hover:bg-[#F2C71B] text-[#102C5C] font-extrabold text-sm uppercase tracking-wider py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{t.sending}</span>
            </>
          ) : (
            <>
              <span>{t.formSubmitEstimate}</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-gray-500 text-center">
        {t.estimatePreferPhone}{" "}
        <a href={company.phoneNumbers[0].tel} className="text-[#102C5C] font-bold underline">
          {company.phoneNumbers[0].display}
        </a>
      </p>
    </form>
  );
}
