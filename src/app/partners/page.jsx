import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import OurPartners from "../components/pages/partners/OurPartners";
import Partnership from "../components/pages/partners/Partnership";
import { PartnersHero } from "../components/pages/partners/PartnersHero";

export const metadata = {
  title: "Our Partners | Bin Ali Medical Equipment UAE",
  description:
    "We proudly partner with global leaders in healthcare innovation, ensuring top-quality medical products and trusted solutions across the UAE.",
  alternates: {
    canonical: "https://binali.com/partners",
  },
  openGraph: {
    title: "Our Partners | Bin Ali",
    description:
      "Trusted collaborations with global healthcare technology leaders.",
    url: "https://binali.com/partners",
    siteName: "Bin Ali Medical Equipment",
    images: [
      {
        url: "https://bin-ali.vercel.app/og/partners.png",
        width: 1200,
        height: 630,
        alt: "Bin Ali Partners UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Partners | Bin Ali",
    description:
      "Trusted collaborations with global healthcare technology leaders.",
    images: ["/og/partners.jpg"],
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <PartnersHero />
      <OurPartners />
      <Partnership />
      <Footer />
    </>
  );
};

export default Page;
