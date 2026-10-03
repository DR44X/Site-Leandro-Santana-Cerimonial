"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultMiniFAQItems: FAQItem[] = [
  {
    question: "Qual é o prazo ideal de antecedência para contratar o cerimonial?",
    answer:
      "Para casamentos e formaturas, o ideal é iniciar o planejamento com 6 a 12 meses de antecedência. Para festas de 15 anos, aniversários e eventos corporativos, de 2 a 4 meses costumam ser suficientes. Iniciar com antecedência garante a reserva da sua data preferida e condições de pagamento mais confortáveis.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis para o evento?",
    answer:
      "Oferecemos parcelamento mensal via Pix ou boleto bancário quitado até a data da sua celebração, além da possibilidade de parcelamento no cartão de crédito. Montamos um cronograma financeiro alinhado ao seu planejamento.",
  },
  {
    question: "Quais regiões de Salvador e Bahia vocês atendem?",
    answer:
      "Atendemos toda a cidade de Salvador, Lauro de Freitas, Camaçari, Litoral Norte (Guarajuba, Praia do Forte, Imbassaí) e demais municípios da Região Metropolitana da Bahia.",
  },
  {
    question: "O que está incluso no serviço de cerimonial e assessoria?",
    answer:
      "O serviço inclui o alinhamento com fornecedores, montagem do cronograma minucioso, acompanhamento do ensaio, recepção e orientação de convidados, supervisão do buffet e coordenação de bastidores durante todo o evento até a entrega final.",
  },
];

interface MiniFAQProps {
  items?: FAQItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}

export function MiniFAQ({
  items = defaultMiniFAQItems,
  title = "Dúvidas Frequentes",
  eyebrow = "Transparência e Planejamento",
  className,
}: MiniFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={cn("py-16 md:py-24 bg-espresso-dark border-t border-gold/20 relative overflow-hidden bg-grain", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-gold" />
            <span className="text-[11px] uppercase tracking-widest text-gold font-sans font-medium">
              {eyebrow}
            </span>
            <span className="h-[1px] w-6 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
            {title}
          </h2>
          <p className="text-sm text-ivory/70 font-sans font-light mt-2">
            Respostas claras para você planejar sua comemoração com tranquilidade.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gold/20 bg-espresso/40 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-1 focus-visible:outline-gold"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-ivory font-normal leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center text-gold flex-shrink-0 transition-transform duration-300 text-sm",
                      isOpen ? "rotate-45 bg-gold/10" : ""
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-ivory/80 font-sans font-light leading-relaxed border-t border-gold/10">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
