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

// ✅ Global metadata (applies to all pages by default)
export const metadata = {
  metadataBase: new URL("https://binali.com"),
  // title: {
  //   default: "Bin Ali | Medical Equipment & Healthcare Solutions in UAE",
  //   template: "%s | Bin Ali",
  // },
  // description:
  //   "Bin Ali offers premium medical equipment, healthcare technology, and trusted solutions across the UAE for better care and innovation.",
  keywords: [
    "Bin Ali",
    "medical equipment UAE",
    "healthcare solutions",
    "hospital supplies",
    "medical technology",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://binali.com",
  },

  // // ✅ Global Open Graph (auto-fallback for all pages)
  // openGraph: {
  //   type: "website",
  //   locale: "en_AE",
  //   url: "https://binali.com",
  //   siteName: "Bin Ali Medical",
  //   title: "Bin Ali | Medical Equipment & Healthcare Solutions in UAE",
  //   description:
  //     "Leading provider of medical equipment and healthcare technology in the UAE.",
  //   images: [
  //     {
  //       url: "/og/home.png", // ✅ fallback OG image (keep this universal)
  //       width: 1200,
  //       height: 630,
  //       alt: "Bin Ali Medical - Healthcare Solutions in UAE",
  //     },
  //   ],
  // },

  // // ✅ Twitter Card fallback
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Bin Ali | Medical Equipment & Healthcare Solutions",
  //   description:
  //     "Trusted provider of medical equipment and healthcare technology in the UAE.",
  //   images: ["/og-image.jpg"],
  // },

  // // ✅ Favicon setup (applies site-wide)
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/favicon.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ Google Analytics / Tag Manager placeholder */}
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
