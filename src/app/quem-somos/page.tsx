import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/Button";
import { MiniFAQ } from "@/components/MiniFAQ";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Quem Somos | Leandro Santana Cerimonial Salvador",
  description:
    "Conheça a trajetória de Leandro Santana na produção de eventos em Salvador. Condução segura, cuidado com as pessoas e presença em cada etapa.",
  alternates: {
    canonical: "/quem-somos/",
  },
  openGraph: {
    title: "Quem Somos | Leandro Santana Cerimonial Salvador",
    description:
      "Conheça a trajetória de Leandro Santana na produção de eventos em Salvador. Condução segura, cuidado com as pessoas e presença em cada etapa.",
    url: "/quem-somos/",
  },
};

const ESSENCIA_ITEMS = [
  {
    num: "01",
    title: "Emoção Genuína",
    desc: "Cada celebração é única. Trabalhamos para que você e seus convidados sintam a verdade e a beleza de cada instante.",
  },
  {
    num: "02",
    title: "Bom Gosto",
    desc: "Harmonizamos flores, iluminação e gastronomia com elegância equilibrada, valorizando o estilo dos anfitriões.",
  },
  {
    num: "03",
    title: "Organização Preventiva",
    desc: "Cronogramas minuciosos, gestão de imprevistos e processos claros para que nada seja deixado ao acaso.",
  },
  {
    num: "04",
    title: "Experiência Completa",
    desc: "Do primeiro café de planejamento até o encerramento da festa, oferecemos uma jornada fluida e acolhedora.",
  },
  {
    num: "05",
    title: "Atenção às Pessoas",
    desc: "O segredo de um evento bem realizado reside no respeito aos convidados e na dedicação calorosa aos anfitriões.",
  },
];

const ESTRUTURA_ITEMS = [
  {
    title: "Cerimonial & Assessoria Executiva",
    desc: "Roteiro minucioso, alinhamento técnico com fornecedores e coordenação atenta de bastidores.",
  },
  {
    title: "Buffet Próprio & Gastronomia Contemporânea",
    desc: "Cardápios equilibrados com ingredientes frescos, empratados elegantes e serviço volante sem interrupções.",
  },
  {
    title: "Decoração & Cenografia Autoral",
    desc: "Projetos personalizados que combinam arranjos florais naturais, mobiliário nobre e iluminação cênica.",
  },
  {
    title: "Espaço Parceiro & Parcerias Estruturadas",
    desc: "Conexão direta com os salões, casas de praia e sítios mais adequados ao perfil da sua comemoração na Bahia.",
  },
];

export default function QuemSomosPage() {
  return (
    <div className="w-full">
      {/* Banner Principal */}
      <PageBanner
        eyebrow="Origem e Propósito"
        title="Quem Somos"
        subtitle="Uma trajetória dedicada a transformar sonhos em celebrações organizadas com rigor técnico e calor humano em Salvador."
        imageSrc="/images/hero/hero-main.webp"
        imageAlt="Leandro Santana e equipe de cerimonial em celebração"
      />

      {/* História da Marca */}
      <section className="py-24 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Imagem com Moldura em Arco */}
            <div className="lg:col-span-5 relative reveal">
              <div className="arch-frame border border-gold/40 shadow-2xl aspect-[3/4] max-w-[420px] mx-auto">
                <Photo
                  id="leandro-santana"
                  fill
                  className="w-full h-full"
                  imageClassName="scale-100 hover:scale-105 transition-transform duration-700 ease-luxury"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="font-serif text-2xl text-ivory">Leandro Santana</h3>
                <p className="text-xs uppercase tracking-widest text-gold mt-1">
                  Fundador & Diretor Geral de Cerimonial
                </p>
              </div>
            </div>

            {/* Texto Histórico */}
            <div className="lg:col-span-7 space-y-6 reveal">
              <SectionHeading
                number="01"
                eyebrow="Origem e Propósito"
                title="Experiência consolidada em uma"
                highlight="fase autoral"
                className="mb-4"
              />

              <div className="space-y-5 text-ivory/80 font-sans font-light leading-relaxed text-base sm:text-lg">
                <p>
                  A trajetória de <strong className="text-ivory font-normal">Leandro Santana</strong> no mercado de eventos baiano foi construída sobre os pilares da seriedade, da sensibilidade humana e do rigor técnico nos prazos.
                </p>
                <p>
                  Tendo a reconhecida história da <strong className="text-gold font-normal">DeCasa</strong> como base sólida de aprendizado, realização de grandes sonhos e relacionamento com clientes exigentes, Leandro Santana consolidou um padrão confiável de entrega.
                </p>
                <p>
                  Hoje, em sua fase de marca própria, a <strong className="text-ivory font-normal">Leandro Santana Cerimonial</strong> expressa a síntese dessa vivência: um atendimento estritamente personalizado, onde você dialoga diretamente com quem planeja e executa sua comemoração.
                </p>
                <p className="text-sm text-gold/90 italic font-serif pt-2 border-l-2 border-gold/40 pl-4">
                  &ldquo;Nosso compromisso é permitir que você aproveite cada instante como o convidado de honra da sua própria história, enquanto nós cuidamos de cada compasso nos bastidores.&rdquo;
                </p>
              </div>

              <div className="pt-4">
                <Button href="/orcamentos" variant="gold" size="md">
                  Conversar com Leandro Santana
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Essência */}
      <section className="py-24 md:py-32 bg-espresso border-t border-gold/20 relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="02"
            eyebrow="Pilares Inegociáveis"
            title="Nossa Essência"
            subtitle="Valores fundamentais que orientam cada decisão estética, operacional e humana da nossa equipe."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {ESSENCIA_ITEMS.map((item) => (
              <div
                key={item.num}
                className="p-8 bg-espresso-dark/60 border border-gold/20 hover:border-gold hover:-translate-y-1 hover:shadow-2xl transition-all duration-600 ease-luxury relative group"
              >
                <span className="font-serif text-gold text-2xl font-light tracking-widest block mb-4">
                  {item.num}
                </span>
                <h3 className="font-serif text-2xl text-ivory group-hover:text-champagne transition-colors duration-500 ease-luxury">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ivory/70 font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Estrutura */}
      <section className="py-24 md:py-32 bg-ink border-t border-gold/20 relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 reveal">
              <SectionHeading
                number="03"
                eyebrow="Capacidade Operacional"
                title="Nossa Estrutura"
                subtitle="Integramos todas as pontas da produção para garantir harmonia visual e pontualidade na execução."
                className="mb-6"
              />

              <div className="space-y-6">
                {ESTRUTURA_ITEMS.map((item, idx) => (
                  <div key={idx} className="border-b border-gold/15 pb-5">
                    <h3 className="font-serif text-xl text-gold font-normal">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ivory/70 font-sans font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative reveal">
              <div className="border border-gold/30 p-3 bg-espresso/40">
                <Photo
                  id="bastidores-evento"
                  aspectRatio="4:3"
                  className="w-full shadow-2xl"
                  imageClassName="hover:scale-105 transition-transform duration-700 ease-luxury"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-FAQ */}
      <MiniFAQ />

      {/* CTA Final */}
      <CTA
        title="Planeje seu evento com quem cuida de você"
        subtitle="Estamos à disposição para receber você, entender seus desejos e criar uma proposta personalizada."
        buttonLabel="Solicitar orçamento"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
