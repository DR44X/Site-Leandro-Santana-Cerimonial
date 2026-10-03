import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { MiniFAQ } from "@/components/MiniFAQ";
import { CTA } from "@/components/CTA";
import { eventCategories } from "@/content/eventos";

export const metadata = {
  title: "Produção de Eventos em Salvador | Leandro Santana",
  description:
    "Projetos completos de eventos em Salvador: casamentos, 15 anos, formaturas e corporativos. Veja como organizamos a sua data especial.",
  alternates: {
    canonical: "/eventos/",
  },
  openGraph: {
    title: "Produção de Eventos em Salvador | Leandro Santana",
    description:
      "Projetos completos de eventos em Salvador: casamentos, 15 anos, formaturas e corporativos. Veja como organizamos a sua data especial.",
    url: "/eventos/",
  },
};

export default function EventosPage() {
  return (
    <div className="w-full">
      {/* Banner Principal de Eventos */}
      <PageBanner
        eyebrow="Planejamento em Salvador"
        title="Nossos Eventos"
        subtitle="Cada ocasião possui um ritmo e uma história única. Conheça as categorias que produzimos com cuidado em cada etapa."
        imageSrc="/images/hero/hero-secondary.webp"
        imageAlt="Brinde de celebração com equipe e clientes"
      />

      {/* Grid com as 6 Categorias */}
      <section className="py-24 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            eyebrow="Escolha a sua comemoração"
            title="Formatos pensados para"
            highlight="a sua data"
            subtitle="Clique na categoria desejada para conferir o escopo de produção, perguntas frequentes e registros fotográficos."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {eventCategories.map((evento, idx) => (
              <EventCard
                key={evento.slug}
                slug={evento.slug}
                title={evento.title}
                description={evento.shortDescription}
                imageId={evento.heroImageId}
                number={String(idx + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mini-FAQ */}
      <MiniFAQ />

      {/* CTA Final */}
      <CTA
        title="Deseja realizar um evento sob medida?"
        subtitle="Nossa equipe está pronta para desenhar um planejamento exclusivo para a sua data."
        buttonLabel="Solicitar orçamento"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
