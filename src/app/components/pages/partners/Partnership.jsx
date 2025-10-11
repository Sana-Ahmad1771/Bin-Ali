"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Partnership() {
  return (
    <section
      className="relative py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/heroimg-3.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>

      {/* Unified Container Width */}
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 py-6 flex flex-col justify-center items-center text-white gap-10 text-center lg:text-left">
        {/* Text Section */}
        <div className="w-full text-center lg:w-2/3">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold leading-snug"
          >
            Interested in Partnership?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-white mt-3 text-sm sm:text-base leading-relaxed"
          >
            Join our network of trusted partners and help us deliver exceptional
            healthcare solutions with{" "}
            <span className="font-semibold text-white">
              Bin Ali Medical Supplies
            </span>
            .
          </motion.p>
        </div>

        {/* Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-auto"
        >
          <Link
            href="/contact"
            className="relative inline-block bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-95 overflow-hidden group"
          >
            {/* Sliding Overlay Effect */}
            <span className="absolute inset-0 bg-[rgba(255,255,255,0.12)] skew-x-[30deg] -left-[10%] w-[120%] h-full transition-transform duration-250 ease-in-out transform translate-x-0 group-hover:translate-x-full"></span>

            {/* Button Text */}
            <span className="relative z-10">Contact Us for Partnership</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
