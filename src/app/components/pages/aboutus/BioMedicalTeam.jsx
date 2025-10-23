"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BiomedicalTeam() {
  return (
    <section className="relative bg-gray-9 py-20 px-6 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Side - Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Biomedical Team
          </p>

          <h2 className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-6">
            Dedicated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Biomedical Team
            </span>
          </h2>

          <div className="space-y-4 text-dark-5 leading-relaxed mb-8">
            <p>
              The team is led by <strong>Vineeth Nair</strong>, Senior Biomedical Engineer,
              supported by <strong>two Biomedical Technicians</strong> — all experienced and
              trained in handling Critical Care, Operation Theatre, and Laboratory Equipment.
            </p>
            <p>
              The Biomedical Engineering Department plays a vital role in maintaining
              and ensuring optimal performance of medical equipment to guarantee patient safety
              and operational excellence.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-dark-5">
              <li>Installation of equipment & documentation</li>
              <li>Equipment inventory management (soft & hard copy)</li>
              <li>Electrical safety analyzer testing</li>
              <li>Vital sign simulation & calibration services</li>
              <li>Daily checks of critical equipment & record filing</li>
              <li>Maintenance contract follow-up (AMC & CMC)</li>
              <li>Preventive maintenance (PM) scheduling & procedures</li>
              <li>Training of paramedic staff</li>
              <li>Condemnation of obsolete equipment</li>
              <li>Stock management of spares & accessories</li>
            </ul>
          </div>

          {/* Footer - Signature style */}
          <div className="border-t border-gray-4 pt-6 mt-8">
            <h3 className="text-dark-2 font-semibold text-xl leading-tight">
              Vineeth Nair
            </h3>
            <p className="text-gray text-sm">
              Senior Biomedical Engineer, Bin Ali Medical Supplies LLC
            </p>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative Shape */}
          <div className="absolute -top-10 -left-10 animate-bounce-smooth">
            <img src="/shape.png" alt="decorative shape" className="rounded-md" />
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden shadow-lg relative z-10 max-w-[600px] lg:max-w-[700px]">
            <Image
              src="/team-11.jpg"
              alt="Biomedical Team"
              width={700}
              height={800}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute right-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="pattern" />
      </div>
    </section>
  );
}
