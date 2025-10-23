"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="relative bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-16 xl:px-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 py-3 sm:py-4"
        >
          {/* Row 1 */}
          <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-xl overflow-hidden">
            <Image
              src="/team6.jpg"
              alt="Healthcare Excellence"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-xl overflow-hidden">
            <Image
              src="/uniform1.jpg"
              alt="sterliazation"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative md:block hidden w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-xl overflow-hidden"></div>

          {/* Row 2 */}
          <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 bg-primary text-white flex flex-col items-center justify-center rounded-xl text-center">
            <p className="text-base sm:text-lg font-semibold">Trusted</p>
            <p className="text-xs sm:text-sm tracking-wide">Healthcare</p>
          </div>

          <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-xl overflow-hidden">
            <Image
              src="/team3.jpg"
              alt="Modern Equipment"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative md:block hidden w-full h-32 sm:h-36 md:h-40 lg:h-44 bg-primary text-white lg:flex flex-col items-center justify-center rounded-xl text-center">
            <p className="text-base sm:text-lg font-semibold">Customer</p>
            <p className="text-xs sm:text-sm tracking-wide">Trust</p>
          </div>

          {/* Row 3 */}
          <div className="relative md:block hidden w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-xl overflow-hidden"></div>

          <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-xl overflow-hidden">
            <Image
              src="/doc-4.jpg"
              alt="Advanced Labs"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 rounded-xl overflow-hidden">
            <Image
              src="/team5.jpg"
              alt="Team Excellence"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-dark-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Vision
            </span>
          </h2>
          <p className="text-dark-5 leading-relaxed text-sm sm:text-base md:text-lg">
            To be recognized as the most trusted provider of healthcare
            solutions across the UAE, delivering innovation, reliability, and
            excellence that improve lives and strengthen the healthcare industry
            for future generations.
          </p>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <div className="absolute left-0 bottom-0 opacity-10 hidden md:block">
        <img
          src="/demo-medical-pattern.svg"
          alt="pattern"
          className="w-24 sm:w-32 h-24 sm:h-32"
          loading="lazy"
        />
      </div>

      {/* <div className="absolute left-0 bottom-0 hidden md:block h-full bg-gradient-to-r from-primary/30 to-transparent w-[300px] sm:w-[450px] lg:w-[600px]"></div> */}
      <div className="absolute right-0 bottom-0 hidden md:block h-full bg-gradient-to-l from-primary/30 to-transparent w-[300px] sm:w-[450px] lg:w-[680px]"></div>

      {/* Decorative Right Shape */}
      <div
        className="absolute z-10 top-0 right-0 h-full w-[25px] sm:w-[40px] md:w-[60px] hidden lg:block opacity-80 overflow-hidden pointer-events-none"
        style={{
          backgroundImage: "url('/shape.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "right center",
        }}
      ></div>
    </section>
  );
}
