"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-9 h-9 min-w-[36px] min-h-[36px] rounded border border-gold/30 flex items-center justify-center text-gold/50",
          className
        )}
        aria-hidden="true"
      >
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative w-9 h-9 min-w-[36px] min-h-[36px] rounded border border-gold/30 hover:border-gold bg-espresso/40 hover:bg-gold/10 text-gold flex items-center justify-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 shrink-0 group",
        className
      )}
      aria-label={
        isLight
          ? "Alternar para tema escuro de assinatura"
          : "Alternar para tema claro editorial (Vogue Weddings)"
      }
      title={
        isLight
          ? "Tema Escuro de Assinatura"
          : "Tema Claro Editorial (Vogue Weddings)"
      }
    >
      <Sun
        className={cn(
          "w-4 h-4 transition-all duration-300 absolute",
          isLight
            ? "rotate-0 scale-100 opacity-100 text-gold"
            : "-rotate-90 scale-0 opacity-0 text-gold/40"
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          "w-4 h-4 transition-all duration-300 absolute",
          isLight
            ? "rotate-90 scale-0 opacity-0 text-gold/40"
            : "rotate-0 scale-100 opacity-100 text-gold"
        )}
        aria-hidden="true"
      />
      <span className="sr-only">
        {isLight ? "Ativar modo escuro" : "Ativar modo claro"}
      </span>
    </button>
  );
}
