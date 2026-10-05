import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  imageSrc = "/images/hero/hero-main.webp",
  imageAlt = "Leandro Santana Cerimonial",
  className,
}: PageBannerProps) {
  return (
    <section
      className={cn(
        "relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-espresso-dark border-b border-gold/20",
        className
      )}
    >
      {/* Imagem de Fundo com Overlay de Sombra Escura */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B120E] via-[#1B120E]/85 to-[#0B0908]/75" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 reveal">
          {eyebrow && (
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold gold-line-draw" />
              <span className="text-[11px] uppercase tracking-widest text-gold font-sans font-medium">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F6F0E6] font-normal leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#F6F0E6]/85 font-sans font-light max-w-2xl leading-relaxed pt-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
