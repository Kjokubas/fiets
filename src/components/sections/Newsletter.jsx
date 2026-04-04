"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.decorCircle} />
          <SectionLabel>{t.newsletter.label}</SectionLabel>
          <h2 className={styles.headline}>{t.newsletter.headline}</h2>
          <p className={styles.subtext}>{t.newsletter.subtext}</p>
          <div className={styles.inputRow}>
            <input
              type="email"
              className={styles.input}
              placeholder={t.newsletter.placeholder}
              aria-label={t.newsletter.placeholder}
            />
            <button className={styles.submitBtn} type="button">
              {t.newsletter.submit}
            </button>
          </div>
          <p className={styles.privacy}>{t.newsletter.privacy}</p>
        </div>
      </div>
    </section>
  );
}
