"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Se o usuário prefere redução de movimento, não inicializa observers
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const lineObserverCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-drawn");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "50px 0px -10px 0px",
      threshold: 0.01,
    });

    const lineObserver = new IntersectionObserver(lineObserverCallback, {
      rootMargin: "50px 0px -10px 0px",
      threshold: 0.05,
    });

    // Observa elementos normais de revelação e containers escalonados
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-stagger, [data-reveal]"
    );
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Revela imediatamente se já está no viewport inicial
      if (rect.top <= window.innerHeight) {
        el.classList.add("is-revealed");
      } else if (!el.classList.contains("is-revealed")) {
        observer.observe(el);
      }
    });

    // Observa linhas separadoras douradas
    const lineElements = document.querySelectorAll(
      ".gold-line-draw, [data-draw-line]"
    );
    lineElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        el.classList.add("is-drawn");
      } else if (!el.classList.contains("is-drawn")) {
        lineObserver.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      lineObserver.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
