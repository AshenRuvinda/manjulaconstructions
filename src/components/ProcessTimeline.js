"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  Calculator,
  Hammer,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const iconMap = {
  MessageSquare,
  MapPin,
  Calculator,
  Hammer,
  Sparkles,
  CheckCircle,
};

export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative">
      {/* Central connection line for desktop */}
      <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gray-200 -translate-x-1/2" />

      <div className="space-y-12 lg:space-y-16">
        {steps.map((step, idx) => {
          const Icon = iconMap[step.icon] || Hammer;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: isEven ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Box */}
              <div className="w-full lg:w-1/2">
                <div
                  className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${
                    isEven ? "lg:mr-auto lg:text-left" : "lg:ml-auto lg:text-left"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-[#FFD52A]">
                      {step.step}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#102C5C] font-bold bg-[#102C5C]/5 px-2.5 py-1 rounded">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#102C5C] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {step.keyPoints && (
                    <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                      {step.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD52A] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Center Node Badge with bounce */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10 w-14 h-14 rounded-full bg-[#102C5C] text-[#FFD52A] border-4 border-white shadow-lg flex items-center justify-center shrink-0"
              >
                <Icon className="w-6 h-6" />
              </motion.div>

              {/* Empty placeholder to balance layout on desktop */}
              <div className="hidden lg:block w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
