"use client";

// TODO: Replace placeholder with <Image> from "next/image" when real product photos are available
import { Bike } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ bike }) {
  const { t } = useLanguage();
  const categoryLabel = t.bikeCategories[bike.category] || bike.category;

  return (
    <div className={styles.card}>
      <div className={styles.imageArea}>
        <Bike size={72} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <span className={styles.brand}>{bike.brand}</span>
        <h3 className={styles.name}>{bike.name}</h3>
        <span className={styles.category}>{categoryLabel}</span>
        <div className={styles.priceRow}>
          <span className={styles.price}>{bike.price}</span>
          {bike.originalPrice && (
            <span className={styles.originalPrice}>{bike.originalPrice}</span>
          )}
        </div>
        {bike.inStock && (
          <div className={styles.stock}>
            <span className={styles.stockDot} />
            <span>{t.featured.inStock}</span>
          </div>
        )}
      </div>
    </div>
  );
}
