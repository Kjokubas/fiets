"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./StatsCounter.module.css";

function AnimatedCounter({ target, suffix = "", suffixRed = false, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const animate = useCallback(() => {
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, hasAnimated]);

  return (
    <span className={styles.number} ref={ref}>
      {count.toLocaleString("nl-NL")}
      {suffix && (
        <span className={suffixRed ? styles.suffixRed : styles.suffix}>{suffix}</span>
      )}
    </span>
  );
}

export default function StatsCounter() {
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
        <div className={styles.row}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.item}>
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                suffixRed={stat.suffixRed}
              />
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
