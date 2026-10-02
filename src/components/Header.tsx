"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu no mobile ao mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Fecha ao pressionar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-gold/15 py-3 shadow-lg"
            : "bg-gradient-to-b from-ink/80 via-ink/40 to-transparent py-5 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monograma */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
            aria-label="Leandro Santana Cerimonial - Página Inicial"
          >
            <div className="w-10 h-10 border border-gold/60 group-hover:border-gold flex items-center justify-center bg-espresso/50 transition-colors">
              <span className="font-serif text-lg tracking-wider text-gold font-semibold">LS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-wider text-ivory group-hover:text-gold transition-colors font-medium">
                LEANDRO SANTANA
              </span>
              <span className="text-[9px] tracking-widest text-gold uppercase font-light -mt-1">
                Cerimonial & Eventos
              </span>
            </div>
          </Link>

          {/* Navegação Desktop: 7 itens exatos */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs xl:text-sm uppercase tracking-editorial transition-colors duration-200 relative py-1 focus-visible:outline-2 focus-visible:outline-gold",
                    isActive
                      ? "text-gold font-medium"
                      : "text-ivory/80 hover:text-gold"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Botão Fixo no Topo: SOLICITE SEU ORÇAMENTO */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              href="/orcamentos"
              variant="outline"
              size="sm"
              className="border-gold/60 text-gold hover:bg-gold hover:text-ink text-[11px] tracking-widest uppercase py-2 px-5"
            >
              Solicite seu orçamento
            </Button>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ivory hover:text-gold focus-visible:outline-2 focus-visible:outline-gold rounded"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Menu Mobile em Tela Cheia */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl lg:hidden transition-all duration-500 flex flex-col justify-between p-6 sm:p-10 pt-24",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação móvel"
      >
        <div className="flex flex-col space-y-6">
          <span className="text-[10px] tracking-widest uppercase text-gold/70">
            Navegação
          </span>
          <nav className="flex flex-col space-y-4">
            {siteConfig.navigation.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-serif text-2xl sm:text-3xl transition-colors duration-200 flex items-center justify-between border-b border-gold/10 pb-3",
                    isActive
                      ? "text-gold italic font-medium"
                      : "text-ivory hover:text-gold"
                  )}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-sans text-gold/50 font-normal">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Ações inferiores no menu mobile */}
        <div className="flex flex-col space-y-4 pt-6 border-t border-gold/20">
          <Button
            href="/orcamentos"
            variant="gold"
            size="lg"
            className="w-full text-center"
          >
            Solicite seu orçamento
          </Button>

          <a
            href={siteConfig.phone.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ivory py-3"
          >
            <span>Falar no WhatsApp: {siteConfig.phone.display}</span>
          </a>
        </div>
      </div>
    </>
  );
}
