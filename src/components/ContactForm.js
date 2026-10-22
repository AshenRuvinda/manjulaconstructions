"use client";

import { useState } from "react";
import { validateContactForm } from "@/lib/validation";
import { company } from "@/data/company";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name] || errors.contact) {
      setErrors((prev) => ({ ...prev, [name]: undefined, contact: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
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
          type: "contact",
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setServerMsg(data.message || "Thank you. Your message has been sent successfully.");
      } else {
        setStatus("error");
        setServerMsg(data.error || "Failed to send message. Please contact us directly by phone.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Network error occurred. Please call or WhatsApp us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#102C5C] mb-2">Message Sent</h3>
        <p className="text-gray-600 text-sm mb-6">{serverMsg}</p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
          }}
          className="text-xs font-bold text-[#102C5C] underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg space-y-5"
      noValidate
    >
      {status === "error" && (
        <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
          <p>{serverMsg}</p>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-1.5">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="e.g. Priyantha Silva"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded-lg border ${
            errors.name ? "border-red-400 bg-red-50/30" : "border-gray-300"
          } focus:ring-2 focus:ring-[#102C5C] outline-none text-sm`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="077..."
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.phone ? "border-red-400 bg-red-50/30" : "border-gray-300"
            } focus:ring-2 focus:ring-[#102C5C] outline-none text-sm`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.email ? "border-red-400 bg-red-50/30" : "border-gray-300"
            } focus:ring-2 focus:ring-[#102C5C] outline-none text-sm`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      {errors.contact && <p className="text-xs text-red-600">{errors.contact}</p>}

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-1.5">
          Subject / Inquiry Topic
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="e.g. New House Construction Inquiry"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#102C5C] outline-none text-sm"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-[#102C5C] uppercase tracking-wider mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder="Tell us what you are planning or how we can assist..."
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded-lg border ${
            errors.message ? "border-red-400 bg-red-50/30" : "border-gray-300"
          } focus:ring-2 focus:ring-[#102C5C] outline-none text-sm`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#102C5C] hover:bg-[#0A1E40] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#FFD52A]" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Direct Message</span>
            <Send className="w-4 h-4 text-[#FFD52A]" />
          </>
        )}
      </button>
    </form>
  );
}
