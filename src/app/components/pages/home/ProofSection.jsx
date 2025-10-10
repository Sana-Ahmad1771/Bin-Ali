"use client";
import { motion } from "framer-motion";
import { FaRegStar } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaRegStar size={40} className="text-primary" />,
    value: "2631+",
    label: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <GiThreeFriends size={40} className="text-primary" />,
    value: "1720+",
    label: "ACTIVE MEMBER",
  },
  {
    id: 3,
    icon: <FaGlobe size={40} className="text-primary" />,
    value: "250+",
    label: "EXPERT TEAM",
  },
];

export default function ProofSection() {
  return (
    <section className="relative bg-white py-20 px-5 lg:px-42 xl:px-53 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-semibold text-sm uppercase tracking-wider mb-3"
        >
          Anyone can make promise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight"
        >
          We can give you proof
        </motion.h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto text-center">
        {stats.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`flex flex-col items-center justify-center space-y-3 ${
              i !== stats.length - 1
                ? "md:border-r border-gray-200 md:pr-6 lg:pr-10"
                : ""
            }`}
          >
            <div>{item.icon}</div>
            <h3 className="text-3xl font-bold text-dark-2">{item.value}</h3>
            <p className="text-gray-500 tracking-wider">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative pattern (optional, consistent with theme)
      <div className="absolute right-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="pattern" />
      </div> */}
    </section>
  );
}
