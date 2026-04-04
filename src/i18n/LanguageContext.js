"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import nl from "./nl";
import en from "./en";

const translations = { nl, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("nl");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) {
      setLocale(saved);
    }
  }, []);

  const switchLocale = useCallback((lang) => {
    setLocale(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, switchLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
