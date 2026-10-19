// src/components/Hero.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaDownload, FaEye,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import resume     from "../assets/resume.pdf";
import { useTheme } from "./Theme";

// Reusable fade-up variant factory
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const { theme, themes } = useTheme();
  const hero   = themes[theme].Hero;
  const isDark = theme === "dark";

  const accent      = isDark ? "#06b6d4" : "#7c3aed";
  const accentClass = isDark ? "text-[#06b6d4]" : "text-[#7c3aed]";

  const togglePhone = () => { setShowPhone(p => !p); setShowEmail(false); };
  const toggleEmail = () => { setShowEmail(p => !p); setShowPhone(false); };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20 pb-12 ${hero.bg} ${hero.text}`}
    >
      {/* ── Ambient orbs ──────────────────────────────────────────────────── */}
      <div
        className={`orb ${isDark ? "orb-cyan" : "orb-cyan-light"}`}
        style={{ width: 520, height: 520, top: "-12%", left: "-10%" }}
        aria-hidden="true"
      />
      <div
        className={`orb ${isDark ? "orb-violet" : "orb-violet-light"}`}
        style={{ width: 420, height: 420, bottom: "-8%", right: "-6%", animationDelay: "3.5s" }}
        aria-hidden="true"
      />

      {/* ── Main grid ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20">

        {/* ─ Text column ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl w-full">

          {/* Role label */}
          <motion.p
            {...fadeUp(0.1)}
            className={`text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${accentClass}`}
          >
            Java Full Stack Developer
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Hello, I'm{" "}
            <span className={`block ${accentClass}`}
              style={{ fontFamily: "'Outfit', sans-serif" }}>
              Monika Varshini .S
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div {...fadeUp(0.32)} className="text-lg md:text-xl mb-5 opacity-80 min-h-[1.8rem]">
            <Typewriter
              words={["Full-Stack Developer", "Spring Boot Developer", "UI Enthusiast", "Problem Solver"]}
              loop typeSpeed={75} deleteSpeed={40} delaySpeed={2200}
              cursor cursorStyle="|"
            />
          </motion.div>

          {/* Short bio */}
          <motion.p
            {...fadeUp(0.42)}
            className="text-sm md:text-base leading-relaxed opacity-70 mb-7 max-w-md"
          >
            B.E. CSE Graduate with hands-on experience in Java, Spring Boot, React, and MySQL.
            Passionate about building robust full-stack applications with clean, maintainable code.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.52)}
            className="flex flex-wrap gap-3 justify-center md:justify-start mb-6"
          >
            <a
              href="#projects"
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                transition-all duration-300 hover:scale-105 hover:shadow-lg
                ${hero.button.bg} ${hero.button.text} ${hero.button.hover}
              `}
            >
              <FaEye size={14} /> View Projects
            </a>
            <a
              href={resume}
              download
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2
                transition-all duration-300 hover:scale-105
                ${isDark
                  ? "border-[#06b6d4] text-[#06b6d4] hover:bg-[#06b6d4] hover:text-[#020817]"
                  : "border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white"
                }
              `}
            >
              <FaDownload size={13} /> Download CV
            </a>
          </motion.div>

          {/* Social + contact icon row */}
          <motion.div
            {...fadeUp(0.62)}
            className="flex items-center gap-3 flex-wrap justify-center md:justify-start"
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/s-monika-varshini-291b1a294/"
              target="_blank" rel="noopener noreferrer"
              aria-label="View LinkedIn profile"
              className={`
                p-2.5 rounded-lg border transition-all duration-200 hover:scale-110
                ${isDark
                  ? "border-[#06b6d4]/30 text-[#06b6d4] hover:bg-[#06b6d4]/12 hover:border-[#06b6d4]/70"
                  : "border-[#7c3aed]/30 text-[#7c3aed] hover:bg-[#7c3aed]/10 hover:border-[#7c3aed]/70"
                }
              `}
            >
              <FaLinkedin size={20} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MonikaVarshini2004"
              target="_blank" rel="noopener noreferrer"
              aria-label="View GitHub profile"
              className={`
                p-2.5 rounded-lg border transition-all duration-200 hover:scale-110
                ${isDark
                  ? "border-[#f0f4ff]/20 text-[#f0f4ff] hover:bg-white/5 hover:border-[#f0f4ff]/50"
                  : "border-[#0a0f2e]/20 text-[#0a0f2e] hover:bg-black/5 hover:border-[#0a0f2e]/50"
                }
              `}
            >
              <FaGithub size={20} />
            </a>

            {/* Divider */}
            <span className={`w-px h-6 ${isDark ? "bg-white/15" : "bg-black/12"}`} aria-hidden="true" />

            {/* Phone toggle */}
            <button
              onClick={togglePhone}
              aria-label={showPhone ? "Hide phone number" : "Reveal phone number"}
              aria-pressed={showPhone}
              className={`
                p-2.5 rounded-lg border transition-all duration-200 hover:scale-110
                ${showPhone
                  ? "border-green-400 text-green-400 bg-green-400/10"
                  : isDark
                    ? "border-green-500/30 text-green-400 hover:bg-green-400/10 hover:border-green-400/70"
                    : "border-green-600/30 text-green-600 hover:bg-green-600/8 hover:border-green-600/70"
                }
              `}
            >
              <FaPhoneAlt size={17} />
            </button>

            {/* Email toggle */}
            <button
              onClick={toggleEmail}
              aria-label={showEmail ? "Hide email address" : "Reveal email address"}
              aria-pressed={showEmail}
              className={`
                p-2.5 rounded-lg border transition-all duration-200 hover:scale-110
                ${showEmail
                  ? "border-red-400 text-red-400 bg-red-400/10"
                  : isDark
                    ? "border-red-500/30 text-red-400 hover:bg-red-400/10 hover:border-red-400/70"
                    : "border-red-600/30 text-red-600 hover:bg-red-600/8 hover:border-red-600/70"
                }
              `}
            >
              <FaEnvelope size={17} />
            </button>
          </motion.div>

          {/* Revealed contact details */}
          {(showPhone || showEmail) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 text-sm font-medium"
            >
              {showPhone && (
                <a
                  href="tel:+917299115610"
                  className="flex items-center gap-2 text-green-500 hover:underline"
                >
                  <FaPhoneAlt size={11} /> +91 72991 15610
                </a>
              )}
              {showEmail && (
                <a
                  href="mailto:moni2020k@gmail.com"
                  className="flex items-center gap-2 text-red-400 hover:underline"
                >
                  <FaEnvelope size={11} /> moni2020k@gmail.com
                </a>
              )}
            </motion.div>
          )}
        </div>

        {/* ─ Profile image column ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1  }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0 flex items-center justify-center"
        >
          {/* Glow layer behind hex */}
          <div
            className="absolute inset-0 blur-3xl opacity-35 scale-125 clip-hexagon"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />

          {/* Pulsing hex border ring */}
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 clip-hexagon border-2 opacity-40"
            style={{ borderColor: accent }}
            aria-hidden="true"
          />

          {/* Hex image container */}
          <div
            className="relative w-60 h-[17rem] md:w-72 md:h-[21rem] clip-hexagon flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: accent }}
          >
            <img
              src={profileImg}
              alt="Monika Varshini S — Java Full Stack Developer"
              className="w-[95%] h-[95%] object-cover clip-hexagon"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll cue ────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-35">Scroll</span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-5 rounded-full opacity-35"
          style={{ backgroundColor: accent }}
        />
      </motion.div>
    </section>
  );
}
