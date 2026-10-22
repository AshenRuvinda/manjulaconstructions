"use client";

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
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/50 group"
      >
        {/* Official WhatsApp Logo SVG */}
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          className="shrink-0"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.02 12.21C8.14 12.37 9.73 14.83 12.16 15.88C12.74 16.13 13.19 16.28 13.54 16.39C14.12 16.57 14.65 16.55 15.07 16.49C15.54 16.42 16.51 15.9 16.71 15.33C16.92 14.76 16.92 14.27 16.86 14.17C16.79 14.07 16.63 14.02 16.39 13.9C16.14 13.78 14.93 13.19 14.7 13.1C14.48 13.02 14.31 12.98 14.15 13.22C13.98 13.47 13.53 14.02 13.39 14.17C13.25 14.33 13.11 14.35 12.87 14.23C12.62 14.11 11.83 13.85 10.89 13.01C10.16 12.36 9.67 11.56 9.53 11.31C9.39 11.07 9.51 10.93 9.64 10.81C9.75 10.7 9.89 10.52 10.03 10.36C10.17 10.2 10.21 10.07 10.31 9.87C10.4 9.67 10.36 9.5 10.3 9.38C10.24 9.26 9.75 8.06 9.55 7.56C9.35 7.08 9.15 7.15 8.99 7.14C8.85 7.14 8.68 7.13 8.53 7.13V7.33Z" />
        </svg>

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
