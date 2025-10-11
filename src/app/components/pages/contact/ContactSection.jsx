"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill name, email and message before sending.");
      return;
    }
    setSending(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 3500);
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative bg-white py-20 px-6 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        {/* LEFT: Contact Form */}
        <motion.div
          className="flex-1 bg-white/90 shadow-md rounded-2xl p-8 border border-white/40 h-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
              Drop Us a Line
            </p>
            <h2 className="text-dark-2 text-4xl md:text-5xl font-bold mb-8">
              Write Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Cover Letter
              </span>
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="text-red-600 bg-red-50 border border-red-100 p-3 rounded">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-dark-4 font-medium mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
                />
              </div>

              <div>
                <label className="block text-dark-4 font-medium mb-2">
                  Your Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
                />
              </div>

              <div>
                <label className="block text-dark-4 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
                />
              </div>

              <div>
                <label className="block text-dark-4 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="relative bg-gradient-to-r from-primary to-primary-light cursor-pointer text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.03] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group"
                >
                  {/* Sliding overlay effect */}
                  <span className="absolute inset-0 bg-[rgba(255,255,255,0.12)] skew-x-[30deg] -left-[10%] w-[120%] h-full transition-transform duration-250 ease-in-out transform translate-x-0 group-hover:translate-x-full"></span>

                  {/* Text content */}
                  <span className="relative z-10">
                    {sending ? "Sending..." : "Send Message"}
                  </span>
                </button>

                {success && (
                  <div className="text-green-700 bg-green-50 border border-green-100 px-4 py-2 rounded">
                    Message sent successfully
                  </div>
                )}
              </div>
            </form>
          </div>
        </motion.div>

        {/* RIGHT: Office Info */}
        <motion.div
          className="flex-1 flex flex-col space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              city: "Abu Dhabi",
              address:
                "Office 601, Mazyad Mall Tower 1, Mohammed Bin Zayed City, Musaffah",
              phone: ["+971-2-6760555", "+971-2-6760888"],
              email: "info@binalimed.com",
            },
            {
              city: "Dubai",
              address: "Suite No 806, Shoba Ivory 1, Business Bay",
              phone: ["+971-4-452002", "+971-4-4423503"],
              email: "info@binalimed.com",
            },
            {
              city: "Al-Ain",
              address: "Al-Harair Street No-57, Sharikath, Al-Ain",
              phone: ["+971-3-7824596", "+971-3-7824597"],
              email: "info@binalimed.com",
            },
          ].map((office, i) => (
            <div
              key={i}
              className="bg-white/90 border border-gray-200 shadow-md p-8 rounded-2xl"
            >
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <FaMapMarkerAlt className="text-primary text-2xl" />
                  <h3 className="text-2xl font-semibold text-dark-2">
                    {office.city}
                  </h3>
                </div>
                <p className="text-dark-5 mb-3">{office.address}</p>
                <p className="text-dark-5 mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-primary" /> {office.email}
                </p>
                {office.phone.map((num, idx) => (
                  <p
                    key={idx}
                    className="text-dark-5 flex items-center gap-2 text-[15px]"
                  >
                    <FaPhoneAlt className="text-primary" /> {num}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="pattern" loading="lazy" />
      </div>
      <div className="absolute right-0 -top-10 opacity-80 animate-bounce-smooth">
        <img
          src="/shape.png"
          alt="shape"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}
