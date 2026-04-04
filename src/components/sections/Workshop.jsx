"use client";

import { Wrench } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import useInView from "@/hooks/useInView";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Workshop.module.css";

export default function Workshop() {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  const stats = [
    { number: "7", label: t.workshop.stat1Label },
    { number: "30-60", label: t.workshop.stat2Label },
    { number: "3000+", label: t.workshop.stat3Label },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <SectionLabel variant="light">{t.workshop.label}</SectionLabel>
        <h2 className={styles.headline}>
          {t.workshop.headline}<br />{t.workshop.headlineLine2}
        </h2>
        <p className={styles.body}>{t.workshop.body}</p>

        <div className={styles.dealCard}>
          <div className={styles.dealAccent} />
          <div className={styles.dealHeader}>
            <span className={styles.dealTitle}>{t.workshop.dealTitle}</span>
            <div className={styles.dealPricing}>
              <span className={styles.dealPrice}>€59</span>
              <span className={styles.dealOld}>€89</span>
            </div>
          </div>
          <p className={styles.dealDesc}>{t.workshop.dealDesc}</p>
          <Button variant="primary" size="md">{t.workshop.dealCta}</Button>
        </div>
      </div>

      <div className={styles.right} ref={ref}>
        <Wrench size={400} className={styles.bgIcon} />
        <div className={styles.statsStack}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={styles.stat}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 0.2}s, transform 0.5s ease ${i * 0.2}s`,
              }}
            >
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
