"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";

export default function Providers({ locale, children }) {
  return <LanguageProvider locale={locale}>{children}</LanguageProvider>;
}
