// src/components/BackToTop.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "./Theme";

export default function BackToTop() {
  const [visible,      setVisible]      = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const { theme } = useTheme();
  const isDark    = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      setScrollPercent(pct);
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // SVG circle progress ring
  const RADIUS        = 20;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const strokeDash    = CIRCUMFERENCE - (scrollPercent / 100) * CIRCUMFERENCE;

  const accentColor   = isDark ? "#06b6d4" : "#7c3aed";
  const trackColor    = isDark
    ? "rgba(6, 182, 212, 0.12)"
    : "rgba(124, 58, 237, 0.12)";
  const bgColor       = isDark ? "rgba(13, 19, 64, 0.85)" : "rgba(255,255,255,0.85)";
  const borderColor   = isDark
    ? "rgba(6, 182, 212, 0.25)"
    : "rgba(124, 58, 237, 0.25)";
  const shadowColor   = isDark
    ? "0 0 20px rgba(6, 182, 212, 0.3)"
    : "0 0 20px rgba(124, 58, 237, 0.3)";

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={   { opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.08 }}
          whileTap={  { scale: 0.92 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-24 right-5 z-40 w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-sm transition-shadow duration-300"
          style={{
            background: bgColor,
            border: `1px solid ${borderColor}`,
            boxShadow: shadowColor,
          }}
        >
          {/* Circular scroll-progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            {/* Track ring */}
            <circle
              cx="24" cy="24"
              r={RADIUS}
              fill="none"
              stroke={trackColor}
              strokeWidth="2.5"
            />
            {/* Progress arc */}
            <circle
              cx="24" cy="24"
              r={RADIUS}
              fill="none"
              stroke={accentColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeDash}
              style={{ transition: "stroke-dashoffset 0.15s linear" }}
            />
          </svg>

          {/* Arrow icon */}
          <FaArrowUp
            size={14}
            className="relative z-10"
            style={{ color: accentColor }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
