"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll back to top"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#102C5C] text-white hover:bg-[#FFD52A] hover:text-[#102C5C] shadow-lg border border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
