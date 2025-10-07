"use client";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const onClickCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full  bg-white font-inter border-t border-gray-200 overflow-hidden text-[#333] text-[16px] leading-normal "
    >
      {/* Main Content */}
      <div className="py-8 px-6 lg:px-16 xl:px-14 flex flex-col lg:flex-row justify-between flex-wrap gap-12">
        {/* Logo + Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[190px] lg:max-w-[30%]"
        >
          <a href="/">
            <Image
              src="/logo-svg-binali.svg"
              alt="Logo"
              width={130}
              height={40}
              className="mb-5 w-32"
              priority
            />
          </a>
          <p className="mb-6 text-[16px]">
            Bin Ali Medical Supplies LLC is a reputed Medical Supplies Dubai
            company built on a distinct vision. Since early 2000, BAMS has grown
            to be a leading supplier of a wide range of excellent products.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FiPhone />
              <span
                onClick={() => onClickCopy("(239) 555-0108")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                (239) 555-0108
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail />
              <span
                onClick={() => onClickCopy("info@safecareind.xyz")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                info@binali.xyz
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick Links*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-plus-jakarta-sans mb-4">Quick Links</h3>
          <ul className="space-y-4 text-[16px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </motion.div>

        {/* Browse Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-plus-jakarta-sans mb-4">MOH</h3>
          <ul className="space-y-4 text-[16px]">
            <li>
              <a href="#">APPROVAL NUMBER :</a>
            </li>
            <li>
              <a href="#">8AEVFQ0O-281024</a>
            </li>
            <li>
              <a href="#">DATE : 27/10/2024 TO 27/10/2025</a>
            </li>
          </ul>
        </motion.div>

        {/* Location and Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[190px] lg:max-w-[20%]"
        >
          <h3 className="text-2xl font-plus-jakarta-sans mb-4">
            {" "}
            BRANCH OFFICES
          </h3>
          <p className="mb-6 text-[16px]">
            Dubai - +971-4–4520022 <br />
            Al Ain - +971-3-7824596 <br />
            AbuDhabi - +971-3-7824596
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, AiFillInstagram, IoLogoLinkedin].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-primary/80 rounded hover:bg-gray-300 transition"
                  aria-label={`social-icon-${idx}`}
                >
                  <Icon size={20} />
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="px-6 lg:px-16 xl:px-14 border-t text-white border-gray-200 py-6 bg-primary flex flex-col lg:flex-row justify-between items-center text-center gap-2"
      >
        <p>
          © 2025 Binali Medical Supplies. All rights reserved{" "}
          {new Date().getFullYear()}
        </p>
        <p className="text-wrap">Privacy Policy | Terms & Conditions</p>
      </motion.div>

      {/* Copy Alert */}
      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#1E3D69] text-white px-4 py-2 rounded shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </motion.section>
  );
};

export default Footer;
