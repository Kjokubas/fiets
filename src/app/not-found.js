"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", fontFamily: "var(--font-display)" }}>
      <h1 style={{ fontSize: "4rem", fontWeight: 800, color: "var(--color-red)" }}>{t.notFound.title}</h1>
      <p style={{ color: "var(--color-text-muted)" }}>{t.notFound.message}</p>
      <Link href="/" style={{ color: "var(--color-red)", textDecoration: "underline" }}>
        {t.notFound.back}
      </Link>
    </div>
  );
}
