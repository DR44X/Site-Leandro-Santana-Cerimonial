"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCtaBar() {
  const pathname = usePathname();

  // If already on /orcamentos, don't show the redundant bar
  if (pathname === "/orcamentos") {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Ação rápida no celular"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-espresso-dark/95 backdrop-blur-md border-t border-gold/30 px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-8px_25px_rgba(0,0,0,0.7)]"
    >
      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase tracking-wider text-gold font-medium">
          Salvador / BA
        </span>
        <span className="text-xs font-serif text-ivory font-normal">
          Proposta personalizada
        </span>
      </div>

      <Link
        href="/orcamentos"
        className="inline-flex items-center justify-center px-5 py-2.5 bg-gold hover:bg-gold-light active:scale-95 text-ink text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md rounded-sm"
      >
        Pedir orçamento
      </Link>
    </div>
  );
}
