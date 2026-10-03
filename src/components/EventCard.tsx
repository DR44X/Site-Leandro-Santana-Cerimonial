import React from "react";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { cn } from "@/lib/utils";

interface EventCardProps {
  slug: string;
  title: string;
  description: string;
  imageId: string;
  number: string;
  variant?: "large" | "standard" | "tall";
  className?: string;
}

export function EventCard({
  slug,
  title,
  description,
  imageId,
  number,
  variant = "standard",
  className,
}: EventCardProps) {
  const isLarge = variant === "large";

  return (
    <Link
      href={`/eventos/${slug}`}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden border border-gold/20 hover:border-gold hover:-translate-y-1 hover:shadow-2xl transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] bg-espresso-dark min-h-[380px]",
        isLarge ? "md:min-h-[520px] md:col-span-2" : "md:min-h-[420px]",
        className
      )}
      aria-label={`Ver detalhes sobre ${title}`}
    >
      {/* Imagem de Fundo com Photo e zoom 1.05 no hover */}
      <div className="absolute inset-0 z-0">
        <Photo
          id={imageId}
          fill
          className="w-full h-full"
          imageClassName="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Camada gradiente escura para contraste editorial */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      {/* Conteúdo Sobreposto */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end w-full">
        {/* Número Editorial */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-serif text-gold text-sm tracking-widest font-light">
            {number}
          </span>
          {/* Seta animada com deslocamento de 6px */}
          <span className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform group-hover:translate-x-[6px]">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>

        {/* Título do Evento */}
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory group-hover:text-champagne transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] font-normal">
          {title}
        </h3>

        {/* Descrição Curta */}
        <p className="mt-2 text-xs sm:text-sm text-ivory/80 font-sans line-clamp-2 leading-relaxed font-light">
          {description}
        </p>

        {/* Linha Fina Dourada no rodapé do card */}
        <div className="mt-4 pt-3 border-t border-gold/15 flex items-center justify-between text-[11px] uppercase tracking-widest text-gold/80 font-medium">
          <span>Explorar celebração</span>
          <span className="group-hover:translate-x-[6px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
