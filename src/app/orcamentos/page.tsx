import React, { Suspense } from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Solicite seu Orçamento",
  description:
    "Solicite um orçamento personalizado para o seu evento em Salvador com Leandro Santana Cerimonial. Cerimonial, buffet, decoração e produção completa.",
};

export default function OrcamentosPage() {
  return (
    <div className="w-full">
      {/* Banner da Página de Orçamento */}
      <PageBanner
        eyebrow="Planejamento Personalizado"
        title="Solicite seu Orçamento"
        subtitle="Preencha os detalhes da sua celebração e receba um atendimento ágil e dedicado da nossa equipe especializada."
        imageSrc="/images/hero/hero-secondary.webp"
      />

      {/* Seção Principal do Formulário */}
      <section className="py-20 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Coluna Esquerda: Informações e Vantagens */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                number="01"
                eyebrow="Atendimento Exclusivo"
                title="Como funciona a nossa"
                highlight="proposta"
                className="mb-4"
              />

              <div className="space-y-6 text-ivory/80 font-sans font-light leading-relaxed">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-gold/20 text-gold flex items-center justify-center font-serif text-sm flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-ivory">Diagnóstico do Evento</h4>
                    <p className="text-xs sm:text-sm text-ivory/70 mt-1">
                      Analisamos o formato, quantidade de convidados, expectativas e estilo desejado para a ocasião.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-gold/20 text-gold flex items-center justify-center font-serif text-sm flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-ivory">Pacote Sob Medida</h4>
                    <p className="text-xs sm:text-sm text-ivory/70 mt-1">
                      Estruturamos os serviços integrados (cerimonial, buffet, cenografia, som e foto) para otimizar seu investimento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-gold/20 text-gold flex items-center justify-center font-serif text-sm flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-ivory">Retorno no WhatsApp</h4>
                    <p className="text-xs sm:text-sm text-ivory/70 mt-1">
                      Nossa equipe comercial entra em contato diretamente com você pelo WhatsApp para alinhar detalhes e agendar degustação.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box de Contato Direto */}
              <div className="p-6 bg-espresso/50 border border-gold/20 space-y-3">
                <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">
                  Prefere falar agora mesmo?
                </span>
                <p className="text-xs text-ivory/75 leading-relaxed">
                  Você também pode iniciar uma conversa direta pelo nosso canal oficial de atendimento:
                </p>
                <a
                  href={siteConfig.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ivory font-medium pt-1"
                >
                  <span>Chamar no WhatsApp: {siteConfig.phone.display}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Coluna Direita: Formulário de Orçamento Completo */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-ivory/50 bg-espresso">
                    Carregando formulário de orçamento...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
