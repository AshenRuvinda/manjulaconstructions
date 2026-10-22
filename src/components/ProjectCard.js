"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container with zoom effect */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-[#102C5C]/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
          {project.status && (
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
                project.status === "Completed"
                  ? "bg-[#25D366]/90 text-white"
                  : "bg-[#FFD52A]/90 text-[#102C5C]"
              }`}
            >
              {project.status}
            </span>
          )}
        </div>

        {/* Label clearly identifying sample representation in development */}
        {project.isSample && (
          <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-[10px] text-gray-200 px-2 py-0.5 rounded z-10">
            Design Representation
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#102C5C]" />
            <span>{project.location}</span>
          </div>

          <h3 className="text-xl font-bold text-[#102C5C] group-hover:text-[#1A3E7D] transition-colors leading-snug mb-3">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {project.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-bold uppercase tracking-wider text-[#102C5C] flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FFD52A]" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
