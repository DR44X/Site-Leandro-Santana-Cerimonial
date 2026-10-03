import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { eventCategories, getEventBySlug } from "@/content/eventos";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { MiniFAQ } from "@/components/MiniFAQ";
import { getImage } from "@/content/images";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return eventCategories.map((evento) => ({
    slug: evento.slug,
  }));
}

export async function generateMetadata({ params }: EventDetailPageProps) {
  const resolvedParams = await params;
  const evento = getEventBySlug(resolvedParams.slug);

  if (!evento) {
    return {
      title: "Evento não encontrado | Leandro Santana",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.leandrosantanacerimonial.com.br";
  const pageUrl = `${siteUrl}/eventos/${evento.slug}/`;

  return {
    title: evento.pageTitle,
    description: evento.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: evento.pageTitle,
      description: evento.metaDescription,
      url: pageUrl,
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const resolvedParams = await params;
  const evento = getEventBySlug(resolvedParams.slug);

  if (!evento) {
    notFound();
  }

  const heroImage = getImage(evento.heroImageId);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.leandrosantanacerimonial.com.br";

  // FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: evento.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="w-full">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Banner Principal com Imagem e Título da Categoria */}
      <PageBanner
        eyebrow="Categoria de Evento em Salvador"
        title={evento.title}
        subtitle={evento.bannerSubtitle}
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
      />

      {/* Bloco 1: Texto Comercial e Apresentação Detalhada */}
      <section className="py-20 md:py-28 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto de Destaque com Moldura em Arco */}
            <div className="lg:col-span-5 relative">
              <div className="arch-frame border border-gold/40 shadow-2xl aspect-[3/4] max-w-[420px] mx-auto">
                <Photo
                  id={evento.heroImageId}
                  fill
                  className="w-full h-full"
                  imageClassName="scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
            </div>

            {/* Texto Comercial */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                number="01"
                eyebrow="Planejamento e Condução"
                title="Como organizamos o seu"
                highlight={evento.title}
                className="mb-4"
              />

              <div className="space-y-4 text-ivory/80 font-sans font-light leading-relaxed text-base sm:text-lg">
                {evento.commercialText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  href={`/orcamentos?evento=${evento.slug}`}
                  variant="gold"
                  size="md"
                >
                  {evento.ctaLabel}
                </Button>

                <Button href="/eventos" variant="secondary" size="md">
                  Ver todas as categorias
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2: Lista de Tópicos e Escopo */}
      {evento.topics && evento.topics.length > 0 && (
        <section className="py-20 md:py-28 bg-espresso border-t border-gold/20 relative overflow-hidden bg-grain">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <SectionHeading
                number="02"
                eyebrow="Escopo do Serviço"
                title="O que cuidamos para você"
                subtitle="Etapas organizadas para que você aproveite sua comemoração sem imprevistos."
                className="mb-0"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {evento.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-espresso-dark/70 border border-gold/20 hover:border-gold/50 transition-all flex items-start gap-4"
                >
                  <span className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-xs font-serif text-gold flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-sm text-ivory/85 font-sans leading-relaxed pt-1">
                    {topic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bloco 3: Galeria da Categoria (se houver) */}
      {evento.hasGallery && evento.galleryImageIds && (
        <section className="py-20 md:py-28 bg-ink border-t border-gold/20 relative overflow-hidden bg-grain">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              number={evento.topics ? "03" : "02"}
              eyebrow="Registros da Categoria"
              title="Fotografias e Inspirações"
              subtitle={`Veja registros reais criados para eventos de ${evento.title.toLowerCase()} em Salvador.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {evento.galleryImageIds.map((imgId, idx) => {
                const imgData = getImage(imgId);
                return (
                  <div
                    key={idx}
                    className="border border-gold/20 hover:border-gold/60 transition-all duration-300 aspect-[3/4] relative overflow-hidden group bg-espresso"
                  >
                    <Photo
                      id={imgId}
                      fill
                      className="w-full h-full"
                      imageClassName="group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                      <p className="text-xs text-ivory/90 font-sans">{imgData.alt}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bloco 4: Serviços Relacionados */}
      {evento.relatedServices && evento.relatedServices.length > 0 && (
        <section className="py-20 md:py-28 bg-espresso-dark border-t border-gold/20 relative overflow-hidden bg-grain">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              number={evento.hasGallery ? "04" : "03"}
              eyebrow="Estrutura Integrada"
              title="Serviços Relacionados"
              subtitle="Soluções que você pode combinar em um único planejamento contratual."
            />

            <div className="flex flex-wrap gap-3">
              {evento.relatedServices.map((servico, idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 border border-gold/30 bg-espresso/60 text-ivory text-xs uppercase tracking-widest font-sans flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{servico}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link
                href="/servicos"
                className="text-xs uppercase tracking-widest text-gold hover:text-ivory inline-flex items-center gap-2 group transition-colors"
              >
                <span>Conhecer todos os serviços detalhados</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Bloco 5: Mini-FAQ da Categoria de Evento */}
      <MiniFAQ
        items={evento.faqs}
        title={`Dúvidas sobre ${evento.title}`}
        eyebrow="Perguntas Frequentes"
      />

      {/* Bloco 6: CTA Final com Redirecionamento com Query Slug */}
      <CTA
        title={`Vamos planejar o seu evento de ${evento.title.toLowerCase()}?`}
        subtitle="Entre em contato para receber uma proposta alinhada ao número de convidados e local da sua data."
        buttonLabel={evento.ctaLabel}
        buttonHref={`/orcamentos?evento=${evento.slug}`}
      />
    </div>
  );
}
