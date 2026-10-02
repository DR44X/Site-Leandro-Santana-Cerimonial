import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Gallery } from "@/components/Gallery";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { eventCategories } from "@/content/eventos";
import { servicesData } from "@/content/servicos";

export const metadata = {
  title: "Leandro Santana Cerimonial | Salvador / BA — Eventos de Alto Padrão",
  description:
    "Cerimonial, buffet, decoração e produção completa para casamentos, 15 anos, formaturas e eventos corporativos em Salvador e região.",
};

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO EM TELA CHEIA */}
      <Hero
        title="Transformamos eventos em experiências inesquecíveis"
        subtitle="Cerimonial, buffet, decoração e produção completa para momentos únicos."
        primaryCtaLabel="Solicite seu orçamento"
        primaryCtaHref="/orcamentos"
        secondaryCtaLabel="Conheça nossos eventos"
        secondaryCtaHref="/eventos"
      />

      {/* 2. QUEM SOMOS (RESUMO EDITORIAL) */}
      <section className="py-24 md:py-32 lg:py-40 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Composição Fotográfica: Moldura em Arco + Foto Menor Sobreposta */}
            <div className="lg:col-span-6 relative">
              {/* Foto Principal em Arco (Assinatura Visual) */}
              <div className="arch-frame border border-gold/30 relative aspect-[3/4] max-w-[420px] shadow-2xl">
                <Photo
                  id="leandro-santana"
                  fill
                  className="w-full h-full"
                  imageClassName="scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>

              {/* Segunda Foto Menor Sobreposta e Deslocada */}
              <div className="hidden sm:block absolute -bottom-10 -right-4 sm:-right-8 w-56 aspect-[4/3] border-2 border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 bg-espresso">
                <Photo
                  id="bastidores-evento"
                  fill
                  className="w-full h-full"
                  imageClassName="hover:scale-105 transition-transform duration-500"
                  sizes="240px"
                />
              </div>

              {/* Selo Decorativo Editorial */}
              <div className="absolute top-8 -left-4 sm:-left-6 w-24 h-24 rounded-full border border-gold/40 bg-espresso/90 backdrop-blur-md flex flex-col items-center justify-center p-2 text-center shadow-lg z-20">
                <span className="font-serif text-[10px] tracking-widest uppercase text-gold">Salvador</span>
                <span className="font-serif text-sm text-ivory font-medium">Bahia</span>
              </div>
            </div>

            {/* Texto em Coluna Estreita com Título que Invade */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <SectionHeading
                number="01"
                eyebrow="Nossa Assinatura"
                title="A arte de celebrar com"
                highlight="alma e distinção"
                className="mb-6"
              />

              <div className="space-y-5 text-ivory/75 font-sans font-light leading-relaxed text-base sm:text-lg">
                <p>
                  A <strong className="text-ivory font-normal">Leandro Santana Cerimonial</strong> nasce da paixão genuína por orquestrar celebrações onde a técnica impecável e o afeto se encontram.
                </p>
                <p>
                  Com a sólida trajetória construída na <strong className="text-gold font-normal">DeCasa</strong> como alicerce, inauguramos uma fase marcada por um atendimento ainda mais exclusivo e autoral, cuidando pessoalmente da assessoria, gastronomia, cenografia e produção de cada detalhe.
                </p>
                <p className="text-sm text-gold/80 italic font-serif pt-1">
                  &ldquo;Não produzimos apenas eventos. Criamos memórias sensoriais que permanecem para sempre na memória dos seus convidados.&rdquo;
                </p>
              </div>

              <div className="pt-6 flex items-center gap-6">
                <Button href="/quem-somos" variant="outline" size="md">
                  Saiba mais sobre nós
                </Button>

                <Link
                  href="/orcamentos"
                  className="text-xs uppercase tracking-widest text-gold hover:text-ivory inline-flex items-center gap-2 group transition-colors py-2"
                >
                  <span>Pedir proposta</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O QUE FAZEMOS (6 TIPOS DE EVENTO EM GRID ASSIMÉTRICO) */}
      <section className="py-24 md:py-32 bg-espresso-dark relative border-t border-gold/20 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              number="02"
              eyebrow="Celebrações Autorais"
              title="O que fazemos para o seu"
              highlight="grande momento"
              subtitle="Projetos sob medida para cada ocasião, unindo planejamento detalhado, gastronomia de excelência e ambientação envolvente."
              className="mb-0"
            />

            <Button href="/eventos" variant="secondary" size="md" className="self-start md:self-end">
              Ver todos os eventos
            </Button>
          </div>

          {/* Grid Assimétrico: 2 cards grandes e 4 menores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {eventCategories.map((evento, idx) => {
              // 2 primeiros cards têm destaque em escala
              const isLarge = idx === 0 || idx === 1;

              return (
                <EventCard
                  key={evento.slug}
                  slug={evento.slug}
                  title={evento.title}
                  description={evento.shortDescription}
                  imageId={evento.heroImageId}
                  number={`0${idx + 1}`}
                  variant={isLarge ? "large" : "standard"}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS EM DESTAQUE (CARDS ALTOS COM PROPORÇÃO 3:4 E UM MAIS LARGO) */}
      <section className="py-24 md:py-32 bg-ink relative border-t border-gold/20 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              number="03"
              eyebrow="Soluções Integradas"
              title="Estrutura completa em"
              highlight="cada etapa"
              subtitle="Cuidamos de todas as frentes para que você viva sua celebração com total tranquilidade e requinte."
              className="mb-0"
            />

            <Button href="/servicos" variant="outline" size="md" className="self-start md:self-end">
              Conhecer todos os serviços
            </Button>
          </div>

          {/* Grid Editorial de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((servico) => (
              <ServiceCard
                key={servico.id}
                id={servico.id}
                number={servico.number}
                title={servico.title}
                tagline={servico.tagline}
                description={servico.description}
                imageId={servico.imageId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALERIA RESUMIDA (MOSAICO EDITORIAL + VER GALERIA COMPLETA) */}
      <section className="py-24 md:py-32 bg-espresso-dark relative border-t border-gold/20 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              number="04"
              eyebrow="Nossos Registros"
              title="Momentos que falam por"
              highlight="si mesmos"
              subtitle="Fotografia autêntica que eterniza emoções reais em festas de 15 anos, casamentos e grandes solenidades."
              className="mb-0"
            />

            <Button href="/galeria" variant="gold" size="md" className="self-start md:self-end">
              Ver galeria completa
            </Button>
          </div>

          {/* Exibe 6 itens na Home com proporções variadas */}
          <Gallery showFilters={false} limit={6} />
        </div>
      </section>

      {/* 6. DEPOIMENTOS (FUNDO ESPRESSO, CITAÇÃO GRANDE EM SERIFADA, SEM FAKES) */}
      <Testimonial />

      {/* 7. CTA FINAL IMPACTANTE */}
      <CTA
        title="Vamos criar juntos um momento inesquecível?"
        subtitle="Converse com nossa equipe e receba um planejamento personalizado para o seu evento."
        buttonLabel="Solicitar orçamento"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
