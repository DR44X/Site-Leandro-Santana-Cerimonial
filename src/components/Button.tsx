import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  isExternal = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-editorial uppercase transition-all duration-500 ease-luxury relative group overflow-hidden select-none focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2";

  const sizeStyles = {
    sm: "text-xs px-5 py-2.5 min-h-[44px]",
    md: "text-xs md:text-sm px-7 py-3.5 min-h-[48px]",
    lg: "text-sm md:text-base px-9 py-4 min-h-[52px]",
  };

  const variantStyles = {
    primary:
      "bg-ivory text-ink hover:bg-champagne hover:shadow-lg font-medium border border-transparent active:scale-[0.98] transition-all duration-500 ease-luxury",
    gold:
      "bg-gold text-ink font-medium hover:bg-gold-light hover:shadow-[0_0_20px_rgba(184,151,90,0.3)] border border-gold active:scale-[0.98] transition-all duration-500 ease-luxury",
    secondary:
      "bg-transparent text-ivory border border-ivory/30 hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-[0.98] transition-all duration-500 ease-luxury",
    outline:
      "bg-transparent text-gold border border-gold/40 hover:border-gold hover:bg-gold hover:text-ink active:scale-[0.98] transition-all duration-500 ease-luxury shadow-none hover:shadow-[0_0_15px_rgba(184,151,90,0.25)]",
    ghost:
      "bg-transparent text-ivory/80 hover:text-gold px-2 py-1 min-h-[44px] underline-offset-8 hover:underline transition-colors duration-500 ease-luxury",
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
