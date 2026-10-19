// src/components/Contact.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useTheme } from "./Theme";
import {
  FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub,
  FaCheckCircle, FaTimesCircle, FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const card = themes[theme].Card;
  const button1 = themes[theme].Button1;
  const isDark = theme === "dark";

  const accentColor = isDark ? "#06b6d4" : "#7c3aed";
  const accentClass = isDark ? "text-[#06b6d4]" : "text-[#7c3aed]";

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all duration-250
    ${isDark
      ? "bg-[#0a0f2e]/60 border-[#06b6d4]/15 text-[#f0f4ff] placeholder-[#94a3b8] focus:border-[#06b6d4]/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.12)]"
      : "bg-white/70 border-[#7c3aed]/15 text-[#0a0f2e] placeholder-[#9ca3af] focus:border-[#7c3aed]/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.10)]"
    }
  `;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      setLoading(false);
      setError("Failed to send message. Please check your connection and try again.");
      console.error(err);
      setTimeout(() => setError(""), 6000);
    }
  };

  // Scroll to contact section
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "center" });

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+91 72991 15610",
      href: "tel:+917299115610",
      color: "text-green-400",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "moni2020k@gmail.com",
      href: "mailto:moni2020k@gmail.com",
      color: "text-red-400",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "s-monika-varshini-291b1a294",
      href: "https://www.linkedin.com/in/s-monika-varshini-291b1a294/",
      color: "text-[#0077b5]",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "MonikaVarshini2004",
      href: "https://github.com/MonikaVarshini2004",
      color: isDark ? "text-[#f0f4ff]" : "text-[#0a0f2e]",
    },
  ];

  return (
    <>
      {/* Floating contact icon — existing feature preserved */}
      <button
        onClick={scrollToContact}
        aria-label="Jump to contact section"
        className={`
          fixed bottom-6 right-5 z-50 p-3.5 rounded-full shadow-lg
          transition-all duration-300 hover:scale-110
          ${isDark
            ? "bg-[#7c3aed] hover:bg-[#6d28d9] text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            : "bg-[#7c3aed] hover:bg-[#6d28d9] text-white"
          }
        `}
        title="Contact Me"
      >
        <FaEnvelope size={18} />
      </button>

      <section
        id="contact"
        className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-24 overflow-hidden transition-colors duration-500 ${section.bg} ${section.text}`}
      >
        {/* Background orb */}
        <div
          className={`orb ${isDark ? "orb-cyan" : "orb-cyan-light"}`}
          style={{ width: 380, height: 380, top: "-5%", right: "-5%", animationDelay: "3s" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl w-full">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              Get In <span className={accentClass}>Touch</span>
            </h2>
            <div
              className="mx-auto h-1 w-14 rounded-full"
              style={{ background: `linear-gradient(90deg, ${accentColor}, ${isDark ? "#7c3aed" : "#06b6d4"})` }}
            />
            <p className="mt-4 text-sm opacity-60 max-w-sm mx-auto">
              Open to full-time opportunities, internships, and collaborations. Let's connect!
            </p>
          </motion.div>

          {/* Two-column layout: Info | Form */}
          <div className="grid md:grid-cols-5 gap-8">

            {/* ── Contact info column (2/5 width) ─────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:col-span-2 flex flex-col gap-4"
            >
              <p className="text-sm opacity-65 leading-relaxed mb-2">
                Feel free to reach out via any channel below. I typically respond within 24 hours.
              </p>

              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                    className={`
                      flex items-center gap-4 p-4 rounded-xl transition-all duration-250
                      hover:scale-[1.02] group
                      ${card.bg} ${card.hover}
                    `}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${accentColor}15` }}
                    >
                      <Icon size={16} className={item.color} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs opacity-50 font-medium">{item.label}</p>
                      <p className="text-sm font-semibold truncate group-hover:underline">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </motion.div>

            {/* ── Message form column (3/5 width) ─────────────────────── */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              noValidate
              className={`md:col-span-3 rounded-2xl p-6 md:p-8 flex flex-col gap-4 ${card.bg}`}
            >
              <h3 className="text-xl font-bold mb-1">Send a Message</h3>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Your Name *"
                  required className={inputClass}
                />
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="Your Email *"
                  required className={inputClass}
                />
              </div>

              {/* Phone */}
              <input
                type="tel" name="phone" value={form.phone}
                onChange={handleChange} placeholder="Phone (optional)"
                className={inputClass}
              />

              {/* Subject */}
              <input
                type="text" name="subject" value={form.subject}
                onChange={handleChange} placeholder="Subject"
                className={inputClass}
              />

              {/* Message */}
              <textarea
                name="message" value={form.message}
                onChange={handleChange} placeholder="Your Message *"
                rows={5} required
                className={`${inputClass} resize-none`}
              />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                className={`
                  flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl
                  font-semibold transition-all duration-300 disabled:opacity-60
                  ${button1.bg} ${button1.text} ${button1.hover}
                `}
              >
                {loading
                  ? <><span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />Sending…</>
                  : <><FaPaperPlane size={14} /> Send Message</>
                }
              </motion.button>

              {/* Feedback toasts */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 border border-green-400/25 rounded-xl px-4 py-3"
                  >
                    <FaCheckCircle size={15} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/25 rounded-xl px-4 py-3"
                  >
                    <FaTimesCircle size={15} className="mt-0.5 flex-shrink-0" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
