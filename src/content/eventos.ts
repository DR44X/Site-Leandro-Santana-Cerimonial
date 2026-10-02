export interface EventCategory {
  slug: string;
  title: string;
  shortDescription: string;
  heroImageId: string;
  bannerSubtitle: string;
  commercialText: string[];
  topics?: string[];
  topicsAreSuggested?: boolean; // True para Aniversários e Confraternizações
  hasGallery: boolean;
  galleryImageIds?: string[];
  relatedServices?: string[];
  ctaLabel: string;
  metaDescription: string;
}

export const eventCategories: EventCategory[] = [
  {
    slug: "casamentos",
    title: "Casamentos",
    shortDescription: "Cerimônias emocionantes e recepções memoráveis com produção personalizada do início ao fim.",
    heroImageId: "evento-casamentos",
    bannerSubtitle: "A celebração do amor orquestrada com sensibilidade, elegância e perfeição.",
    commercialText: [
      "O casamento é a realização de um sonho a dois. Na Leandro Santana Cerimonial, cada detalhe é planejado com atenção meticulosa, respeitando a identidade do casal e traduzindo suas expectativas em uma atmosfera acolhedora e cinematográfica.",
      "Coordenamos todas as etapas: desde a concepção do cortejo cerimonial, a ambientação floral e a iluminação cênica, até a alta gastronomia do buffet e a energia contagiante da pista de dança. Nossa assessoria garante total tranquilidade aos noivos e familiares.",
      "Com planejamento rigoroso e presença executiva ativa em todo o evento, transformamos o seu 'sim' em uma memória inesquecível.",
    ],
    hasGallery: true,
    galleryImageIds: ["galeria-casamento-01", "galeria-casamento-02", "galeria-casamento-03"],
    relatedServices: [
      "Cerimonial e Assessoria",
      "Decoração",
      "Buffet Completo",
      "Bar de Drinks",
      "Música e Estrutura Técnica",
      "Foto e Filmagem",
    ],
    ctaLabel: "Solicite seu orçamento de casamento",
    metaDescription: "Cerimonial e produção completa de casamentos em Salvador/BA. Buffet sofisticado, decoração personalizada e assessoria exclusiva.",
  },
  {
    slug: "15-anos",
    title: "15 Anos",
    shortDescription: "Festas temáticas e comemorações inesquecíveis que combinam tradição, estilo e diversão pura.",
    heroImageId: "evento-15-anos",
    bannerSubtitle: "Uma noite mágica e personalizada para marcar a transição mais especial da juventude.",
    commercialText: [
      "A comemoração de 15 anos é um marco de emoção e celebração. Criamos projetos cenográficos autênticos, que refletem a personalidade da debutante em cada escolha visual, gastronômica e musical.",
      "Garantimos o equilíbrio entre momentos solenes — como a valsa, a entrada especial e as homenagens — e a vibração arrebatadora da pista de dança, com efeitos especiais de luz, som e bar sem álcool de drinks criativos.",
    ],
    topics: [
      "Festa personalizada e temática exclusiva",
      "Decoração contemporânea com iluminação cênica",
      "Buffet jovem e sofisticado com ilhas gastronômicas",
      "Cerimonial completo para protocolo, homenagens e valsa",
      "Entrada especial com roteiro coordenado",
      "Pista de dança com piso de LED e sonorização de impacto",
    ],
    hasGallery: true,
    galleryImageIds: ["galeria-15-anos-01", "galeria-15-anos-02", "galeria-15-anos-03"],
    relatedServices: [
      "Cerimonial e Assessoria",
      "Decoração",
      "Buffet Completo",
      "Bar de Drinks",
      "Música e Estrutura Técnica",
    ],
    ctaLabel: "Solicite seu orçamento de 15 anos",
    metaDescription: "Festas de 15 anos inesquecíveis em Salvador. Cerimonial, pista de LED, decoração temática e buffet completo com Leandro Santana Cerimonial.",
  },
  {
    slug: "formaturas",
    title: "Formaturas",
    shortDescription: "A solenidade da vitória acadêmica celebrada com imponência, alta produção e brindes memoráveis.",
    heroImageId: "evento-formaturas",
    bannerSubtitle: "Celebre o ápice de anos de dedicação em uma noite de orgulho, alegria e sofisticação.",
    commercialText: [
      "A formatura consagra anos de esforço e dedicação. Produzimos solenidades de colação de grau e bailes de gala de alto nível, com estrutura técnica impecável e atendimento de primeira classe aos formandos e convidados.",
      "Da montagem de palcos nobres e telões de alta definição até a curadoria de shows musicais e open bar premium, cuidamos de toda a logística para que a celebração seja monumental.",
    ],
    topics: [
      "Recepção solene e acolhimento dos homenageados",
      "Cerimonial protocolar com cronograma milimetricamente ensaiado",
      "Buffet requintado com jantares e serviços volantes",
      "Estrutura técnica robusta: palco, sonorização linear e iluminação cênica",
      "Pista de dança animada com atrações musicais e DJ",
    ],
    hasGallery: true,
    galleryImageIds: ["galeria-formatura-01", "galeria-formatura-02"],
    relatedServices: [
      "Cerimonial e Assessoria",
      "Buffet Completo",
      "Música e Estrutura Técnica",
      "Bar de Drinks",
      "Espaço para Eventos",
    ],
    ctaLabel: "Solicite seu orçamento de formatura",
    metaDescription: "Produção de formaturas e bailes de gala em Salvador/BA. Cerimonial solene, estrutura de som, iluminação e buffet completo.",
  },
  {
    slug: "corporativos",
    title: "Corporativos",
    shortDescription: "Eventos empresariais com pontualidade, excelência operacional e a identidade da sua marca.",
    heroImageId: "evento-corporativos",
    bannerSubtitle: "A força e a reputação da sua empresa refletidas em eventos impecáveis.",
    commercialText: [
      "No ambiente corporativo, cada evento é um vetor estratégico de imagem, relacionamentos e negócios. A Leandro Santana Cerimonial oferece precisão operacional, elegância discreta e atendimento executivo de excelência.",
      "Realizamos convenções, lançamentos de produtos, jantares de gala corporativos, coquetéis de relacionamento e workshops. Tudo com suporte audiovisual moderno e gastronomia sob medida.",
    ],
    topics: [
      "Confraternizações corporativas e encontros institucionais",
      "Coffee breaks nobres, brunch e coquetéis de networking",
      "Lançamentos de marcas, produtos e inaugurações",
      "Jantares executivos com serviço empratado ou buffet volante",
      "Estrutura completa de som, projeção, microfones e iluminação técnica",
    ],
    hasGallery: false, // Regra inegociável da Seção 10: Sem galeria para corporativos
    relatedServices: [
      "Cerimonial e Assessoria",
      "Buffet Completo",
      "Espaço para Eventos",
      "Música e Estrutura Técnica",
    ],
    ctaLabel: "Solicite seu orçamento corporativo",
    metaDescription: "Produção de eventos corporativos em Salvador. Coffee breaks, coquetéis, jantares executivos e estrutura audiovisual com alto padrão.",
  },
  {
    slug: "aniversarios",
    title: "Aniversários",
    shortDescription: "Comemorações intimistas ou grandes celebrações de vida, moldadas pelo carinho e pela sofisticação.",
    heroImageId: "evento-aniversarios",
    bannerSubtitle: "Comemore mais um ciclo de vida cercado de beleza, alta gastronomia e pessoas queridas.",
    commercialText: [
      "Celebrar aniversários é honrar histórias e reunir gerações. Sejam comemorações intimistas em lounges exclusivos ou grandes festas de aniversário de 30, 40, 50, 60 anos ou mais, planejamos cada detalhe com extremo bom gosto.",
      "Proporcionamos uma experiência fluida para você ser o verdadeiro convidado da sua própria festa, saboreando um cardápio refinado e momentos espontâneos de pura alegria.",
    ],
    // TODO: CONFIRMAR COM O CLIENTE - Tópicos sugeridos conforme Seção 10
    topics: [
      "Experiências personalizadas e roteiros sob medida",
      "Decoração exclusiva com iluminação aconchegante",
      "Buffet volante com finger foods gourmet e jantar selecionado",
      "Cerimonial e coordenação de bastidores",
      "Estrutura com som ambiente e iluminação decorativa",
    ],
    topicsAreSuggested: true,
    hasGallery: true,
    galleryImageIds: ["galeria-momentos-01", "galeria-decoracao-03"],
    relatedServices: [
      "Cerimonial e Assessoria",
      "Decoração",
      "Buffet Completo",
      "Bar de Drinks",
      "Música e Estrutura Técnica",
    ],
    ctaLabel: "Solicite seu orçamento de aniversário",
    metaDescription: "Festas de aniversário inesquecíveis em Salvador. Decoração, buffet exclusivo, cerimonial e estrutura completa com Leandro Santana Cerimonial.",
  },
  {
    slug: "confraternizacoes",
    title: "Confraternizações",
    shortDescription: "Encontros de fim de ano e celebrações festivas com atmosfera acolhedora e impecável.",
    heroImageId: "evento-confraternizacoes",
    bannerSubtitle: "Momentos de celebração coletiva com hospitalidade calorosa e alto nível de entrega.",
    commercialText: [
      "As confraternizações celebram conquistas e renovam energias. Desenhamos ambientes envolventes que estimulam a convivência harmônica e o lazer com sofisticação.",
      "Com planejamento detalhado de espaços, serviço ágil de buffet e bar, e entretenimento musical personalizado, criamos a atmosfera perfeita para confraternizações inesquecíveis.",
    ],
    // TODO: CONFIRMAR COM O CLIENTE - Tópicos sugeridos conforme Seção 10
    topics: [
      "Planejamento logístico e acolhimento receptivo",
      "Ambientação agradável com áreas de estar e lounge",
      "Buffet flexível: churrasco nobre, feijoada gourmet ou coquetel refinado",
      "Estrutura completa com mobiliário e climatização",
      "Entretenimento interativo, shows ao vivo e som de qualidade",
    ],
    topicsAreSuggested: true,
    hasGallery: true,
    galleryImageIds: ["galeria-momentos-02", "galeria-momentos-03"],
    relatedServices: [
      "Buffet Completo",
      "Espaço para Eventos",
      "Bar de Drinks",
      "Música e Estrutura Técnica",
    ],
    ctaLabel: "Solicite seu orçamento de confraternização",
    metaDescription: "Confraternizações e celebrações de fim de ano em Salvador. Buffet, bar de drinks, estrutura e produção com Leandro Santana Cerimonial.",
  },
];

export function getEventBySlug(slug: string): EventCategory | undefined {
  return eventCategories.find((cat) => cat.slug === slug);
}
