"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Logo.module.css";

export default function Logo({ variant = "dark" }) {
  const { locale } = useLanguage();

  return (
    <Link href={`/${locale}`} className={styles.logo} data-variant={variant}>
      <span className={styles.mark}>FS</span>
      <span className={styles.text}>
        <span className={styles.fiets}>Fiets</span>
        <span className={styles.specialist}>specialist</span>
      </span>
    </Link>
  );
}
