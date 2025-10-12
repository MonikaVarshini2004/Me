// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
import { useTheme } from "./Theme";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme, themes } = useTheme();
  const section = themes[theme].Section;
  const hero = themes[theme].Hero;
  const navFooter = themes[theme].NavbarFooter;

  // Scroll handler for active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      navLinks.forEach((link) => {
        const sectionEl = document.getElementById(link.id);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(link.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? `${navFooter.bg} shadow-md backdrop-blur`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
          <h1 className={`text-xl font-bold ${navFooter.text}`}>
            MONIKA VARSHINI S
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  active === link.id
                    ? `${hero.accent} bg-opacity-30 ${navFooter.text} font-semibold`
                    : `${navFooter.text} hover:bg-opacity-20 hover:${navFooter.text} hover:bg-white/10`
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button with Animated Emoji */}
        <button
          onClick={toggleTheme}
          className={`ml-4 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition ${hero.button.bg} ${hero.button.text} ${hero.button.hover}`}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={theme}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              {/* Animated Emoji */}
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </motion.span>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </nav>
  );
}
