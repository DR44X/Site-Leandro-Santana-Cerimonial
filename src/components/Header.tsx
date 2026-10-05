"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchOverlay } from "@/components/SearchOverlay";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Atalho global Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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

  // Focus trap no menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      wasOpenRef.current = true;
      const menuEl = mobileMenuRef.current;
      if (!menuEl) return;
      const focusableEls = menuEl.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== "Tab" || !menuEl) return;
        const currentFocusables = menuEl.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (currentFocusables.length === 0) return;
        const first = currentFocusables[0];
        const last = currentFocusables[currentFocusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      };

      window.addEventListener("keydown", handleTabKey);
      return () => window.removeEventListener("keydown", handleTabKey);
    } else if (wasOpenRef.current) {
      hamburgerButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] w-full",
          isScrolled
            ? "bg-ink/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-gold/20 shadow-xl"
            : "bg-gradient-to-b from-[#0B0908]/90 via-[#0B0908]/50 to-transparent py-5 sm:py-6 border-b border-transparent"
        )}
      >
        {/* Navbar com 100% da largura útil, margem de segurança e Flexbox justify-between */}
        <div className="w-full px-4 sm:px-6 flex items-center justify-between gap-2 lg:gap-3 xl:gap-6">
          {/* Zona 1: Logo Oficial Leandro Santana | Cerimonial | DeCasa */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 shrink-0"
            aria-label="Leandro Santana Cerimonial | DeCasa - Página Inicial"
          >
            <div
              className={cn(
                "relative shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105",
                isScrolled
                  ? "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
                  : "w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14"
              )}
            >
              <Image
                src="/images/logo/logo-leandro-santana.webp"
                alt="Leandro Santana Cerimonial | DeCasa"
                fill
                priority
                sizes="(max-width: 640px) 44px, (max-width: 1024px) 52px, 56px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Zona 2: 7 Abas de Navegação com sublinhado animado suave e contraste perfeito */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 shrink-0"
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
                    "group relative px-2.5 xl:px-3 py-1.5 rounded text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-wider xl:tracking-editorial transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] inline-flex flex-col items-center justify-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-gold",
                    isActive
                      ? "text-gold font-medium"
                      : isScrolled
                      ? "text-ivory/85 hover:text-gold font-normal"
                      : "text-[#F6F0E6] hover:text-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] font-normal"
                  )}
                >
                  <span className="relative pb-0.5">
                    {item.label}
                    {/* Sublinhado animado suave */}
                    <span
                      className={cn(
                        "absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-gold origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Zona 3: Grupo de Ações Integrado - Rigorosamente na mesma altura h-9 (36px) e alinhamento vertical */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 shrink-0">
            {/* 1. Botão Solicite seu Orçamento */}
            <Link
              href="/orcamentos"
              className={cn(
                "h-9 min-h-[36px] px-3 sm:px-3.5 xl:px-4 rounded border font-sans font-medium text-[10px] sm:text-[11px] tracking-wider uppercase transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-gold shrink-0 backdrop-blur-xs",
                isScrolled
                  ? "border-gold/70 text-gold hover:bg-gold hover:text-ink"
                  : "border-gold bg-[#0B0908]/40 text-gold hover:bg-gold hover:text-ink shadow-sm"
              )}
            >
              <span className="hidden sm:inline">Solicite seu orçamento</span>
              <span className="sm:hidden">Orçamento</span>
            </Link>

            {/* 2. Botão de Busca Rápida (Cmd+K) */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className={cn(
                "h-9 min-h-[36px] px-2.5 sm:px-3 rounded border hover:border-gold inline-flex items-center justify-center gap-1.5 transition-all text-xs font-sans focus-visible:outline-2 focus-visible:outline-gold shrink-0 backdrop-blur-xs",
                isScrolled
                  ? "border-gold/30 bg-espresso/40 hover:bg-gold/10 text-gold"
                  : "border-gold/50 bg-[#0B0908]/40 hover:bg-gold/15 text-gold"
              )}
              aria-label="Abrir busca rápida (Atalho: Command K ou Control K)"
              title="Buscar (⌘K)"
            >
              <Search className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="hidden 2xl:inline font-sans text-xs">Buscar</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] border border-gold/40 rounded bg-ink/50 text-gold font-mono leading-none">
                ⌘K
              </kbd>
            </button>

            {/* 3. Botão de Alternância de Tema */}
            <ThemeToggle />

            {/* 4. Botão Hambúrguer Mobile (Apenas < 1024px) */}
            <button
              ref={hamburgerButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden h-9 w-9 min-h-[36px] min-w-[36px] p-2 focus-visible:outline-2 focus-visible:outline-gold rounded inline-flex items-center justify-center shrink-0 border border-gold/40 bg-espresso/50 backdrop-blur-xs transition-colors",
                isScrolled ? "text-ivory hover:text-gold" : "text-[#F6F0E6] hover:text-gold"
              )}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
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
        </div>

        {/* Borda decorativa inferior de 100% da largura do viewport contínua sem qualquer margem ou recuo */}
        <div
          className="w-full absolute bottom-0 left-0 right-0 h-[1px] bg-gold/20 pointer-events-none"
          aria-hidden="true"
        />
      </header>

      {/* Busca Global Modal Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Menu Mobile em Tela Cheia */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl lg:hidden transition-all duration-300 flex flex-col justify-between p-6 sm:p-10 pt-20 overflow-y-auto",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação móvel"
      >
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-gold/15">
            <span className="text-[10px] tracking-widest uppercase text-gold">
              Navegação Principal
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center gap-1.5 text-xs text-gold border border-gold/30 px-2.5 py-1 rounded"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Buscar</span>
              </button>
              <ThemeToggle />
            </div>
          </div>

          <nav className="flex flex-col space-y-3">
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
                    "font-serif text-xl sm:text-2xl transition-colors duration-200 flex items-center justify-between border-b border-gold/10 pb-2.5",
                    isActive
                      ? "text-gold italic font-medium"
                      : "text-ivory hover:text-gold"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                    )}
                    {item.label}
                  </span>
                  <span className="text-xs font-sans text-gold/50 font-normal">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Ações inferiores no menu mobile */}
        <div className="flex flex-col space-y-3 pt-4 border-t border-gold/20">
          <Link
            href="/orcamentos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-gold text-ink font-sans font-medium uppercase tracking-widest text-xs py-3.5 px-4 rounded shadow"
          >
            Solicite seu orçamento
          </Link>

          <a
            href={siteConfig.phone.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ivory py-2"
          >
            <span>Falar no WhatsApp: {siteConfig.phone.display}</span>
          </a>
        </div>
      </div>
    </>
  );
}
