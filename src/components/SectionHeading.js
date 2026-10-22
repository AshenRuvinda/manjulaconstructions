"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
            light
              ? "bg-[#FFD52A]/20 text-[#FFD52A]"
              : "bg-[#102C5C]/10 text-[#102C5C]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-[#102C5C]"
        } mb-4 leading-tight`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`mt-4 h-1 bg-[#FFD52A] rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
