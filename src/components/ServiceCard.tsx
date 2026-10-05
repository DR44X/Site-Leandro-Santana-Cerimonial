"use client";

import React, { useRef, useState, useEffect } from "react";
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
  const cardRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const element = cardRef.current;
    if (!element) return;

    // Se o elemento já está na tela ao carregar a página
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsInView(true);
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "50px 0px -20px 0px",
        }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (rect.top - windowHeight / 2) / windowHeight;
            const offset = Math.max(-12, Math.min(12, progress * 24));
            setParallaxY(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article
      ref={cardRef}
      id={id}
      className={cn(
        "group relative flex flex-col bg-espresso border border-gold/20 hover:border-gold transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-2xl overflow-hidden",
        isWide ? "md:col-span-2 flex-col md:flex-row" : "flex-col",
        className
      )}
    >
      {/* Imagem do Serviço com fade-in suave e transição de escala (zoom) editorial */}
      <div
        className={cn(
          "relative overflow-hidden bg-espresso-dark",
          isWide ? "w-full md:w-1/2 aspect-[4/3] md:aspect-auto min-h-[280px]" : "w-full aspect-[3/4]"
        )}
      >
        <div
          className={cn(
            "w-full h-full card-image-zoom-reveal",
            isInView && "is-in-view"
          )}
        >
          <div
            className="w-full h-full scale-105 transition-transform duration-300 ease-out"
            style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
          >
            <Photo
              id={imageId}
              fill
              className="w-full h-full"
              imageClassName="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B120E]/90 via-transparent to-transparent md:hidden" />
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
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory group-hover:text-champagne transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] font-normal">
            {title}
          </h3>

          {/* Tagline / Frase de Impacto */}
          <p className="mt-2 text-xs sm:text-sm font-serif italic text-gold/90 leading-snug">
            &ldquo;{tagline}&rdquo;
          </p>

          {/* Descrição */}
          <p className="mt-4 text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Link / CTA Discreto com seta deslocando 6px no hover */}
        <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between">
          <Link
            href="/orcamentos"
            className="text-[11px] uppercase tracking-widest text-gold hover:text-ivory font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <span>Incluir no orçamento</span>
            <span className="group-hover:translate-x-[6px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
