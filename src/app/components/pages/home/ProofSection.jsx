"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaHospitalUser,
  FaBoxesStacked,
  FaCertificate,
  FaCalendarCheck,
} from "react-icons/fa6";

const stats = [
  {
    id: 1,
    icon: <FaCalendarCheck className="text-primary" size={25} />,
    value: 25,
    suffix: "+",
    label: "Years Serving UAE Healthcare",
  },
  {
    id: 2,
    icon: <FaHospitalUser className="text-primary" size={25} />,
    value: 450,
    suffix: "+",
    label: "Government & Private Hospitals",
  },
  {
    id: 3,
    icon: <FaBoxesStacked className="text-primary" size={25} />,
    value: 1200,
    suffix: "+",
    label: "Approved Medical Items",
  },
  {
    id: 4,
    icon: <FaCertificate className="text-primary" size={25} />,
    value: 100,
    suffix: "%",
    label: "DHA & MOH Certified",
  },
];

function Counter({ value, suffix, start = 0, duration = 1500 }) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="text-[38px] md:text-[42px] font-bold text-dark-2">
      {count}
      {suffix}
    </span>
  );
}

export default function ProofSection() {
  return (
    <section className="relative bg-white py-20 px-5 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider">
          We Are Trusted
        </p>
        <h2 className="text-dark-2 text-4xl md:text-5xl font-bold mt-2">
          Why Healthcare Chooses Us
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto text-center">
        {stats.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            {/* Icon with dotted border ring */}
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-primary relative  mb-2">
              {item.icon}
            </div>

            {/* Counter */}
            <Counter value={item.value} suffix={item.suffix} />

            {/* Label */}
            <p className="text-gray-600 text-sm max-w-[160px] leading-snug mt-1">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
