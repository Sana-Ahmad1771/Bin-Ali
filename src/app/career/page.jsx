import { Suspense } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Careers } from "../components/pages/careers/Careers";
import NewsletterSection from "../components/pages/home/NewsletterSection";
import CareerClient from "./CareerClient";

export const metadata = {
  title: "Careers | Bin Ali Medical Equipment UAE",
  description:
    "Join Bin Ali’s dedicated team driving innovation in healthcare and medical technology across the UAE. Explore career opportunities today.",
  alternates: {
    canonical: "https://binali.com/career",
  },
  openGraph: {
    title: "Careers at Bin Ali | Join Our Healthcare Innovation Team",
    description:
      "Be part of a passionate team committed to transforming healthcare technology and solutions across the UAE.",
    url: "https://binali.com/career",
    siteName: "Bin Ali Medical Supplies LLC",
    images: [
      {
        url: "/og/career.png", // 👈 ideally create a dedicated OG banner
        width: 1200,
        height: 630,
        alt: "Bin Ali Careers UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Bin Ali | Join Our Healthcare Innovation Team",
    description:
      "Be part of a passionate team committed to transforming healthcare technology and solutions across the UAE.",
    images: ["/og/careers.jpg"],
  },
};

export default function CareersPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading careers...</div>}>
      <Header />
      <Careers />
      <CareerClient />
      <NewsletterSection />
      <Footer />
    </Suspense>
  );
}
