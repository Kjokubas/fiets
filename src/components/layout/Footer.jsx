"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Footer.module.css";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const assortimentLinks = [
  { href: "/fietsen/stadsfietsen", key: "stadsfietsen" },
  { href: "/fietsen/e-bikes", key: "eBikes" },
  { href: "/fietsen/transportfietsen", key: "transportfietsen" },
  { href: "/fietsen/mountainbikes", key: "mountainbikes" },
  { href: "/fietsen/kinderfietsen", key: "kinderfietsen" },
  { href: "/accessoires", key: "accessoires" },
];

export default function Footer() {
  const { t } = useLanguage();

  const serviceLinks = [
    { label: t.footer.werkplaats, href: "/werkplaats" },
    { label: t.footer.onderhoudsbeurt, href: "/werkplaats" },
    { label: t.footer.financiering, href: "/financiering" },
    { label: t.footer.voorwaarden, href: "/voorwaarden" },
    { label: t.footer.privacyPolicy, href: "/privacy" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.accentLine} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Logo variant="light" />
            <p className={styles.description}>{t.footer.description}</p>
          </div>

          <div>
            <h4 className={styles.colHeader}>{t.footer.assortiment}</h4>
            {assortimentLinks.map((item) => (
              <Link key={item.href} href={item.href} className={styles.footerLink}>
                {t.navigation[item.key] || item.key}
              </Link>
            ))}
          </div>

          <div>
            <h4 className={styles.colHeader}>{t.footer.service}</h4>
            {serviceLinks.map((item) => (
              <Link key={item.label} href={item.href} className={styles.footerLink}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className={styles.colHeader}>{t.footer.contactHeader}</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={15} />
                <div>
                  <div>2e Middellandstraat 28</div>
                  <div>3021 BP Rotterdam</div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Phone size={15} />
                <span>010-4779355</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={15} />
                <span>info@fietsspecialistrotterdam.nl</span>
              </div>
              <div className={styles.contactItem}>
                <Clock size={15} />
                <div>
                  <div>{t.mobile.hours.split(" · ")[0]}</div>
                  <div>{t.mobile.hours.split(" · ")[1]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{t.footer.copyright}</span>
          <div className={styles.bottomLinks}>
            <Link href="/cookies">{t.footer.cookies}</Link>
            <span className={styles.sep}>·</span>
            <Link href="/privacy">{t.footer.privacy}</Link>
            <span className={styles.sep}>·</span>
            <Link href="/voorwaarden">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
