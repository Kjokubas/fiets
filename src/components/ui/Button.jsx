"use client";

import clsx from "clsx";
import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}) {
  const classes = clsx(styles.button, styles[variant], styles[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
