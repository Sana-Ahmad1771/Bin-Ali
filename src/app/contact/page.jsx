"use client";

import dynamic from "next/dynamic";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { ContactUs } from "../components/pages/contact/ContactUs";
import NewsletterSection from "../components/pages/home/NewsletterSection";

// ✅ Lazy-load heavy sections to improve initial load speed
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

export default function Page() {
  return (
    <>
      <Header />
      <ContactUs />
      <ContactSection />
      <Mapsection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
