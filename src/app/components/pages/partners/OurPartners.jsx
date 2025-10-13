"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Dr. Reddy's Laboratories",
    category: "Pharmaceutical",
    logo: "/partners/partner1.png",
  },
  {
    name: "Descarga Medical",
    category: "Medical Equipment",
    logo: "/partners/partner2.png",
  },
  {
    name: "Medical Solutions Inc.",
    category: "Healthcare",
    logo: "/partners/partner3.png",
  },
  {
    name: "Healthcare Innovations",
    category: "Medical Technology",
    logo: "/partners/partner4.png",
  },
  {
    name: "Bio Medical Corp",
    category: "Biotechnology",
    logo: "/partners/partner5.png",
  },
  {
    name: "Advanced Diagnostics",
    category: "Diagnostics",
    logo: "/partners/partner6.png",
  },
  {
    name: "Surgical Instruments Ltd",
    category: "Surgical Equipment",
    logo: "/partners/partner7.png",
  },
  {
    name: "MedTech Solutions",
    category: "Medical Technology",
    logo: "/partners/partner8.png",
  },
  {
    name: "Healthcare Systems",
    category: "Healthcare",
    logo: "/partners/partner9.png",
  },
  {
    name: "Bio Innovations",
    category: "Biotechnology",
    logo: "/partners/partner10.png",
  },
  {
    name: "Medical Devices Inc",
    category: "Medical Devices",
    logo: "/partners/partner11.png",
  },
  {
    name: "Pharma Solutions",
    category: "Pharmaceutical",
    logo: "/partners/partner12.png",
  },
  {
    name: "Diagnostic Tools",
    category: "Diagnostics",
    logo: "/partners/partner13.png",
  },
  {
    name: "Surgical Tech",
    category: "Surgical Equipment",
    logo: "/partners/partner14.png",
  },
  {
    name: "Health Innovations",
    category: "Healthcare",
    logo: "/partners/partner15.png",
  },
  {
    name: "Medical Research",
    category: "Research",
    logo: "/partners/partner16.png",
  },
  {
    name: "Bio Tech Solutions",
    category: "Biotechnology",
    logo: "/partners/partner17.png",
  },
  {
    name: "Healthcare Products",
    category: "Healthcare",
    logo: "/partners/partner18.png",
  },
  {
    name: "Medical Equipment Co",
    category: "Medical Equipment",
    logo: "/partners/partner19.png",
  },
  {
    name: "Pharma Tech",
    category: "Pharmaceutical",
    logo: "/partners/partner20.png",
  },
  {
    name: "Advanced Medical",
    category: "Medical Equipment",
    logo: "/partners/partner21.png",
  },
  {
    name: "Healthcare Plus",
    category: "Healthcare",
    logo: "/partners/partner22.png",
  },
  {
    name: "Bio Medical Tech",
    category: "Biotechnology",
    logo: "/partners/partner23.png",
  },
  {
    name: "Diagnostic Solutions",
    category: "Diagnostics",
    logo: "/partners/partner24.png",
  },
  {
    name: "Surgical Systems",
    category: "Surgical Equipment",
    logo: "/partners/partner25.png",
  },
  {
    name: "Med Innovations",
    category: "Medical Technology",
    logo: "/partners/partner26.png",
  },
  {
    name: "Health Systems",
    category: "Healthcare",
    logo: "/partners/partner27.png",
  },
  {
    name: "Bio Solutions",
    category: "Biotechnology",
    logo: "/partners/partner28.png",
  },
  {
    name: "Medical Devices",
    category: "Medical Devices",
    logo: "/partners/partner29.png",
  },
  {
    name: "Pharma Innovations",
    category: "Pharmaceutical",
    logo: "/partners/partner30.png",
  },
  {
    name: "Diagnostic Tech",
    category: "Diagnostics",
    logo: "/partners/partner31.png",
  },
  {
    name: "Surgical Solutions",
    category: "Surgical Equipment",
    logo: "/partners/partner32.png",
  },
  {
    name: "Healthcare Tech",
    category: "Healthcare",
    logo: "/partners/partner33.png",
  },
  {
    name: "Bio Technology",
    category: "Biotechnology",
    logo: "/partners/partner34.png",
  },
  {
    name: "Health Products",
    category: "Healthcare",
    logo: "/partners/partner35.png",
  },
  {
    name: "Pharma Systems",
    category: "Pharmaceutical",
    logo: "/partners/partner36.png",
  },
  {
    name: "Mindray Medical",
    category: "Medical Equipment",
    logo: "/partners/partner37.png",
  },
  {
    name: "Primed Solutions",
    category: "Medical Technology",
    logo: "/partners/partner38.png",
  },
  {
    name: "Rendition Medical",
    category: "Healthcare",
    logo: "/partners/partner39.png",
  },
  {
    name: "Bensan Dental",
    category: "Dental Equipment",
    logo: "/partners/partner40.png",
  },
  {
    name: "BTI Biotechnology Institute",
    category: "Dental Implants",
    logo: "/partners/partner41.png",
  },
  {
    name: "Citage Dental",
    category: "Dental Technology",
    logo: "/partners/partner42.png",
  },
  {
    name: "Voco Dental",
    category: "Dental Materials",
    logo: "/partners/partner43.png",
  },
  {
    name: "Young Dental",
    category: "Dental Equipment",
    logo: "/partners/partner44.png",
  },
];

export default function OurPartners() {
  return (
    <section className="relative bg-gradient-to-br from-primary-light/20 to-white py-20 px-6 lg:px-16 xl:px-24 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-2 mb-4"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            Trusted Partners
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-dark-5 leading-relaxed text-base md:text-lg"
        >
          We collaborate with leading healthcare companies worldwide to deliver
          excellence in medical supplies and solutions. Our partnerships enable
          us to provide cutting-edge technology and innovative healthcare
          products.
        </motion.p>
      </div>

      {/* Partners Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between p-6 text-center"
          >
            <div className="relative w-28 h-28 mb-5">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-dark-2 font-semibold text-base md:text-lg mb-1">
              {partner.name}
            </h3>
            <p className="text-primary-light text-sm">{partner.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Background decorations */}
      <div className="absolute left-0 bottom-0 opacity-10 hidden md:block">
        <img
          src="/demo-medical-pattern.svg"
          alt="pattern"
          className="w-32 h-32"
        />
      </div>
      <div className="absolute right-0 -top-10 opacity-80 hidden md:block">
        <img src="/shape.png" alt="shape" className="w-full h-24" />
      </div>

      {/* Decorative Top Shape */}
      <div
        className="absolute z-10 top-0 left-0 w-full h-[60px] md:h-[65px] opacity-80 overflow-hidden pointer-events-none"
        style={{
          backgroundImage: "url('/shape.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "top center",
        }}
      ></div>
    </section>
  );
}
