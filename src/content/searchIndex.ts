import { eventCategories } from "./eventos";
import { servicesData } from "./servicos";
import { blogPosts } from "./blog";

export type SearchCategory = "todos" | "eventos" | "servicos" | "blog" | "paginas";

export interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: "eventos" | "servicos" | "blog" | "paginas";
  categoryLabel: string;
  url: string;
  tags: string[];
  summary: string;
  highlights: string[];
}

export function normalizeSearchString(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export const POPULAR_SEARCH_TERMS = [
  "Casamento",
  "Buffet de Frutos do Mar",
  "Checklist 15 Anos",
  "Cenografia e Flores",
  "Eventos Corporativos",
  "Orçamento Rápido",
  "Litoral Norte",
];

export const searchIndex: SearchItem[] = [
  // Páginas Institucionais & Ferramentas
  {
    id: "page-orcamentos",
    title: "Solicite seu Orçamento & Planejamento",
    subtitle: "Orçamento estruturado e diagnóstico para eventos de alto padrão em Salvador",
    category: "paginas",
    categoryLabel: "Páginas & Ferramentas",
    url: "/orcamentos",
    tags: ["orcamento", "cotacao", "valores", "briefing", "diagnostico", "contratar", "whatsapp"],
    summary: "Formulário executivo e atendimento ágil da equipe Leandro Santana Cerimonial para planejar seu evento completo em Salvador e Litoral Norte.",
    highlights: [
      "Diagnóstico e formatação sob medida",
      "Pacote integrado: cerimonial, buffet, cenografia, som e fotos",
      "Retorno personalizado direto via WhatsApp",
    ],
  },
  {
    id: "tool-checklist",
    title: "Checklist Interativo de Planejamento de Eventos",
    subtitle: "Ferramenta de pré-qualificação com 6 categorias essenciais e cálculo de prontidão",
    category: "paginas",
    categoryLabel: "Páginas & Ferramentas",
    url: "/orcamentos#checklist",
    tags: ["checklist", "planejamento", "ferramenta", "passo a passo", "organizacao", "etapas"],
    summary: "Selecione os itens do seu evento nas categorias de Cerimonial, Buffet, Decoração, Espaço, Som e Foto para acompanhar sua prontidão e sincronizar com o orçamento.",
    highlights: [
      "Filtros rápidos para Casamento, 15 Anos, Formatura e Corporativo",
      "Barra de prontidão visual do evento",
      "Sincronização direta com a solicitação de proposta",
    ],
  },
  {
    id: "page-quem-somos",
    title: "Quem Somos — A Assinatura Leandro Santana",
    subtitle: "Mais de 15 anos de dedicação, planejamento rigoroso e presença em eventos na Bahia",
    category: "paginas",
    categoryLabel: "Páginas & Ferramentas",
    url: "/quem-somos",
    tags: ["quem somos", "historia", "leandro santana", "fundador", "trajetoria", "missao", "valores"],
    summary: "Conheça a história e o método de Leandro Santana, unindo precisão executiva ao acolhimento atento para a sua celebração.",
    highlights: [
      "Tradição aliada à inovação estética",
      "Coordenação executiva em tempo real",
      "Atendimento exclusivo e confidencialidade",
    ],
  },
  {
    id: "page-galeria",
    title: "Galeria de Celebrações & Inspirações",
    subtitle: "Registros visuais de casamentos, 15 anos e eventos corporativos realizados",
    category: "paginas",
    categoryLabel: "Páginas & Ferramentas",
    url: "/galeria",
    tags: ["galeria", "fotos", "inspiracoes", "decoracao", "cenografia", "cenas", "portfolio"],
    summary: "Explore fotografias em alta resolução dos nossos eventos em Salvador, com mesas decoradas, cortejos emocionantes e iluminação cênica.",
    highlights: [
      "Projetos florais nobres e arcos contemporâneos",
      "Buffet gastronômico e apresentação de pratos",
      "Ambientes com iluminação cênica âmbar",
    ],
  },
  {
    id: "page-contato",
    title: "Canais Oficiais de Contato & Localização",
    subtitle: "Atendimento direto com a diretoria comercial em Salvador",
    category: "paginas",
    categoryLabel: "Páginas & Ferramentas",
    url: "/contato",
    tags: ["contato", "telefone", "whatsapp", "endereco", "salvador", "luiz anselmo", "email"],
    summary: "Entre em contato via WhatsApp comercial, e-mail ou agende uma reunião presencial em nosso escritório em Salvador/BA.",
    highlights: [
      "WhatsApp comercial direto: (71) 98321-6686",
      "Atendimento de segunda a sábado com horário agendado",
      "Escritório centralizado em Salvador",
    ],
  },

  // Categorias de Eventos (/eventos/[slug])
  ...eventCategories.map((evento) => ({
    id: `evento-${evento.slug}`,
    title: evento.title,
    subtitle: evento.bannerSubtitle,
    category: "eventos" as const,
    categoryLabel: "Eventos",
    url: `/eventos/${evento.slug}`,
    tags: [
      evento.slug,
      evento.title.toLowerCase(),
      "evento",
      "festa",
      "cerimonia",
      "producao",
      ...(evento.topics || []),
    ],
    summary: evento.shortDescription,
    highlights: evento.topics || [
      "Planejamento cerimonial completo",
      "Cardápio gastronômico refinado",
      "Projeto cenográfico e iluminação cênica",
    ],
  })),

  // Pilares de Serviços (/servicos#[id])
  ...servicesData.map((servico) => ({
    id: `servico-${servico.id}`,
    title: servico.title,
    subtitle: servico.tagline,
    category: "servicos" as const,
    categoryLabel: "Serviços",
    url: `/servicos#${servico.id}`,
    tags: [
      servico.id,
      servico.title.toLowerCase(),
      "servico",
      "pacote",
      "assessoria",
      ...servico.highlights,
    ],
    summary: servico.description,
    highlights: servico.highlights,
  })),

  // Artigos Editoriais & Blog (/blog/[slug])
  ...blogPosts.map((post) => ({
    id: `blog-${post.slug}`,
    title: post.title,
    subtitle: post.subtitle,
    category: "blog" as const,
    categoryLabel: "Blog & Dicas",
    url: `/blog/${post.slug}`,
    tags: [
      "blog",
      "artigo",
      "dica",
      post.slug,
      post.category.toLowerCase(),
      ...post.tags,
    ],
    summary: post.excerpt,
    highlights: post.keyTakeaways,
  })),
];

export function searchContent(query: string, category: SearchCategory = "todos"): SearchItem[] {
  const normalizedQuery = normalizeSearchString(query);

  return searchIndex.filter((item) => {
    // Filtro por categoria
    if (category !== "todos" && item.category !== category) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    // Busca no título, subtítulo, resumo, tags e destaques
    const inTitle = normalizeSearchString(item.title).includes(normalizedQuery);
    const inSubtitle = normalizeSearchString(item.subtitle).includes(normalizedQuery);
    const inSummary = normalizeSearchString(item.summary).includes(normalizedQuery);
    const inTags = item.tags.some((tag) => normalizeSearchString(tag).includes(normalizedQuery));
    const inHighlights = item.highlights.some((h) =>
      normalizeSearchString(h).includes(normalizedQuery)
    );

    return inTitle || inSubtitle || inSummary || inTags || inHighlights;
  });
}
