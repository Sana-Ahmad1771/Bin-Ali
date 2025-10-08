"use client";

import aboutbg from "../../../../../public/contactbg1.png";
import { motion } from "framer-motion";
import Link from "next/link";

export const ContactUs = () => {
  return (
    <>
      {/* Top Banner */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-cover bg-no-repeat bg-center min-h-[50vh] 2xl:min-h-[55vh] lg:min-h-[100vh]flex flex-col justify-center items-center 2xl:items-center 2xl:justify-start 2xl:pt-44  text-dark-2 relative z-20 px-5 overflow-hidden"
        style={{ backgroundImage: `url(${aboutbg.src})` }}
      >
        <div className="absolute z-10 inset-0 bg-primary/30"></div>
        <div className="relative z-40 text-center text-white  space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:text-[44px] text-4xl font-bold "
          >
            Get in Touch
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
            <a href="#aboutUs">Contact Us /</a>
          </motion.div>
        </div>
      </motion.section>

     
    </>
  );
};
