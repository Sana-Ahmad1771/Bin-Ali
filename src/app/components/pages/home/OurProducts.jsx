"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function OurProducts() {
  return (
    <section
      id="products"
      className="relative bg-primary/20 py-20 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section Heading */}
        <div className="sm:text-center md:text-left mb-8">
          <motion.p
            className="text-primary font-semibold text-sm uppercase tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Our Products
          </motion.p>
          <motion.h2
            className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-2"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            BAMS offers a wide range of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light ">
              high-quality products
            </span>
          </motion.h2>
          <p className="text-dark-5 max-w-2xl sm:mx-auto md:mx-0">
            We distribute world-class healthcare and medical equipment across
            the UAE market.
          </p>
        </div>

        {/* Sliding logos/images */}
        <div className="mx-auto">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            className="py-6"
            breakpoints={{
              320: { slidesPerView: 3, spaceBetween: 12 },
              480: { slidesPerView: 4, spaceBetween: 12 },
              640: { slidesPerView: 4, spaceBetween: 16 },
              768: { slidesPerView: 5, spaceBetween: 18 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 6, spaceBetween: 24 },
              1600: { slidesPerView: 7, spaceBetween: 28 },
            }}
          >
            {[
              { title: "Anika", img: "/anika.png" },
              { title: "Astar", img: "/astar.png" },
              { title: "Barray", img: "/barray.png" },
              { title: "Biomet", img: "/biomet.png" },
              { title: "Darco", img: "/darco.png" },
              { title: "Metrex", img: "/metrex.png" },
              { title: "HerniaMesh", img: "/herniamesh.png" },
              { title: "Barray", img: "/barray.png" },
            ].map((item, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  className="flex flex-col items-center justify-start text-center p-3 sm:p-4"
                  whileHover={{ translateY: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-44 lg:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={160}
                      height={100}
                      className="object-contain w-full h-full opacity-60 hover:opacity-100 transition duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-2 sm:mt-3">
                    <h4 className="text-xs sm:text-sm md:text-base font-medium text-dark-2 truncate max-w-[120px] sm:max-w-[160px] md:max-w-[220px]">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
