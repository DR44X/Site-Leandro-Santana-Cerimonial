"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils";

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
}

function getMessageForPath(pathname: string): string {
  if (pathname.includes("/casamentos")) {
    return "Olá! Quero orçamento para casamento em Salvador com Leandro Santana Cerimonial.";
  }
  if (pathname.includes("/15-anos")) {
    return "Olá! Quero orçamento para festa de 15 anos em Salvador com Leandro Santana Cerimonial.";
  }
  if (pathname.includes("/formaturas")) {
    return "Olá! Quero orçamento para formatura em Salvador com Leandro Santana Cerimonial.";
  }
  if (pathname.includes("/corporativos")) {
    return "Olá! Quero orçamento para evento corporativo em Salvador com Leandro Santana Cerimonial.";
  }
  if (pathname.includes("/aniversarios")) {
    return "Olá! Quero orçamento para festa de aniversário em Salvador com Leandro Santana Cerimonial.";
  }
  if (pathname.includes("/confraternizacoes")) {
    return "Olá! Quero orçamento para confraternização em Salvador com Leandro Santana Cerimonial.";
  }
  if (pathname === "/servicos" || pathname === "/servicos/") {
    return "Olá! Gostaria de conhecer os serviços da Leandro Santana Cerimonial em Salvador.";
  }
  if (pathname === "/galeria" || pathname === "/galeria/") {
    return "Olá! Vi as fotos dos eventos e gostaria de solicitar um orçamento para o meu evento.";
  }
  if (pathname === "/orcamentos" || pathname === "/orcamentos/") {
    return "Olá! Gostaria de uma proposta de orçamento personalizada para o meu evento.";
  }
  if (pathname === "/contato" || pathname === "/contato/") {
    return "Olá! Gostaria de falar diretamente com a Leandro Santana Cerimonial.";
  }
  return siteConfig.phone.defaultMessage;
}

export function WhatsAppButton({ customMessage, className }: WhatsAppButtonProps) {
  const pathname = usePathname();
  const message = customMessage || getMessageForPath(pathname || "/");
  const href = buildWhatsAppLink(message);

  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className={`fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 ${className || ""}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco no WhatsApp - Leandro Santana Cerimonial"
        className="group flex items-center gap-3 bg-[#1F1916]/95 hover:bg-[#2A1D17] text-ivory border border-gold/40 hover:border-gold px-4 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 backdrop-blur-md animate-pulse-8s"
      >
        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] text-white shadow-inner flex-shrink-0">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.96.525 1.961.815 3.02.816h.005c3.181 0 5.767-2.586 5.768-5.766 0-1.54-.599-2.989-1.688-4.079-1.09-1.089-2.54-1.687-4.079-1.687zm0-2c4.295 0 7.769 3.474 7.769 7.766 0 2.076-.816 4.028-2.288 5.5-1.472 1.472-3.424 2.288-5.5 2.288-1.341 0-2.65-.353-3.805-1.023l-4.526 1.187 1.21-4.417c-.742-1.206-1.135-2.593-1.135-3.987 0-4.292 3.474-7.766 7.769-7.766zm4.515 11.026c-.247-.123-1.464-.722-1.691-.805-.227-.082-.392-.123-.557.123-.165.247-.641.805-.785.97-.144.164-.288.185-.535.062-.247-.123-1.043-.385-1.986-1.226-.734-.655-1.23-1.465-1.374-1.712-.144-.247-.015-.38.109-.503.111-.11.247-.288.371-.432.124-.144.165-.247.247-.412.082-.164.041-.309-.021-.432-.062-.124-.557-1.34-.763-1.835-.2-.484-.403-.418-.557-.426l-.474-.008c-.165 0-.432.062-.659.309-.227.247-.866.845-.866 2.062 0 1.216.886 2.391 1.01 2.556.124.165 1.745 2.665 4.227 3.738.591.256 1.052.408 1.411.523.593.188 1.133.161 1.56.098.476-.071 1.464-.598 1.67-1.175.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
          </span>
        </div>

        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] tracking-wider uppercase text-gold font-medium">Fale conosco</span>
          <span className="text-xs font-serif tracking-wide text-ivory">Orçamento no WhatsApp</span>
        </div>
      </a>
    </aside>
  );
}
