"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { company, navigationLinks } from "@/data/company";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
            <span>
              📍 <strong className="text-white">Kochchikade, Negombo</strong> · Sri Lanka
            </span>
            <span className="text-[#FFD52A]">
              Direct Inquiries:{" "}
              <a href={company.phoneNumbers[0].tel} className="hover:underline text-white font-medium">
                {company.phoneNumbers[0].display}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Accurate Estimates</span>
            <span className="text-white/30">•</span>
            <span>Reliable Service</span>
            <span className="text-white/30">•</span>
            <span>Quality Materials</span>
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
          {/* Logo treatment */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/logo.png"
                alt="Manjula Constructions Logo"
                fill
                sizes="44px"
                priority
                className="object-contain"
              />
            </div>
            <div>
              <span className="block font-black text-xl tracking-tight text-white leading-none">
                MANJULA
              </span>
              <span className="block text-[11px] font-semibold tracking-wider text-[#FFD52A] uppercase mt-0.5">
                Constructions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#FFD52A] bg-white/10"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={company.phoneNumbers[0].tel}
              className="flex items-center gap-2 text-xs text-gray-200 hover:text-white px-3 py-2 border border-white/20 rounded-md transition-colors"
              title="Call us directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD52A]" />
              <span>{company.phoneNumbers[0].display}</span>
            </a>
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 bg-[#FFD52A] hover:bg-[#F2C71B] text-[#102C5C] font-bold text-xs uppercase tracking-wide px-4 py-2.5 rounded-md shadow-sm transition-all hover:shadow hover:scale-[1.02]"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/estimate"
              className="bg-[#FFD52A] text-[#102C5C] font-bold text-xs px-3 py-1.5 rounded"
            >
              Estimate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#0A1E40] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#FFD52A] bg-white/10 font-semibold"
                        : "text-gray-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <a
                href={company.phoneNumbers[0].tel}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md border border-white/20 text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#FFD52A]" />
                Call {company.phoneNumbers[0].display}
              </a>
              <Link
                href="/estimate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md bg-[#FFD52A] text-[#102C5C] font-bold text-sm tracking-wide"
              >
                Request an Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
