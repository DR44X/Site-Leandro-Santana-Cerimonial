import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Quem Somos",
  description:
    "Conheça a história de Leandro Santana Cerimonial, nossa essência em alta produção de eventos e a estrutura completa em Salvador/BA.",
};

const ESSENCIA_ITEMS = [
  {
    num: "01",
    title: "Emoção",
    desc: "Cada celebração é única. Trabalhamos para que os anfitriões e convidados sintam a verdade e a beleza de cada instante.",
  },
  {
    num: "02",
    title: "Sofisticação",
    desc: "Estética refinada e bom gosto sem excessos. Harmonizamos flores nobres, texturas e gastronomia com elegância discreta.",
  },
  {
    num: "03",
    title: "Organização",
    desc: "Cronogramas minuciosos, gestão preventiva e processos claros para que nada seja deixado ao acaso.",
  },
  {
    num: "04",
    title: "Experiência Completa",
    desc: "Do primeiro café de planejamento até o encerramento da pista, uma jornada fluida, acolhedora e memorável.",
  },
  {
    num: "05",
    title: "Cuidado com Cada Detalhe",
    desc: "O segredo de um evento inesquecível reside na delicadeza dos pequenos gestos e nos detalhes que encantam os olhos.",
  },
];

const ESTRUTURA_ITEMS = [
  {
    title: "Cerimonial & Assessoria",
    desc: "Equipe especializada na condução serena de protocolos, recepção de convidados e gestão do tempo.",
  },
  {
    title: "Buffet Próprio & Gastronomia",
    desc: "Cozinha equipada, brigada de garçons qualificada e cardápios autorais com insumos nobres.",
  },
  {
    title: "Decoração & Cenografia",
    desc: "Projetos visuais integrados, acervo próprio de peças, mobiliário contemporâneo e floristas de alto padrão.",
  },
  {
    title: "Equipe & Fornecedores Homologados",
    desc: "Rede sólida de parceiros técnicos: sonorização linear, iluminação robótica, DJs, foto e filmagem.",
  },
];

export default function QuemSomosPage() {
  return (
    <div className="w-full">
      {/* Banner Interno */}
      <PageBanner
        eyebrow="Nossa Trajetória"
        title="Quem Somos"
        subtitle="Dedicados à arte de transformar celebrações em memórias eternas com elegância e assinatura própria."
        imageSrc="/images/hero/hero-main.webp"
      />

      {/* História da Marca */}
      <section className="py-24 md:py-32 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Imagem com Moldura em Arco */}
            <div className="lg:col-span-5 relative">
              <div className="arch-frame border border-gold/40 shadow-2xl aspect-[3/4] max-w-[420px] mx-auto">
                <Photo
                  id="leandro-santana"
                  fill
                  className="w-full h-full"
                  imageClassName="scale-100 hover:scale-105 transition-transform duration-700 ease-out"
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
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                number="01"
                eyebrow="Origem e Propósito"
                title="Experiência consolidada em uma"
                highlight="nova fase autoral"
                className="mb-4"
              />

              <div className="space-y-5 text-ivory/80 font-sans font-light leading-relaxed text-base sm:text-lg">
                <p>
                  A trajetória de <strong className="text-ivory font-normal">Leandro Santana</strong> no mercado de eventos baiano foi construída sobre os pilares da seriedade, da sensibilidade humana e do rigor técnico.
                </p>
                <p>
                  Tendo a reconhecida história da <strong className="text-gold font-normal">DeCasa</strong> como base sólida de aprendizado, realização de grandes sonhos e relacionamento com clientes exigentes, Leandro Santana consolidou um padrão inconfundível de entrega.
                </p>
                <p>
                  Hoje, em uma nova e madura fase de sua carreira, a marca própria <strong className="text-ivory font-normal">Leandro Santana Cerimonial</strong> expressa a síntese dessa vivência: um atendimento estritamente personalizado, onde cada cliente dialoga diretamente com quem pensa e executa sua festa.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ESSENCIA_ITEMS.map((item) => (
              <div
                key={item.num}
                className="p-8 bg-espresso-dark/60 border border-gold/20 hover:border-gold/60 transition-all duration-300 relative group"
              >
                <span className="font-serif text-gold text-2xl font-light tracking-widest block mb-4">
                  {item.num}
                </span>
                <h3 className="font-serif text-2xl text-ivory group-hover:text-champagne transition-colors">
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
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                number="03"
                eyebrow="Capacidade Operacional"
                title="Nossa Estrutura"
                subtitle="Integramos todas as pontas da produção para garantir harmonia estética e pontualidade absoluta."
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

            <div className="lg:col-span-6 relative">
              <div className="border border-gold/30 p-3 bg-espresso/40">
                <Photo
                  id="bastidores-evento"
                  aspectRatio="4:3"
                  className="w-full shadow-2xl"
                  imageClassName="hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="Planeje seu evento com quem entende do assunto"
        subtitle="Estamos à disposição para receber você, entender seus desejos e criar uma proposta exclusiva."
        buttonLabel="Solicitar orçamento"
        buttonHref="/orcamentos"
      />
    </div>
  );
}
