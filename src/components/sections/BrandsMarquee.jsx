"use client";

import { brands } from "@/data/brands";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./BrandsMarquee.module.css";

export default function BrandsMarquee() {
  const { t } = useLanguage();

  const track = brands.map((brand, i) => (
    <span key={i} className={styles.item}>
      <span className={styles.brand}>{brand}</span>
    </span>
  ));

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionLabel variant="light">{t.brands.label}</SectionLabel>
        <h2 className={styles.headline}>{t.brands.headline}</h2>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {track}
          {track}
        </div>
      </div>
    </section>
  );
}
