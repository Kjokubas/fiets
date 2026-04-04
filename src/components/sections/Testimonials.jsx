"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import useInView from "@/hooks/useInView";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  const items = t.testimonials.items.map((item, i) => ({
    id: i + 1,
    quote: item.quote,
    author: item.author,
    location: item.location,
    rating: 5,
  }));

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel variant="light">{t.testimonials.label}</SectionLabel>
          <h2 className={styles.headline}>{t.testimonials.headline}</h2>
        </div>
        <div className={styles.grid} ref={ref}>
          {items.map((item, i) => (
            <div
              key={item.id}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
              }}
            >
              <TestimonialCard testimonial={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
