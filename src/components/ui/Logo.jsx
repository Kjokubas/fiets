import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo({ variant = "dark" }) {
  return (
    <Link href="/" className={styles.logo} data-variant={variant}>
      <span className={styles.mark}>FS</span>
      <span className={styles.text}>
        <span className={styles.fiets}>Fiets</span>
        <span className={styles.specialist}>specialist</span>
      </span>
    </Link>
  );
}
