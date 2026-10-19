// src/components/Skills.jsx
import { motion } from "framer-motion";
import { useTheme } from "./Theme";

import javaImg       from "../assets/java.png";
import htmlImg       from "../assets/html.png";
import cssImg        from "../assets/css.png";
import jsImg         from "../assets/javascript.png";
import reactImg      from "../assets/react.png";
import nodeImg       from "../assets/nodejs.png";
import springBootImg from "../assets/springboot.webp";
import mysqlImg      from "../assets/mysql.png";
import tailwindImg   from "../assets/tailwind.png";
import expressImg    from "../assets/express.png";

// Skill categories with optional accent-colour hint per skill
const skillCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Java",       img: javaImg  },
      { name: "JavaScript", img: jsImg    },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "HTML",        img: htmlImg      },
      { name: "CSS",         img: cssImg       },
      { name: "React",       img: reactImg     },
      { name: "Tailwind CSS", img: tailwindImg },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Spring Boot", img: springBootImg },
      { name: "Node.js",     img: nodeImg       },
      { name: "Express.js",  img: expressImg    },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MySQL", img: mysqlImg },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.82, y: 20 },
  show:   { opacity: 1, scale: 1,    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  const { theme, themes } = useTheme();
  const section  = themes[theme].Section;
  const isDark   = theme === "dark";

  const accentColor = isDark ? "#06b6d4" : "#7c3aed";
  const accentClass = isDark ? "text-[#06b6d4]" : "text-[#7c3aed]";

  return (
    <section
      id="skills"
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-24 overflow-hidden transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      {/* Orb */}
      <div
        className={`orb ${isDark ? "orb-violet" : "orb-violet-light"}`}
        style={{ width: 380, height: 380, top: "-5%", right: "-5%", animationDelay: "4s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My <span className={accentClass}>Skills</span>
          </h2>
          <div
            className="mx-auto h-1 w-14 rounded-full"
            style={{ background: `linear-gradient(90deg, ${accentColor}, ${isDark ? "#7c3aed" : "#06b6d4"})` }}
          />
          <p className="mt-4 text-sm opacity-60 max-w-sm mx-auto">
            Technologies I work with — hover over any card to see the glow.
          </p>
        </motion.div>

        {/* Category sections */}
        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category label */}
              <motion.p
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.06 }}
                className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${accentClass}`}
              >
                {category.label}
              </motion.p>

              {/* Skill cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap gap-4"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                      boxShadow: isDark
                        ? "0 0 28px rgba(6,182,212,0.35)"
                        : "0 0 24px rgba(124,58,237,0.28)",
                    }}
                    className={`
                      flex flex-col items-center justify-center gap-2 p-4 rounded-xl
                      w-28 cursor-default select-none transition-colors duration-300
                      ${isDark
                        ? "bg-[#0d1340]/80 border border-[#06b6d4]/15 hover:border-[#06b6d4]/40"
                        : "bg-white/80 border border-[#7c3aed]/10 hover:border-[#7c3aed]/35"
                      }
                      backdrop-blur-sm
                    `}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-14 h-14 object-contain"
                      loading="lazy"
                    />
                    <span className="text-xs font-semibold text-center opacity-85 leading-snug">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
