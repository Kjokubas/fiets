import styles from "./SectionLabel.module.css";
import clsx from "clsx";

export default function SectionLabel({ children, variant = "dark", animated = false, isInView = false }) {
  return (
    <span className={clsx(styles.label, variant === "light" && styles.light)}>
      <span className={clsx(styles.dot, animated && styles.dotAnimated, animated && isInView && styles.dotVisible)} />
      {children}
    </span>
  );
}
