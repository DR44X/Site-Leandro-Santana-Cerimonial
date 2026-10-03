"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function Hero({
  title = "Planejamos e produzimos o seu evento com atenção e método",
  subtitle = "Cerimonial, buffet, decoração e assessoria completa em Salvador e Litoral Norte.",
  primaryCtaLabel = "Solicite seu orçamento",
  primaryCtaHref = "/orcamentos",
  secondaryCtaLabel = "Conheça nossos eventos",
  secondaryCtaHref = "/eventos",
}: HeroProps) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-end pb-16 md:pb-24 lg:pb-28 overflow-hidden bg-ink">
      {/* Background: Vídeo ou Imagem com Ken Burns sutil */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {!videoFailed ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero/hero-main.webp"
            className="w-full h-full object-cover object-center scale-105 transition-opacity duration-1000"
            onError={() => setVideoFailed(true)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="relative w-full h-full animate-ken-burns">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Salão com arranjos florais e iluminação cinematográfica para evento exclusivo"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        )}

        {/* Overlays sutis para legibilidade impecável sem escurecer demais */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-espresso-dark/30 mix-blend-multiply" />
      </div>

      {/* Conteúdo Ancorado na Parte Inferior Esquerda (Editorial) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow / Tagline */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gold" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold font-sans font-medium">
              Salvador • Cerimonial & Alta Produção
            </span>
          </div>

          {/* Título Principal de Impacto com clamp e contraste */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.05] tracking-tight text-ivory font-normal text-balance">
            {title}
          </h1>

          {/* Subtítulo Limpo */}
          <p className="text-base sm:text-lg md:text-xl text-ivory/85 font-sans font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Botões de Ação */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <Button
              href={primaryCtaHref}
              variant="gold"
              size="lg"
              className="shadow-xl"
            >
              {primaryCtaLabel}
            </Button>

            <Button
              href={secondaryCtaHref}
              variant="secondary"
              size="lg"
            >
              {secondaryCtaLabel}
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador Discreto de Scroll */}
      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 text-gold/70 text-xs tracking-widest uppercase">
        <span className="font-sans text-[10px]">Role para explorar</span>
        <div className="w-5 h-8 border border-gold/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
