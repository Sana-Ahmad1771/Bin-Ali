"use client";

import aboutbg from "../../../../../public/contactbg1.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

export const Careers = () => {
  return (
    <>
      {/* Top Banner - Consistent Layout */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-cover bg-no-repeat bg-center min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center items-center px-4 text-dark-2 overflow-hidden"
        style={{ backgroundImage: `url(${aboutbg.src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/30 z-10"></div>

        {/* Content */}
        <div className="relative z-40 text-center text-white space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Join Our Growing Team
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
            className="text-sm md:text-base"
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span> / Careers</span>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
