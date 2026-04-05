"use client";

import clsx from "clsx";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/ProductCard";
import useInView from "@/hooks/useInView";
import { featuredBikes } from "@/data/bikes";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./FeaturedBikes.module.css";

export default function FeaturedBikes() {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel animated isInView={isInView}>{t.featured.label}</SectionLabel>
            <h2 className={styles.headline}>{t.featured.headline}</h2>
          </div>
          <Button variant="outline" size="sm">{t.featured.viewAll}</Button>
        </div>
        <div className={styles.grid} ref={ref}>
          {featuredBikes.map((bike, i) => (
            <div
              key={bike.id}
              className={clsx(styles.cardAnim, isInView && styles.cardVisible)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <ProductCard bike={bike} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
