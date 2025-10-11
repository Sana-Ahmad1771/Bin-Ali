"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaMicroscope, FaUsers, FaAward } from "react-icons/fa";

const reasons = [
  {
    icon: <FaHandshake className="text-white text-3xl" />,
    title: "Trusted Partnerships",
    description:
      "We've built long-lasting relationships with leading global medical brands, ensuring reliable product quality and availability.",
  },
  {
    icon: <FaMicroscope className="text-white text-3xl" />,
    title: "Cutting-Edge Technology",
    description:
      "We deploy advanced technologies and maintain strict quality standards to provide innovative healthcare solutions.",
  },
  {
    icon: <FaUsers className="text-white text-3xl" />,
    title: "Dedicated Team",
    description:
      "Our team of experts ensures every client receives personalized service, fast response, and professional guidance.",
  },
  {
    icon: <FaAward className="text-white text-3xl" />,
    title: "Commitment to Excellence",
    description:
      "We strive to exceed expectations through continuous improvement and a deep commitment to ethical business practices.",
  },
];

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-primary/20 py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="mx-auto mb-16 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold text-sm uppercase tracking-wide"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Delivering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Trust & Quality <br />
            </span>{" "}
            in Every Step
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-primary mb-8 mx-auto lg:mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-dark-5 max-w-2xl text-lg mx-auto lg:mx-0"
          >
            We combine innovation, integrity, and care to ensure our clients
            receive the best medical supplies and services across the region.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative group"
            >
              <div className="relative bg-white border border-gray-200 rounded-2xl p-[2px] shadow-md transition-all duration-300 overflow-hidden h-[360px] flex flex-col group-hover:shadow-2xl group-hover:border-transparent">
                {/* Top border light line (always visible) */}
                <div
                  className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-primary to-primary-light rounded-t-2xl z-10 transition-opacity duration-300 ${
                    hovered === index ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Animated border glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-primary via-primary-light to-primary transition-opacity duration-300 ${
                    hovered === index
                      ? "opacity-100 animate-border-glow"
                      : "opacity-0"
                  }`}
                ></div>

                {/* Inner content */}
                <div className="relative z-20 bg-white rounded-2xl h-full flex flex-col items-center p-6 text-center">
                  {/* Fixed icon area */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-light mb-6">
                    <motion.div
                      animate={{ rotate: hovered === index ? 360 : 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Title and text area */}
                  <div className="flex flex-col justify-start flex-grow">
                    <div className="w-12 h-0.5 bg-primary/70 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-3 text-dark-2">
                      {item.title}
                    </h3>
                    <p className="text-dark-5 text-sm leading-relaxed mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Border animation keyframes */}
      <style jsx>{`
        @keyframes borderGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-border-glow {
          background-size: 300% 300%;
          animation: borderGlow 3s linear infinite;
          filter: blur(1px);
        }
      `}</style>
      {/* Decorative Right Shape */}
      <div
        className="absolute z-10 top-0 right-0 h-full w-[40px] md:w-[60px] hidden lg:block opacity-80 overflow-hidden pointer-events-none"
        style={{
          backgroundImage: "url('/shape.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "right center",
        }}
      ></div>
    </section>
  );
}
