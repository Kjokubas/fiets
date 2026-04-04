"use client";

import { motion } from "framer-motion";
import { Bike, ChevronDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Hero.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: -3,
    transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function renderHeadline(text) {
  const parts = text.split(/\{red\}|\{\/red\}/);
  // Pattern: text {red}word{/red} text → parts[0], parts[1] (red), parts[2]
  if (parts.length === 3) {
    return (
      <>
        {parts[0]}<span className={styles.red}>{parts[1]}</span>{parts[2]}
      </>
    );
  }
  return text;
}

export default function Hero() {
  const { scrollY } = useScrollPosition();
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <motion.h1
            className={styles.headline}
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeInUp}
          >
            {renderHeadline(t.hero.headline)}
          </motion.h1>

          <motion.p
            className={styles.subtext}
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={fadeInUp}
          >
            {t.hero.subtext}
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial="hidden"
            animate="visible"
            custom={0.9}
            variants={fadeInUp}
          >
            <Button variant="primary" size="lg" className={styles.glowBtn}>
              {t.hero.cta1}
            </Button>
            <Button variant="secondary" size="lg">
              {t.hero.cta2}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <div className={styles.mainShape}>
            <Bike size={140} className={styles.bikeIcon} />
          </div>
          <div className={styles.smallShape} />
        </motion.div>
      </div>

      <div
        className={styles.scrollIndicator}
        style={{ opacity: scrollY > 50 ? 0 : 0.4 }}
      >
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
