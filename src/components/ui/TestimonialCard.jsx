"use client";

import { Star } from "lucide-react";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} fill="var(--color-red)" stroke="var(--color-red)" />
        ))}
      </div>
      <div className={styles.quoteWrapper}>
        <span className={styles.quoteMark}>&ldquo;</span>
        <p className={styles.quote}>{testimonial.quote}</p>
      </div>
      <div className={styles.author}>
        <div className={styles.avatar}>
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <div className={styles.name}>{testimonial.author}</div>
          <div className={styles.location}>{testimonial.location}</div>
        </div>
      </div>
    </div>
  );
}
