"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./CamperCard.module.css";
import Link from "next/link";
import { Camper } from "@/types/camper";
import SpriteIcon from "../SpriteIcon/SpriteIcon";
import { useFavoritesStore } from "@/lib/store/favoritesStore";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  const totalReviews = camper.reviews.length;

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);
  const isFavorite = favorites.includes(camper.id);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleFavoriteClick = () => {
    toggleFavorite(camper.id);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={camper.gallery[0].thumb}
          alt={camper.name}
          width={292}
          height={320}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>
          <div className={styles.rightSidePrice}>
            <p className={styles.price}>€{camper.price.toFixed(2)}</p>
            <button
              type="button"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
              className={`${styles.favoriteBtn} ${
                isAnimating ? styles.animateHeart : ""
              }`}
              onClick={handleFavoriteClick}
            >
              <SpriteIcon
                className={styles.filterIconSvgHeart}
                name="icon-heart"
                color={isFavorite ? "#e44848" : "#000"}
              />
            </button>
          </div>
        </div>

        <div className={styles.ratingLocation}>
          <span className={styles.rating}>
            <SpriteIcon
              className={styles.filterIconSvg}
              name={"icon-star-fill"}
            />
            {camper.rating} (Total reviews:{totalReviews})
          </span>

          <span className={styles.location}>
            <SpriteIcon className={styles.filterIconSvg} name={"icon-map"} />
            {camper.location}
          </span>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <ul className={styles.features}>
          {camper.AC && (
            <li className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-wind" />
              AC
            </li>
          )}
          {camper.kitchen && (
            <li className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-cup" />
              Kitchen
            </li>
          )}
          {camper.TV && (
            <li className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-TV" />
              TV
            </li>
          )}
          {camper.bathroom && (
            <li className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-shower" />
              Bathroom
            </li>
          )}
          {camper.transmission === "automatic" && (
            <li className={styles.feature}>
              <SpriteIcon className={styles.featureIcon} name="icon-diagram" />
              Automatic
            </li>
          )}
        </ul>

        <Link href={`/catalog/${camper.id}`} className={styles.showMoreBtn}>
          Show more
        </Link>
      </div>
    </li>
  );
}
