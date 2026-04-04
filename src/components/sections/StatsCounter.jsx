"use client";

import { useEffect, useState, useRef } from "react";
import useInView from "@/hooks/useInView";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./StatsCounter.module.css";

function AnimatedCounter({ target, suffix, suffixRed, isActive }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const duration = 2000;
    const startTime = performance.now();

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isActive, target]);

  return (
    <span className={styles.number}>
      {count}
      {suffix && (
        <span className={suffixRed ? styles.suffixRed : styles.suffix}>{suffix}</span>
      )}
    </span>
  );
}

export default function StatsCounter() {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  const stats = [
    { target: 3000, suffix: "+", suffixRed: true, label: t.stats.products },
    { target: 7, suffix: "", suffixRed: false, label: t.stats.daysOpen },
    { target: 30, suffix: t.stats.minSuffix, suffixRed: false, label: t.stats.repairTime },
    { target: 12, suffix: "+", suffixRed: true, label: t.stats.topBrands },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row} ref={ref}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.item}>
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                suffixRed={stat.suffixRed}
                isActive={isInView}
              />
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
