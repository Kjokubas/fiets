"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import useInView from "@/hooks/useInView";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Workshop.module.css";

export default function Workshop() {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  const stats = [
    { number: "15+", label: t.workshop.stat1Label },
    { number: "5000+", label: t.workshop.stat2Label },
    { number: "500+", label: t.workshop.stat3Label },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <SectionLabel variant="light">{t.workshop.label}</SectionLabel>
          <h2 className={styles.headline}>
            {t.workshop.headline}<br />{t.workshop.headlineLine2}
          </h2>
          <p className={styles.body}>{t.workshop.body}</p>
          <Button variant="secondary" size="md">{t.workshop.readMore}</Button>

          <div className={styles.dealCard}>
            <div className={styles.dealHeader}>
              <span className={styles.dealTitle}>{t.workshop.dealTitle}</span>
              <div className={styles.dealPricing}>
                <span className={styles.dealPrice}>€59</span>
                <span className={styles.dealOld}>€89</span>
              </div>
            </div>
            <p className={styles.dealDesc}>{t.workshop.dealDesc}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=2e+Middellandstraat+28,+3021+BP+Rotterdam" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">{t.workshop.dealCta}</Button>
            </a>
          </div>
        </div>

        <div className={styles.visual} ref={ref}>
          <div className={styles.imageCard}>
            <Image
              src="/unnamed (1).webp"
              alt="Fietsspecialist Rotterdam"
              fill
              className={styles.workshopImage}
            />
          </div>
          <div className={styles.statsCard}>
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
      </div>
    </section>
  );
}
