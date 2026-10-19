// src/components/Experience.jsx
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "./Theme";

const experiences = [
  {
    role:        "Full Stack Web Development Intern",
    company:     "8Queens Software Technologies Pvt. Ltd., Chennai",
    period:      "June 2025 – July 2025",
    duration:    "1 Month",
    description:
      "Worked on a MindChirps website clone, strengthening skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL/MongoDB, and Git & GitHub.",
  },
  {
    role:        "Software Intern",
    company:     "TABTREE Software Solutions, Chennai",
    period:      "August 2025 – September 2025",
    duration:    "2 Weeks",
    description:
      "Gained exposure to professional software development practices through training sessions and hands-on development tasks.",
  },
];

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.18 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -32 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const card    = themes[theme].Card;
  const isDark  = theme === "dark";

  const accentColor = isDark ? "#06b6d4" : "#7c3aed";
  const accentClass = isDark ? "text-[#06b6d4]" : "text-[#7c3aed]";
  const lineColor   = isDark ? "rgba(6,182,212,0.25)" : "rgba(124,58,237,0.22)";

  return (
    <section
      id="experience"
      className={`relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      {/* Background orb */}
      <div
        className={`orb ${isDark ? "orb-violet" : "orb-violet-light"}`}
        style={{ width: 320, height: 320, top: "10%", right: "-4%", animationDelay: "1s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My <span className={accentClass}>Experience</span>
          </h2>
          <div
            className="mx-auto h-1 w-14 rounded-full"
            style={{ background: `linear-gradient(90deg, ${accentColor}, ${isDark ? "#7c3aed" : "#06b6d4"})` }}
          />
        </motion.div>

        {/* Timeline */}
        <div
          className="relative pl-8 border-l-2"
          style={{ borderColor: lineColor }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-10"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className={`relative rounded-2xl p-6 md:p-8 ${card.bg} ${card.hover}`}
              >
                {/* ✅ Fixed timeline dot — theme-aware, no hardcoded border-white */}
                <span
                  className="absolute -left-[2.05rem] top-7 w-4 h-4 rounded-full border-2 flex-shrink-0"
                  style={{
                    backgroundColor: accentColor,
                    borderColor: isDark ? "#020817" : "#f8faff",
                    boxShadow: `0 0 10px ${accentColor}60`,
                  }}
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FaBriefcase size={13} style={{ color: accentColor }} />
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                    </div>
                    <p className={`font-semibold text-sm ${accentClass}`}>{exp.company}</p>
                  </div>

                  {/* Duration badge */}
                  <span
                    className={`
                      flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold flex-shrink-0
                      ${isDark
                        ? "bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4]"
                        : "bg-[#7c3aed]/8 border border-[#7c3aed]/18 text-[#7c3aed]"
                      }
                    `}
                  >
                    <FaCalendarAlt size={10} />
                    {exp.duration}
                  </span>
                </div>

                {/* Period */}
                <p className="text-xs opacity-50 mb-3">{exp.period}</p>

                {/* Description */}
                <p className="text-sm opacity-78 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
