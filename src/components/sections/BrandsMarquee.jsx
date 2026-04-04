import { brands } from "@/data/brands";
import styles from "./BrandsMarquee.module.css";

export default function BrandsMarquee() {
  const track = brands.map((brand, i) => (
    <span key={i} className={styles.item}>
      <span className={styles.brand}>{brand}</span>
      <span className={styles.dot}>•</span>
    </span>
  ));

  return (
    <section className={styles.section}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {track}
          {track}
        </div>
      </div>
    </section>
  );
}
