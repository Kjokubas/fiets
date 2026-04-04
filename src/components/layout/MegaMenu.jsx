"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./MegaMenu.module.css";

const catLabelKeys = {
  "Stadsfietsen": "stadsfietsen",
  "Transportfietsen": "transportfietsen",
  "E-Bikes": "eBikes",
  "Mountainbikes": "mountainbikes",
  "Kinderfietsen": "kinderfietsen",
  "Vouwfietsen": "vouwfietsen",
};

export default function MegaMenu({ data }) {
  const { t } = useLanguage();
  if (!data) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t.navigation.categories}</h4>
          {data.categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className={styles.catLink}>
              {t.navigation[catLabelKeys[cat.label]] || cat.label}
            </Link>
          ))}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t.navigation.brands}</h4>
          <div className={styles.brandGrid}>
            {data.brands.map((brand) => (
              <span key={brand} className={styles.brand}>{brand}</span>
            ))}
          </div>
        </div>

        <div className={styles.accentCard}>
          <h4 className={styles.accentTitle}>{t.megaMenu.workshopTitle}</h4>
          <p className={styles.accentSub}>{t.megaMenu.workshopSub}</p>
          <Link href="/werkplaats" className={styles.accentLink}>
            {t.megaMenu.workshopCta}
          </Link>
        </div>
      </div>
    </div>
  );
}
