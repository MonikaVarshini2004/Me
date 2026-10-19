// src/components/Navbar.jsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { useTheme } from "./Theme";

const navLinks = [
  { id: "home",       label: "Home"       },
  { id: "about",      label: "About"      },
  { id: "education",  label: "Education"  },
  { id: "skills",     label: "Skills"     },
  { id: "projects",   label: "Projects"   },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact"    },
];

export default function Navbar() {
  const [active,    setActive]    = useState("home");
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  const { theme, toggleTheme, themes } = useTheme();
  const navFooter = themes[theme].NavbarFooter;
  const isDark    = theme === "dark";

  // Accent colours (resolved once per render for JSX expressions)
  const accentColor = isDark ? "#06b6d4" : "#7c3aed";

  // ── Scroll spy ─────────────────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    // Walk links in reverse so the highest visible section wins when multiple
    // sections are in view (e.g. near section boundaries).
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const el = document.getElementById(navLinks[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(navLinks[i].id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  // ── Derived navbar background ───────────────────────────────────────────────
  const navBg = scrolled
    ? `${navFooter.bg} ${navFooter.border} backdrop-blur-md shadow-lg`
    : "bg-transparent";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${navBg}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">

        {/* Brand */}
        <a
          href="#home"
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-3 flex-shrink-0"
          aria-label="Go to top"
        >
          <img src={Logo} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
          <span
            className={`text-lg font-bold font-outfit tracking-wide ${navFooter.text}`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            MONIKA VARSHINI S
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5" role="list">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 block ${
                  active === link.id
                    ? isDark
                      ? "text-[#06b6d4]"
                      : "text-[#7c3aed]"
                    : `${navFooter.text} opacity-75 hover:opacity-100 ${
                        isDark ? "hover:text-[#06b6d4]" : "hover:text-[#7c3aed]"
                      }`
                }`}
                aria-current={active === link.id ? "page" : undefined}
              >
                {link.label}

                {/* Animated underline indicator */}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-2 right-2 h-0.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold
              transition-all duration-300 border
              ${isDark
                ? "bg-[#06b6d4]/10 border-[#06b6d4]/25 text-[#06b6d4] hover:bg-[#06b6d4]/20"
                : "bg-[#7c3aed]/10 border-[#7c3aed]/25 text-[#7c3aed] hover:bg-[#7c3aed]/20"
              }
            `}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                exit={   { opacity: 0, rotate:  30, scale: 0.7 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-1.5"
              >
                {isDark
                  ? <><FaSun  size={14} /><span className="hidden sm:inline">Light</span></>
                  : <><FaMoon size={14} /><span className="hidden sm:inline">Dark</span></>
                }
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`
              md:hidden p-2 rounded-lg transition-all duration-200
              ${isDark
                ? "text-[#f0f4ff] hover:bg-[#06b6d4]/10"
                : "text-[#0a0f2e] hover:bg-[#7c3aed]/10"
              }
            `}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={menuOpen ? "x" : "bars"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={   { opacity: 0, rotate:  90 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile slide-down menu ───────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="false"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={   { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={`
              md:hidden overflow-hidden
              ${isDark
                ? "bg-[#0a0f2e]/95 backdrop-blur-lg border-t border-[#06b6d4]/10"
                : "bg-[#f8faff]/95 backdrop-blur-lg border-t border-[#7c3aed]/10"
              }
            `}
          >
            <ul className="px-5 pt-3 pb-5 space-y-1" role="list">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.045, duration: 0.25 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    aria-current={active === link.id ? "page" : undefined}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm
                      ${active === link.id
                        ? isDark
                          ? "bg-[#06b6d4]/12 text-[#06b6d4]"
                          : "bg-[#7c3aed]/10 text-[#7c3aed]"
                        : isDark
                          ? "text-[#f0f4ff]/80 hover:text-[#f0f4ff] hover:bg-white/5"
                          : "text-[#0a0f2e]/75 hover:text-[#0a0f2e] hover:bg-black/5"
                      }
                    `}
                  >
                    {/* Active dot indicator */}
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200"
                      style={{
                        backgroundColor:
                          active === link.id ? accentColor : isDark ? "#94a3b8" : "#9ca3af",
                      }}
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
