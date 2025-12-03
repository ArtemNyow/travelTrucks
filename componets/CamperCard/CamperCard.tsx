"use client";
import React from "react";
import Image from "next/image";
import styles from "./CamperCard.module.css";
import { useCamperStore } from "@/lib/store/campersStore";
import { Camper } from "@/types/camper";

interface CamperCardProps {
  camper: Camper;
}

export const CamperCard: React.FC<CamperCardProps> = ({ camper }) => {
  const { favorites, toggleFavorite } = useCamperStore();
  const toggleFav = () => {
    toggleFavorite(camper.id);
  };

  const isFavorite = favorites.includes(camper.id);

  const thumbSrc = camper.gallery?.[0]?.thumb || camper.gallery?.[0]?.original;

  return (
    <div className={styles.camperCard}>
      {thumbSrc && (
        <Image
          src={thumbSrc}
          alt={camper.name}
          width={400}
          height={300}
          className={styles.camperImage}
        />
      )}
      <h3 className={styles.camperName}>{camper.name}</h3>
      <p className={styles.camperLocation}>{camper.location}</p>
      <p className={styles.camperPrice}>{camper.price.toFixed(2)}</p>
      <button
        onClick={toggleFav}
        className={`${styles.favoriteBtn} ${
          isFavorite ? styles.favoriteActive : ""
        }`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};
