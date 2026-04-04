"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import clsx from "clsx";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { locale } = useLanguage();

  return (
    <div className={styles.switcher}>
      <Link
        href="/nl"
        className={clsx(styles.btn, locale === "nl" && styles.active)}
        aria-label="Nederlands"
      >
        NL
      </Link>
      <span className={styles.divider}>/</span>
      <Link
        href="/en"
        className={clsx(styles.btn, locale === "en" && styles.active)}
        aria-label="English"
      >
        EN
      </Link>
    </div>
  );
}
