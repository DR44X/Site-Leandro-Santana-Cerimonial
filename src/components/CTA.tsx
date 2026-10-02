import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
}

export function CTA({
  title = "Vamos criar juntos um momento inesquecível?",
  subtitle = "Entre em contato conosco e receba uma proposta personalizada para a sua celebração.",
  buttonLabel = "Solicitar orçamento",
  buttonHref = "/orcamentos",
  className,
}: CTAProps) {
  return (
    <section className={cn("relative py-28 md:py-36 overflow-hidden bg-ink", className)}>
      {/* Imagem de Fundo Escurecida */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-secondary.jpg"
          alt="Brinde de celebração e taças em comemoração inesquecível"
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="text-[11px] uppercase tracking-widest text-gold font-sans font-medium inline-flex items-center gap-2">
          <span className="h-[1px] w-6 bg-gold" />
          Inicie seu Planejamento
          <span className="h-[1px] w-6 bg-gold" />
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-normal leading-[1.1] text-balance">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-ivory/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex justify-center">
          <Button href={buttonHref} variant="gold" size="lg" className="shadow-2xl">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
