import { getCamperById } from "@/lib/api/clientApi";
import styles from "./CamperDetailsPage.module.css";
import SpriteIcon from "@/components/SpriteIcon/SpriteIcon";

import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperInfo from "@/components/CamperInfo/CamperInfo";
import { Metadata } from "next";
type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const camper = await getCamperById(params.id);

  if (!camper) {
    return {
      title: "Кемпер не знайдено | TravelTrucks",
    };
  }

  const price = camper.price.toFixed(2);
  const totalReviews = camper.reviews.length;

  return {
    title: `${camper.name} | Оренда кемпера за €${price} | TravelTrucks`,
    description: `Оренда кемпера ${camper.name} у місті ${
      camper.location
    }. Ціна: €${price}. Рейтинг: ${
      camper.rating
    } (${totalReviews} відгуків). ${camper.description.substring(0, 150)}...`,
    keywords: [
      camper.name,
      "оренда кемпера",
      camper.location,
      "ціна кемпера",
      "забронювати кемпер",
    ],
    openGraph: {
      title: `${camper.name} - Всі деталі та бронювання`,
      description: `Оренда кемпера ${camper.name} за €${price}.`,
      images: [
        {
          url: camper.gallery[0]?.original || "/og-image.png",
          width: 1200,
          height: 630,
          alt: `Фото кемпера ${camper.name}`,
        },
      ],
    },
  };
}

export default async function CamperDetailsPage({ params }: Props) {
  const { id } = await params;
  const camper = await getCamperById(id);
  const totalReviews = camper.reviews.length;

  return (
    <section className={styles.camperDetailsPageSection}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>

          <div className={styles.ratingLocation}>
            <span className={styles.rating}>
              <SpriteIcon
                className={styles.filterIconSvg}
                name={"icon-star-fill"}
              />
              <span className={styles.totalReviews}>
                {camper.rating} (Total reviews:{totalReviews})
              </span>
            </span>

            <span className={styles.location}>
              <SpriteIcon className={styles.filterIconSvg} name={"icon-map"} />
              {camper.location}
            </span>
          </div>
          <div className={styles.rightSidePrice}>
            <p className={styles.price}>€{camper.price.toFixed(2)}</p>
          </div>
        </div>
        <CamperGallery camper={camper} />
        <p className={styles.description}>{camper.description}</p>
        <CamperInfo camper={camper} />
      </div>
    </section>
  );
}
