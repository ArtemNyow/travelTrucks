import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TravelTrucks – Оренда кемперів",
  description:
    "Оренда кемперів для подорожей. Каталог, бронювання та відгуки про кемпери.",
  keywords: "кемпери, оренда, подорожі, TravelTrucks, camper rental",
  authors: [{ name: "Artem Lykhatskyi" }],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "TravelTrucks – Оренда кемперів",
    description:
      "Оренда кемперів для подорожей. Каталог, бронювання та відгуки.",
    url: "https://travel-trucks-six-psi.vercel.app/",
    siteName: "TravelTrucks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TravelTrucks – оренда кемперів",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelTrucks – Оренда кемперів",
    description:
      "Оренда кемперів для подорожей. Каталог, бронювання та відгуки.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body className={inter.variable}>
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
