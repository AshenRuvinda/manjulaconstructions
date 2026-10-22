"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const whatsappUrl = `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(
    company.whatsapp.defaultMessage
  )}`;

  return (
    <aside aria-label="Quick contact via WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Manjula Constructions on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/50 group"
      >
        <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          {t.whatsAppUs}
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFD52A]"></span>
        </span>
      </a>
    </aside>
  );
}
