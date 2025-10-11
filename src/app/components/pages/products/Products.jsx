"use client";

import productsbg from "../../../../../public/products-bg2.png";
import { motion } from "framer-motion";
import Link from "next/link";
// import Image from "next/image";

export const Products = () => {
  return (
    <>
      {/* Top Banner - Optimized with lazy loading */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-cover bg-no-repeat bg-center min-h-[50vh] 2xl:min-h-[55vh] flex flex-col justify-center items-center text-dark-2 px-5 overflow-hidden"
        style={{ backgroundImage: `url(${productsbg.src})` }}
      >
        <div className="absolute inset-0 bg-primary/50 z-10"></div>
        <div className="relative z-40 text-center text-white space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Explore Our Quality Medical Supplies
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-primary rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base lg:text-lg"
          >
            <Link href="/" className="hover:underline">Home</Link>
            <span> / Our Products</span>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};