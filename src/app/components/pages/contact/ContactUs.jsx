"use client";

import contactbg from "../../../../../public/contactbg1.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

export const ContactUs = () => {
  return (
    <>
      {/* Top Banner - Optimized */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-cover bg-no-repeat bg-center min-h-[45vh] md:min-h-[55vh] flex flex-col justify-center items-center text-white px-6 overflow-hidden"
        style={{ backgroundImage: `url(${contactbg.src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/40 z-10"></div>

        {/* Content */}
        <div className="relative z-40 text-center space-y-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Get In Touch With Us
          </motion.h1>

          <motion.div
            className="w-16 h-1 bg-primary rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/90"
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span>Contact</span>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
