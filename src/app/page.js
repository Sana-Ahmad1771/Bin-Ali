import Image from "next/image";
import Hero from "./components/pages/home/Hero";
import Header from "./components/common/Header";
import WelcomeSection from "./components/pages/home/WelcomeSection";
import OurProducts from "./components/pages/home/OurProducts";
import CeoMessage from "./components/pages/home/CeoMessage";
import Footer from "./components/common/Footer";
import NewsletterSection from "./components/pages/home/NewsletterSection";
import ProofSection from "./components/pages/home/ProofSection";
// import ProductShowcase from "./components/pages/home/ProductsShowcase";
// import ProcessSection from "./components/pages/home/ProcessSection";
import MissionSection from "./components/pages/home/MissionSection";
import WhyChooseUs from "./components/pages/home/WhyChooseUs";
import TestimonialsSection from "./components/pages/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WelcomeSection />
      <OurProducts />
      {/* <ProcessSection /> */}
      <CeoMessage />
      <WhyChooseUs />
      <MissionSection />
      {/* <ProductShowcase /> */}
      <TestimonialsSection />
      <ProofSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
