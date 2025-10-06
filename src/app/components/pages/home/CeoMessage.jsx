"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CeoMessage() {
  return (
    <section className="relative bg-gray-9 py-20 px-6 lg:px-16 xl:px-28 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Side - Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            CEO’s Message
          </p>

          <h2 className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-6">
            A Message from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Our CEO
            </span>
          </h2>

          <div className="space-y-4 text-dark-5 leading-relaxed mb-8">
            <p>
              Dear Visitor,
            </p>
            <p>
              Bin Ali Medical Supplies LLC is a reputed Medical Supplies Company based in the United Arab Emirates, built on a distinct vision. It is driven by a set of great values, which are amply reflected in every aspect of our business.
            </p>
            <p>
              Since its inception in the early 2000s, BAMS has grown to become a leading supplier of a wide range of quality products. Our powerful presence in the market is supported by a loyal customer base and a deep commitment to excellence.
            </p>
            <p>
              We continuously strive to provide better products and services, envisioning BAMS as a world-class company engaged in manufacturing and distribution of high-quality medical and healthcare supplies that are affordable and accessible to all.
            </p>
            <p>
              Thank you for your interest in Bin Ali Medical Supplies. We look forward to the opportunity to serve you.
            </p>
          </div>

          {/* CEO Signature */}
          <div className="border-t border-gray-4 pt-6 mt-8">
            <h3 className="text-dark-2 font-semibold text-xl leading-tight">
              Omar Ali
            </h3>
            <p className="text-gray text-sm">
              CEO, Bin Ali Medical Supplies LLC
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
          {/* Decorative shape */}
          <div className="absolute -top-10 -left-10 animate-bounce-smooth">
            <img src="/shape.png" alt="decorative" className="" />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg relative z-10">
            <Image
              src="/doc-7.png"
              alt="CEO Omar Ali"
              width={420}
              height={480}
              className="rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Pattern */}
      <div className="absolute right-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="pattern" />
      </div>
    </section>
  );
}
