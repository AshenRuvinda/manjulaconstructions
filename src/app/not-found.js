"use client";

import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F4F3EF] px-4 py-20">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-xl">
        <span className="text-6xl font-black text-[#FFD52A] block mb-2">{t.notFoundCode || "404"}</span>
        <h1 className="text-2xl font-black text-[#102C5C] mb-3">
          {t.notFoundTitle}
        </h1>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          {t.notFoundDesc}
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-[#102C5C] hover:bg-[#0A1E40] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 text-[#FFD52A]" />
            <span>{t.returnHome}</span>
          </Link>

          <a
            href={company.phoneNumbers[0].tel}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-700 font-semibold text-xs py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#102C5C]" />
            <span>{t.contactUs} ({company.phoneNumbers[0].display})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
