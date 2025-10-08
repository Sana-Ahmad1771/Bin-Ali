"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
const slides = [
  {
    id: 1,
    image: "/heroimg-1.png",
    title: "One of the Leading Medical Suppliers in UAE",
    desc: "Being the leading supplier of healthcare products in the region, Bin Ali Medical Supplies LLC deals with an extensive range of high-value products for the benefit of our loyal customer base.",
    caption: "Better health through innovation",
  },
  {
    id: 2,
    image: "/heroimg-2.png",
    title: "Trusted by Healthcare Professionals",
    desc: "We deliver products that meet global quality standards and empower the healthcare community to provide better patient outcomes.",
    caption: "Empowering healthcare excellence",
  },
  {
    id: 3,
    image: "/heroimg-3.png",
    title: "Delivering Quality, Every Time",
    desc: "Our commitment to reliability and value ensures we remain the first choice for hospitals and clinics across the UAE.",
    caption: "Reliable medical solutions",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100vh - 120px)", height: "auto" }}
    >
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200} // smoother transition
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[calc(100vh-120px)] flex items-center overflow-hidden">
              {/* Background with zoom animation */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ${
                  activeIndex === index ? "scale-110" : "scale-100"
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-primary/60 "></div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-5">
                  <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-white/90 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                      {slide.desc}
                    </p>
                    <button
                      className="bg-gradient-to-r from-primary to-primary-light 
                    cursor-pointer text-white font-semibold py-2 px-6 rounded-xl 
                    transition-all duration-300 disabled:opacity-60 
                    disabled:cursor-not-allowed hover:scale-105 active:scale-95 mt-6 
                    sm:px-6 sm:py-3 text-sm sm:text-base w-full 
                    sm:w-auto text-center"
                    >
                      MORE ABOUT US
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Vertical Pagination */}
      <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-center gap-4 sm:gap-6">
        {slides.map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <span
              className={`text-xs sm:text-sm font-medium tracking-widest ${
                activeIndex === i ? "text-white font-bold" : "text-white/50"
              }`}
            >
              0{i + 1}
            </span>
            {activeIndex === i && (
              <span className="w-px h-8 sm:h-12 bg-white mt-1"></span>
            )}
          </div>
        ))}
      </div>
      {/* Bottom Preview + Navigation */}
      <div className="absolute right-0 bottom-0 z-20 w-[90%] sm:w-auto">
        {/* Arrows */}
        <div className="flex items-center">
          <button className="hero-prev p-3 sm:p-4 text-primary bg-white border-r border-primary cursor-pointer hover:bg-gray-100">
            <FaArrowLeftLong />
          </button>
          <button className="hero-next p-3 sm:p-4 text-primary bg-white cursor-pointer hover:bg-gray-100">
            <FaArrowRightLong />
          </button>
        </div>

        {/* Caption Preview */}
        <div className="flex  items-center justify-between sm:w-[400px] bg-gradient-to-r to-primary-light from-gray-100 p-3 sm:p-4">
          <div className=" mb-2 sm:mb-0">
            <span className="text-primary font-bold text-base sm:text-lg">
              0{activeIndex + 1}.
            </span>
            <h3 className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base">
              {slides[activeIndex].caption}
            </h3>
          </div>
          <img
            src={slides[activeIndex].image}
            alt="preview"
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
