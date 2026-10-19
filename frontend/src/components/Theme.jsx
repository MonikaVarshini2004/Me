// src/components/Theme.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ✅ Lazy initializer: reads localStorage synchronously on first render
  // This prevents the "flash of light mode" when the user prefers dark.
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Persist preference on change
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // ---------------------------------------------------------------------------
  // Design Tokens — "Deep Tech Elegance" palette
  // Dark:  navy-black bg, cyan + violet accents, glassmorphism cards
  // Light: near-white bg, violet accent primary, clean cards
  // ---------------------------------------------------------------------------
  const themes = {
    dark: {
      Hero: {
        bg: "bg-gradient-to-br from-[#020817] via-[#0a0f2e] to-[#14062e] transition-colors duration-500",
        text: "text-[#f0f4ff]",
        accent: "text-[#06b6d4]",
        button: {
          bg: "bg-[#06b6d4]",
          text: "text-[#020817]",
          hover: "hover:bg-[#0891b2]",
        },
      },
      Section: {
        bg: "bg-gradient-to-br from-[#0a0f2e] to-[#020817] transition-colors duration-500",
        text: "text-[#f0f4ff]",
      },
      Card: {
        bg: "bg-[#0d1340]/80 backdrop-blur-sm border border-[#06b6d4]/15",
        text: "text-[#f0f4ff]",
        hover:
          "hover:shadow-[0_0_32px_rgba(6,182,212,0.18)] hover:border-[#06b6d4]/35 transition-all duration-300",
      },
      Button1: {
        bg: "bg-[#06b6d4]",
        text: "text-[#020817]",
        hover: "hover:bg-[#0891b2]",
      },
      Button2: {
        bg: "bg-[#7c3aed]",
        text: "text-[#f0f4ff]",
        hover: "hover:bg-[#6d28d9]",
      },
      NavbarFooter: {
        // Note: backdrop-blur is applied by Navbar component on scroll
        bg: "bg-[#020817]/92",
        text: "text-[#f0f4ff]",
        border: "border-b border-[#06b6d4]/10",
      },
    },

    light: {
      Hero: {
        bg: "bg-gradient-to-br from-[#f8faff] via-[#eef2ff] to-[#f3ebff] transition-colors duration-500",
        text: "text-[#0a0f2e]",
        accent: "text-[#7c3aed]",
        button: {
          bg: "bg-[#7c3aed]",
          text: "text-white",
          hover: "hover:bg-[#6d28d9]",
        },
      },
      Section: {
        bg: "bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] transition-colors duration-500",
        text: "text-[#0a0f2e]",
      },
      Card: {
        bg: "bg-white/85 backdrop-blur-sm border border-[#7c3aed]/10",
        text: "text-[#0a0f2e]",
        hover:
          "hover:shadow-[0_0_24px_rgba(124,58,237,0.12)] hover:border-[#7c3aed]/28 transition-all duration-300",
      },
      Button1: {
        bg: "bg-[#7c3aed]",
        text: "text-white",
        hover: "hover:bg-[#6d28d9]",
      },
      Button2: {
        bg: "bg-[#06b6d4]",
        text: "text-[#020817]",
        hover: "hover:bg-[#0891b2]",
      },
      NavbarFooter: {
        bg: "bg-[#f8faff]/92",
        text: "text-[#0a0f2e]",
        border: "border-b border-[#7c3aed]/10",
      },
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

// Hook
export const useTheme = () => useContext(ThemeContext);
