"use client";

import { Camper } from "@/types/camper";
import styles from "./FeaturesBox.module.css";
import SpriteIcon from "../SpriteIcon/SpriteIcon";

type Props = {
  camper: Camper;
};
export default function FeaturesBox({ camper }: Props) {
  function capitalizeFirstLetter(str: string) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className={styles.featuresContainer}>
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
        {camper.radio && (
          <li className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-radio" />
            Radio
          </li>
        )}
        {camper.refrigerator && (
          <li className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-fridge" />
            Refrigerator
          </li>
        )}
        {camper.microwave && (
          <li className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-microwave" />
            Microwave
          </li>
        )}
        {camper.gas && (
          <li className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-gas" />
            Gas
          </li>
        )}
        {camper.engine && (
          <li className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-petrol" />
            {capitalizeFirstLetter(camper.engine)}
          </li>
        )}
        {camper.water && (
          <li className={styles.feature}>
            <SpriteIcon className={styles.featureIcon} name="icon-water" />
            Water
          </li>
        )}
      </ul>
      <div>
        <h2 className={styles.featureTitle}>Vehicle details</h2>
        <ul className={styles.vehicleDetailsList}>
          <li className={styles.vehicleDetailsItem}>
            <p>Form</p>
            {capitalizeFirstLetter(camper.form)}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Length</p>
            {camper.length}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Width</p>
            {camper.width}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Height</p>
            {camper.height}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Tank</p>
            {camper.tank}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Consumption</p>
            {camper.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
}
