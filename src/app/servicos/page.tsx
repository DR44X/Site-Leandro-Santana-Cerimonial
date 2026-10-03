import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/Button";
import { MiniFAQ } from "@/components/MiniFAQ";
import { CTA } from "@/components/CTA";
import { servicesData } from "@/content/servicos";

export const metadata = {
  title: "Serviços para Eventos em Salvador | Leandro Santana",
  description:
    "Conheça os serviços de Leandro Santana em Salvador: cerimonial, buffet, decoração, bar, música, espaço e cobertura fotográfica.",
  alternates: {
    canonical: "/servicos/",
  },
  openGraph: {
    title: "Serviços para Eventos em Salvador | Leandro Santana",
    description:
      "Conheça os serviços de Leandro Santana em Salvador: cerimonial, buffet, decoração, bar, música, espaço e cobertura fotográfica.",
    url: "/servicos/",
  },
};

export default function ServicosPage() {
  return (
    <div className="w-full">
      {/* Banner da Página */}
      <PageBanner
        eyebrow="Soluções Completas em Salvador"
        title="Nossos Serviços"
        subtitle="Uma estrutura integrada de cerimonial, gastronomia, cenografia e música para realizar o seu evento em Salvador e região."
        imageSrc="/images/hero/hero-main.webp"
        imageAlt="Salão decorado com mesa de banquete e iluminação cênica"
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
                  className={`lg:col-span-6 relative reveal ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="border border-gold/30 p-2 sm:p-3 bg-espresso/30 relative">
                    <Photo
                      id={servico.imageId}
                      aspectRatio="4:3"
                      className="w-full shadow-2xl"
                      imageClassName="hover:scale-105 transition-transform duration-700 ease-luxury"
                      sizes="(max-width: 1024px) 100vw, 550px"
                    />
                  </div>
                </div>

                {/* Texto e Detalhes */}
                <div
                  className={`lg:col-span-6 space-y-6 reveal ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <SectionHeading
                    number={servico.number}
                    eyebrow={servico.tagline}
                    title={servico.title}
                    className="mb-2"
                  />

                  <p className="text-base sm:text-lg text-ivory/80 font-sans font-light leading-relaxed">
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

      {/* Mini-FAQ */}
      <MiniFAQ />

      {/* Um Único CTA de Orçamento ao Final da Página */}
      <CTA
        title="Quer integrar nossos serviços para o seu evento?"
        subtitle="Monte seu pacote de cerimonial, buffet, decoração e produção com atendimento dedicado para a sua data."
        buttonLabel="Solicitar orçamento integrado"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
