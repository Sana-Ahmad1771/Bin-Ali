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
    <section className="bg-white py-20 text-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary font-medium"
      >
        Anyone can make promise
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-dark-2 mb-12"
      >
        We can give you proof
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {stats.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex flex-col items-center space-y-3 border-r border-gray-200 last:border-none"
          >
            <div>{item.icon}</div>
            <h3 className="text-3xl font-bold text-dark-2">{item.value}</h3>
            <p className="text-gray-500 tracking-wider">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
