import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";
import { MiniFAQ } from "@/components/MiniFAQ";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Fotos de Eventos em Salvador | Leandro Santana Cerimonial",
  description:
    "Veja fotos reais de casamentos, 15 anos e eventos em Salvador produzidos por Leandro Santana. Decorações, mesas de bolo e celebrações.",
  alternates: {
    canonical: "/galeria/",
  },
  openGraph: {
    title: "Fotos de Eventos em Salvador | Leandro Santana Cerimonial",
    description:
      "Veja fotos reais de casamentos, 15 anos e eventos em Salvador produzidos por Leandro Santana. Decorações, mesas de bolo e celebrações.",
    url: "/galeria/",
  },
};

export default function GaleriaPage() {
  return (
    <div className="w-full">
      {/* Banner Principal */}
      <PageBanner
        eyebrow="Portfólio & Registros"
        title="Nossa Galeria"
        subtitle="Registros fotográficos reais de celebrações produzidas por Leandro Santana em Salvador e Litoral Norte."
        imageSrc="/images/hero/hero-main.webp"
        imageAlt="Mesa de bolo e lustres de cristal em evento de Salvador"
      />

      {/* Seção Principal da Galeria */}
      <section className="py-20 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery showFilters={true} />

          {/* Botão Seguir no Instagram */}
          <div className="mt-16 text-center">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-gold/50 bg-espresso/70 hover:bg-espresso text-ivory hover:text-gold text-xs uppercase tracking-widest transition-all duration-500 ease-luxury shadow-xl group hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current text-gold" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Seguir no Instagram {siteConfig.social.instagramUser}</span>
              <span className="group-hover:translate-x-[6px] transition-transform duration-500 ease-luxury">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mini-FAQ */}
      <MiniFAQ />

      {/* CTA Final */}
      <CTA
        title="Quer planejar seu evento com a nossa equipe?"
        subtitle="Entre em contato e receba uma proposta completa para o seu casamento, 15 anos ou festa corporativa."
        buttonLabel="Solicitar orçamento"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
