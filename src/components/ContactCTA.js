"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";

export default function ContactCTA({ title, description }) {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const displayTitle = title || t.ctaTitle;
  const displayDescription = description || t.ctaDescription;

  return (
    <section className="relative overflow-hidden bg-[#102C5C] text-white py-20">
      {/* Decorative background grid */}
      <div className="absolute inset-0 pattern-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FFD52A]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#0A1E40] border border-white/10 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#FFD52A] mb-3 bg-[#FFD52A]/10 px-3 py-1 rounded-full">
              {t.ctaEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {displayTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              {displayDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 bg-[#FFD52A] hover:bg-[#F2C71B] text-[#102C5C] font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                <span>{t.requestEstimate}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={company.phoneNumbers[0].tel}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-lg border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFD52A]" />
                <span>{t.ctaCallText} {company.phoneNumbers[0].display}</span>
              </a>

              <a
                href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-[#25D366] transition-colors py-2 px-3"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.ctaWhatsAppAvail}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
