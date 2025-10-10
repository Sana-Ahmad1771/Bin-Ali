"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaGlobe,
  FaBalanceScale,
  FaCogs,
  FaHeartbeat,
  FaHandsHelping,
  FaUserShield,
  FaChartLine,
} from "react-icons/fa";

export default function ValuesPrinciples() {
  const values = [
    {
      icon: <FaUsers size={28} />,
      title: "Customers",
      desc: "Our customers come first. They deserve the best of what we can offer.",
    },
    {
      icon: <FaGlobe size={28} />,
      title: "Market",
      desc: "We are dedicated to achieving enduring success as a global player.",
    },
    {
      icon: <FaBalanceScale size={28} />,
      title: "Philosophy",
      desc: "Our leadership is dedicated to the philosophy that holds values and principles above profit.",
    },
    {
      icon: <FaCogs size={28} />,
      title: "Technology",
      desc: "We continuously strive to harness the best available technologies to achieve our goals.",
    },
    {
      icon: <FaHeartbeat size={28} />,
      title: "Products & Services",
      desc: "We aim to produce the best medical products and provide dedicated service for health and safety.",
    },
    {
      icon: <FaHandsHelping size={28} />,
      title: "Corporate Social Responsibility",
      desc: "We contribute to society and the environment as a responsible corporate citizen.",
    },
    {
      icon: <FaUserShield size={28} />,
      title: "Standards Of Conduct",
      desc: "We expect our employees to show the highest ethics and integrity in all aspects of our business.",
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Growth & Profitability",
      desc: "We conduct our business ethically and prudently to fulfill stakeholder expectations.",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-dark-2 text-4xl md:text-5xl font-bold mb-4"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Values & Principles
            </span>
          </motion.h2>
          <p className="text-dark-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            We are guided by principles that define who we are and how we
            operate — ensuring excellence, ethics, and innovation in every step.
          </p>
        </div>

        {/* Grid of Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -6 }}
              className="relative bg-primary-light/50 rounded-tl-[5rem] rounded-tr-3xl rounded-b-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Content */}
              <div className="relative rounded-tr-2xl p-6 md:p-8 flex-1">
                {/* Floating Icon */}
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <div className="mt-8 md:mt-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-dark-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dark-5 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom CTA Bar */}
              <div className="bg-white rounded-b-2xl p-4 md:p-5 flex items-center justify-between border-t border-gray-100">
                <a
                  href="#"
                  className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  Learn More <span className="text-lg">›</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
