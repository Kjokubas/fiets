"use client";

import { brands } from "@/data/brands";
import clsx from "clsx";
import SectionLabel from "@/components/ui/SectionLabel";
import useInView from "@/hooks/useInView";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./BrandsMarquee.module.css";

export default function BrandsMarquee() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  const track = brands.map((brand, i) => (
    <span key={i} className={styles.item}>
      <span className={styles.brand}>{brand}</span>
    </span>
  ));

  return (
    <section className={styles.section}>
      <div className={clsx(styles.header, styles.headerAnim, isInView && styles.headerVisible)} ref={ref}>
        <SectionLabel variant="light" animated isInView={isInView}>{t.brands.label}</SectionLabel>
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
