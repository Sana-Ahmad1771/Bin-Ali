import Image from "next/image";
import Hero from "./components/pages/home/Hero";
import Header from "./components/common/Header";
import WelcomeSection from "./components/pages/home/WelcomeSection";
import OurProducts from "./components/pages/home/OurProducts";
import CeoMessage from "./components/pages/home/CeoMessage";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
   <>
   <Header />
   <Hero />
   <WelcomeSection />
   <OurProducts />
   <CeoMessage />
   <Footer />
   </>
  );
}
