"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaCogs } from "react-icons/fa";

export default function MarketingSalesTeam() {
  return (
    <section className="relative bg-gray-9 py-20 px-6 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Side - Image */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative Shape */}
          <div className="absolute -top-10 -right-10 animate-bounce-smooth">
            <img src="/shape.png" alt="decorative shape" className="rounded-md" />
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden lg:h-[900px] shadow-lg relative z-10 max-w-[600px] lg:max-w-[700px]">
            <Image
              src="/team2.jpg"
              alt="Marketing & Sales Team"
              width={700}
              height={800}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
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
              Our Sales and Marketing divisions are driven by a dynamic and expanding team 
              of professionals who continuously deliver excellence and innovation in every project.
            </p>

            <p>
              The Sales Team is led by <strong>Mohammad Shan</strong> (Dubai) and{" "}
              <strong>Naisam Maliya</strong> (Abu Dhabi), while the Marketing Team is 
              headed by <strong>Abhilash</strong> (Abu Dhabi) and <strong>Ebin Baby</strong> (Dubai).
            </p>

            <p>
              Together, they ensure efficient coordination, customer satisfaction, 
              and strategic market growth with the support of a large, experienced workforce 
              dedicated to maintaining the company’s reputation for quality and reliability.
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-gray-4 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <FaUsers size={20} />
              </div>
              <div>
                <p className="text-dark-2 font-semibold leading-tight">
                  Sales Team Leadership
                </p>
                <p className="text-gray text-sm">Focused on customer satisfaction & growth</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <FaCogs size={20} />
              </div>
              <div>
                <p className="text-dark-2 font-semibold leading-tight">
                  Marketing & Operations
                </p>
                <p className="text-gray text-sm">Delivering creative strategies & strong support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute left-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="pattern" />
      </div>
    </section>
  );
}
