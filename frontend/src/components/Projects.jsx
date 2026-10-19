// src/components/Projects.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaLock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { projects } from "./projectsData";
import { useTheme } from "./Theme";

const FILTERS = [
  { label: "All",             key: "all"    },
  { label: "Java & Spring",   key: "java"   },
  { label: "React & Web",     key: "web"    },
  { label: "Mobile",          key: "mobile" },
];

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expanded,     setExpanded]     = useState({});

  const { theme, themes } = useTheme();
  const section  = themes[theme].Section;
  const card     = themes[theme].Card;
  const button1  = themes[theme].Button1;
  const button2  = themes[theme].Button2;
  const isDark   = theme === "dark";

  const accentColor = isDark ? "#06b6d4" : "#7c3aed";
  const accentClass = isDark ? "text-[#06b6d4]" : "text-[#7c3aed]";

  // Filter logic: "web" tab shows both "react" and "web" categories
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "web") return p.categories.includes("react") || p.categories.includes("web");
    return p.categories.includes(activeFilter);
  });

  const toggleExpand = (idx) =>
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <section
      id="projects"
      className={`relative min-h-screen px-6 py-24 flex flex-col items-center overflow-hidden transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      {/* Background orb */}
      <div
        className={`orb ${isDark ? "orb-cyan" : "orb-cyan-light"}`}
        style={{ width: 360, height: 360, bottom: "5%", left: "-5%", animationDelay: "2.5s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My <span className={accentClass}>Projects</span>
          </h2>
          <div
            className="mx-auto h-1 w-14 rounded-full"
            style={{ background: `linear-gradient(90deg, ${accentColor}, ${isDark ? "#7c3aed" : "#06b6d4"})` }}
          />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="tablist"
          aria-label="Filter projects by technology"
        >
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              role="tab"
              aria-selected={activeFilter === f.key}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold transition-all duration-250
                ${activeFilter === f.key
                  ? isDark
                    ? "bg-[#06b6d4] text-[#020817] shadow-[0_0_18px_rgba(6,182,212,0.4)]"
                    : "bg-[#7c3aed] text-white shadow-[0_0_14px_rgba(124,58,237,0.35)]"
                  : isDark
                    ? "bg-[#0d1340]/70 border border-[#06b6d4]/15 text-[#f0f4ff]/70 hover:border-[#06b6d4]/40 hover:text-[#06b6d4]"
                    : "bg-white/70 border border-[#7c3aed]/15 text-[#0a0f2e]/70 hover:border-[#7c3aed]/40 hover:text-[#7c3aed]"
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredProjects.length === 0 ? (
              <motion.p
                variants={cardVariant}
                className="col-span-2 text-center opacity-50 py-16 text-lg"
              >
                No projects match this filter.
              </motion.p>
            ) : (
              filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  variants={cardVariant}
                  whileHover={{ y: -4 }}
                  className={`
                    rounded-2xl p-6 flex flex-col gap-4
                    ${card.bg} ${card.hover}
                    transition-all duration-300
                  `}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold leading-snug flex-1">{project.title}</h3>
                    <span
                      className={`
                        flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold
                        ${isDark
                          ? "bg-[#7c3aed]/12 border border-[#7c3aed]/25 text-[#a78bfa]"
                          : "bg-[#7c3aed]/8 border border-[#7c3aed]/20 text-[#7c3aed]"
                        }
                      `}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm opacity-75 leading-relaxed">{project.description}</p>

                  {/* Tech badge pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techList.map((tech) => (
                      <span
                        key={tech}
                        className={isDark ? "tech-badge tech-badge-dark" : "tech-badge tech-badge-light"}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features (collapsible) */}
                  {project.features && project.features.length > 0 && (
                    <div>
                      <button
                        onClick={() => toggleExpand(idx)}
                        className={`flex items-center gap-1.5 text-xs font-semibold mb-2 transition-colors ${accentClass}`}
                        aria-expanded={!!expanded[idx]}
                      >
                        {expanded[idx]
                          ? <><FaChevronUp size={10} /> Hide features</>
                          : <><FaChevronDown size={10} /> Show features ({project.features.length})</>
                        }
                      </button>

                      <AnimatePresence>
                        {expanded[idx] && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden space-y-1.5"
                          >
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs opacity-72">
                                <span
                                  className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: accentColor }}
                                />
                                {feature}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* CTA buttons */}
                  <div className="flex gap-2 flex-wrap mt-auto pt-2">
                    {project.isPrivate ? (
                      <span className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                        ${isDark
                          ? "bg-[#f0f4ff]/5 border border-[#f0f4ff]/10 text-[#f0f4ff]/40"
                          : "bg-[#0a0f2e]/5 border border-[#0a0f2e]/10 text-[#0a0f2e]/40"
                        }
                      `}>
                        <FaLock size={11} /> Private Project
                      </span>
                    ) : (
                      <>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className={`
                              flex items-center gap-2 flex-1 px-4 py-2 rounded-lg
                              text-sm font-semibold text-center justify-center transition-all duration-250 hover:scale-105
                              ${button1.bg} ${button1.text} ${button1.hover}
                            `}
                          >
                            <FaGithub size={14} /> GitHub
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            className={`
                              flex items-center gap-2 flex-1 px-4 py-2 rounded-lg
                              text-sm font-semibold text-center justify-center transition-all duration-250 hover:scale-105
                              ${button2.bg} ${button2.text} ${button2.hover}
                            `}
                          >
                            <FaExternalLinkAlt size={12} /> Live Demo
                          </a>
                        )}
                        {!project.github && !project.live && (
                          <span className="text-xs opacity-40 italic">Links coming soon</span>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
