"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBullseye } from "react-icons/fa";

export default function MissionSection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* overlay  */}
      {/* <div className="absolute right-0 bottom-0 hidden md:block h-full bg-gradient-to-l from-primary/30 to-transparent w-[300px] sm:w-[450px] lg:w-[680px]"></div> */}

      {/* unified container width for all sections */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side - Text Content */}
        <motion.div
          className="flex-1 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <FaBullseye className="text-primary text-3xl" />
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Mission
            </p>
          </div>

          <h2 className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-6">
            Striving for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Excellence in Healthcare
            </span>
          </h2>

          <p className="text-dark-5 leading-relaxed text-base md:text-lg space-y-4">
            Persistently try hard to make{" "}
            <span className="font-semibold text-primary">BAMS</span> a globally
            recognised healthcare company by focusing stringently on the core
            values on which our foundation is built.
          </p>

          <p className="text-dark-5 leading-relaxed text-base md:text-lg mt-4">
            Not just fulfill, but excel customer expectations by endowing
            unparalleled customer support. Deploy state-of-the-art and superior
            technologies, always. Uphold the ethical values that make our
            business sector special.
          </p>

          <p className="text-dark-5 leading-relaxed text-base md:text-lg mt-4">
            Safeguard the rights and privileges of our investors and employees,
            and remain responsive to societal and environmental concerns by
            concentrating on sustainable growth.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex-1 relative flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl"></div>

          <div className="rounded-2xl overflow-hidden shadow-lg relative z-10">
            <Image
              src="/team1.jpg"
              alt="Our Mission"
              width={500}
              height={450}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Background Shape */}
          <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-primary/10 rounded-full blur-2xl"></div>
        </motion.div>
      </div>

      {/* Background Decorative Pattern */}
      <div className="absolute left-0 top-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="pattern" />
      </div>
    </section>
  );
}
