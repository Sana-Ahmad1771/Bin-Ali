"use client";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-gray-9 py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side - Images */}
        <div className="relative w-full lg:flex-1 flex lg:justify-start justify-center items-center z-30">
          {/* Top-right Decorative Shape */}
          <div className="absolute -top-10 -right-10 animate-bounce-smooth">
            <img
              src="/shape.png"
              alt="decorative shape"
              className="rounded-md"
            />
          </div>

          {/* Back Image */}
          <div className="rounded-xl overflow-hidden shadow-lg relative z-20 w-[260px] sm:w-[340px] md:w-[520px]">
            <Image
              src="/doc-1.jpg"
              alt="Medical team"
              width={420}
              height={420}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>

          {/* Front Image */}
          <div className="absolute z-30 -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-white rounded-2xl shadow-xl p-2">
            <Image
              src="/doc-2.jpg"
              alt="Doctor"
              width={280}
              height={280}
              className="rounded-xl object-cover w-[160px] sm:w-[200px] md:w-[260px] lg:w-[380px] h-auto"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:flex-1">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            About Bin Ali Medical Supplies LLC
          </p>

          <h2 className="text-dark-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Bin Ali Medical Supplies LLC
            </span>
          </h2>

          <p className="text-dark-5 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
            Being the leading supplier of healthcare products in the region, Bin
            Ali Medical Supplies LLC deals with an extensive range of high-value
            products for the benefit of our loyal customer base. Surgical
            Products, Nursing Consumables, Anesthesia and Respiratory Products,
            Incontinence & Urology Products, Sterilization Products, Infection
            Control Products, Orthopedic Products, Emergency & First Aid
            Products, Laboratory Consumables, Wound Care Products, Dental
            Consumables, IV Solutions, Linen, Uniforms & Shoes, Medical
            Furniture, and Equipment — so goes the list.
          </p>

          {/* CEO Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-gray-4 pt-6">
            <div className="flex items-center gap-3">
              <Image
                src="/ceo.jpg"
                alt="Omar Ali"
                width={50}
                height={50}
                className="rounded-full h-auto w-auto object-cover"
              />
              <div>
                <p className="text-dark-2 font-semibold leading-tight">
                  Omar Ali
                </p>
                <p className="text-gray text-sm">
                  CEO, Bin Ali Medical Supplies
                </p>
              </div>
            </div>
            {/* contact */}
            {/* contact */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-dark-2 font-semibold leading-tight">
                 +971- 2- 6760555
                </p>
                <p className="text-gray text-sm">Sales & Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Pattern */}
      <div className="absolute left-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="hex pattern" />
      </div>
    </section>
  );
}
