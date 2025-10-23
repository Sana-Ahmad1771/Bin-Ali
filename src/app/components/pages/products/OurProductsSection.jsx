"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const products = [
  { title: "LABORATORY CONSUMABLES", image: "/surgical.jpg" },
  { title: "MEDICAL EQUIPMENTS", image: "/instruments.jpg" },
  { title: "WOUND CARE PRODUCTS", image: "/woundcare.jpg" },
  { title: "LINEN, UNIFORMS AND SHOES", image: "/uniform.jpg" },
  { title: "EMERGENCY AND FIRST AID", image: "/aid.jpg" },
  { title: "ORTHOPEDIC PRODUCTS", image: "/arthopedic.jpg" },
  { title: "RADIOLOGY PRODUCTS", image: "/radiology.jpg" },
  { title: "MEDICAL FURNITURES", image: "/medicalfurniture.jpg" },
  { title: "ANESTHESIA AND RESPIRATORY", image: "/anesthesia.jpg" },
  { title: "DENTAL CONSUMABLES", image: "/dental.jpg" },
  { title: "SURGICAL PRODUCTS", image: "/surgicalproducts.jpg" },
  { title: "NURSING CONSUMABLES", image: "/nursing.jpg" },
  { title: "IN CONTINENCE AND UROLOGY PRODUCTS", image: "/urology.jpg" },
  { title: "SURGICAL & DENTAL INSTRUMENTS", image: "/surgical-dental.jpg" },
  { title: "STERILIZATION PRODUCTS", image: "/sterliazation.jpg" },
  { title: "INFECTION CONTROL PRODUCTS", image: "/infectioncontrol.jpg" },
  { title: "KAWE PRODUCTS", image: "/KaWe.png" },
  { title: "LOCKDOWN MEDICAL", image: "/lockdown.jpg" },
];

export default function OurProductsSection() {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-light/20 to-white py-20 px-6 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-2 mb-4"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Products
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-dark-5 max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
          >
            Bin Ali Medical Supplies provides a wide range of high-quality healthcare
            products and medical equipment across the UAE. Explore our diverse
            categories below.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "50px" }}
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Full-Width Equal Image */}
              <div className="relative w-full h-56 sm:h-60 md:h-64 lg:h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover w-full h-full transition-opacity duration-500"
                  style={{
                    opacity: loadedImages[index] ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out",
                  }}
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                  quality={80}
                />
                {/* Loading Skeleton */}
                {!loadedImages[index] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="p-5 text-center bg-white flex-grow flex items-center justify-center">
                <h3 className="font-semibold text-dark-2 text-sm sm:text-base uppercase tracking-wide leading-tight">
                  {product.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 opacity-10 hidden md:block">
        <img
          src="/demo-medical-pattern.svg"
          alt="pattern"
          className="w-32 h-32"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 -top-10 opacity-80 hidden md:block">
        <img src="/shape.png" alt="shape" className="w-full h-24" loading="lazy" />
      </div>
    </section>
  );
}
