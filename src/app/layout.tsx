import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radiant Roots Vitality — Acupuncture & Holistic Wellness | Boca Raton, FL",
  description:
    "Personalized acupuncture and holistic nutrition with Andrea Louden, AP, L.Ac in Boca Raton, FL. Book a free consultation today.",
  openGraph: {
    title: "Radiant Roots Vitality",
    description:
      "Personalized acupuncture and holistic nutrition in Boca Raton, FL.",
    url: "https://radiantrootsvitality.com",
    siteName: "Radiant Roots Vitality",
    locale: "en_US",
    type: "website",
  },
   icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}