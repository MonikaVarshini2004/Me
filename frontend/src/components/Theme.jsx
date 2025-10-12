// src/components/Theme.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Create a Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme when changed
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Theme definitions
  const themes = {
    dark: {
      Hero: {
        bg: "bg-gradient-to-br from-[#03045e] to-[#60079f] transition-colors duration-500",
        text: "text-[#caf0f8]",
        accent: "text-[#caf0f8]",
        button: {
          bg: "bg-[#caf0f8]",
          text: "text-[#03045e]",
          hover: "hover:bg-[#03045e] hover:text-[#caf0f8]",
        },
      },
      Section: {
        bg: "bg-gradient-to-r from-[#470188] to-[#03045e] transition-colors duration-500",
        text: "text-[#caf0f8]",
      },
      Card: {
        bg: "bg-[#03045e]",
        text: "text-[#caf0f8]",
        hover: "hover:shadow-2xl transition-shadow duration-300",
      },
      Button1: {
        bg: "bg-[#caf0f8]",
        text: "text-[#03045e]",
        hover: "hover:bg-[#03045e] hover:text-[#caf0f8]",
      },
      Button2: {
        bg: "bg-[#60079f]",
        text: "text-[#caf0f8]",
        hover: "hover:bg-[#03045e] hover:text-[#caf0f8]",
      },
      NavbarFooter: {
        bg: "bg-[#1B073B]", // common plain color for navbar & footer
        text: "text-[#E7C6FF]", // readable contrast text
      },
    },
    light: {
      Hero: {
        bg: "bg-gradient-to-b from-[#e7c6ff] to-[#caf0f8] transition-colors duration-500",
        text: "text-[#03045e]",
        accent: "text-[#7b2cbf]",
        button: {
          bg: "bg-[#caf0f8]",
          text: "text-[#03045e]",
          hover: "hover:bg-[#03045e] hover:text-[#caf0f8]",
        },
      },
      Section: {
        bg: "bg-gradient-to-b from-[#f0eaff] to-[#caf0f8] transition-colors duration-500",
        text: "text-[#03045e]",
      },
      Card: {
        bg: "bg-white",
        text: "text-[#03045e]",
        hover: "hover:shadow-2xl transition-shadow duration-300",
      },
      Button1: {
        bg: "bg-[#caf0f8]",
        text: "text-[#03045e]",
        hover: "hover:bg-[#03045e] hover:text-[#caf0f8]",
      },
      Button2: {
        bg: "bg-[#7b2cbf]",
        text: "text-[#ffffff]",
        hover: "hover:bg-[#03045e] hover:text-[#caf0f8]",
      },
      NavbarFooter: {
        bg: "bg-[#D3C0F9]", // common plain color for navbar & footer
        text: "text-[#03045e]", // readable contrast text
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
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

// Hook to use theme
export const useTheme = () => useContext(ThemeContext);
