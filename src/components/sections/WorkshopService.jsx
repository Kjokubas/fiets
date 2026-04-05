"use client";

import { CheckCircle, Wrench, Clock, Shield } from "lucide-react";
import clsx from "clsx";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import useInView from "@/hooks/useInView";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./WorkshopService.module.css";

export default function WorkshopService() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section className={styles.section}>
      <div className={styles.dots} />
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionLabel animated isInView={isInView}>{t.workshopService.label}</SectionLabel>
          <h2 className={styles.headline}>{t.workshopService.headline}</h2>
          <p className={styles.subtitle}>{t.workshopService.subtitle}</p>
        </div>

        <div className={styles.grid} ref={ref}>
          <div className={styles.features}>
            {t.workshopService.features.map((feature, i) => (
              <div key={i} className={clsx(styles.featureCard, styles.animItem, isInView && styles.animVisible)} style={{ animationDelay: `${i * 0.12}s` }}>
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

          <div className={clsx(styles.pricingCard, styles.animItem, isInView && styles.animVisible)} style={{ animationDelay: "0.3s" }}>
            <span className={styles.pricingBadge}>{t.workshop.dealBadge}</span>
            <h3 className={styles.pricingTitle}>{t.workshop.dealTitle}</h3>
            <div className={styles.priceRow}>
              <span className={styles.price}>€59</span>
              <span className={styles.originalPrice}>€89</span>
            </div>
            <ul className={clsx(styles.checklist, styles.checklistAnim, isInView && styles.checklistVisible)}>
              {t.workshop.dealChecklist.map((item, i) => (
                <li key={i} style={{ animationDelay: `${0.5 + i * 0.06}s` }}><CheckCircle size={14} /> {item}</li>
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
