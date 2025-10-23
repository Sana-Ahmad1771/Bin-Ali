"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import aboutbg from "../../../../../public/team3.jpg";

const testimonials = [
  {
    id: 1,
    image: "/doctor.jpg",
    text: "Bin Ali Healthcare has consistently delivered high-quality medical supplies with exceptional service and timely dispatch.",
    name: "Burjeel Holdings",
    role: "Healthcare Partner – UAE",
  },
  {
    id: 2,
    image: "/doc-2.jpg",
    text: "Their compliance and documentation standards ensure smooth supply processes for government healthcare facilities.",
    name: "Dubai Health Authority",
    role: "Government Healthcare Sector – UAE",
  },
  {
    id: 3,
    image: "/doc-3.jpg",
    text: "Reliable procurement and great communication. We trust Bin Ali for our essential clinical requirements.",
    name: "NMC Healthcare",
    role: "Private Hospital Group – UAE",
  },
  {
    id: 4,
    image: "/doctor-1.jpg",
    text: "From ICU equipment to laboratory devices, Bin Ali’s solutions meet international quality standards and operational excellence.",
    name: "Cleveland Clinic Abu Dhabi",
    role: "Specialized Medical Center – UAE",
  },
  {
    id: 5,
    image: "/doc-3.jpg",
    text: "Professional, transparent, and dependable — Bin Ali remains our preferred supplier for advanced medical technologies.",
    name: "Sheikh Khalifa Medical City",
    role: "Government Healthcare Facility – UAE",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative min-h-[800px] sm:min-h-[900px] pb-20 sm:pb-24 md:pb-42 lg:pb-32">
      <div
        className="relative z-10"
        style={{
          backgroundImage: `url(${aboutbg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute h-[800px] inset-0 bg-white/70 backdrop-blur-[2px]"></div>

        {/* Main Content */}
        <div className="relative bg-white rounded-lg p-4 sm:p-6 py-10 max-w-[1410px] mx-auto px-6 lg:px-16 xl:px-24 z-20 top-0 sm:top-24 md:top-40 lg:top-52">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 px-2">
            <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
              What Our Clients Say
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-2 mt-2 px-4">
              Trusted by Leading Healthcare Institutions
            </h2>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination, FreeMode]}
            freeMode={true}
            loop={true}
            grabCursor={true}
            slidesPerView={1.2}
            spaceBetween={25}
            speed={2000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!px-4 sm:!px-0 testimonial-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col items-center text-center w-full min-h-[360px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px] h-auto">
                  {/* Border Glow */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-primary-light)] animate-borderGlow"></div>

                  {/* Image */}
                  <div className="flex items-center justify-center mb-4 sm:mb-5">
                    <div className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary)] to-[var(--color-primary-light)] p-[2px] rounded-xl">
                      <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="object-contain rounded-lg w-14 h-14 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed max-w-[90%] mx-auto">
                    “{item.text}”
                  </p>

                  {/* Name / Role */}
                  <div className="mt-auto">
                    <h4 className="font-semibold text-[#13171f] text-sm sm:text-base">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Animations + Pagination */}
      <style jsx global>{`
        @keyframes borderGlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .animate-borderGlow {
          background-size: 200% auto;
          animation: borderGlow 3s linear infinite;
        }

        /* Pagination styling */
        .testimonial-swiper .swiper-pagination {
          margin-top: 24px;
          position: relative;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #0077b6;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
