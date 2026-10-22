"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { translations, localizedNavigation } from "@/data/translations";
import LanguageSwitch from "@/components/LanguageSwitch";
import { Menu, X, Phone, ArrowRight, MapPin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const navLinks = localizedNavigation[language] || localizedNavigation.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top emergency / quick contact bar */}
      <div className="bg-[#0A1E40] text-gray-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FFD52A]" />
              <span><strong className="text-white">{t.topBarLocation}</strong> · {t.topBarCountry}</span>
            </span>
            <span className="text-[#FFD52A]">
              {t.topBarDirectInquiries}{" "}
              <a href={company.phoneNumbers[0].tel} className="hover:underline text-white font-medium">
                {company.phoneNumbers[0].display}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>{t.topBarAccurateEstimates}</span>
            <span className="text-white/30">•</span>
            <span>{t.topBarReliableService}</span>
            <span className="text-white/30">•</span>
            <span>{t.topBarQualityMaterials}</span>
            <span className="text-white/30">•</span>
            <LanguageSwitch variant="compact" />
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#102C5C]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-[#102C5C] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo treatment - on mobile show only the logo mark; show text on sm/md+ */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/logo.png"
                alt="Manjula Constructions Logo"
                fill
                sizes="(max-width: 640px) 40px, 44px"
                priority
                className="object-contain"
              />
            </div>
            {/* Brand text hidden on mobile, visible on sm and up */}
            <div className="hidden sm:flex flex-col whitespace-nowrap select-none">
              <span className="font-black text-lg sm:text-xl tracking-tight text-white leading-none whitespace-nowrap">
                MANJULA
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#FFD52A] uppercase mt-0.5 whitespace-nowrap">
                Constructions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#FFD52A] bg-white/10 font-bold"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={company.phoneNumbers[0].tel}
              className="hidden 2xl:flex items-center gap-1.5 text-xs text-gray-200 hover:text-white px-2.5 py-2 border border-white/20 rounded-md transition-colors whitespace-nowrap"
              title="Call us directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD52A]" />
              <span>{company.phoneNumbers[0].display}</span>
            </a>
            <Link
              href="/estimate"
              className="inline-flex items-center gap-1.5 bg-[#FFD52A] hover:bg-[#F2C71B] text-[#102C5C] font-bold text-xs uppercase tracking-wide px-3.5 py-2.5 rounded-md shadow-sm transition-all hover:shadow hover:scale-[1.02] whitespace-nowrap"
            >
              <span>{t.navGetEstimate}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls: Language Switch + Menu Hamburger */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <LanguageSwitch variant="compact" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 focus:outline-none transition-colors border border-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden bg-[#0A1E40] border-t border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#FFD52A] bg-white/10 font-bold"
                        : "text-gray-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <Link
                href="/estimate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#FFD52A] text-[#102C5C] font-black text-sm tracking-wide shadow-md"
              >
                {t.navGetEstimate}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={company.phoneNumbers[0].tel}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFD52A]" />
                {t.navCallUs} {company.phoneNumbers[0].display}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
