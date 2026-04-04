"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MegaMenu from "@/components/layout/MegaMenu";
import MobileMenu from "@/components/layout/MobileMenu";
import useScrollPosition from "@/hooks/useScrollPosition";
import { mainNav } from "@/data/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Navbar.module.css";

const navLabelKeys = {
  "Fietsen": "fietsen",
  "E-Bikes": "eBikes",
  "Accessoires": "accessoires",
  "Werkplaats": "werkplaats",
  "Contact": "contact",
};

export default function Navbar() {
  const { isScrolled, isHidden } = useScrollPosition();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header className={clsx(styles.header, isScrolled && styles.scrolled, isHidden && styles.hidden)}>
        <nav className={clsx("container", styles.nav)}>
          <div className={styles.left}>
            <Logo />
          </div>

          <ul className={styles.center}>
            {mainNav.map((item) => {
              const key = navLabelKeys[item.label] || item.label.toLowerCase();
              const label = t.navigation[key] || item.label;

              return (
                <li
                  key={item.label}
                  className={styles.navItem}
                  onMouseEnter={() => item.hasMegaMenu && setMegaOpen(true)}
                  onMouseLeave={() => item.hasMegaMenu && setMegaOpen(false)}
                >
                  <Link href={item.href} className={styles.navLink}>
                    {label}
                    {item.label === "Werkplaats" && (
                      <span className={styles.badge}>{t.nav.open}</span>
                    )}
                    <span className={styles.dot} />
                  </Link>
                  {item.hasMegaMenu && megaOpen && <MegaMenu data={item.megaMenu} />}
                </li>
              );
            })}
          </ul>

          <div className={styles.right}>
            <LanguageSwitcher />
            <button className={styles.iconBtn} aria-label={t.nav.search}>
              <Search size={20} />
            </button>
            <button
              className={styles.menuBtn}
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
