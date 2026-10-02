export interface TestimonialItem {
  id: string;
  isReal: boolean;
  quote: string;
  author: string;
  role: string;
  eventDate?: string;
  eventType?: string;
  screenshotSrc?: string;
}

/**
 * Estrutura para os depoimentos dos clientes.
 * Citação institucional autoral de abertura baseada no manifesto oficial da marca.
 */
export const testimonialsData: TestimonialItem[] = [
  {
    id: "depoimento-institucional-1",
    isReal: true,
    quote: "Nosso compromisso é orquestrar cada celebração com técnica impecável e sensibilidade humana, permitindo que você aproveite cada instante como o convidado de honra da sua própria história.",
    author: "Leandro Santana",
    role: "Fundador & Diretor Geral de Cerimonial",
    eventType: "Manifesto da Marca",
  },
];
