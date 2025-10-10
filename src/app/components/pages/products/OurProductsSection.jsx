"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const products = [
  { title: "LABORATORY CONSUMABLES", image: "/surgical.png" },
  { title: "MEDICAL EQUIPMENTS", image: "/instruments.png" },
  { title: "WOUND CARE PRODUCTS", image: "/woundcare.png" },
  { title: "LINEN, UNIFORMS AND SHOES", image: "/uniform.png" },
  { title: "EMERGENCY AND FIRST AID", image: "/aid.png" },
  { title: "ORTHOPEDIC PRODUCTS", image: "/arthopedic.png" },
  { title: "RADIOLOGY PRODUCTS", image: "/radiology.png" },
  { title: "MEDICAL FURNITURES", image: "/medicalfurniture.png" },
  { title: "ANESTHESIA AND RESPIRATORY", image: "/anesthesia.png" },
  { title: "DENTAL CONSUMABLES", image: "/dental.png" },
  { title: "SURGICAL PRODUCTS", image: "/surgicalproducts.png" },
  { title: "NURSING CONSUMABLES", image: "/nursing.png" },
  { title: "IN CONTINENCE AND UROLOGY PRODUCTS", image: "/urology.png" },
  { title: "SURGICAL & DENTAL INSTRUMENTS", image: "/surgical-dental.png" },
  { title: "STERILIZATION PRODUCTS", image: "/sterliazation.png" },
  { title: "INFECTION CONTROL PRODUCTS", image: "/infectioncontrol.png" },
  { title: "KAWE PRODUCTS", image: "/KaWe.png" },
  { title: "LOCKDOWN MEDICAL", image: "/lockdown.png" },
];

export default function OurProductsSection() {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="bg-gradient-to-br from-primary-light/20 to-white py-16 px-5 lg:px-42 xl:px-53">
      <div className="max-w-[1400px] mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-2 mb-4"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Products</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-dark-5 max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
        >
          BAMS offers a wide range of high-quality products in healthcare.
          Below are some of the major companies and categories we distribute
          across the U.A.E market.
        </motion.p>
      </div>

      {/* Product Grid with Lazy Loading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, margin: "50px" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="h-40 sm:h-48 w-full relative bg-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-opacity duration-300"
                style={{ 
                  opacity: loadedImages[index] ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
                quality={75}
              />
              {/* Loading skeleton */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-dark-2 text-sm sm:text-base uppercase tracking-wide leading-tight">
                {product.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}