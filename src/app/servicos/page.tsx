import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { servicesData } from "@/content/servicos";

export const metadata = {
  title: "Serviços",
  description:
    "Conheça os 7 serviços especializados de Leandro Santana Cerimonial: Cerimonial, Buffet completo, Decoração, Espaço, Bar de drinks, Som/DJ e Foto/Filmagem.",
};

export default function ServicosPage() {
  return (
    <div className="w-full">
      {/* Banner da Página */}
      <PageBanner
        eyebrow="Excelência Operacional"
        title="Nossos Serviços"
        subtitle="Uma estrutura integrada de alta gastronomia, assessoria, cenografia e entretenimento para criar celebrações perfeitas em Salvador."
        imageSrc="/images/hero/hero-main.jpg"
      />

      {/* Índice Rápido Editorial */}
      <nav aria-label="Índice dos serviços" className="bg-espresso-dark py-6 border-b border-gold/15 sticky top-[68px] z-30 backdrop-blur-md bg-espresso-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none text-xs uppercase tracking-widest text-ivory/70">
            <span className="text-gold font-serif text-sm font-medium pr-2 border-r border-gold/30 flex-shrink-0">
              Índice 01–07:
            </span>
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-gold transition-colors flex-shrink-0 whitespace-nowrap focus-visible:outline-1 focus-visible:outline-gold"
              >
                <span className="text-gold/60 mr-1">{s.number}</span> {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Lista Editorial dos 7 Serviços com Layout Alternado */}
      <section className="py-20 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 md:space-y-40">
          {servicesData.map((servico, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={servico.id}
                id={servico.id}
                className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Imagem (alternando esquerda/direita) */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative border border-gold/30 p-2 sm:p-3 bg-espresso/50 shadow-2xl">
                    <Photo
                      id={servico.imageId}
                      aspectRatio="4:3"
                      className="w-full"
                      imageClassName="hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />

                    {/* Badge com Numeração Editorial */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gold text-ink font-serif text-2xl font-bold flex items-center justify-center shadow-lg">
                      {servico.number}
                    </div>
                  </div>
                </div>

                {/* Conteúdo Descritivo */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">
                      Serviço {servico.number} de 07
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
                      {servico.title}
                    </h2>
                    <p className="font-serif text-lg text-gold/90 italic pt-1">
                      "{servico.tagline}"
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-ivory/75 font-sans font-light leading-relaxed">
                    {servico.description}
                  </p>

                  {/* Highlights / Itens Inclusos */}
                  <div className="pt-2 border-t border-gold/15 space-y-2.5">
                    <span className="text-xs uppercase tracking-wider text-gold/80 block font-medium">
                      Principais entregas:
                    </span>
                    <ul className="space-y-2 text-sm text-ivory/80 font-sans">
                      {servico.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <span className="text-gold font-serif mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      href="/orcamentos"
                      variant="outline"
                      size="sm"
                      className="border-gold/40 text-gold hover:bg-gold hover:text-ink"
                    >
                      Incluir no meu orçamento
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Um Único CTA de Orçamento ao Final da Página (Seção 11) */}
      <CTA
        title="Quer integrar nossos serviços para o seu evento?"
        subtitle="Monte seu pacote completo de cerimonial, buffet, decoração e produção com vantagens exclusivas."
        buttonLabel="Solicitar orçamento integrado"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
