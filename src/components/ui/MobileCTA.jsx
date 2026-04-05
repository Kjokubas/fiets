"use client";

import { Phone } from "lucide-react";
import styles from "./MobileCTA.module.css";

export default function MobileCTA() {
  return (
    <a href="tel:010-4779355" className={styles.fab} aria-label="Bel ons">
      <Phone size={22} />
      <span className={styles.label}>Bellen</span>
    </a>
  );
}
