import styles from "./SectionLabel.module.css";
import clsx from "clsx";

export default function SectionLabel({ children, variant = "dark" }) {
  return (
    <span className={clsx(styles.label, variant === "light" && styles.light)}>
      <span className={styles.dot} />
      {children}
    </span>
  );
}
