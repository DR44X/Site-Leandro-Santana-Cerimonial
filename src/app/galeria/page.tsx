import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Galeria de Fotos",
  description:
    "Confira registros reais de casamentos, 15 anos, formaturas, decoração e buffet de Leandro Santana Cerimonial em Salvador.",
};

export default function GaleriaPage() {
  return (
    <div className="w-full">
      {/* Banner Principal */}
      <PageBanner
        eyebrow="Portfólio & Memórias"
        title="Nossa Galeria"
        subtitle="Uma imersão visual nos momentos inesquecíveis, cenografias suntuosas e detalhes que encantam os convidados."
        imageSrc="/images/hero/hero-main.jpg"
      />

      {/* Seção Principal da Galeria */}
      <section className="py-20 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery showFilters={true} />
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="Quer que o seu evento seja a nossa próxima história?"
        subtitle="Entre em contato e descubra como transformamos cada instante em fotografia de revista."
        buttonLabel="Solicitar orçamento"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
