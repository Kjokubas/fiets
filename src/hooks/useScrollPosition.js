"use client";

import { useState, useEffect, useRef } from "react";

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsScrolled(y > 10);

      // Only hide/show after scrolling past the navbar height
      if (y > 80) {
        setIsHidden(y > lastScrollY.current);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, isScrolled, isHidden };
}
