// src/pages/Skills.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../components/Theme";

import javaImg from "../assets/java.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/nodejs.png";
import springBootImg from "../assets/springboot.png";
import mysqlImg from "../assets/mysql.png";
import tailwindImg from "../assets/tailwind.png";

const skills = [
  { name: "Java", img: javaImg },
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "React", img: reactImg },
  { name: "Node.js", img: nodeImg },
  { name: "Spring Boot", img: springBootImg },
  { name: "MySQL", img: mysqlImg },
  { name: "Tailwind CSS", img: tailwindImg },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const hero = themes[theme].Hero;
  const card = themes[theme].Card;

  const handleClick = () => {
    setAnimate((prev) => !prev);
  };

  return (
    <section
      id="skills"
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-20 transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-4xl font-bold mb-14 ${hero.accent}`}
      >
        My Skills
      </motion.h2>

      <div
        className="flex flex-wrap justify-center items-center gap-6 cursor-pointer"
        onClick={handleClick}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            animate={
              animate
                ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }
                : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`flex flex-col items-center justify-center rounded-xl p-4 shadow-lg transition cursor-pointer ${card.bg} ${card.text} hover:shadow-2xl`}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 mb-2 object-contain"
            />
            <span className="text-lg font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
