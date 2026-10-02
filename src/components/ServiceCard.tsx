import React from "react";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  imageId: string;
  isWide?: boolean;
  className?: string;
}

export function ServiceCard({
  id,
  number,
  title,
  tagline,
  description,
  imageId,
  isWide = false,
  className,
}: ServiceCardProps) {
  return (
    <article
      id={id}
      className={cn(
        "group relative flex flex-col bg-espresso border border-gold/20 hover:border-gold/60 transition-all duration-500 overflow-hidden",
        isWide ? "md:col-span-2 flex-col md:flex-row" : "flex-col",
        className
      )}
    >
      {/* Imagem do Serviço */}
      <div
        className={cn(
          "relative overflow-hidden bg-espresso-dark",
          isWide ? "w-full md:w-1/2 aspect-[4/3] md:aspect-auto" : "w-full aspect-[3/4]"
        )}
      >
        <Photo
          id={imageId}
          fill
          className="w-full h-full"
          imageClassName="group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent md:hidden" />
      </div>

      {/* Conteúdo do Card */}
      <div
        className={cn(
          "p-6 sm:p-8 flex flex-col justify-between flex-1",
          isWide ? "w-full md:w-1/2" : "w-full"
        )}
      >
        <div>
          {/* Numeração Editorial & Linha Fina */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gold/20">
            <span className="font-serif text-gold text-lg font-light tracking-widest">
              {number}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gold/70 font-sans">
              Serviço Especializado
            </span>
          </div>

          {/* Título Serifado */}
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory group-hover:text-champagne transition-colors font-normal">
            {title}
          </h3>

          {/* Tagline / Frase de Impacto */}
          <p className="mt-2 text-xs sm:text-sm font-serif italic text-gold/90 leading-snug">
            "{tagline}"
          </p>

          {/* Descrição */}
          <p className="mt-4 text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Link / CTA Discreto */}
        <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between">
          <Link
            href="/orcamentos"
            className="text-[11px] uppercase tracking-widest text-gold hover:text-ivory font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            <span>Incluir no orçamento</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
