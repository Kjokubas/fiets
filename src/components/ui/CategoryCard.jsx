"use client";

import { Bike, Zap, Package, Heart, Mountain, Settings } from "lucide-react";
import styles from "./CategoryCard.module.css";

const iconMap = {
  bike: Bike,
  zap: Zap,
  package: Package,
  heart: Heart,
  mountain: Mountain,
  settings: Settings,
};

export default function CategoryCard({ category, viewLabel = "Bekijk" }) {
  const Icon = iconMap[category.icon] || Bike;

  return (
    <div className={styles.card}>
      <span className={styles.count}>{category.count}+</span>
      <Icon size={28} className={styles.icon} />
      <h3 className={styles.name}>{category.name}</h3>
      <p className={styles.description}>{category.description}</p>
      <span className={styles.link}>
        {viewLabel} <span className={styles.arrow}>→</span>
      </span>
    </div>
  );
}
