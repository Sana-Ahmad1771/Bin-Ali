import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ValuesPrinciples from "../components/pages/aboutus/ValuesPrinciples";
import MarketingSalesTeam from "../components/pages/aboutus/MarketingSalesTeam";
import BiomedicalTeam from "../components/pages/aboutus/BioMedicalTeam";
import { AboutUs } from "../components/pages/aboutus/AboutUs";
import NewsletterSection from "../components/pages/home/NewsletterSection";

export const metadata = {
  title: "About Us | Bin Ali Medical Equipment UAE",
  description:
    "Discover Bin Ali’s commitment to delivering world-class medical equipment, technology, and healthcare innovation across the UAE.",
  alternates: {
    canonical: "https://binali.com/about",
  },
  openGraph: {
    title: "About Bin Ali Medical Supplies",
    description:
      "Learn more about Bin Ali’s mission, leadership, and values in advancing healthcare solutions across the UAE.",
    url: "https://binali.com/about",
    siteName: "Bin Ali Medical Supplies LLC",
    images: [
      {
        url: "https://bin-ali.vercel.app/og/about.png", 
        width: 1200,
        height: 630,
        alt: "About Bin Ali Medical",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bin Ali Medical Supplies",
    description:
      "Learn more about Bin Ali’s mission, leadership, and values in advancing healthcare solutions across the UAE.",
    images: ["/aboutusbg.png"],
  },
};

const Page = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <ValuesPrinciples />
      <MarketingSalesTeam />
      <BiomedicalTeam />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Page;
