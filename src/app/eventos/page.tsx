import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { CTA } from "@/components/CTA";
import { eventCategories } from "@/content/eventos";

export const metadata = {
  title: "Eventos",
  description:
    "Explore os formatos de celebrações produzidos por Leandro Santana Cerimonial em Salvador: Casamentos, 15 Anos, Formaturas, Corporativos e mais.",
};

export default function EventosPage() {
  return (
    <div className="w-full">
      {/* Banner Principal de Eventos */}
      <PageBanner
        eyebrow="Celebrações Exclusivas"
        title="Nossos Eventos"
        subtitle="Cada ocasião possui um ritmo, uma emoção e uma identidade única. Conheça as categorias que transformamos em momentos inesquecíveis."
        imageSrc="/images/hero/hero-secondary.webp"
      />

      {/* Grid com as 6 Categorias */}
      <section className="py-24 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            eyebrow="Escolha a sua comemoração"
            title="Formatos pensados para"
            highlight="surpreender"
            subtitle="Clique na categoria desejada para conferir a proposta, detalhes de produção e galeria de registros."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Final */}
      <CTA
        title="Deseja realizar um evento sob medida?"
        subtitle="Nossa equipe está pronta para desenhar um projeto exclusivo para a sua data."
        buttonLabel="Solicitar orçamento"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
