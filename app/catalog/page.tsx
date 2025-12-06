import CatalogPage from "./filter/[...slug]/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Каталог кемперів | TravelTrucks",
  description:
    "Повний каталог кемперів, доступних для оренди. Фільтри за локацією, типом транспорту та оснащенням. Знайдіть свій ідеальний будинок на колесах для подорожі.",
  keywords: [
    "оренда кемперів",
    "каталог",
    "будинок на колесах",
    "кемпінг",
    "автодім",
    "фільтри кемперів",
  ],
  openGraph: {
    title: "Каталог кемперів | TravelTrucks",
    description:
      "Пошук ідеального кемпера для оренди. Різноманітні моделі та зручні фільтри.",
    url: "https://travel-trucks-six-psi.vercel.app/catalog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Каталог кемперів TravelTrucks",
      },
    ],
  },
};
export default CatalogPage;
