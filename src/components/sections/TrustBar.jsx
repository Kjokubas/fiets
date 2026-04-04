"use client";

import { Wrench, Timer, CreditCard, Shield } from "lucide-react";
import useInView from "@/hooks/useInView";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./TrustBar.module.css";

const icons = [Wrench, Timer, CreditCard, Shield];
const keys = ["workshop", "speed", "financing", "prices"];

export default function TrustBar() {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.redLine} />
      <div className="container">
        <div className={styles.row} ref={ref}>
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div
                key={key}
                className={styles.item}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div className={styles.iconCircle}>
                  <Icon size={22} />
                </div>
                <span className={styles.label}>{t.trust[key]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
