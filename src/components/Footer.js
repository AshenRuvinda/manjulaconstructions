import Link from "next/link";
import Image from "next/image";
import { company, navigationLinks } from "@/data/company";
import { services } from "@/data/services";
import { Phone, MapPin, MessageCircle, ArrowRight, ShieldCheck, Hammer } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0A1E40] text-gray-300 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-white/20 shadow-md bg-black shrink-0">
                <Image
                  src="/logo.png"
                  alt="Manjula Constructions Logo"
                  fill
                  sizes="44px"
                  className="object-contain p-1"
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
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional home design and construction services based in Kochchikade, Negombo. We build modern, durable homes with quality materials, accurate estimates, and dependable workmanship.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-[#FFD52A]">
                <ShieldCheck className="w-4 h-4" />
                <span>Fair Pricing · Direct Supervision</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD52A]"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FFD52A] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-white/40" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#FFD52A] transition-colors flex items-center gap-1.5 text-xs text-gray-400"
                >
                  <ArrowRight className="w-3 h-3 text-white/40" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Construction Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD52A]"></span>
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors block truncate"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#FFD52A] hover:underline text-xs font-semibold inline-flex items-center gap-1 mt-1"
                >
                  View all services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD52A]"></span>
              Contact Us
            </h3>
            
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-[#FFD52A] shrink-0 mt-0.5" />
              <address className="not-italic text-gray-300 text-sm leading-snug">
                {company.address.line1}<br />
                {company.address.city}<br />
                {company.address.country}
              </address>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Contact Numbers:</p>
              {company.phoneNumbers.map((phone) => (
                <a
                  key={phone.raw}
                  href={phone.tel}
                  className="flex items-center gap-2 text-sm text-white hover:text-[#FFD52A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD52A]" />
                  <span>{phone.display}</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-3 py-2 rounded-md shadow-sm transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {company.whatsapp.display}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} {company.name} · {company.category}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p>
              Serving Negombo, Kochchikade, Katunayake & Western Province
            </p>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white underline">
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
