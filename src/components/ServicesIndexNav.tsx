"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData, ServiceItem } from "@/content/servicos";
import { cn } from "@/lib/utils";

interface ServicesIndexNavProps {
  services?: ServiceItem[];
}

export function ServicesIndexNav({ services = servicesData }: ServicesIndexNavProps) {
  const [activeId, setActiveId] = useState<string>(services[0]?.id || "");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef(false);

  // Verifica se há overflow horizontal no container
  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  // Rola o container horizontal com botões laterais
  const handleHorizontalScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.max(el.clientWidth * 0.6, 220);
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Suporte a arrastar com o mouse (Drag to Scroll)
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    const onMouseDown = (e: MouseEvent) => {
      // Ignora clique direito
      if (e.button !== 0) return;
      isDown = true;
      hasMoved = false;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onMouseLeave = () => {
      isDown = false;
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    };

    const onMouseUp = () => {
      isDown = false;
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 5) {
        hasMoved = true;
      }
      el.scrollLeft = scrollLeft - walk;
      updateScrollButtons();
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, [updateScrollButtons]);

  // Rola suavemente até o serviço selecionado respeitando o cabeçalho fixo
  const scrollToService = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    isClickingRef.current = true;
    setActiveId(id);

    const target = document.getElementById(id);
    if (!target) return;

    // Altura combinada do Header fixo (~68px) + barra do índice (~64px) + margem de respiro
    const headerOffset = 136;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });

    // Centraliza o botão na barra horizontal
    const activeBtn = scrollContainerRef.current?.querySelector(`[data-service-id="${id}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

    // Libera a trava de clique após a animação de rolagem
    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  // ScrollSpy para detectar qual dos 7 serviços está visível na tela
  useEffect(() => {
    let ticking = false;

    const handleScrollSpy = () => {
      if (isClickingRef.current) return;
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const offset = 170; // Ponto de medição abaixo do topo
        const serviceElements = services.map((s) => ({
          id: s.id,
          element: document.getElementById(s.id),
        }));

        let currentActiveId = "";

        for (let i = 0; i < serviceElements.length; i++) {
          const item = serviceElements[i];
          if (!item.element) continue;

          const rect = item.element.getBoundingClientRect();
          if (rect.top <= offset) {
            currentActiveId = item.id;
          }
        }

        // Se estiver bem no topo da página, ativa o primeiro
        if (!currentActiveId && serviceElements[0]?.element) {
          currentActiveId = serviceElements[0].id;
        }

        if (currentActiveId && currentActiveId !== activeId) {
          setActiveId(currentActiveId);

          // Centraliza automaticamente o item ativo na barra horizontal
          const activeBtn = scrollContainerRef.current?.querySelector(
            `[data-service-id="${currentActiveId}"]`
          );
          if (activeBtn && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const btnLeft = (activeBtn as HTMLElement).offsetLeft;
            const btnWidth = (activeBtn as HTMLElement).offsetWidth;
            const scrollGoal = btnLeft - container.clientWidth / 2 + btnWidth / 2;

            container.scrollTo({
              left: scrollGoal,
              behavior: "smooth",
            });
          }
        }

        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    updateScrollButtons();

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons, { passive: true });
    }
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("resize", updateScrollButtons);
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [services, activeId, updateScrollButtons]);

  return (
    <nav
      aria-label="Índice dos serviços 01–07"
      className="bg-espresso-dark/95 backdrop-blur-md py-3.5 sm:py-4 border-b border-gold/20 sticky top-[58px] sm:top-[68px] z-30 shadow-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-3">
          {/* Rótulo Editorial Fixo */}
          <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-gold/30 shrink-0">
            <span className="text-gold font-serif text-sm font-semibold tracking-wider">
              Índice
            </span>
            <span className="text-[11px] font-sans text-gold/70 uppercase tracking-widest font-mono">
              01–07
            </span>
          </div>

          {/* Botão de Rolagem para Esquerda */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => handleHorizontalScroll("left")}
              aria-label="Rolar índice para esquerda"
              className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-espresso border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all shrink-0 z-10 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Container com Rolagem Horizontal Suave */}
          <div className="relative flex-1 overflow-hidden">
            {/* Gradientes sutis de indicação de rolagem nas laterais */}
            {canScrollLeft && (
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-espresso-dark to-transparent z-10 pointer-events-none"
              />
            )}
            {canScrollRight && (
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-espresso-dark to-transparent z-10 pointer-events-none"
              />
            )}

            <div
              ref={scrollContainerRef}
              className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-1 scrollbar-none cursor-grab active:cursor-grabbing scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {services.map((s) => {
                const isActive = activeId === s.id;

                return (
                  <button
                    key={s.id}
                    type="button"
                    data-service-id={s.id}
                    onClick={(e) => scrollToService(e, s.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs uppercase tracking-widest rounded transition-all duration-300 shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2",
                      isActive
                        ? "bg-gold/15 text-gold border border-gold/60 font-medium shadow-xs"
                        : "text-ivory/70 border border-transparent hover:text-gold hover:border-gold/30 hover:bg-espresso/50"
                    )}
                  >
                    <span
                      className={cn(
                        "font-serif text-[11px] sm:text-xs font-semibold px-1 rounded-xs transition-colors",
                        isActive
                          ? "bg-gold text-ink"
                          : "text-gold/80 group-hover:text-gold"
                      )}
                    >
                      {s.number}
                    </span>
                    <span className="transition-colors truncate max-w-[170px] sm:max-w-none">
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botão de Rolagem para Direita */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => handleHorizontalScroll("right")}
              aria-label="Rolar índice para direita"
              className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-espresso border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all shrink-0 z-10 shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
