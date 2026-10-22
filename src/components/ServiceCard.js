import Link from "next/link";
import {
  Home,
  Grid,
  PaintBucket,
  Layers,
  Sun,
  Zap,
  Wrench,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Home,
  Grid,
  PaintBucket,
  Layers,
  Sun,
  Zap,
  Wrench,
  Shield,
  Sparkles,
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.icon] || Home;

  return (
    <div className="group bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden">
      {/* Top accent border on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#FFD52A] transition-colors" />

      <div>
        <div className="w-14 h-14 rounded-lg bg-[#102C5C]/5 text-[#102C5C] group-hover:bg-[#102C5C] group-hover:text-[#FFD52A] flex items-center justify-center transition-colors mb-6">
          <IconComponent className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-[#102C5C] mb-3 group-hover:text-[#102C5C]">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <Link
          href={`/services#${service.id}`}
          className="text-xs font-bold uppercase tracking-wider text-[#102C5C] group-hover:text-[#102C5C] flex items-center gap-1.5 transition-colors"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FFD52A] group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-xs text-gray-400 font-mono">0{index + 1}</span>
      </div>
    </div>
  );
}
