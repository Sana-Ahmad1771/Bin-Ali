"use client";

import aboutbg from "../../../../../public/aboutusbg.png";
import { motion } from "framer-motion";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <>
      {/* Top Banner */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-cover bg-no-repeat bg-center min-h-[60vh] 2xl:min-h-[65vh] lg:min-h-[100vh] flex flex-col justify-center items-center 2xl:items-center 2xl:justify-start 2xl:pt-44  text-dark-2 relative z-20 px-5 overflow-hidden"
        style={{ backgroundImage: `url(${aboutbg.src})` }}
      >
        <div className="absolute z-10 inset-0 bg-primary/30"></div>
        <div className="relative z-40 text-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:text-[44px] text-4xl font-medium "
          >
            About Us
          </motion.h1>
          <div className="flex justify-center">
            <motion.div
              className="mx-auto lg:mx-0 w-16 sm:w-18 md:w-20 lg:w-30 xl:w-40 h-1 rounded-full bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-x-2 lg:text-2xl text-[16px] font-normal"
          >
            <Link href="/">Home /</Link>
            <a href="#aboutUs">About Us /</a>
          </motion.div>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        className="py-20 px-6 lg:px-16 xl:px-28 bg-white"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Row - Text Left / Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Left - Text */}
            <div className="flex-1">
              <h2 className="lg:text-[42px] text-3xl md:text-4xl mb-6 font-semibold">
                Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">We Are ?</span>
              </h2>
              <div className="text-[15px] md:text-[18px] text-justify space-y-6">
                <p>
                  Bin Ali Medical Supplies LLC was established in January 2002
                  with its headquarters in Abu Dhabi and two branches in Dubai
                  and Al-Ain. The Company soon grew from a promising business
                  enterprise to the favored supplier of affordable and excellent
                  quality medical products to the regional medical and
                  scientific community.
                </p>
                <p>
                  Thanks to our unique business philosophy and amazing
                  customers’ support, today, Bin Ali stands tall as the leading
                  supplier chain of international-quality healthcare products in
                  the UAE. Built on values and core principles, our socially
                  committed team ensures delivery of the best products, earning
                  trust from hospitals, clinics, and pharmacies across the
                  Middle East.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex justify-center"
            >
              <img
                src="/team4.png"
                alt="Bin Ali Medical"
                className="rounded-2xl shadow-lg w-[480px] h-[400px] object-cover"
              />
            </motion.div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Vision Card */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col justify-between h-[350px]"
            >
              <div>
                <div className="absolute -top-3 left-6 w-14 h-1.5 bg-primary rounded-md shadow-sm"></div>
                <h3 className="text-dark-2 text-2xl sm:text-3xl font-semibold mb-4">
                  Our Vision
                </h3>
                <p className="text-dark-5 text-base leading-relaxed">
                  Aspire to become the global industry leader by providing
                  innovative, practical, and affordable healthcare solutions
                  that significantly improve people's lives across the world.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col justify-between h-[350px]"
            >
              <div>
                <div className="absolute -top-3 left-6 w-14 h-1.5 bg-primary rounded-md shadow-sm"></div>
                <h3 className="text-dark-2 text-2xl sm:text-3xl font-semibold mb-4">
                  Our Mission
                </h3>
                <p className="text-dark-5 text-base leading-relaxed">
                  To make BAMS a globally recognized healthcare company by
                  focusing on our core values, fulfilling and exceeding customer
                  expectations, deploying cutting-edge technologies, and
                  maintaining ethical and sustainable growth across all
                  operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
