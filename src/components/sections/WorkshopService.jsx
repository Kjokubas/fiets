"use client";

import { CheckCircle, Wrench, Clock, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./WorkshopService.module.css";

export default function WorkshopService() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.dots} />
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionLabel>{t.workshopService.label}</SectionLabel>
          <h2 className={styles.headline}>{t.workshopService.headline}</h2>
          <p className={styles.subtitle}>{t.workshopService.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.features}>
            {t.workshopService.features.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {i === 0 && <Wrench size={22} />}
                  {i === 1 && <Clock size={22} />}
                  {i === 2 && <Shield size={22} />}
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pricingCard}>
            <span className={styles.pricingBadge}>{t.workshop.dealBadge}</span>
            <h3 className={styles.pricingTitle}>{t.workshop.dealTitle}</h3>
            <div className={styles.priceRow}>
              <span className={styles.price}>€59</span>
              <span className={styles.originalPrice}>€89</span>
            </div>
            <ul className={styles.checklist}>
              {t.workshop.dealChecklist.map((item, i) => (
                <li key={i}><CheckCircle size={14} /> {item}</li>
              ))}
            </ul>
            <a href="https://www.google.com/maps/dir/?api=1&destination=2e+Middellandstraat+28,+3021+BP+Rotterdam" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">{t.workshop.directionsCta}</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
