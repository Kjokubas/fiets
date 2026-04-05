"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  const { t } = useLanguage();

  const track = t.announcements.map((msg, i) => (
    <span key={i} className={styles.item}>
      <span className={styles.text}>{msg}</span>
      <span className={styles.diamond}>&#x25C6;</span>
    </span>
  ));

  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        {track}
        {track}
        {track}
        {track}
      </div>
    </div>
  );
}
