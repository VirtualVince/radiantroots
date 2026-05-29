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