// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "./Theme";

const quickLinks = [
  { href: "#home",       label: "Home"       },
  { href: "#about",      label: "About"      },
  { href: "#education",  label: "Education"  },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact"    },
];

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/MonikaVarshini2004",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/s-monika-varshini-291b1a294/",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    url: "mailto:moni2020k@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const { theme, themes } = useTheme();
  const navFooter = themes[theme].NavbarFooter;
  const isDark    = theme === "dark";

  const accentColor = isDark ? "#06b6d4" : "#7c3aed";
  const accentClass = isDark ? "text-[#06b6d4]" : "text-[#7c3aed]";
  const year        = new Date().getFullYear(); // ✅ Dynamic copyright year

  return (
    <footer
      className={`relative overflow-hidden ${navFooter.bg} ${navFooter.text} backdrop-blur-sm`}
    >
      {/* Gradient top border line */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, ${isDark ? "#7c3aed" : "#06b6d4"}, transparent)` }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Main footer grid */}
        <div className="grid sm:grid-cols-3 gap-8 mb-8">

          {/* Brand column */}
          <div>
            <p
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", color: accentColor }}
            >
              Monika Varshini S
            </p>
            <p className="text-sm opacity-55 leading-relaxed max-w-[220px]">
              Java Full Stack Developer. B.E. CSE Graduate. Building impactful web applications.
            </p>
          </div>

          {/* Quick links column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-3">Quick Links</p>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm opacity-65 hover:opacity-100 transition-opacity hover:${accentClass}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-3">Connect</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`flex items-center gap-2.5 text-sm opacity-65 hover:opacity-100 transition-opacity ${isDark ? "hover:text-[#06b6d4]" : "hover:text-[#7c3aed]"}`}
                  >
                    <Icon size={15} />
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-sm opacity-50"
          style={{ borderColor: `${accentColor}18` }}
        >
          <p>© {year} Monika Varshini S. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <FaHeart size={11} className="text-red-400" /> and Java ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
