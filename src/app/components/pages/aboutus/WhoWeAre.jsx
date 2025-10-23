"use client";
import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Main Container - Matches Header Alignment */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Row: Text Left / Image Right */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 mb-16">
          {/* Left - Text */}
          <div className="flex-1 w-full">
            <h2 className="lg:text-[42px] text-3xl md:text-4xl mb-6 font-semibold leading-tight">
              Who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                We Are ?
              </span>
            </h2>

            <div className="text-[15px] md:text-[17px] text-dark-5 text-justify space-y-6 leading-relaxed">
              <p>
                Bin Ali Medical Supplies LLC was established in January 2002
                with its headquarters in Abu Dhabi and two branches in Dubai and
                Al-Ain. The Company soon grew from a promising business
                enterprise to the favored supplier of affordable and excellent
                quality medical products to the regional medical and scientific
                community.
              </p>
              <p>
                Thanks to our unique business philosophy and amazing customers’
                support, today, Bin Ali stands tall as the leading supplier
                chain of international-quality healthcare products in the UAE.
                Built on values and core principles, our socially committed team
                ensures delivery of the best products, earning trust from
                hospitals, clinics, and pharmacies across the Middle East.
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
              src="/team4.jpg"
              alt="Bin Ali Medical"
              className="rounded-2xl shadow-lg w-full max-w-[650px] h-auto max-h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="absolute -top-3 left-6 w-14 h-1.5 bg-primary rounded-md shadow-sm"></div>
              <h3 className="text-dark-2 text-2xl sm:text-3xl font-semibold mb-4">
                Our Vision
              </h3>
              <p className="text-dark-5 text-[15px] sm:text-base leading-relaxed">
                Aspire to become the global industry leader by providing
                innovative, practical, and affordable healthcare solutions that
                significantly improve people's lives across the world.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="absolute -top-3 left-6 w-14 h-1.5 bg-primary rounded-md shadow-sm"></div>
              <h3 className="text-dark-2 text-2xl sm:text-3xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="text-dark-5 text-[15px] sm:text-base leading-relaxed">
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
  );
};

export default WhoWeAre;
