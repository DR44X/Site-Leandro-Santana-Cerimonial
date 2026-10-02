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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Touch swipe coordinates
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Armazena o elemento focado antes de abrir o modal para devolver o foco ao fechar
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      // Foca no botão de fechar após renderizar
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Teclado: Setas, Esc e Focus Trap
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
      } else if (e.key === "Tab") {
        // Focus trap
        const modal = modalRef.current;
        if (!modal) return;
        const focusableEls = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableEls.length === 0) return;

        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const manifestItem = getImage(currentItem.imageId);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
    touchStartY.current = e.changedTouches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Movimento horizontal dominante de pelo menos 50px
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        onNext(); // swipe esquerda -> próxima
      } else {
        onPrev(); // swipe direita -> anterior
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Só fecha se o clique foi diretamente no fundo
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização em tela cheia: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 sm:p-8 outline-none select-none"
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop transparente para capturar cliques no fundo */}
      <div
        className="absolute inset-0 -z-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Barra Superior: Contador e Botão Fechar */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-20 pointer-events-none">
        <span className="font-serif text-sm tracking-widest text-gold font-light pointer-events-auto">
          {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-3 text-ivory/80 hover:text-gold transition-colors border border-gold/30 hover:border-gold rounded-full bg-espresso/60 focus-visible:outline-2 focus-visible:outline-gold pointer-events-auto min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 text-ivory/80 hover:text-gold border border-gold/30 hover:border-gold rounded-full bg-espresso/60 hover:bg-espresso transition-all z-20 focus-visible:outline-2 focus-visible:outline-gold min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Imagem anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Área Central da Imagem */}
      <div
        className="relative max-w-5xl max-h-[75vh] w-full h-full flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={manifestItem.src}
            alt={manifestItem.alt || currentItem.title}
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
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 text-ivory/80 hover:text-gold border border-gold/30 hover:border-gold rounded-full bg-espresso/60 hover:bg-espresso transition-all z-20 focus-visible:outline-2 focus-visible:outline-gold min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Próxima imagem"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
