"use client";

import dynamic from "next/dynamic";
import React from "react";

const ContactSection = dynamic(() => import("../components/pages/contact/ContactSection"), {
  ssr: false,
  loading: () => (
    <div className="text-center py-20 text-gray-500">Loading contact section...</div>
  ),
});

const Mapsection = dynamic(() => import("../components/pages/contact/Mapsection"), {
  ssr: false,
  loading: () => (
    <div className="text-center py-20 text-gray-500">Loading map...</div>
  ),
});

export default function ContactClient() {
  return (
    <>
      <ContactSection />
      <Mapsection />
    </>
  );
}
