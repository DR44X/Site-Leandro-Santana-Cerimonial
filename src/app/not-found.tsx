import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ink relative px-4 sm:px-6 lg:px-8 py-24 bg-grain">
      <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
        {/* Logo Oficial */}
        <div className="relative w-20 h-20 mx-auto transition-transform duration-500 hover:scale-105">
          <Image
            src="/images/logo/logo-leandro-santana.webp"
            alt="Leandro Santana Cerimonial | DeCasa"
            fill
            sizes="80px"
            className="object-contain"
          />
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
