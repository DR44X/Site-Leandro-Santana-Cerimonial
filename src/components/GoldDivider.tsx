import React from "react";
import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  align?: "left" | "center" | "right";
  width?: "short" | "medium" | "full";
}

export function GoldDivider({
  className,
  align = "left",
  width = "medium",
}: GoldDividerProps) {
  const widthClasses = {
    short: "w-16 sm:w-24",
    medium: "w-28 sm:w-40",
    full: "w-full",
  };

  const alignClasses = {
    left: "origin-left",
    center: "mx-auto origin-center",
    right: "ml-auto origin-right",
  };

  return (
    <div
      className={cn(
        "gold-line-draw h-[1px] bg-gradient-to-r from-gold/30 via-gold to-gold/30 my-4",
        widthClasses[width],
        alignClasses[align],
        className
      )}
      aria-hidden="true"
    />
  );
}
