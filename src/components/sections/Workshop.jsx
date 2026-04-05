"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
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
      <div className={styles.grid} ref={ref}>
        <div className={clsx(styles.content, styles.contentAnim, isInView && styles.contentVisible)}>
          <SectionLabel variant="light" animated isInView={isInView}>{t.workshop.label}</SectionLabel>
          <h2 className={styles.headline}>
            {t.workshop.headline}<br />{t.workshop.headlineLine2}
          </h2>
          <p className={styles.body}>{t.workshop.body}</p>
          <Link href="/over-ons">
            <Button variant="secondary" size="md">{t.workshop.readMore}</Button>
          </Link>
        </div>

        <div className={clsx(styles.visual, styles.visualAnim, isInView && styles.visualVisible)}>
          <div className={clsx(styles.imageCard, styles.imageAnim, isInView && styles.imageVisible)}>
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
                className={clsx(styles.stat, styles.statAnim, isInView && styles.statVisible)}
                style={{ animationDelay: `${0.4 + i * 0.15}s` }}
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
