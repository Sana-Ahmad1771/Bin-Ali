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
    <section className="relative bg-primary/20 py-20 px-6 lg:px-16 xl:px-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
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
            Trust & Quality
          </span>{" "}
          in Every Step
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-20 h-1 bg-primary mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-dark-5 max-w-2xl text-lg"
        >
          We combine innovation, integrity, and care to ensure our clients
          receive the best medical supplies and services across the region.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container max-w-7xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="relative group"
          >
            <div className="relative bg-white border border-gray-200 rounded-2xl p-2 text-center shadow-md transition-all duration-300 h-[340px] flex flex-col items-center justify-center overflow-hidden group-hover:shadow-2xl group-hover:border-transparent">
              
              {/* ✅ Static top border visible only when not hovered */}
              <div
                className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-primary to-primary-light rounded-t-2xl z-10 transition-opacity duration-300 ${
                  hovered === index ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* 🌟 Animated glowing border (only visible on hover) */}
              <div
                className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-primary via-primary-light to-primary transition-opacity duration-300 ${
                  hovered === index ? "opacity-100 animate-border-glow" : "opacity-0"
                }`}
              ></div>

              {/* Inner content */}
              <div className="relative z-20 bg-white rounded-2xl h-full flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-light mb-6">
                  <motion.div
                    animate={{ rotate: hovered === index ? 360 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                <div className="w-12 h-0.5 bg-primary/70 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-dark-2">
                  {item.title}
                </h3>
                <p className="text-dark-5 text-sm leading-relaxed max-w-[250px] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
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
    </section>
  );
}
