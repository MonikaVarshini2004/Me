// src/pages/About.jsx
import { motion } from "framer-motion";
import { useTheme } from "../components/Theme";

export default function About() {
  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const hero = themes[theme].Hero;
  const card = themes[theme].Card;

  const aboutCards = [
    {
      title: "Who I Am",
      desc: "A creative developer with a strong passion for design and code.",
    },
    {
      title: "What I Do",
      desc: "I build websites, apps, and smooth user experiences.",
    },
    {
      title: "My Goal",
      desc: "To grow as a professional and make impactful digital products.",
    },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      <div className="max-w-4xl text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold mb-6 ${section.text}`}
        >
          About{" "}
          <span className={`${hero.accent}`}>Me</span>
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className={`text-lg md:text-xl opacity-80 leading-relaxed ${section.text}`}
        >
          Hi, I’m{" "}
          <span className={`font-semibold ${hero.accent}`}>
            Monika Varshini S
          </span>
          , a passionate developer and designer who loves crafting beautiful, user-friendly digital experiences. I enjoy solving problems with clean and efficient code, and I’m always learning new things to improve my skills.
        </motion.p>

        {/* Animated Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {aboutCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer ${card.bg} ${card.text}`}
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
