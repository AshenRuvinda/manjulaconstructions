"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitch({ variant = "default" }) {
  const { language, setLanguage } = useLanguage();

  if (variant === "compact") {
    return (
      <div className="lang-switcher inline-flex items-center rounded-lg bg-white/10 p-0.5 border border-white/20 text-xs font-bold">
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`px-2 py-1 rounded transition-colors ${
            language === "en"
              ? "bg-[#FFD52A] text-[#102C5C] shadow-xs"
              : "text-gray-300 hover:text-white"
          }`}
          aria-label="Switch to English"
        >
          <span className="lang-en">EN</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage("si")}
          className={`px-2 py-1 rounded transition-colors ${
            language === "si"
              ? "bg-[#FFD52A] text-[#102C5C] shadow-xs"
              : "text-gray-300 hover:text-white"
          }`}
          aria-label="Switch to Sinhala"
        >
          <span className="lang-si">සිං</span>
        </button>
      </div>
    );
  }

  return (
    <div className="lang-switcher inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-1 border border-white/20 text-xs font-bold">
      <Globe className="w-3.5 h-3.5 text-[#FFD52A] shrink-0" />
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2 py-0.5 rounded transition-colors ${
          language === "en"
            ? "bg-[#FFD52A] text-[#102C5C]"
            : "text-gray-200 hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-white/30 text-[10px]">|</span>
      <button
        type="button"
        onClick={() => setLanguage("si")}
        className={`px-2 py-0.5 rounded transition-colors ${
          language === "si"
            ? "bg-[#FFD52A] text-[#102C5C]"
            : "text-gray-200 hover:text-white"
        }`}
        aria-label="Switch to Sinhala"
      >
        සිංහල
      </button>
    </div>
  );
}
