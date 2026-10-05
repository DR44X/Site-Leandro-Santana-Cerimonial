"use client";

import React, { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentScroll = window.scrollY;
            const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
            setScrollProgress(progress);
            setIsVisible(currentScroll > 15);
          } else {
            setScrollProgress(0);
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <aside
      aria-label="Progresso de leitura"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de rolagem da página"
        className="h-[2.5px] w-full bg-gradient-to-r from-gold/80 via-gold to-champagne shadow-[0_0_10px_rgba(184,151,90,0.65)] origin-left will-change-transform"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transition: "transform 100ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </aside>
  );
}
