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
        backgroundImage: "url('/heroimg-3.png')",
      }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>

      <div className="relative px-6 lg:px-16 xl:px-14 py-3 flex flex-col sm:flex-col lg:flex-row justify-between items-center text-white gap-8 text-center lg:text-left">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Subscribe Our Newsletter <br /> & Get Updates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-white/80 mt-2 mx-auto lg:mx-0 text-sm sm:text-base"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form by injected
            humour.
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
            className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-0 w-full max-w-2xl lg:max-w-none mx-auto"
          >
            <div className="flex flex-col sm:flex-row w-full sm:w-auto rounded-2xl sm:rounded-full bg-white p-1 sm:p-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full sm:min-w-[280px] md:min-w-[320px] lg:min-w-[350px] xl:min-w-[400px] bg-transparent py-3 sm:py-4 px-4 sm:px-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl sm:rounded-l-full sm:rounded-r-none text-base placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-primary to-primary-light  text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl sm:rounded-r-full transition-all duration-300 whitespace-nowrap text-sm sm:text-base shadow-md hover:shadow-lg transform  min-h-[52px] sm:min-h-[60px]"
              >
                <span>Subscribe</span>
                <FaPaperPlane className="text-xs sm:text-sm" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* ✅ Success Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="fixed sm:absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 bg-white text-primary font-semibold py-3 px-6 rounded-full shadow-2xl z-50 text-sm sm:text-base border border-blue-100"
          >
            ✅ Thank you for subscribing!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
