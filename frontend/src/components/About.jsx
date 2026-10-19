// src/components/About.jsx
import { motion } from "framer-motion";
import { useTheme } from "./Theme";
import { FaCode, FaServer, FaBullseye, FaGraduationCap } from "react-icons/fa";

const stagger = {
  hidden:  {},
  show:    { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const aboutCards = [
  {
    icon: FaGraduationCap,
    title: "Who I Am",
    desc: "B.E. CSE Graduate (CGPA 8.91) from Velammal Institute of Technology. A builder at heart — I turn ideas into working software with clean, purposeful code.",
  },
  {
    icon: FaCode,
    title: "What I Do",
    desc: "I design and build full-stack web applications — RESTful backends with Java & Spring Boot, and responsive frontends with React and TailwindCSS.",
  },
  {
    icon: FaBullseye,
    title: "My Goal",
    desc: "To grow as a Java Full Stack developer in a collaborative team, contributing to products that solve real-world problems at scale.",
  },
  {
    icon: FaServer,
    title: "How I Work",
    desc: "I follow clean architecture principles, care about API design, and always think about the end user — whether I'm writing a controller or a UI component.",
  },
];

const stats = [
  { value: "6+",    label: "Projects Built"  },
  { value: "2",     label: "Internships"      },
  { value: "8.91",  label: "CGPA"             },
  { value: "Java",  label: "Primary Stack"    },
];

export default function About() {
  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const card    = themes[theme].Card;
  const isDark  = theme === "dark";

  const accentColor = isDark ? "#06b6d4" : "#7c3aed";
  const accentClass = isDark ? "text-[#06b6d4]" : "text-[#7c3aed]";

  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      {/* Background orbs */}
      <div
        className={`orb ${isDark ? "orb-violet" : "orb-violet-light"}`}
        style={{ width: 350, height: 350, top: "5%", right: "-5%", animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl w-full">

        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            About <span className={accentClass}>Me</span>
          </h2>
          <div
            className="mx-auto h-1 w-14 rounded-full"
            style={{ background: `linear-gradient(90deg, ${accentColor}, ${isDark ? "#7c3aed" : "#06b6d4"})` }}
          />
        </motion.div>

        {/* ── Bio paragraph ───────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-base md:text-lg leading-relaxed opacity-80 text-center max-w-3xl mx-auto mb-10"
        >
          Hi, I'm{" "}
          <span className={`font-semibold ${accentClass}`}>Monika Varshini S</span>
          {" "}— a B.E. Computer Science and Engineering graduate from Velammal Institute of Technology
          (Anna University, 2026). I'm passionate about building robust, scalable web applications
          with{" "}
          <span className={`font-medium ${accentClass}`}>Java & Spring Boot</span>
          {" "}on the backend and{" "}
          <span className={`font-medium ${accentClass}`}>React</span>
          {" "}on the frontend. My projects range from role-based business platforms to social welfare
          systems — all built with clean, maintainable code and a user-first mindset.
        </motion.p>

        {/* ── Stats bar ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className={`
            grid grid-cols-2 md:grid-cols-4 gap-px mb-12
            rounded-2xl overflow-hidden border
            ${isDark ? "border-[#06b6d4]/15" : "border-[#7c3aed]/12"}
          `}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center justify-center py-5 px-4
                ${isDark ? "bg-[#0d1340]/70" : "bg-white/70"} backdrop-blur-sm
              `}
            >
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "'Outfit', sans-serif", color: accentColor }}
              >
                {stat.value}
              </span>
              <span className="text-xs opacity-60 mt-0.5 font-medium uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Cards grid ──────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {aboutCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`
                  p-6 rounded-2xl cursor-default
                  ${card.bg} ${card.text} ${card.hover}
                `}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accentColor}18` }}
                >
                  <Icon size={20} style={{ color: accentColor }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-72 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
