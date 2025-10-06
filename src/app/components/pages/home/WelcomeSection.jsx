"use client";
import Image from "next/image";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function WelcomeSection() {
  return (
    <section className="relative bg-gray-9 py-20 px-6 lg:px-16 xl:px-28">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side - Images */}
        <div className="relative flex-1 flex justify-center items-center z-30">
          {/* shape right */}
          <div className="absolute right-0 top-14 -translate-y-1/2 z-10 animate-bounce-smooth">
            <img src="/shape.png" alt="" className="h-full w-auto" />
          </div>

          {/* Back Image */}
          <div className="rounded-xl overflow-hidden shadow-lg relative z-20">
            <Image
              src="/doc-1.png"
              alt="Medical team"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Front Image */}
          <div className="absolute z-30 -bottom-10 -right-10 bg-white rounded-2xl shadow-xl p-2">
            <Image
              src="/doc-2.png"
              alt="Doctor"
              width={280}
              height={280}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="flex-1">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            About Bin Ali Medical Supplies LLC
          </p>

          <h2 className="text-dark-2 text-4xl md:text-5xl font-bold leading-tight mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Bin Ali Medical Supplies LLC
            </span>
          </h2>

          <p className="text-dark-5 leading-relaxed mb-8">
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

          {/* Bullet Points
          <div className="grid grid-cols-2 gap-y-4 mb-10">
            {[
              "Market Share",
              "Financial Position",
              "Customer loyalty",
              "Production/Distribution capacity",
              "Global/regional expansion",
              "Inventory System",
              "Product Quality",
              "Organizational structure",
              "Customer Service",
              "Management Expertise",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-primary text-lg flex-shrink-0" />
                <span className="text-dark-4 text-base">{item}</span>
              </div>
            ))}
          </div> */}

          {/* CEO Info */}
          <div className="flex items-center gap-6 border-t border-gray-4 pt-6">
            <div className="flex items-center gap-3">
              <Image
                src="/doc-7.png"
                alt="Omar Ali"
                width={50}
                height={50}
                className="rounded-full object-cover"
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

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-dark-2 font-semibold leading-tight">
                  +971-4-XXX-XXXX
                </p>
                <p className="text-gray text-sm">Contact Us Anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Hex Pattern */}
      <div className="absolute left-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="hex pattern" />
      </div>
    </section>
  );
}
