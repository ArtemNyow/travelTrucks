"use client";
import styles from "./CatalogPage.module.css";
import SideBarCatalog from "../@sidebar/SideBarCatalog";
import CamperCard from "@/components/CamperCard/CamperCard";
import { Camper } from "@/types/camper";

// Дані прямо в файлі
const campers: Camper[] = [
  {
    id: "7",
    name: "El Monte Class A Family Sleeper [AF]",
    price: 15000,
    rating: 4.4,
    location: "Ukraine, Sumy",
    description:
      "Indulge in the ultimate road trip experience with the El Monte Class A Family Sleeper [AF]. This fully integrated motorhome is a haven on wheels, offering unmatched luxury and comfort for families or groups of six. From its stylish design to the array of premium amenities, the El Monte Class A Family Sleeper [AF] redefines the standards of elegance on the open road.",
    form: "fullyIntegrated",
    length: "9.44m",
    width: "2.2m",
    height: "4m",
    tank: "302l",
    consumption: "33l/100km",
    transmission: "automatic",
    engine: "diesel",
    AC: true,
    bathroom: true,
    kitchen: true,
    TV: true,
    radio: true,
    refrigerator: true,
    microwave: true,
    gas: true,
    water: true,
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/7-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/7-1.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/7-2.webp",
        original: "https://ftp.goit.study/img/campers-test-task/7-2.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/7-3.webp",
        original: "https://ftp.goit.study/img/campers-test-task/7-3.webp",
      },
    ],
    reviews: [
      {
        reviewer_name: "Alice",
        reviewer_rating: 5,
        comment:
          "The El Monte Class A Family Sleeper [AF] provided an opulent experience for our family. The fully integrated features, spacious interiors, and top-notch amenities made our journey unforgettable. Highly recommended for those seeking a luxurious RV adventure.",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 3,
        comment:
          "While the El Monte Class A Family Sleeper [AF] offered luxury, we faced some minor issues during our trip. The gas supply seemed insufficient, and a few amenities had issues. Overall, a good experience, but improvements are needed for the price.",
      },
    ],
  },
  {
    id: "8",
    name: "Mavericks",
    price: 8000,
    rating: 4.4,
    location: "Ukraine, Lviv",
    description:
      "Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads. This no-frills yet reliable panel truck offers the essentials for a comfortable journey, making it the perfect companion for those who value simplicity and functionality.",
    form: "panelTruck",
    length: "5.4m",
    width: "2.01m",
    height: "2.05m",
    tank: "132l",
    consumption: "12.4l/100km",
    transmission: "manual",
    engine: "petrol",
    AC: true,
    bathroom: false,
    kitchen: true,
    TV: false,
    radio: true,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: true,
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/8-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/8-1.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/8-2.webp",
        original: "https://ftp.goit.study/img/campers-test-task/8-2.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/8-3.webp",
        original: "https://ftp.goit.study/img/campers-test-task/8-3.webp",
      },
    ],
    reviews: [
      {
        reviewer_name: "Alice",
        reviewer_rating: 5,
        comment:
          "The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic.",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 3,
        comment:
          "A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.",
      },
    ],
  },
  {
    id: "8",
    name: "Mavericks",
    price: 8000,
    rating: 4.4,
    location: "Ukraine, Lviv",
    description:
      "Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads. This no-frills yet reliable panel truck offers the essentials for a comfortable journey, making it the perfect companion for those who value simplicity and functionality.",
    form: "panelTruck",
    length: "5.4m",
    width: "2.01m",
    height: "2.05m",
    tank: "132l",
    consumption: "12.4l/100km",
    transmission: "manual",
    engine: "petrol",
    AC: true,
    bathroom: false,
    kitchen: true,
    TV: false,
    radio: true,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: true,
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/8-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/8-1.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/8-2.webp",
        original: "https://ftp.goit.study/img/campers-test-task/8-2.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/8-3.webp",
        original: "https://ftp.goit.study/img/campers-test-task/8-3.webp",
      },
    ],
    reviews: [
      {
        reviewer_name: "Alice",
        reviewer_rating: 5,
        comment:
          "The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic.",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 3,
        comment:
          "A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 3,
        comment:
          "A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 3,
        comment:
          "A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.",
      },
    ],
  },
  {
    id: "15",
    name: "Nomad Cruiser",
    price: 9500,
    rating: 4.5,
    location: "Ukraine, Kharkiv",
    description:
      "Travel far and wide with the Nomad Cruiser, a versatile panel truck with modern amenities...",
    form: "panelTruck",
    length: "5.8m",
    width: "2.1m",
    height: "2.7m",
    tank: "115l",
    consumption: "12.8l/100km",
    transmission: "manual",
    engine: "diesel",
    AC: true,
    bathroom: false,
    kitchen: true,
    TV: false,
    radio: true,
    refrigerator: true,
    microwave: false,
    gas: false,
    water: true,
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/3-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/3-1.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/3-2.webp",
        original: "https://ftp.goit.study/img/campers-test-task/3-2.webp",
      },
    ],
    reviews: [
      {
        reviewer_name: "Alice",
        reviewer_rating: 5,
        comment: "Great for family trips. The kitchen was especially useful!",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 4,
        comment:
          "Overall, a good vehicle, though the bathroom could be better.",
      },
    ],
  },
  {
    id: "16",
    name: "Horizon Adventurer",
    price: 11000,
    rating: 4.6,
    location: "Ukraine, Kyiv",
    description:
      "Set out for the horizon in the Horizon Adventurer, a fully equipped panel truck with all the comforts of home...",
    form: "panelTruck",
    length: "6.3m",
    width: "2.2m",
    height: "3.0m",
    tank: "120l",
    consumption: "14.2l/100km",
    transmission: "automatic",
    engine: "petrol",
    AC: true,
    bathroom: false,
    kitchen: true,
    TV: true,
    radio: true,
    refrigerator: true,
    microwave: true,
    gas: true,
    water: true,
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/4-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/4-1.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/4-2.webp",
        original: "https://ftp.goit.study/img/campers-test-task/4-2.webp",
      },
    ],
    reviews: [
      {
        reviewer_name: "Alice",
        reviewer_rating: 5,
        comment: "The Horizon Adventurer was perfect for our trip!",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 4,
        comment: "Comfortable, though the AC could be stronger.",
      },
    ],
  },
  {
    id: "17",
    name: "Pathfinder Voyager",
    price: 13000,
    rating: 4.6,
    location: "Ukraine, Dnipro",
    description:
      "The Pathfinder Voyager is ideal for those looking to explore new horizons in comfort...",
    form: "fullyIntegrated",
    length: "7.8m",
    width: "2.5m",
    height: "3.7m",
    tank: "210l",
    consumption: "30l/100km",
    transmission: "manual",
    engine: "diesel",
    AC: true,
    bathroom: true,
    kitchen: true,
    TV: true,
    radio: true,
    refrigerator: true,
    microwave: true,
    gas: true,
    water: true,
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/2-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/2-1.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/2-2.webp",
        original: "https://ftp.goit.study/img/campers-test-task/2-2.webp",
      },
    ],
    reviews: [
      {
        reviewer_name: "Alice",
        reviewer_rating: 5,
        comment:
          "Fantastic motorhome! It had everything we needed for our long road trip.",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 3,
        comment: "Good vehicle, but the bathroom space felt cramped.",
      },
    ],
  },
];

export default function CatalogPage() {
  return (
    <div className={styles.catalogContainer}>
      <div className={styles.catalogLayout}>
        <SideBarCatalog />
        <main className={styles.camperListMain}>
          <div className={styles.camperListWrapper}>
            {campers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
