"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getImage, type ImageManifestItem } from "@/content/images";
import { cn } from "@/lib/utils";

interface PhotoProps {
  id?: string;
  src?: string;
  alt?: string;
  foco?: string;
  aspectRatio?: "16:9" | "4:3" | "3:4" | "1:1" | "21:9" | "2:3" | "auto";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  fill?: boolean;
}

export function Photo({
  id,
  src: customSrc,
  alt: customAlt,
  foco: customFoco,
  aspectRatio,
  priority = false,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = true,
}: PhotoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  let manifestData: ImageManifestItem | null = null;
  if (id) {
    manifestData = getImage(id);
  }

  const resolvedSrc = customSrc || manifestData?.src || "/images/hero/hero-main.webp";
  const resolvedAlt = customAlt || manifestData?.alt || "Leandro Santana Cerimonial";
  const resolvedFoco = customFoco || manifestData?.foco || "center center";
  const resolvedRatio = aspectRatio || manifestData?.proporcao || "4:3";

  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);

  React.useEffect(() => {
    setCurrentSrc(resolvedSrc);
  }, [resolvedSrc]);

  const ratioClasses: Record<string, string> = {
    "16:9": "aspect-[16/9]",
    "4:3": "aspect-[4/3]",
    "3:4": "aspect-[3/4]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]",
    "2:3": "aspect-[2/3]",
    auto: "",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-espresso-light/40 transition-colors duration-500",
        ratioClasses[resolvedRatio],
        className
      )}
      style={{
        backgroundColor: "#1E1510",
      }}
    >
      <Image
        src={currentSrc}
        alt={resolvedAlt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          // Ordem de prioridade de fallback: webp -> jpg -> png
          if (currentSrc.endsWith(".webp")) {
            setCurrentSrc(currentSrc.replace(/\.webp$/, ".jpg"));
          } else if (currentSrc.endsWith(".jpg")) {
            setCurrentSrc(currentSrc.replace(/\.jpg$/, ".png"));
          }
        }}
        className={cn(
          "object-cover transition-all duration-700 ease-out",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
          imageClassName
        )}
        style={{
          objectPosition: resolvedFoco,
        }}
      />
    </div>
  );
}
