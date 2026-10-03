"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  BookOpen,
  FileText,
  CornerDownLeft,
  ChevronLeft,
} from "lucide-react";
import {
  SearchCategory,
  SearchItem,
  searchContent,
  POPULAR_SEARCH_TERMS,
} from "@/content/searchIndex";
import { cn } from "@/lib/utils";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>("todos");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previewItem, setPreviewItem] = useState<SearchItem | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchInputId = useId();

  const results = searchContent(query, selectedCategory);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setPreviewItem(null);
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keep selected index in bounds when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (previewItem) {
          setPreviewItem(null);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowDown") {
        if (!previewItem && results.length > 0) {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % results.length);
        }
      } else if (e.key === "ArrowUp") {
        if (!previewItem && results.length > 0) {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        }
      } else if (e.key === "Enter") {
        if (!previewItem && results.length > 0) {
          e.preventDefault();
          setPreviewItem(results[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, previewItem, results, selectedIndex, onClose]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "eventos":
        return <Calendar className="w-4 h-4 text-gold shrink-0" />;
      case "servicos":
        return <Layers className="w-4 h-4 text-gold shrink-0" />;
      case "blog":
        return <BookOpen className="w-4 h-4 text-gold shrink-0" />;
      case "paginas":
      default:
        return <FileText className="w-4 h-4 text-gold shrink-0" />;
    }
  };

  const handleNavigate = (url: string) => {
    onClose();
    router.push(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-4 pb-6 bg-ink/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Busca global de serviços, eventos e artigos"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-espresso border border-gold/30 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-fade-in relative text-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header da Barra de Busca */}
        <div className="relative border-b border-gold/20 flex items-center px-4 sm:px-6 py-4 bg-espresso/80">
          <Search className="w-5 h-5 text-gold shrink-0 mr-3" aria-hidden="true" />
          <label htmlFor={searchInputId} className="sr-only">
            Buscar eventos, serviços, artigos ou ferramentas
          </label>
          <input
            id={searchInputId}
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="O que você está procurando? (ex.: Casamento, Buffet, 15 Anos, Checklist...)"
            className="flex-1 bg-transparent border-none outline-none text-ivory placeholder:text-ivory/40 text-sm sm:text-base font-sans pr-8"
            autoComplete="off"
            spellCheck="false"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="text-ivory/50 hover:text-gold p-1 mr-2"
              aria-label="Limpar termo de busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-ivory/60 hover:text-gold hover:bg-gold/10 transition-colors"
            aria-label="Fechar busca (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Abas de Categoria */}
        <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 bg-ink/40 border-b border-gold/10 overflow-x-auto text-xs scrollbar-none">
          {[
            { id: "todos", label: "Todos" },
            { id: "eventos", label: "Eventos" },
            { id: "servicos", label: "Serviços" },
            { id: "blog", label: "Blog & Dicas" },
            { id: "paginas", label: "Páginas & Checklist" },
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id as SearchCategory)}
                className={cn(
                  "px-3 py-1 rounded transition-colors whitespace-nowrap text-xs font-sans",
                  isActive
                    ? "bg-gold text-ink font-medium"
                    : "text-ivory/70 hover:text-gold hover:bg-gold/10"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Conteúdo: Lista ou Preview In-Place */}
        <div className="flex-1 overflow-y-auto min-h-[300px] p-4 sm:p-6" ref={resultsContainerRef}>
          {previewItem ? (
            /* Visualização In-Place sem sair da página */
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-gold/15">
                <button
                  type="button"
                  onClick={() => setPreviewItem(null)}
                  className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-ivory uppercase tracking-wider font-medium transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Voltar aos resultados</span>
                </button>

                <span className="text-[11px] text-ivory/50 font-sans uppercase tracking-widest">
                  {previewItem.categoryLabel}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
                  {previewItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-gold font-sans mt-1">
                  {previewItem.subtitle}
                </p>
              </div>

              <div className="bg-ink/50 border border-gold/20 p-4 sm:p-5 space-y-3">
                <span className="text-xs font-medium uppercase tracking-widest text-gold block">
                  Visão Geral & Pontos-Chave
                </span>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed font-sans font-light">
                  {previewItem.summary}
                </p>

                {previewItem.highlights && previewItem.highlights.length > 0 && (
                  <div className="pt-2 border-t border-gold/10 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-ivory/60 block font-sans">
                      Destaques deste item:
                    </span>
                    <ul className="space-y-1.5">
                      {previewItem.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-ivory/90 font-sans"
                        >
                          <span className="text-gold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Botões de Ação do Preview */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleNavigate(previewItem.url)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink text-xs uppercase tracking-widest font-medium py-3 px-6 shadow transition-colors min-h-[42px]"
                >
                  <span>Acessar página completa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigate("/orcamentos")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/40 hover:border-gold text-gold hover:bg-gold/10 text-xs uppercase tracking-widest font-medium py-3 px-6 transition-colors min-h-[42px]"
                >
                  <span>Solicitar orçamento deste serviço</span>
                </button>
              </div>
            </div>
          ) : results.length > 0 ? (
            /* Lista de Resultados */
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-gold/70 px-2 block mb-2 font-sans">
                {results.length} resultado{results.length > 1 ? "s" : ""} encontrado
                {results.length > 1 ? "s" : ""}
              </span>

              <div className="space-y-1.5" role="listbox">
                {results.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      role="option"
                      aria-selected={isSelected}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={cn(
                        "group p-3 sm:p-4 rounded border transition-all cursor-pointer flex items-center justify-between gap-4",
                        isSelected
                          ? "bg-gold/10 border-gold/60 text-ivory shadow-sm"
                          : "bg-espresso/40 border-gold/10 hover:border-gold/30 text-ivory/80"
                      )}
                      onClick={() => setPreviewItem(item)}
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="p-2 rounded bg-ink/60 border border-gold/20 shrink-0 mt-0.5">
                          {getCategoryIcon(item.category)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif text-base sm:text-lg text-ivory group-hover:text-gold transition-colors truncate">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-xs text-ivory/60 truncate mt-0.5 font-sans">
                            {item.subtitle}
                          </p>
                          <div className="flex items-center gap-2 text-[10px] text-ivory/50 mt-1 font-sans">
                            <span className="text-gold/80">{item.categoryLabel}</span>
                            <span>·</span>
                            <span className="truncate max-w-[200px] sm:max-w-xs">{item.url}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewItem(item);
                          }}
                          className="hidden sm:inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-gold hover:text-ivory px-2.5 py-1 rounded border border-gold/30 hover:border-gold transition-colors"
                        >
                          <span>Visualizar</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate(item.url);
                          }}
                          className="p-2 rounded text-gold/70 hover:text-gold hover:bg-gold/10 transition-colors"
                          aria-label={`Ir para ${item.title}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Sem Resultados */
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mx-auto text-gold/60">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl text-ivory">Nenhum resultado encontrado</h4>
              <p className="text-xs text-ivory/60 max-w-sm mx-auto font-sans leading-relaxed">
                Não encontramos correspondência para &quot;{query}&quot;. Tente utilizar um dos termos populares abaixo:
              </p>
            </div>
          )}

          {/* Chips de Termos Populares (quando query vazia ou sem resultados) */}
          {(!query || results.length === 0) && (
            <div className="pt-6 mt-6 border-t border-gold/15 space-y-3">
              <span className="flex items-center gap-1.5 text-xs text-gold uppercase tracking-wider font-medium font-sans">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Termos mais buscados em Salvador</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCH_TERMS.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => {
                      setQuery(term);
                      inputRef.current?.focus();
                    }}
                    className="px-3 py-1.5 rounded-full text-xs font-sans border border-gold/30 bg-espresso/60 text-ivory/80 hover:text-gold hover:border-gold hover:bg-gold/10 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rodapé do Modal com Legenda de Atalhos */}
        <div className="px-4 sm:px-6 py-3 bg-espresso/90 border-t border-gold/15 flex items-center justify-between text-[11px] text-ivory/50 font-sans">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-ink/70 border border-gold/30 rounded text-[10px] text-gold">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-ink/70 border border-gold/30 rounded text-[10px] text-gold">↓</kbd>
              <span>Navegar</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-ink/70 border border-gold/30 rounded text-[10px] text-gold inline-flex items-center">
                <CornerDownLeft className="w-2.5 h-2.5 mr-0.5" /> Enter
              </kbd>
              <span>Visualizar</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-ink/70 border border-gold/30 rounded text-[10px] text-gold">ESC</kbd>
              <span>Fechar</span>
            </span>
          </div>

          <span className="hidden sm:inline text-gold/80 font-medium">
            Leandro Santana Cerimonial
          </span>
        </div>
      </div>
    </div>
  );
}
