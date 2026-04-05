"use client";

import { Wrench, Timer, CreditCard, Shield } from "lucide-react";
import clsx from "clsx";
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
      <div className="container">
        <div className={styles.row} ref={ref}>
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div
                key={key}
                className={clsx(styles.item, styles.animItem, isInView && styles.animVisible)}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <div className={styles.text}>
                  <span className={styles.label}>{t.trust[key]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
