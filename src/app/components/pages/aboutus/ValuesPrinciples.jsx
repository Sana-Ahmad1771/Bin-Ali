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
    <section className="py-20 px-6 lg:px-16 xl:px-28">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-dark-2 text-4xl md:text-5xl font-bold mb-4"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Values & Principles</span>
        </motion.h2>
        <p className="text-dark-5 max-w-2xl mx-auto">
          We are guided by principles that define who we are and how we operate
          — ensuring excellence, ethics, and innovation in every step.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ translateY: -6 }}
            className="relative rounded-tl-[3rem] rounded-tr-2xl rounded-b-2xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col h-full"
          >
            {/* top pale area */}
            <div className="bg-[#EAF2FF] rounded-tr-2xl p-5 sm:p-6 md:p-8 flex-1 flex flex-col relative">
              {/* icon badge overlapping top-left corner */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="mt-6 md:mt-2">
                <h3 className="text-xl md:text-2xl font-semibold text-dark-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-5 leading-relaxed mb-2">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* bottom white action bar */}
            <div className="bg-white rounded-b-2xl p-4 md:p-5 flex items-center justify-between">
              <a href="#" className="text-primary text-sm font-medium flex items-center gap-2">
                Learn More <span className="text-xl">›</span>
              </a>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
