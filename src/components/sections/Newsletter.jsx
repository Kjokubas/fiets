"use client";

import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import useInView from "@/hooks/useInView";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Newsletter.module.css";

export default function ContactSection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  const items = [
    {
      icon: MapPin,
      label: t.contact.address,
      lines: [t.contact.addressLine1, t.contact.addressLine2],
    },
    {
      icon: Phone,
      label: t.contact.phone,
      lines: ["010-4779355"],
      href: "tel:010-4779355",
    },
    {
      icon: Mail,
      label: t.contact.email,
      lines: ["info@fietsspecialist\u200Brotterdam.nl"],
      href: "mailto:info@fietsspecialistrotterdam.nl",
    },
    {
      icon: Clock,
      label: t.contact.hours,
      lines: [t.contact.hoursWeekdays, t.contact.hoursSunday],
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>{t.contact.label}</SectionLabel>
          <h2 className={styles.headline}>{t.contact.headline}</h2>
          <p className={styles.subtext}>{t.contact.subtext}</p>
        </div>

        <div className={styles.layout} ref={ref}>
          <div className={styles.left}>
            <div className={styles.cards}>
              {items.map((item, i) => {
                const Icon = item.icon;
                const card = (
                  <div
                    className={styles.card}
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                    }}
                  >
                    <div className={styles.iconWrap}>
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div className={styles.cardContent}>
                      <span className={styles.cardLabel}>{item.label}</span>
                      {item.lines.map((line, j) => (
                        <span key={j} className={styles.cardValue}>{line}</span>
                      ))}
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a key={item.label} href={item.href} className={styles.cardLink}>
                      {card}
                    </a>
                  );
                }
                return <div key={item.label}>{card}</div>;
              })}
            </div>

            <a
              href="https://maps.google.com/?q=2e+Middellandstraat+28+3021+BP+Rotterdam"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <MapPin size={16} />
              {t.contact.cta}
              <ArrowRight size={14} />
            </a>
          </div>

          <div
            className={styles.right}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <h3 className={styles.formTitle}>{t.contact.formTitle}</h3>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-name">{t.contact.formName}</label>
                <input
                  id="contact-name"
                  type="text"
                  className={styles.input}
                  placeholder={t.contact.formNamePlaceholder}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-email">{t.contact.formEmail}</label>
                <input
                  id="contact-email"
                  type="email"
                  className={styles.input}
                  placeholder={t.contact.formEmailPlaceholder}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-message">{t.contact.formMessage}</label>
                <textarea
                  id="contact-message"
                  className={styles.textarea}
                  rows={5}
                  placeholder={t.contact.formMessagePlaceholder}
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                {t.contact.formSend}
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
