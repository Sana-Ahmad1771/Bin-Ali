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
      className="relative bg-primary/20  py-20 px-6 lg:px-16 xl:px-28 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <motion.p
          className="text-primary font-semibold text-sm uppercase tracking-wide"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Our Products
        </motion.p>
        <motion.h2
          className="text-dark-2 text-3xl md:text-4xl font-bold leading-tight mb-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          BAMS offers a wide range of <span className="text-primary"> <br />high-quality products</span>
        </motion.h2>
        <p className="text-dark-5 max-w-2xl mx-auto">
          We distribute world-class healthcare and medical equipment across the UAE market.
        </p>
      </div>

      {/* Sliding logos/images with title below - keeps layout */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={24}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          loop={true}
          grabCursor={true}
          className="py-6"
        >
          {[
            { title: "Anika", img: "/anika.png" },
            { title: "Astar", img: "/astar.png" },
            { title: "Barray", img: "/barray.png" },
            { title: "Biomet", img: "/biomet.png" },
            { title: "Darco", img: "/darco.png" },
            { title: "Metrex", img: "/metrex.png" },
            { title: "HerniaMesh", img: "/herniamesh.png" },
          ].map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="flex flex-col items-center justify-start text-center p-4"
                whileHover={{ translateY: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-28 h-20 md:w-32 md:h-24 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <Image src={item.img} alt={item.title} width={140} height={80} className="object-contain" />
                </div>
                <div className="mt-3">
                  <h4 className="text-sm md:text-base font-medium text-dark-2">{item.title}</h4>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
