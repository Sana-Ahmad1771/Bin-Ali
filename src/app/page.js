import Image from "next/image";
import Hero from "./components/pages/home/Hero";
import Header from "./components/common/Header";
import WelcomeSection from "./components/pages/home/WelcomeSection";
import OurProducts from "./components/pages/home/OurProducts";
import CeoMessage from "./components/pages/home/CeoMessage";
import Footer from "./components/common/Footer";
import NewsletterSection from "./components/pages/home/NewsletterSection";
import ProofSection from "./components/pages/home/ProofSection";
import MissionSection from "./components/pages/home/MissionSection";
import WhyChooseUs from "./components/pages/home/WhyChooseUs";
import TestimonialsSection from "./components/pages/home/TestimonialSection";
import OurPart from "./components/pages/home/OurPart";

export const metadata = {
  title: "Bin Ali | Medical Equipment & Healthcare Solutions in UAE",
  description:
    "Bin Ali provides premium medical equipment, healthcare technology, and trusted partnerships across the UAE.",
  keywords: [
    "medical equipment UAE",
    "healthcare solutions UAE",
    "hospital supplies UAE",
    "Bin Ali medical",
    "diagnostic equipment UAE",
  ],
  alternates: {
    canonical: "https://binali.com",
  },
  openGraph: {
    title: "Bin Ali | Leading Medical Equipment Supplier in UAE",
    description:
      "Explore Bin Ali’s advanced healthcare solutions, medical devices, and diagnostic tools serving hospitals across the UAE.",
    url: "https://binali.com",
    siteName: "Bin Ali Medical Supplies LLC",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Bin Ali Medical Equipment UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bin Ali | Leading Medical Equipment Supplier in UAE",
    description:
      "Explore Bin Ali’s advanced healthcare solutions, medical devices, and diagnostic tools serving hospitals across the UAE.",
    images: ["/heroimg-3.png"],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WelcomeSection />
      <OurProducts />
      <CeoMessage />
      <OurPart />
      <WhyChooseUs />
      <MissionSection />
      <TestimonialsSection />
      <ProofSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
