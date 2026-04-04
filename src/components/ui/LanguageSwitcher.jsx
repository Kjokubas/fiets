"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./LanguageSwitcher.module.css";
import clsx from "clsx";

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={clsx(styles.btn, locale === "nl" && styles.active)}
        onClick={() => switchLocale("nl")}
        aria-label="Nederlands"
      >
        NL
      </button>
      <span className={styles.divider}>/</span>
      <button
        className={clsx(styles.btn, locale === "en" && styles.active)}
        onClick={() => switchLocale("en")}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
