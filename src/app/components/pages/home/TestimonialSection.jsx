"use client";
import Image from "next/image";
import aboutbg from "../../../../../public/team3.png";

const testimonials = [
  {
    id: 1,
    image: "/doctor.png",
    text: "The medical supplies I ordered were delivered quickly and met all my expectations. Great service!",
    name: "John D. Smith",
    role: "Doctor",
  },
  {
    id: 2,
    image: "/doc-3.png",
    text: "Excellent quality and reliable products. I always trust this company for my medical supplies.",
    name: "Emma J. Lee",
    role: "Nurse",
  },
  {
    id: 3,
    image: "/doctor-1.png",
    text: "Great customer support and a user-friendly ordering process. Highly recommend this service!",
    name: "Michael R. Taylor",
    role: "Therapist",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative min-h-[800px] sm:min-h[1000px] py-20 pb-20 sm:pb-24 md:pb-42 lg:pb-32">
     <div className="relative z-10"
     style={{
        backgroundImage: `url(${aboutbg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
     >
         {/* Overlay */}
      <div className="absolute h-[800px] inset-0 bg-white/70 backdrop-blur-[2px]"></div>
      {/* Main Content */}
      <div className="relative bg-white p-4 sm:p-6 py-10 w-[90%] sm:w-[100%] md:w-[80%] lg:w-[90%] xl:w-[90%] container mx-auto z-20 top-0 sm:top-24 md:top-40 lg:top-52 xl-top-70">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
            What Our Clients Think
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-2 mt-2 px-4">
            Feedback From Our Customers
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg duration-300 flex flex-col items-center text-center overflow-hidden w-full"
            >
              {/* Decorative Top Border Light */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary to-primary-light animate-borderGlow"></div>

              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
               <div className="bg-gradient-to-r p-1 from-primary-light via-primary to-primary-light animate-borderGlow">
                 <Image
                  src={item.image}
                  alt="logo"
                  width={70}
                  height={70}
                  className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-14 md:h-20"
                />
               </div>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed max-w-full px-2">
                “{item.text}”
              </p>

              <div className="px-2">
                <h4 className="font-semibold text-[#13171f] text-sm sm:text-base">{item.name}</h4>
                <p className="text-gray-500 text-xs sm:text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     </div>
      {/* Animation keyframes */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
}