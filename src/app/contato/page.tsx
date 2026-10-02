import React, { Suspense } from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contato e Localização",
  description:
    "Entre em contato com Leandro Santana Cerimonial em Salvador/BA. Telefone, WhatsApp, e-mail, endereço e mapa de localização.",
};

export default function ContatoPage() {
  // Endereço codificado para embed gratuito do Google Maps sem API key
  const encodedAddress = encodeURIComponent(
    "Rua Hélio de Oliveira, 215, Luiz Anselmo, Salvador - BA, 40261-060"
  );
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full">
      {/* Banner Principal de Contato */}
      <PageBanner
        eyebrow="Canais Oficiais"
        title="Fale Conosco"
        subtitle="Estamos à disposição para receber você, tirar dúvidas e iniciar o planejamento da sua festa dos sonhos."
        imageSrc="/images/hero/hero-main.webp"
      />

      {/* Conteúdo Principal: Dados de Contato e Formulário */}
      <section className="py-20 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Informações Institucionais de Contato */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                number="01"
                eyebrow="Atendimento Personalizado"
                title="Canais de"
                highlight="relacionamento"
                className="mb-6"
              />

              <div className="space-y-6 text-sm text-ivory/80 font-sans">
                {/* Telefone / WhatsApp */}
                <div className="p-6 bg-espresso/50 border border-gold/20 space-y-2">
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
                  <p className="text-xs text-ivory/60 pt-1">
                    Atendimento de segunda a sábado com horário agendado.
                  </p>
                </div>

                {/* E-mail */}
                <div className="p-6 bg-espresso/50 border border-gold/20 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                    E-mail Institucional
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-serif text-lg text-ivory hover:text-gold transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-ivory/60 pt-1">
                    Envio de briefing formal e parcerias comerciais.
                  </p>
                </div>

                {/* Endereço & CNPJ */}
                <div className="p-6 bg-espresso/50 border border-gold/20 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                    Endereço & Registro
                  </span>
                  <p className="text-sm text-ivory/90 leading-relaxed">
                    {siteConfig.address.full}
                  </p>
                  <p className="text-xs text-ivory/70 pt-2 border-t border-gold/15">
                    CNPJ: {siteConfig.cnpj}
                  </p>
                </div>

                {/* Redes Sociais */}
                <div className="p-6 bg-espresso/50 border border-gold/20 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                    Redes Sociais
                  </span>
                  <div className="flex flex-col gap-2">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold hover:text-ivory uppercase tracking-widest flex items-center gap-2"
                    >
                      <span>Instagram {siteConfig.social.instagramUser}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de Contato / Orçamento */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">
                  Envie sua Mensagem
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal mt-1">
                  Como podemos ajudar você?
                </h3>
              </div>
              <Suspense fallback={<div className="p-10 text-center">Carregando...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed sem API Key (Seção 14) */}
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
            <p className="text-xs text-ivory/60 font-sans">
              Luiz Anselmo, Salvador — BA
            </p>
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
