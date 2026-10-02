import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ink relative px-4 sm:px-6 lg:px-8 py-24 bg-grain">
      <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
        {/* Monograma */}
        <div className="w-16 h-16 border border-gold/60 mx-auto flex items-center justify-center bg-espresso/50 shadow-xl">
          <span className="font-serif text-2xl tracking-wider text-gold font-semibold">LS</span>
        </div>

        <div className="space-y-3">
          <span className="font-serif text-gold text-lg tracking-widest block font-light">
            Erro 404
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-ivory font-normal">
            Página não encontrada
          </h1>
          <p className="text-sm sm:text-base text-ivory/70 font-sans font-light leading-relaxed max-w-md mx-auto">
            O endereço solicitado não foi localizado ou pode ter sido movido. Convidamos você a retornar à página inicial ou explorar nossas celebrações.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="gold" size="md">
            Voltar para o início
          </Button>

          <Button href="/orcamentos" variant="secondary" size="md">
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </div>
  );
}
