"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Careers } from "../components/pages/careers/Careers";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import NewsletterSection from "../components/pages/home/NewsletterSection";
// ✅ Lazy-load heavy components for faster page load
const CareersSection = dynamic(() =>
  import("../components/pages/careers/CareersSection"), 
  {
    ssr: false,
    loading: () => <div className="text-center py-20 text-gray-500">Loading careers...</div>,
  }
);
export default function CareersPage() {
  return (
    
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading careers...</div>}>
      <Header />
      <Careers />
      <CareersSection />
       <NewsletterSection />
      <Footer />
    </Suspense>
  );
}
