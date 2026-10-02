"use client";

import React, { useState } from "react";
import { galleryFilters, galleryItems, type GalleryCategoryKey, type GalleryItem } from "@/content/galeria";
import { Photo } from "@/components/Photo";
import { Lightbox } from "@/components/Lightbox";
import { cn } from "@/lib/utils";

interface GalleryProps {
  initialCategory?: GalleryCategoryKey;
  showFilters?: boolean;
  limit?: number;
  className?: string;
}

export function Gallery({
  initialCategory = "todos",
  showFilters = true,
  limit,
  className,
}: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryCategoryKey>(initialCategory);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Filtra itens
  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === "todos") return true;
    return item.category === activeFilter;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : displayedItems.length - 1));
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < displayedItems.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div className={cn("w-full space-y-10", className)}>
      {/* Barra de Filtros Instantâneos (7 filtros obrigatórios) */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 border-b border-gold/15">
          {galleryFilters.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-editorial rounded-full transition-all duration-300 font-sans min-h-[44px] focus-visible:outline-2 focus-visible:outline-gold",
                  isActive
                    ? "bg-gold text-ink font-medium shadow-md"
                    : "text-ivory/70 hover:text-gold hover:bg-espresso/50 border border-transparent"
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid Editorial (Mosaico / Masonry) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedItems.map((item, index) => {
          const isTall = item.span === "tall";
          const isWide = item.span === "wide";

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleOpenLightbox(index)}
              className={cn(
                "group relative block overflow-hidden text-left bg-espresso border border-gold/15 hover:border-gold/60 transition-all duration-500 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold",
                isWide ? "sm:col-span-2 aspect-[16/9]" : isTall ? "aspect-[3/4]" : "aspect-[4/3]"
              )}
              aria-label={`Ver foto: ${item.title}`}
            >
              <Photo
                id={item.imageId}
                fill
                className="w-full h-full"
                imageClassName="group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay de Hover com Informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">
                  {item.category.replace("-", " ")}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-ivory font-normal mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-ivory/75 font-sans font-light mt-1 line-clamp-1">
                  {item.subtitle}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-gold uppercase tracking-wider">
                  <span>Ampliar fotografia</span>
                  <span>↗</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Integrado */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          isOpen={selectedPhotoIndex !== null}
          currentIndex={selectedPhotoIndex}
          items={displayedItems}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
