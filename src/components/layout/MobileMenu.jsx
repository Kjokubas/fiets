"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone, MapPin, Clock } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { mainNav } from "@/data/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./MobileMenu.module.css";

const navLabelKeys = {
  "Fietsen": "fietsen",
  "E-Bikes": "eBikes",
  "Accessoires": "accessoires",
  "Werkplaats": "werkplaats",
  "Contact": "contact",
};

const catLabelKeys = {
  "Stadsfietsen": "stadsfietsen",
  "Transportfietsen": "transportfietsen",
  "E-Bikes": "eBikes",
  "Mountainbikes": "mountainbikes",
  "Kinderfietsen": "kinderfietsen",
  "Vouwfietsen": "vouwfietsen",
};

export default function MobileMenu({ isOpen, onClose }) {
  const [fietsenOpen, setFietsenOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={clsx(styles.overlay, isOpen && styles.open)}>
      <div className={styles.topBar}>
        <Logo />
        <div className={styles.topRight}>
          <LanguageSwitcher />
          <button className={styles.closeBtn} onClick={onClose} aria-label={t.nav.closeMenu}>
            <X size={24} />
          </button>
        </div>
      </div>

      <nav className={styles.nav}>
        {mainNav.map((item) => {
          const key = navLabelKeys[item.label] || item.label.toLowerCase();
          const label = t.navigation[key] || item.label;

          return (
            <div key={item.label}>
              {item.hasMegaMenu ? (
                <>
                  <button
                    className={styles.navBtn}
                    onClick={() => setFietsenOpen(!fietsenOpen)}
                  >
                    {label}
                    <ChevronDown
                      size={18}
                      className={clsx(styles.chevron, fietsenOpen && styles.chevronOpen)}
                    />
                  </button>
                  <div className={clsx(styles.subMenu, fietsenOpen && styles.subMenuOpen)}>
                    {item.megaMenu.categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className={styles.subLink}
                        onClick={onClose}
                      >
                        {t.navigation[catLabelKeys[cat.label]] || cat.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} className={styles.navLink} onClick={onClose}>
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      <div className={styles.contactCard}>
        <div className={styles.contactItem}>
          <Phone size={16} />
          <a href="tel:010-4779355" className={styles.phone}>010-4779355</a>
        </div>
        <div className={styles.contactItem}>
          <MapPin size={16} />
          <span>{t.mobile.address}</span>
        </div>
        <div className={styles.contactItem}>
          <Clock size={16} />
          <span>{t.mobile.hours}</span>
        </div>
      </div>
    </div>
  );
}
