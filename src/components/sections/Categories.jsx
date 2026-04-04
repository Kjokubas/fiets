"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import CategoryCard from "@/components/ui/CategoryCard";
import useInView from "@/hooks/useInView";
import { categories } from "@/data/categories";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Categories.module.css";

const catTransKeys = [
  "stadsfietsen",
  "eBikes",
  "transportfietsen",
  "kinderfietsen",
  "mountainbikes",
  "accessoires",
];

export default function Categories() {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>{t.categories.label}</SectionLabel>
          <h2 className={styles.headline}>{t.categories.headline}</h2>
          <p className={styles.subtitle}>{t.categories.subtitle}</p>
        </div>
        <div className={styles.grid} ref={ref}>
          {categories.map((cat, i) => {
            const key = catTransKeys[i];
            const translated = t.categories.items[key];
            const translatedCat = translated
              ? { ...cat, name: translated.name, description: translated.description }
              : cat;

            return (
              <div
                key={cat.id}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "scale(1)" : "scale(0.95)",
                  transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`,
                }}
              >
                <CategoryCard category={translatedCat} viewLabel={t.categories.view} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
