// src/components/Experience.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./Theme";

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "8Queens Software Technologies Pvt. Ltd., Chennai",
    period: "23rd June 2025 – 23rd July 2025",
    description:
      "Worked on a MindChirps website clone, strengthening skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL/MongoDB, Git & GitHub.",
  },
  {
    role: "Software Intern",
    company: "TABTREE Software Solutions, Chennai",
    period: "25th Aug 2025 – 6th Sept 2025",
    description:
      "Gained exposure to software development practices through training sessions and hands-on tasks.",
  },
];

export default function Experience() {
  const [animateToggle, setAnimateToggle] = useState(false);
  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const card = themes[theme].Card;
  const accent = theme === "light" ? "text-[#7b2cbf]" : "text-[#caf0f8]";
  const timelineBorder = theme === "light" ? "border-[#7b2cbf]" : "border-[#caf0f8]";

  // Replay animation when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#experience") {
        setAnimateToggle((prev) => !prev);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section
      id="experience"
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <motion.h2
          key={animateToggle}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${section.text}`}
        >
          My <span className={accent}>Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className={`relative border-l-4 ${timelineBorder} pl-8 space-y-12`}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index + "-" + animateToggle}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition relative ${card.bg} ${card.text}`}
            >
              {/* Timeline dot */}
              <span
                className={`absolute -left-[30px] top-6 w-6 h-6 rounded-full ${accent} border-4 border-white shadow-md`}
              ></span>

              <h3 className={`text-xl font-bold ${section.text}`}>{exp.role}</h3>
              <p className={`${accent} font-medium`}>{exp.company}</p>
              <p className={`text-sm ${section.text}/70 mb-3`}>{exp.period}</p>
              <p className={`text-sm ${section.text}/80`}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
