// src/components/Hero.jsx
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import { useTheme } from "./Theme";

export default function Hero() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const { theme, themes } = useTheme();
  const hero = themes[theme].Hero;

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-500 ${hero.bg} ${hero.text}`}
    >
      {/* Social Icons - Fixed Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-50">
        <a
          href="https://www.linkedin.com/in/s-monika-varshini-291b1a294/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border-2 border-[#0077b5] rounded-full hover:scale-110 transition"
        >
          <FaLinkedin size={28} className="text-[#0077b5]" />
        </a>
        <a
          href="https://github.com/MonikaVarshini2004"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border-2 border-black dark:border-white rounded-full hover:scale-110 transition"
        >
          <FaGithub size={28} className="text-black dark:text-white" />
        </a>
        <button
          onClick={() => setShowPhone(!showPhone)}
          className="p-3 border-2 border-green-500 rounded-full hover:scale-110 transition"
        >
          <FaPhoneAlt size={26} className="text-green-500" />
        </button>
        <button
          onClick={() => setShowEmail(!showEmail)}
          className="p-3 border-2 border-red-500 rounded-full hover:scale-110 transition"
        >
          <FaEnvelope size={26} className="text-red-500" />
        </button>
      </div>

      {/* Center Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center max-w-2xl">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${hero.text}`}>
            Hello, I'm <br />{" "}
            <span className={`${hero.accent}`}>Monika Varshini .S</span>
          </h1>
          <h2 className="text-lg md:text-2xl mb-6 opacity-80">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "UI Enthusiast",
                "Problem Solver",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>

          {/* Animated Phone & Email */}
          <div className="mb-4 space-y-2">
            {showPhone && (
              <span className="text-green-600 font-medium text-lg md:text-xl">
                <Typewriter
                  words={["+91 7299115610"]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                />
              </span>
            )}{" "}
            <br />
            {showEmail && (
              <a
                href="mailto:moni2020k@gmail.com"
                className="text-red-600 font-medium text-lg md:text-xl hover:underline"
              >
                <Typewriter
                  words={["moni2020k@gmail.com"]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                />
              </a>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#projects"
              className={`px-6 py-3 rounded-lg font-semibold hover:scale-105 transition ${hero.button.bg} ${hero.button.text} ${hero.button.hover}`}
            >
              View Projects
            </a>
            <a
              href={resume}
              download
              className={`px-6 py-3 rounded-lg border transition ${
                theme === "dark"
                  ? "border-[#caf0f8] text-[#caf0f8] hover:bg-[#caf0f8] hover:text-[#03045e]"
                  : "border-[#03045e] text-[#03045e] hover:bg-[#E7C6FF]"
              }`}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative">
          <div className="w-64 h-72 bg-cyan-400 clip-hexagon flex items-center justify-center shadow-[0_25px_60px_20px_rgba(6,182,212,0.7)]">
            <img
              src={profileImg}
              alt="Profile"
              className="w-[95%] h-[95%] object-cover clip-hexagon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
