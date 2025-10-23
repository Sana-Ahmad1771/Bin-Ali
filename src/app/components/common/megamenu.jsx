"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBuilding,
  FaCapsules,
  FaTruck,
  FaLaptopMedical,
  FaBolt,
  FaIndustry,
  FaShieldAlt,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

const MegaMenu = ({ setIsMegaMenuOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add("backdrop-active");
    else document.body.classList.remove("backdrop-active");
    return () => document.body.classList.remove("backdrop-active");
  }, [open]);

  const brandCategories = [
    {
      title: "Manufacturing Division",
      icon: FaIndustry,
      description: "Precision medical manufacturing",
      brands: [
        {
          name: "Safecare Medical Industries",
          description:
            "Surgical kits, PPE & medical consumables manufacturing",
          icon: FaBuilding,
          href: "https://safecare-medical.com",
          color: "text-blue-600",
        },
        {
          name: "Jurhy",
          description: "Medical components & raw materials production",
          icon: FaCapsules,
          href: "https://jurhy.com/",
          color: "text-green-600",
        },
      ],
    },
    {
      title: "Distribution Network",
      icon: FaTruck,
      description: "Healthcare supply chain solutions",
      brands: [
        {
          name: "Bin Ali Medical Supplies",
          description: "Distribution and supplies company",
          icon: FaTruck,
          href: "https://binali-medical.com",
          color: "text-orange-600",
        },
        {
          name: "Care Medical Trading",
          description: "Medical equipment trading & supplies",
          icon: FaGlobe,
          href: "https://caremedical-trading.com",
          color: "text-purple-600",
        },
         {
          name: "Safefast",
          description: "Medical logistics & delivery solutions",
          icon: FaBolt,
          href: "https://safefast.com",
          color: "text-red-600",
        },
      ],
    },
    {
      title: "Technology Solutions",
      icon: FaLaptopMedical,
      description: "Digital healthcare innovation",
      brands: [
        {
          name: "Safecare Technology",
          description: "Healthcare management systems & software",
          icon: FaLaptopMedical,
          href: "https://safecare-tech.com",
          color: "text-indigo-600",
        },
      ],
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
        setIsMegaMenuOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsMegaMenuOpen(false);
      }}
    >
      {/* Trigger Button */}
      <button className="py-2 text-body hover:text-primary cursor-pointer flex items-center">
        Our Brands <span className="ml-1 transition-transform">▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur (optional like Chelan) */}
            <motion.div
              className="fixed inset-0 top-[130px] bg-black/10 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Mega Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40"
              style={{ top: "130px" }}
            >
              {/* Scrollable Container (hidden scrollbar) */}
              <div
                className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 py-10 overflow-y-auto max-h-[80vh] hide-scrollbar"
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-dark-2 mb-2">
                    Our Manufacturing Ecosystem
                  </h3>
                  <p className="text-gray-600">
                    Six specialized companies united in medical manufacturing excellence
                  </p>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {brandCategories.map((category, i) => (
                    <div key={i} className="space-y-4">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                        <category.icon className="text-primary text-xl" />
                        <div>
                          <h4 className="font-semibold text-dark-2 text-lg">
                            {category.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Brands */}
                      <div className="space-y-4">
                        {category.brands.map((brand, j) => (
                          <motion.a
                            key={j}
                            href={brand.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                            whileHover={{ x: 5 }}
                            onClick={() => {
                              setOpen(false);
                              setIsMegaMenuOpen(false);
                            }}
                          >
                            <div
                              className={`p-2 rounded-lg bg-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all ${brand.color}`}
                            >
                              <brand.icon className="text-lg" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-semibold text-dark-2 group-hover:text-primary transition-colors">
                                  {brand.name}
                                </h5>
                                <FaArrowRight className="text-xs text-gray-400 group-hover:text-primary transition-all transform group-hover:translate-x-1" />
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                {brand.description}
                              </p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">
                      Looking for a specific product or service?
                    </p>
                    <button
                      className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-sm sm:text-base text-center"
                      onClick={() => {
                        setOpen(false);
                        setIsMegaMenuOpen(false);
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Contact Our Team
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;
