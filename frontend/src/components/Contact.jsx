// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useTheme } from "./Theme";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const card = themes[theme].Card;
  const button1 = themes[theme].Button1;
  const accent = theme === "light" ? "focus:ring-[#7b2cbf]" : "focus:ring-[#caf0f8]";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await axios.post("https://me-back.onrender.com/api/contact", form);
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setLoading(false);
      alert("Failed to send message. Please try again.");
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-20 transition-colors duration-500 ${section.bg} ${section.text}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className={`w-full max-w-lg rounded-xl shadow-lg p-8 space-y-4 transition-colors duration-500 ${card.bg} ${card.text}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <motion.input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500 ${card.text}`}
          />
          <motion.input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email *"
            required
            className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500 ${card.text}`}
          />
        </div>

        <motion.input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number (optional)"
          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500 ${card.text}`}
        />
        <motion.input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500 ${card.text}`}
        />
        <motion.textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message *"
          rows="5"
          required
          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500 ${card.text}`}
        ></motion.textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-500 ${button1.bg} ${button1.text} ${button1.hover}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-400 font-medium mt-2"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
