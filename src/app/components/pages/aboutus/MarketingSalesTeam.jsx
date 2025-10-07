"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaCogs } from "react-icons/fa";
export default function MarketingSalesTeam() {
  return (
    <section className="relative bg-gray-9 py-20 px-6 lg:px-16 xl:px-28 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Right Side - Image */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Top-right Decorative Shape */}
          <div className="absolute -top-10 -right-10 animate-bounce-smooth">
            <img src="/shape.png" alt="decorative shape" className="rounded-md" />
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden shadow-lg relative z-10">
            <Image
              src="/team2.png"
              alt="Marketing & Sales Team"
              width={420}
              height={480}
              className="rounded-xl object-cover"
            />
          </div>
        </motion.div>

        {/* Left Side - Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Marketing & Sales Team
          </p>

          <h2 className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-6">
            Dedicated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Marketing & Sales Team
            </span>
          </h2>

          <div className="space-y-4 text-dark-5 leading-relaxed mb-8">
            <p>
              The team is led by <strong>Aji Mohammed</strong>, Master in Commerce,
              supported by <strong>22 sales staff</strong> and <strong>5 marketing staff</strong>,
              all highly experienced and trained in their respective fields.
            </p>
            <p>
              Our product specialist, <strong>Dr. Jaya Thomas</strong> (Masters in Pharmacy),
              brings over <strong>15 years</strong> of practical experience. The team is further
              strengthened by a capable logistics and support staff ensuring smooth operations.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-dark-5">
              <li>Installation of equipment & documentation</li>
              <li>Equipment inventory register (soft & hard copy)</li>
              <li>Electrical safety analyzer testing</li>
              <li>Vital sign simulation & calibration breakdown service</li>
              <li>Daily checking of critical equipment & record filing</li>
              <li>Maintenance contract follow-up (AMC & CMC)</li>
              <li>Preventive maintenance (PM) scheduling</li>
              <li>PM performed as per standard procedure</li>
            </ul>
          </div>

         {/* Footer Info */}
          <div className="flex items-center gap-6 border-t border-gray-4 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <FaUsers size={20} />
              </div>
              <div>
                <p className="text-dark-2 font-semibold leading-tight">
                  Bin Ali Sales Team
                </p>
                <p className="text-gray text-sm">Committed to service excellence</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <FaCogs size={20} />
              </div>
              <div>
                <p className="text-dark-2 font-semibold leading-tight">
                  Operational Support
                </p>
                <p className="text-gray text-sm">Efficient logistics & management</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom-left Background Pattern */}
      <div className="absolute left-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="pattern" />
      </div>
    </section>
  );
}
