import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Gallery } from "@/components/Gallery";
import { Testimonial } from "@/components/Testimonial";
import { MiniFAQ } from "@/components/MiniFAQ";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { eventCategories } from "@/content/eventos";
import { servicesData } from "@/content/servicos";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Cerimonial e Eventos em Salvador | Leandro Santana",
  description:
    "Cerimonial, buffet e decoração de eventos em Salvador. Casamentos, 15 anos e celebrações com planejamento completo e atendimento dedicado.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cerimonial e Eventos em Salvador | Leandro Santana",
    description:
      "Cerimonial, buffet e decoração de eventos em Salvador. Casamentos, 15 anos e celebrações com planejamento completo e atendimento dedicado.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO EM TELA CHEIA */}
      <Hero
        title="Planejamos e produzimos o seu evento com atenção e método"
        subtitle="Cerimonial, buffet, decoração e assessoria completa em Salvador e Litoral Norte."
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
            <div className="lg:col-span-6 relative reveal">
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
            <div className="lg:col-span-6 space-y-6 lg:pl-6 reveal">
              <SectionHeading
                number="01"
                eyebrow="Origem e Presença"
                title="A segurança de uma condução"
                highlight="atenta e próxima"
                className="mb-4"
              />

              <div className="space-y-4 text-ivory/80 font-sans font-light leading-relaxed text-base sm:text-lg">
                <p>
                  A <strong className="text-ivory font-normal">Leandro Santana Cerimonial</strong> nasce da prática contínua de coordenar celebrações onde o cumprimento rigoroso dos horários caminha lado a lado com o carinho no acolhimento aos seus convidados.
                </p>
                <p>
                  Com sólida experiência construída à frente de grandes celebrações na Bahia, Leandro Santana consolidou um padrão reconhecido de entrega: acompanhamento direto com os clientes, alinhamento técnico com fornecedores e tranquilidade para sua família durante todo o evento.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button href="/quem-somos" variant="outline" size="md">
                  Conheça nossa trajetória
                </Button>
                <Link
                  href="/contato"
                  className="text-xs uppercase tracking-widest text-gold hover:text-ivory inline-flex items-center gap-2 group transition-colors font-sans py-2"
                >
                  <span>Falar diretamente conosco</span>
                  <span className="group-hover:translate-x-[6px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVENTOS (CARDS EDITORIAIS EM GRID 3 COLUNAS) */}
      <section className="py-24 md:py-32 bg-espresso relative border-t border-gold/20 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              number="02"
              eyebrow="Tipos de Celebração"
              title="Momentos desenhados para"
              highlight="a sua história"
              subtitle="Projetos sob medida para cada ocasião, unindo planejamento detalhado, cardápios bem executados e ambientação envolvente."
              className="mb-0"
            />

            <Button href="/eventos" variant="gold" size="md" className="self-start md:self-end">
              Ver todos os eventos
            </Button>
          </div>

          {/* Grid de Cards de Eventos com reveal-stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal-stagger">
            {eventCategories.map((evento, idx) => (
              <EventCard
                key={evento.slug}
                slug={evento.slug}
                title={evento.title}
                description={evento.shortDescription}
                imageId={evento.heroImageId}
                number={`0${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS (6 CARDS PRINCIPAIS) */}
      <section className="py-24 md:py-32 bg-ink relative border-t border-gold/20 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              number="03"
              eyebrow="Soluções Integradas"
              title="Estrutura completa em"
              highlight="cada etapa"
              subtitle="Cuidamos de todas as etapas para que você viva sua celebração com total tranquilidade."
              className="mb-0"
            />

            <Button href="/servicos" variant="outline" size="md" className="self-start md:self-end">
              Conhecer todos os serviços
            </Button>
          </div>

          {/* Grid Editorial de Serviços com reveal-stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal-stagger">
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

      {/* 5. GALERIA RESUMIDA (MOSAICO EDITORIAL + INSTAGRAM BUTTON) */}
      <section className="py-24 md:py-32 bg-espresso-dark relative border-t border-gold/20 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              number="04"
              eyebrow="Nossos Registros"
              title="Momentos que falam por"
              highlight="si mesmos"
              subtitle="Fotografias reais que documentam emoções sinceras em festas de 15 anos, casamentos e solenidades na Bahia."
              className="mb-0"
            />

            <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-gold/40 hover:border-gold bg-espresso/60 text-ivory hover:text-gold text-xs uppercase tracking-widest transition-colors font-sans"
              >
                <span>Instagram {siteConfig.social.instagramUser}</span>
                <span>↗</span>
              </a>

              <Button href="/galeria" variant="gold" size="md">
                Ver galeria completa
              </Button>
            </div>
          </div>

          {/* Exibe 6 itens na Home com proporções variadas */}
          <Gallery showFilters={false} limit={6} />
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <Testimonial />

      {/* 7. MINI-FAQ ANTES DO CTA FINAL */}
      <MiniFAQ />

      {/* 8. CTA FINAL */}
      <CTA
        title="Vamos planejar o seu evento em Salvador?"
        subtitle="Converse com nossa equipe e receba um planejamento personalizado para a sua data."
        buttonLabel="Solicitar orçamento"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
