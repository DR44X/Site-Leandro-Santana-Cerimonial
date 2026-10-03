import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  theme = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = theme === "light";

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 md:mb-16 reveal", alignClasses[align], className)}>
      {/* Linha Editorial: Número + Eyebrow */}
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span className="font-serif text-sm md:text-base text-gold font-light tracking-widest">
            {number}
          </span>
        )}
        {number && eyebrow && <span className="h-[1px] w-8 bg-gold/50 gold-line-draw" />}
        {eyebrow && (
          <span className="text-[11px] uppercase tracking-widest font-sans font-medium text-gold">
            {eyebrow}
          </span>
        )}
      </div>

      {/* Título Principal */}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-normal tracking-tight",
          isLight ? "text-ink" : "text-ivory"
        )}
      >
        {title}
        {highlight && (
          <span className="font-serif italic font-normal text-gold ml-2.5">
            {highlight}
          </span>
        )}
      </h2>

      {/* Linha dourada decorativa que se desenha ao entrar na tela */}
      <div
        className={cn(
          "gold-line-draw h-[1px] w-12 sm:w-16 bg-gold/60 mt-4",
          align === "center" ? "mx-auto origin-center" : align === "right" ? "ml-auto origin-right" : "origin-left"
        )}
      />

      {/* Subtítulo */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg font-sans font-light leading-relaxed max-w-2xl",
            isLight ? "text-espresso-light" : "text-ivory/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
