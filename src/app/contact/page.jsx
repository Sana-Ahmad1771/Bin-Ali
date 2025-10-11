import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { ContactUs } from "../components/pages/contact/ContactUs";
import NewsletterSection from "../components/pages/home/NewsletterSection";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Bin Ali Medical Equipment UAE",
  description:
    "Get in touch with Bin Ali for inquiries about medical equipment, partnerships, or healthcare solutions across the UAE.",
  alternates: {
    canonical: "https://binali.com/contact",
  },
  openGraph: {
    title: "Contact Bin Ali Medical Supplies",
    description:
      "Reach out to Bin Ali for collaborations, product inquiries, or customer support — we’re here to help you.",
    url: "https://binali.com/contact",
    siteName: "Bin Ali Medical Supplies LLC",
    images: [
      {
        url: "/og/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Bin Ali UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bin Ali Medical Supplies",
    description:
      "Reach out to Bin Ali for collaborations, product inquiries, or customer support — we’re here to help you.",
    images: ["/og-images/contact.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ContactUs />
      <ContactClient />
      <NewsletterSection />
      <Footer />
    </>
  );
}
