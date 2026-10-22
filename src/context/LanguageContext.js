"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    label: "EN",
    nativeName: "English",
  },
  si: {
    code: "si",
    name: "Sinhala",
    label: "සිං",
    nativeName: "සිංහල",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  // Load persisted language from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mc_lang");
      if (saved && (saved === "en" || saved === "si")) {
        setLanguage(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const changeLanguage = (langCode) => {
    if (langCode !== "en" && langCode !== "si") return;
    setLanguage(langCode);
    try {
      localStorage.setItem("mc_lang", langCode);
      document.documentElement.lang = langCode;
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    changeLanguage(language === "en" ? "si" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        toggleLanguage,
        isSinhala: language === "si",
        isEnglish: language === "en",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if accessed outside of provider
    return {
      language: "en",
      setLanguage: () => {},
      toggleLanguage: () => {},
      isSinhala: false,
      isEnglish: true,
    };
  }
  return context;
}
