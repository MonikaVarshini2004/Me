// src/components/Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { initialProjects, moreProjects } from "./projectsData";
import { useTheme } from "./Theme";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const { theme, themes } = useTheme();

  const displayedProjects = showMore
    ? [...initialProjects, ...moreProjects]
    : initialProjects;

  const section = themes[theme].Section;
  const card = themes[theme].Card;
  const button1 = themes[theme].Button1;
  const button2 = themes[theme].Button2;

  return (
    <section
      id="projects"
      className={`min-h-screen px-6 py-20 flex flex-col items-center transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      {/* Projects list */}
      <div className="flex flex-col items-center gap-8 w-full max-w-3xl">
        {displayedProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`w-full rounded-xl p-6 shadow ${card.bg} ${card.text} ${card.hover} transition flex flex-col`}
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

            {/* Description */}
            <p className="mb-3">{project.description}</p>

            {/* Features */}
            {project.features && (
              <ul className="list-disc list-inside mb-3 space-y-1 text-sm">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            <p className="text-sm mb-4">
              <span className="font-bold">Tech Stack:</span> {project.tech}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-4 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-4 py-2 rounded text-center font-semibold ${button1.bg} ${button1.text} ${button1.hover} transition`}
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-4 py-2 rounded text-center font-semibold ${button2.bg} ${button2.text} ${button2.hover} transition`}
                >
                  Live Site
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className={`px-6 py-3 rounded-full font-bold shadow ${button1.bg} ${button1.text} ${button1.hover} transition`}
        >
          {showMore ? "Show Less" : "+ Show More"}
        </button>
      </div>
    </section>
  );
}
