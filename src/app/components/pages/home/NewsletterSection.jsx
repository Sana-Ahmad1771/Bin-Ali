"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section
      className="relative py-16 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/heroimg-3.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>

      {/* Unified Container Width */}
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 py-6 flex flex-col lg:flex-row justify-between items-center text-white gap-10 text-center lg:text-left">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold leading-snug"
          >
            Subscribe to Our Newsletter <br /> & Get the Latest Updates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-white/80 mt-3 mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed"
          >
            Stay informed with the latest news, offers, and innovations from
            <span className="font-semibold text-white">
              {" "}
              Bin Ali Medical Supplies
            </span>
            .
          </motion.p>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-0 w-full max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row w-full sm:w-auto rounded-2xl sm:rounded-full bg-white p-1 sm:p-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:min-w-[280px] md:min-w-[320px] lg:min-w-[310px] xl:min-w-[320px] bg-transparent py-3 sm:py-4 px-4 sm:px-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl sm:rounded-l-full sm:rounded-r-none text-base placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl sm:rounded-r-full transition-all duration-200 whitespace-nowrap text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-[1.03] active:scale-95 min-h-[52px] sm:min-h-[60px] overflow-hidden group"
              >
                {/* Faster overlay animation */}
                <span className="absolute inset-0 bg-[rgba(255,255,255,0.12)] skew-x-[30deg] -left-[10%] w-[120%] h-full transition-transform duration-250 ease-in-out transform translate-x-0 group-hover:translate-x-full"></span>

                {/* Text and icon */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Subscribe
                  <FaPaperPlane className="text-xs sm:text-sm" />
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary font-semibold py-3 px-6 rounded-full shadow-2xl z-50 text-sm sm:text-base border border-blue-100"
          >
            ✅ Thank you for subscribing!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
