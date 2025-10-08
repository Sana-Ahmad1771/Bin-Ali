"use client";
import React from "react";

const Mapsection = () => {
  return (
    <section className="relative py-12 bg-[#F8FBFF]">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-dark-2 mb-8">
        Find Us on the <span className="text-primary">Map</span>
      </h2>

      <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl max-w-7xl mx-auto border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4436.172872832664!2d55.63951617605811!3d25.3622441249947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f33f26c0dcff%3A0xc00aa2891a1f851!2sBin%20Ali%20Medical%20Supplies!5e1!3m2!1sen!2s!4v1759834851979!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""  
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" 
        ></iframe>
      </div>

    </section>
  );
};

export default Mapsection;
