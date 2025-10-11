import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import OurProductsSection from "../components/pages/products/OurProductsSection";
import { Products } from "../components/pages/products/Products";
import NewsletterSection from "../components/pages/home/NewsletterSection";

export const metadata = {
  title: "Our Products | Bin Ali Medical Equipment UAE",
  description:
    "Explore Bin Ali’s wide range of medical supplies, diagnostic equipment, and hospital-grade healthcare solutions across the UAE.",
  alternates: {
    canonical: "https://binali.com/products",
  },
  openGraph: {
    title: "Medical Equipment & Healthcare Products - Bin Ali",
    description:
      "Browse premium-quality healthcare tools, medical instruments, and hospital solutions trusted by professionals in the UAE.",
    url: "https://binali.com/products",
    siteName: "Bin Ali Medical Supplies LLC",
    images: [
      {
        url: "/og/products.png",
        width: 1200,
        height: 630,
        alt: "Bin Ali Medical Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Equipment & Healthcare Products - Bin Ali",
    description:
      "Browse premium-quality healthcare tools, medical instruments, and hospital solutions trusted by professionals in the UAE.",
    images: ["/products-bg2.png"],
  },
};


export const dynamic = "force-static";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <main>
        <Products />
        <OurProductsSection />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default ProductsPage;
