"use client";

import { createContext, useContext } from "react";
import nl from "./nl";
import en from "./en";

const translations = { nl, en };

const LanguageContext = createContext();

export function LanguageProvider({ locale = "nl", children }) {
  const t = translations[locale] || translations.nl;

  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
