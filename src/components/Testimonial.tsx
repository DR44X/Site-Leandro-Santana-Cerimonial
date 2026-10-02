import React from "react";
import { testimonialsData, type TestimonialItem } from "@/content/depoimentos";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  className?: string;
}

export function Testimonial({ className }: TestimonialProps) {
  return (
    <section className={cn("py-20 md:py-28 bg-espresso border-y border-gold/20 relative overflow-hidden bg-grain", className)}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Aspas Decorativas em Dourado Suave */}
        <div className="font-serif text-6xl sm:text-7xl lg:text-8xl text-gold/30 leading-none select-none -mb-6 sm:-mb-8">
          “
        </div>

        {/* Depoimento em Destaque */}
        <div className="space-y-6">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-light leading-relaxed max-w-3xl mx-auto italic">
            {testimonialsData[0].quote}
          </blockquote>

          <div className="pt-4 flex flex-col items-center justify-center space-y-1">
            <span className="h-[1px] w-12 bg-gold/50 mb-3" />
            <cite className="font-sans text-xs uppercase tracking-widest text-gold font-medium not-italic">
              {testimonialsData[0].author}
            </cite>
            <span className="text-xs text-ivory/60 font-sans">
              {testimonialsData[0].role}
            </span>
          </div>

          {/* Tag neutra explicativa sem inventar histórias falsas */}
          <div className="pt-6">
            <span className="inline-block text-[10px] uppercase tracking-widest text-gold/60 border border-gold/20 px-3 py-1 bg-espresso-dark/50">
              {testimonialsData[0].todoNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
