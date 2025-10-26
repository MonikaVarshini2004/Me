import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useTheme } from "./Theme";
import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";

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
  const [showForm, setShowForm] = useState(false); // toggle between contact cards and form

  const { theme, themes } = useTheme();
  const section = themes[theme].Section;
  const card = themes[theme].Card;
  const button1 = themes[theme].Button1;
  const accent =
    theme === "light" ? "focus:ring-[#7b2cbf]" : "focus:ring-[#caf0f8]";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await axios.post("https://me-back.onrender.com/api/contact", form);
      setLoading(false);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setLoading(false);
      alert("Failed to send message. Please try again.");
      console.error(err);
    }
  };

  // Scroll to contact section
  const scrollToContact = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {/* Floating Contact Icon */}
      <button
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#7b2cbf] hover:bg-[#5a189a] text-white rounded-full shadow-lg hover:scale-110 transition"
        title="Contact Me"
      >
        <FaEnvelope size={24} />
      </button>

      <section
        id="contact"
        className={`min-h-screen flex flex-col justify-center items-center px-6 py-20 transition-colors duration-500 ${section.bg} ${section.text}`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        {!showForm ? (
          // === Default 3-Part Contact Layout ===
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full text-center">
            {/* --- Phone Section --- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-xl shadow-lg ${card.bg}`}
            >
              <FaPhoneAlt className="text-orange-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Let’s Connect</h3>
              <p className="text-sm mb-2">
                Prefer talking directly? I’d love to chat about new
                opportunities or collaborations.
              </p>
              <p className="font-medium">📱 +91 72991 15610</p>
              <a
                href="tel:+917299115610"
                className="mt-4 inline-block text-orange-500 font-semibold hover:underline"
              >
                Call Me
              </a>
            </motion.div>

            {/* --- Email Section --- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-xl shadow-lg ${card.bg}`}
            >
              <FaEnvelope className="text-blue-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Drop an Email</h3>
              <p className="text-sm mb-2">
                Have an idea, question, or feedback? Let’s discuss it over mail.
              </p>
              <p className="font-medium">📧 moni2020k@gmail.com</p>
              <a
                href="mailto:moni2020k@gmail.com"
                className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
              >
                Send Email
              </a>
            </motion.div>

            {/* --- Start a New Message Section --- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`p-8 rounded-xl shadow-lg ${card.bg}`}
            >
              <FaComments className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
              <p className="text-sm mb-4">
                Want to share your thoughts or say hi? Send me a quick message
                — I’ll get back soon!
              </p>
              <button
                onClick={() => setShowForm(true)}
                className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-300 ${button1.bg} ${button1.text} ${button1.hover}`}
              >
                START HERE
              </button>
            </motion.div>
          </div>
        ) : (
          // === Message Form (after "Start Here") ===
          <motion.form
            onSubmit={handleSubmit}
            className={`w-full max-w-lg rounded-xl shadow-lg p-8 space-y-4 transition-colors duration-500 ${card.bg} ${card.text}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-6">
              Send a Message
            </h3>

            <div className="flex flex-col md:flex-row gap-4">
              <motion.input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500`}
              />
              <motion.input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
                className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500`}
              />
            </div>

            <motion.input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number (optional)"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500`}
            />
            <motion.input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500`}
            />
            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message *"
              rows="5"
              required
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${accent} transition-colors duration-500`}
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

            {/* Back Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowForm(false)}
                type="button"
                className="text-sm text-gray-400 hover:underline"
              >
                ← Back to Contact Options
              </button>
            </div>
          </motion.form>
        )}
      </section>
    </>
  );
}
