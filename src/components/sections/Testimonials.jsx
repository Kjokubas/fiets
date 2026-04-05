"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const { t } = useLanguage();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel variant="light">{t.testimonials.label}</SectionLabel>
            <h2 className={styles.headline}>{t.testimonials.headline}</h2>
          </div>
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrowBtn} onClick={() => scroll("left")} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button className={styles.arrowBtn} onClick={() => scroll("right")} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className={styles.trackWrapper}>
        <div className={styles.track} ref={scrollRef}>
          {testimonials.map((item) => (
            <div key={item.id} className={styles.slide}>
              <TestimonialCard testimonial={item} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <a href="https://www.google.com/search?sa=X&sca_esv=ccdc78ba7fe3748d&sxsrf=ANbL-n4GRO2TiGyFLLWTqdKb9eyMQo0QfA:1775387600737&q=Bike+Shop+Rotterdam+Atsiliepimai&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzI0sDQ1tzSyNDIwNzMwsDA02sDI-IpRwSkzO1UhOCO_QCEov6QktSglMVfBsaQ4MycztSAzNzFzEStBJQC3XS8lYAAAAA&rldimm=6210957929207600812&tbm=lcl&hl=lt-NL&ved=2ahUKEwjk-56aytaTAxXU9wIHHVawM0YQ9fQKegQIQxAG&biw=1536&bih=735&dpr=1.25#lkt=LocalPoiReviews" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="md">{t.testimonials.readAll}</Button>
        </a>
      </div>
    </section>
  );
}
