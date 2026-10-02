"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { type GalleryItem } from "@/content/galeria";
import { getImage } from "@/content/images";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Armazena o elemento focado antes de abrir o modal para devolver o foco ao fechar
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      // Foca no modal
      modalRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Teclado: Setas e Esc
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const manifestItem = getImage(currentItem.imageId);

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização em tela cheia: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 sm:p-8 outline-none select-none"
    >
      {/* Barra Superior: Contador e Botão Fechar */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-20">
        <span className="font-serif text-sm tracking-widest text-gold font-light">
          {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="p-3 text-ivory/80 hover:text-gold transition-colors border border-gold/30 hover:border-gold rounded-full bg-espresso/60 focus-visible:outline-2 focus-visible:outline-gold"
          aria-label="Fechar visualização"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Botão Anterior */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 text-ivory/80 hover:text-gold border border-gold/30 hover:border-gold rounded-full bg-espresso/60 hover:bg-espresso transition-all z-20 focus-visible:outline-2 focus-visible:outline-gold"
        aria-label="Imagem anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Área Central da Imagem */}
      <div className="relative max-w-5xl max-h-[75vh] w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={manifestItem.src}
            alt={manifestItem.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain"
            priority
          />
        </div>

        {/* Legenda Discreta na Parte Inferior */}
        <div className="mt-4 text-center max-w-xl z-20">
          <h4 className="font-serif text-lg sm:text-xl text-ivory font-normal">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-gold/80 font-sans font-light mt-1">
            {currentItem.subtitle}
          </p>
        </div>
      </div>

      {/* Botão Próximo */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 text-ivory/80 hover:text-gold border border-gold/30 hover:border-gold rounded-full bg-espresso/60 hover:bg-espresso transition-all z-20 focus-visible:outline-2 focus-visible:outline-gold"
        aria-label="Próxima imagem"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
