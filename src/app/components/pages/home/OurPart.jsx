"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function OurPart() {
  const products = [
    { title: "Dr. Reddy's Laboratories", img: "/partners/partner1.png" },
    { title: "Descarga Medical", img: "/partners/partner2.png" },
    { title: "Medical Solutions Inc.", img: "/partners/partner3.png" },
    { title: "Healthcare Innovations", img: "/partners/partner4.png" },
    { title: "Bio Medical Corp", img: "/partners/partner5.png" },
    { title: "Advanced Diagnostics", img: "/partners/partner6.png" },
    { title: "Surgical Instruments Ltd", img: "/partners/partner7.png" },
    { title: "MedTech Solutions", img: "/partners/partner8.png" },
    { title: "Healthcare Systems", img: "/partners/partner9.png" },
    { title: "Bio Innovations", img: "/partners/partner10.png" },
    { title: "Medical Devices Inc", img: "/partners/partner11.png" },
    { title: "Pharma Solutions", img: "/partners/partner12.png" },
    { title: "Diagnostic Tools", img: "/partners/partner13.png" },
    { title: "Surgical Tech", img: "/partners/partner14.png" },
    { title: "Health Innovations", img: "/partners/partner15.png" },
    { title: "Medical Research", img: "/partners/partner16.png" },
    { title: "Bio Tech Solutions", img: "/partners/partner17.png" },
    { title: "Healthcare Products", img: "/partners/partner18.png" },
    { title: "Medical Equipment Co", img: "/partners/partner19.png" },
    { title: "Pharma Tech", img: "/partners/partner20.png" },
    { title: "Advanced Medical", img: "/partners/partner21.png" },
    { title: "Healthcare Plus", img: "/partners/partner22.png" },
    { title: "Bio Medical Tech", img: "/partners/partner23.png" },
    { title: "Diagnostic Solutions", img: "/partners/partner24.png" },
    { title: "Surgical Systems", img: "/partners/partner25.png" },
    { title: "Med Innovations", img: "/partners/partner26.png" },
    { title: "Health Systems", img: "/partners/partner27.png" },
    { title: "Bio Solutions", img: "/partners/partner28.png" },
    { title: "Medical Devices", img: "/partners/partner29.png" },
    { title: "Pharma Innovations", img: "/partners/partner30.png" },
    { title: "Mindray Medical", img: "/partners/partner37.png" },
    { title: "Bensan Dental", img: "/partners/partner40.png" },
    { title: "BTI Biotechnology Institute", img: "/partners/partner41.png" },
    { title: "Citage Dental", img: "/partners/partner42.png" },
    { title: "Voco Dental", img: "/partners/partner43.png" },
    { title: "Young Dental", img: "/partners/partner44.png" },
  ];

  const mid = Math.ceil(products.length / 2);
  const topRow = products.slice(0, mid);
  const bottomRow = products.slice(mid);

  const swiperSettings = {
    modules: [Autoplay, FreeMode],
    loop: true,
    grabCursor: true,
    freeMode: true,
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    slidesPerView: "auto",
    spaceBetween: 24,
  };

  const swiperSettingsReverse = {
    ...swiperSettings,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  };

  return (
    <section
      id="products"
      className="relative bg-primary/20 py-20 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section Heading */}
        <div className="sm:text-center md:text-left mb-12">
          <motion.p
            className="text-primary font-semibold text-sm uppercase tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          ></motion.p>
          <motion.h2
            className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-2"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            Our Trusted {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light ">
              Partners
            </span>
          </motion.h2>
          <p className="text-dark-5 max-w-2xl sm:mx-auto md:mx-0">
            We collaborate with leading healthcare companies worldwide to
            deliver excellence in medical supplies and solutions. Our
            partnerships enable us to provide cutting-edge technology and
            innovative healthcare products.
          </p>
        </div>

        {/* Top Slider (Left → Right) */}
        <Swiper
          {...swiperSettings}
          className="py-6 cursor-grab active:cursor-grabbing"
        >
          {topRow.map((item, idx) => (
            <SwiperSlide
              key={idx}
              style={{ width: "auto" }}
              className="flex items-center justify-center"
            >
              <motion.div
                className="flex flex-col items-center justify-start text-center p-3 sm:p-4"
                whileHover={{ translateY: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-44 lg:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm p-2 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={180}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h4 className="text-xs sm:text-sm md:text-base font-medium text-dark-2 truncate max-w-[160px] mt-2">
                  {item.title}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Slider (Right → Left) */}
        <Swiper
          {...swiperSettingsReverse}
          className="py-6 cursor-grab active:cursor-grabbing"
        >
          {bottomRow.map((item, idx) => (
            <SwiperSlide
              key={idx}
              style={{ width: "auto" }}
              className="flex items-center justify-center"
            >
              <motion.div
                className="flex flex-col items-center justify-start text-center p-3 sm:p-4"
                whileHover={{ translateY: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-44 lg:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm p-2 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={180}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h4 className="text-xs sm:text-sm md:text-base font-medium text-dark-2 truncate max-w-[160px] mt-2">
                  {item.title}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute left-0 bottom-0 opacity-10">
        <img
          src="/demo-medical-pattern.svg"
          alt="pattern"
          className="w-32 h-32"
        />
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
