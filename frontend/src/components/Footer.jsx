// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "./Theme";

export default function Footer() {
  const { theme, themes } = useTheme();
  const navFooter = themes[theme].NavbarFooter;

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/MonikaVarshini2004" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/s-monika-varshini-291b1a294/" },
    { icon: <FaEnvelope />, url: "mailto:moni2020k@gmail.com" },
  ];

  return (
    <footer className={`${navFooter.bg} ${navFooter.text} py-8`}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <p className="text-sm md:text-base">
          © 2025 Monika Varshini.<br />Crafted with passion.
        </p>

        <div className="flex gap-4">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#E7C6FF" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs mt-4 opacity-70">
        Thank you for visiting my portfolio!
      </p>
    </footer>
  );
}
