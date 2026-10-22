export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
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
      <div
        className={`mt-4 h-1 w-16 bg-[#FFD52A] rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
