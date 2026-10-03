import React from "react";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contato e Localização em Salvador | Leandro Santana",
  description:
    "Fale com Leandro Santana Cerimonial em Salvador. WhatsApp comercial, e-mail, telefone e endereço no bairro Luiz Anselmo.",
  alternates: {
    canonical: "/contato/",
  },
  openGraph: {
    title: "Contato e Localização em Salvador | Leandro Santana",
    description:
      "Fale com Leandro Santana Cerimonial em Salvador. WhatsApp comercial, e-mail, telefone e endereço no bairro Luiz Anselmo.",
    url: "/contato/",
  },
};

export default function ContatoPage() {
  const addressQuery = encodeURIComponent(
    "Rua Hélio de Oliveira, 215, Luiz Anselmo, Salvador - BA, 40261-060"
  );
  const mapEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <div className="w-full">
      {/* Banner Principal de Contato */}
      <PageBanner
        eyebrow="Atendimento em Salvador"
        title="Fale Conosco"
        subtitle="Estamos à disposição para receber você, tirar dúvidas e iniciar o planejamento da sua celebração com total atenção."
        imageSrc="/images/hero/hero-main.webp"
        imageAlt="Salão decorado para recepção em Salvador"
      />

      {/* Conteúdo Principal: 4 Cards em Grid Reorganizado */}
      <section className="py-20 md:py-28 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título Centralizado no Topo */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionHeading
              number="01"
              eyebrow="Atendimento Personalizado"
              title="Canais de"
              highlight="relacionamento"
              className="justify-center items-center text-center"
            />
            <p className="text-sm sm:text-base text-ivory/70 font-sans font-light mt-3">
              Escolha o canal mais prático para você. Respondemos com agilidade para conversar sobre a sua data.
            </p>
          </div>

          {/* Grid de 2 colunas no Desktop e 1 no Mobile com revelação escalonada */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
            {/* Card 1: WhatsApp Comercial */}
            <div className="p-7 bg-espresso/50 border border-gold/20 hover:border-gold hover:-translate-y-1 hover:shadow-2xl transition-all duration-600 ease-luxury flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                  WhatsApp Comercial
                </span>
                <a
                  href={siteConfig.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl text-ivory hover:text-gold transition-colors inline-block"
                >
                  {siteConfig.phone.display}
                </a>
                <p className="text-xs text-ivory/70 pt-1">
                  Atendimento direto com Leandro Santana e equipe para alinhamento rápido de propostas.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ivory transition-colors font-medium group"
                >
                  <span>Iniciar conversa no WhatsApp</span>
                  <span className="group-hover:translate-x-[6px] transition-transform duration-500 ease-luxury">↗</span>
                </a>
              </div>
            </div>

            {/* Card 2: E-mail Institucional */}
            <div className="p-7 bg-espresso/50 border border-gold/20 hover:border-gold hover:-translate-y-1 hover:shadow-2xl transition-all duration-600 ease-luxury flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                  E-mail Institucional
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-serif text-lg text-ivory hover:text-gold transition-colors break-all inline-block"
                >
                  {siteConfig.email}
                </a>
                <p className="text-xs text-ivory/70 pt-1">
                  Ideal para envio de briefings corporativos, parcerias e propostas formais.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ivory transition-colors font-medium group"
                >
                  <span>Enviar mensagem por e-mail</span>
                  <span className="group-hover:translate-x-[6px] transition-transform duration-500 ease-luxury">↗</span>
                </a>
              </div>
            </div>

            {/* Card 3: Endereço & Registro com link Google Maps */}
            <div className="p-7 bg-espresso/50 border border-gold/20 hover:border-gold hover:-translate-y-1 hover:shadow-2xl transition-all duration-600 ease-luxury flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                  Endereço & Registro
                </span>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory/90 leading-relaxed hover:text-gold transition-colors block"
                >
                  {siteConfig.address.full}
                </a>
                <p className="text-xs text-ivory/70 pt-2 border-t border-gold/15">
                  CNPJ: {siteConfig.cnpj}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ivory transition-colors font-medium group"
                >
                  <span>Abrir rota no Google Maps</span>
                  <span className="group-hover:translate-x-[6px] transition-transform duration-500 ease-luxury">↗</span>
                </a>
              </div>
            </div>

            {/* Card 4: Redes Sociais */}
            <div className="p-7 bg-espresso/50 border border-gold/20 hover:border-gold hover:-translate-y-1 hover:shadow-2xl transition-all duration-600 ease-luxury flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                  Redes Sociais
                </span>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl text-ivory hover:text-gold transition-colors inline-block"
                >
                  {siteConfig.social.instagramUser}
                </a>
                <p className="text-xs text-ivory/70 pt-1">
                  Acompanhe os bastidores, montagens de salão e registros das celebrações na Bahia.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ivory transition-colors font-medium group"
                >
                  <span>Seguir no Instagram</span>
                  <span className="group-hover:translate-x-[6px] transition-transform duration-500 ease-luxury">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Único abaixo dos cards */}
          <div className="mt-14 p-8 sm:p-10 bg-espresso-dark/90 border border-gold/30 text-center rounded-sm space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
              Planejamento Sob Medida
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
              Prefere um orçamento detalhado?
            </h3>
            <p className="text-sm text-ivory/75 max-w-xl mx-auto font-sans font-light">
              Conte-nos os detalhes do seu evento (tipo de festa, número estimado de convidados e data prevista) para receber uma proposta completa.
            </p>
            <div className="pt-3">
              <Link
                href="/orcamentos"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gold hover:bg-gold-light text-ink text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-xl"
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed sem API Key */}
      <section className="w-full bg-espresso-dark border-t border-gold/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">
                Localização em Salvador
              </span>
              <h3 className="font-serif text-2xl text-ivory font-normal">
                Visite nosso escritório de atendimento
              </h3>
            </div>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gold hover:text-ivory uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
            >
              <span>Abrir no Google Maps</span>
              <span>↗</span>
            </a>
          </div>

          <div className="w-full h-[400px] md:h-[480px] border border-gold/30 overflow-hidden shadow-2xl relative">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização de Leandro Santana Cerimonial em Salvador"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
