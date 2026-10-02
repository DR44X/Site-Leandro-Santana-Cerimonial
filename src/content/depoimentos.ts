export interface TestimonialItem {
  id: string;
  isReal: boolean;
  quote?: string;
  author?: string;
  role?: string;
  eventDate?: string;
  eventType?: string;
  screenshotSrc?: string;
  // Marcação obrigatória de conteúdo pendente
  todoNote?: string;
}

/**
 * Estrutura para os depoimentos dos clientes.
 * REGRA INEGOCIÁVEL (Seção 1 e Seção 8):
 * Não inventar fatos, nomes ou depoimentos fictícios.
 * Enquanto o cliente não fornecer os relatos oficiais ou prints das mensagens,
 * a estrutura é mantida como placeholder tipado e sinalizado.
 */
export const testimonialsData: TestimonialItem[] = [
  // TODO: CONTEÚDO REAL - Coletar os primeiros depoimentos e prints reais dos clientes
  {
    id: "depoimento-placeholder-1",
    isReal: false,
    todoNote: "TODO: CONTEÚDO REAL — Inserir depoimento real dos noivos ou print do WhatsApp da família",
    quote: "Espaço reservado para avaliação real de clientes. Nosso compromisso é com a transparência e autenticidade de cada celebração.",
    author: "Cliente Leandro Santana Cerimonial",
    role: "Casamento em Salvador",
    eventType: "Casamento",
  },
  {
    id: "depoimento-placeholder-2",
    isReal: false,
    todoNote: "TODO: CONTEÚDO REAL — Inserir depoimento real de debutante ou pais de 15 anos",
    quote: "Espaço reservado para registro de depoimento real ou print de mensagem de agradecimento dos anfitriões.",
    author: "Família de Debutante",
    role: "Festa de 15 Anos",
    eventType: "15 Anos",
  },
  {
    id: "depoimento-placeholder-3",
    isReal: false,
    todoNote: "TODO: CONTEÚDO REAL — Inserir avaliação de comissão de formatura ou cliente corporativo",
    quote: "Espaço reservado para avaliação corporativa ou de comissão de formatura sobre a excelência da produção.",
    author: "Comissão de Formatura",
    role: "Baile de Gala",
    eventType: "Formatura",
  },
];
