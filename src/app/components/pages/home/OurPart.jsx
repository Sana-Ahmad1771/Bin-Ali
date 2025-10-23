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
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 7,
        spaceBetween: 28,
      },
    },
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-2"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Our Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Partners
            </span>
          </motion.h2>
          <p className="text-dark-5 max-w-2xl mx-auto">
            We collaborate with leading healthcare companies worldwide to
            deliver excellence in medical supplies and innovative healthcare
            products.
          </p>
        </div>

        {/* Top Slider (Left → Right) */}
        <Swiper
          {...swiperSettings}
          className="py-6 cursor-grab active:cursor-grabbing"
        >
          {topRow.map((item, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <motion.div
                className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4"
                whileHover={{ translateY: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-[70px] h-[50px] sm:w-[90px] sm:h-[60px] md:w-[110px] md:h-[80px] lg:w-[130px] lg:h-[90px] xl:w-[150px] xl:h-[100px] flex items-center justify-center bg-white rounded-lg shadow-sm p-2 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={150}
                    height={100}
                    className="object-contain w-full h-full filter grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
                <h4 className="text-[10px] sm:text-xs md:text-sm font-medium text-dark-2 truncate max-w-[100px] sm:max-w-[120px] md:max-w-[140px] mt-2">
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
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <motion.div
                className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4"
                whileHover={{ translateY: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-[70px] h-[50px] sm:w-[90px] sm:h-[60px] md:w-[110px] md:h-[80px] lg:w-[130px] lg:h-[90px] xl:w-[150px] xl:h-[100px] flex items-center justify-center bg-white rounded-lg shadow-sm p-2 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={150}
                    height={100}
                    className="object-contain w-full h-full opacity-60 hover:opacity-100 transition duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
                <h4 className="text-[10px] sm:text-xs md:text-sm font-medium text-dark-2 truncate max-w-[100px] sm:max-w-[120px] md:max-w-[140px] mt-2">
                  {item.title}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
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
