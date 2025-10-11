import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://binali.com"),
  title: {
    default: "Bin Ali | Medical Equipment & Healthcare Solutions in Pakistan",
    template: "%s | Bin Ali",
  },
  description:
    "Bin Ali provides premium medical equipment, healthcare technology, and partnership opportunities across Pakistan. Explore our trusted brands, modern healthcare tools, and reliable services.",
  keywords: [
    "Bin Ali",
    "medical equipment Pakistan",
    "healthcare solutions",
    "hospital supplies",
    "medical technology",
    "partnerships in healthcare",
  ],
  authors: [{ name: "Bin Ali Medical" }],
  creator: "Bin Ali Medical",
  publisher: "Bin Ali Medical",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://binali.com",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://binali.com",
    siteName: "Bin Ali Medical",
    title: "Bin Ali | Medical Equipment & Healthcare Solutions in Pakistan",
    description:
      "Leading medical equipment and healthcare solutions provider in Pakistan. Explore Bin Ali’s trusted medical products, partnerships, and technology.",
    images: [
      {
        url: "/og-image.jpg", // 🖼️ Place og-image.jpg in /public folder
        width: 1200,
        height: 630,
        alt: "Bin Ali Medical - Healthcare Equipment Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bin Ali | Medical Equipment & Healthcare Solutions",
    description:
      "Trusted healthcare and medical technology provider in Pakistan — explore products and partnerships with Bin Ali.",
    creator: "@binali", // optional — replace with your Twitter handle
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ Google Analytics or Tag Manager (replace IDs when ready) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="ga-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
