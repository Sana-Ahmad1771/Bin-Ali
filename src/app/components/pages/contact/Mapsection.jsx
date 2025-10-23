"use client";
import React from "react";

const MapSection = () => {
  return (
    <section className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 bg-white py-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-2 mb-4">
          Find Us on the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            Map
          </span>
        </h2>
        <p className="text-dark-5 max-w-2xl mx-auto text-sm md:text-base">
          Visit our head office and branches conveniently located across the UAE.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl max-w-[1400px] mx-auto border border-gray-200 bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4436.172872832664!2d55.63951617605811!3d25.3622441249947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f33f26c0dcff%3A0xc00aa2891a1f851!2sBin%20Ali%20Medical%20Supplies!5e1!3m2!1sen!2s!4v1759834851979!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Optional Overlay (for style effect) */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default MapSection;
