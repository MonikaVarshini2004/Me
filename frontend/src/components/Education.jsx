// src/components/Education.jsx
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaMedal, FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "./Theme";

const education = {
  degree:      "B.E. Computer Science and Engineering",
  institution: "Velammal Institute of Technology, Panchetti",
  affiliation: "Affiliated with Anna University",
  duration:    "2022 – 2026",
  cgpa:        "8.91 / 10.0",
  highlights: [
    "Specialised in Java Full Stack Development",
    "Completed internships at 8Queens Software Technologies and TABTREE Software Solutions",
    "Delivered multiple full-stack projects including BizConnect and Orphanage Aid System",
    "Proficient in Java, Spring Boot, React, MySQL, REST APIs, and Git",
  ],
};

export default function Education() {
  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const card    = themes[theme].Card;
  const isDark  = theme === "dark";

  const accentColor = isDark ? "#06b6d4" : "#7c3aed";
  const accentClass = isDark ? "text-[#06b6d4]" : "text-[#7c3aed]";
  const badgeBg     = isDark
    ? "bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4]"
    : "bg-[#7c3aed]/8 border border-[#7c3aed]/18 text-[#7c3aed]";

  return (
    <section
      id="education"
      className={`relative min-h-[60vh] flex items-center justify-center px-6 py-24 overflow-hidden transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      {/* Background orb */}
      <div
        className={`orb ${isDark ? "orb-cyan" : "orb-cyan-light"}`}
        style={{ width: 300, height: 300, bottom: "0%", left: "-6%", animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My <span className={accentClass}>Education</span>
          </h2>
          <div
            className="mx-auto h-1 w-14 rounded-full"
            style={{ background: `linear-gradient(90deg, ${accentColor}, ${isDark ? "#7c3aed" : "#06b6d4"})` }}
          />
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-2xl p-8 md:p-10 ${card.bg} ${card.hover}`}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">

            {/* Icon */}
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}18` }}
            >
              <FaGraduationCap size={28} style={{ color: accentColor }} />
            </div>

            {/* Main content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{education.degree}</h3>
                  <p className={`font-semibold text-base ${accentClass}`}>
                    {education.institution}
                  </p>
                  <p className="text-sm opacity-60 mt-0.5 flex items-center gap-1.5">
                    <FaUniversity size={11} />
                    {education.affiliation}
                  </p>
                </div>

                {/* Duration badge */}
                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium flex-shrink-0 ${badgeBg}`}>
                  <FaCalendarAlt size={11} />
                  {education.duration}
                </span>
              </div>

              {/* CGPA badge */}
              <div className="flex items-center gap-2 mb-5">
                <FaMedal size={14} style={{ color: accentColor }} />
                <span className="text-sm font-semibold opacity-80">CGPA:&nbsp;</span>
                <span
                  className="text-lg font-bold"
                  style={{ color: accentColor, fontFamily: "'Outfit', sans-serif" }}
                >
                  {education.cgpa}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {education.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                    className="flex items-start gap-2.5 text-sm opacity-78"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
