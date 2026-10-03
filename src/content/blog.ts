export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "Casamentos" | "Buffet & Gastronomia" | "15 Anos" | "Decoração & Cenografia" | "Espaços & Locações";
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  heroImage: string;
  metaDescription: string;
  tags: string[];
  keyTakeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  quote?: {
    text: string;
    attribution: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-casamento-salvador",
    title: "Guia Completo para Casar em Salvador: Do Planejamento à Pista de Dança",
    subtitle: "Tudo o que os noivos precisam saber para orquestrar uma celebração inesquecível na capital da Bahia.",
    excerpt: "Casar em Salvador reúne a brisa do Atlântico, arquitetura histórica e hospitalidade calorosa. Descubra como estruturar cronograma, escolha de fornecedores, buffet refinado e logística à beira-mar.",
    category: "Casamentos",
    publishDate: "15 de Janeiro de 2026",
    readTime: "7 min de leitura",
    author: {
      name: "Leandro Santana",
      role: "Diretor Criativo & Cerimonialista",
    },
    heroImage: "/images/hero/hero-main.webp",
    metaDescription: "Guia completo para casamentos em Salvador/BA. Cronograma executivo, buffet refinado, cerimonial na praia e escolha dos melhores fornecedores.",
    tags: ["Casamento Salvador", "Cerimonial", "Praia da Bahia", "Buffet de Casamento", "Planejamento"],
    keyTakeaways: [
      "Inicie o planejamento com 12 a 18 meses de antecedência para garantir espaços nobres em Salvador.",
      "Considere a incidência solar e a maré caso opte por cerimônias à beira-mar ou no pôr do sol.",
      "O cerimonial executivo previne atrasos e sincroniza alta gastronomia com a animação da pista.",
      "Mescle pratos da culinária baiana contemporânea com o requinte de menus internacionais.",
    ],
    sections: [
      {
        heading: "A Magia e a Complexidade de Celebrar em Salvador",
        paragraphs: [
          "Salvador possui uma energia singular para casamentos. Entre fortes históricos, falésias debruçadas no mar e casarões coloniais, a cidade oferece cenários deslumbrantes. No entanto, tamanha beleza exige planejamento rigoroso: a umidade litorânea, o clima tropical e o fluxo de tráfego entre a Orla e a Cidade Histórica demandam um cerimonial atento a cada variável.",
          "Nossa assessoria atua preventivamente, mapeando desde o conforto térmico dos convidados até o plano de contingência para chuva ou vento nas celebrações ao ar livre.",
        ],
      },
      {
        heading: "Cronograma Recomendado: Mês a Mês",
        paragraphs: [
          "12 a 14 meses antes: Definição da data, contratação do cerimonialista e reserva do local da cerimônia e recepção.",
          "8 a 10 meses antes: Seleção e degustação do buffet, contratação do projeto cenográfico e reserva de DJ ou banda.",
          "6 meses antes: Convites, envio do save the date e alinhamento do projeto luminotécnico e audiovisual.",
          "2 a 3 meses antes: Ensaio de cortejo, prova final do menu e fechamento de bar de drinks e mesa de doces finos.",
          "Semana do evento: Reunião executiva de alinhamento com todos os fornecedores e confirmação do RSVP.",
        ],
      },
      {
        heading: "O Segredo da Pista de Dança: Transição Fluida",
        paragraphs: [
          "O casamento baiano tem uma marca inegociável: a celebração vibrante. O papel do cerimonial é garantir que a formalidade dos protocolos dê lugar, no momento exato, a uma atmosfera eletrizante.",
          "Com sonorização linear e iluminação cênica programada, a abertura da pista se torna um ápice emocional que mantém os convidados envolvidos até o amanhecer.",
        ],
      },
    ],
    quote: {
      text: "Um casamento memorável não acontece por acaso: ele nasce da união entre sensibilidade artística e precisão executiva.",
      attribution: "Leandro Santana",
    },
  },
  {
    slug: "menu-buffet-100-300-convidados",
    title: "Como Escolher o Menu de Buffet Perfeito para 100 a 300 Convidados",
    subtitle: "Equilíbrio entre sofisticação, agilidade de serviço e encanto gastronômico em grandes celebrações.",
    excerpt: "Dicas de harmonização, quantidade ideal de canapés, ilhas gastronômicas quentes e opções para dietas especiais que impressionam do primeiro ao último brinde.",
    category: "Buffet & Gastronomia",
    publishDate: "28 de Janeiro de 2026",
    readTime: "5 min de leitura",
    author: {
      name: "Leandro Santana",
      role: "Diretor Criativo & Cerimonialista",
    },
    heroImage: "/images/hero/hero-secondary.webp",
    metaDescription: "Cardápios ideais para eventos de 100 a 300 convidados em Salvador. Ilhas gastronômicas, coquetel volante, jantar nobre e harmonização de bebidas.",
    tags: ["Buffet Salvador", "Gastronomia", "Coquetel Volante", "Menu Nobre", "Degustação"],
    keyTakeaways: [
      "Ilhas gastronômicas reduzem filas e dinamizam o fluxo em eventos com mais de 150 convidados.",
      "Calcule uma média de 12 a 15 itens volantes por pessoa antes do serviço do prato principal.",
      "Ofereça opções contemporâneas que incluam alternativas vegetarianas e sem glúten.",
      "A sincronia entre a cozinha e a equipe de salão garante que os pratos cheguem à mesa na temperatura ideal.",
    ],
    sections: [
      {
        heading: "A Dinâmica do Serviço de Alto Padrão",
        paragraphs: [
          "Em celebrações com 100 a 300 convidados, a velocidade e a elegância do atendimento são tão vitais quanto o sabor dos pratos. Ninguém quer esperar em filas ou receber canapés mornos.",
          "O formato ideal mescla um coquetel volante refinado na primeira hora — com finger foods crocantes e empratados delicados —, seguido por estações temáticas (como frutos do mar grelhados e risotos preparados na hora) e um jantar requintado.",
        ],
      },
      {
        heading: "Harmonização de Sabores Baianos e Técnicas Francesas",
        paragraphs: [
          "A gastronomia da Bahia é rica em aromas e especiarias. O segredo de um buffet de casamento moderno é usar ingredientes locais nobres — como camarões pistola, castanhas de caju, sementes e frutas tropicais — combinados a técnicas clássicas como confit e sous-vide.",
          "O resultado é um paladar sofisticado que homenageia a cultura local com leveza e distinção.",
        ],
      },
      {
        heading: "A Importância da Degustação Prévia",
        paragraphs: [
          "Na Leandro Santana Cerimonial, a degustação não é apenas uma prova de pratos: é uma consultoria gastronômica. Sentamos com os anfitriões para compreender suas preferências, história de família e o perfil dos seus convidados.",
        ],
      },
    ],
    quote: {
      text: "A boa gastronomia conecta pessoas e eterniza celebrações através da memória afetiva do paladar.",
      attribution: "Equipe Gastronômica Leandro Santana",
    },
  },
  {
    slug: "checklist-15-anos-debutante",
    title: "Checklist de 15 Anos: 10 Passos Essenciais para a Debutante dos Sonhos",
    subtitle: "Da definição do tema cenográfico à valsa emocionante com tecnologia e pista robótica.",
    excerpt: "Tudo o que pais e debutantes precisam organizar para conciliar elegância clássica, tendências da Geração Z e uma experiência inesquecível para os amigos.",
    category: "15 Anos",
    publishDate: "08 de Fevereiro de 2026",
    readTime: "6 min de leitura",
    author: {
      name: "Leandro Santana",
      role: "Diretor Criativo & Cerimonialista",
    },
    heroImage: "/images/hero/hero-main.webp",
    metaDescription: "Checklist completo para festa de 15 anos em Salvador. Do tema à valsa, cerimonial para debutantes com cenografia imersiva e boate contemporânea.",
    tags: ["15 Anos", "Debutante Salvador", "Checklist", "Festa Temática", "Cenografia"],
    keyTakeaways: [
      "Defina o conceito visual logo no início: Minimalista Glamour, Jardim Encantado ou Balada Urbana.",
      "Planeje os trajes (recepção, valsa e balada) com tempo para ajustes sob medida.",
      "O bar sem álcool de mocktails criativos é uma das atrações mais elogiadas pelos adolescentes.",
      "A assessoria no dia do evento garante que a debutante curta a festa sem ansiedade ou atropelos.",
    ],
    sections: [
      {
        heading: "O Novo Conceito de 15 Anos em Salvador",
        paragraphs: [
          "As festas de debutante evoluíram: saíram os protocolos engessados e entraram produções cinematográficas com identidade visual personalizada, lounges instagramáveis e pistas de dança com tecnologia de grandes festivais.",
          "Nossa equipe equilibra o momento solene das homenagens familiares com o dinamismo jovem, criando uma narrativa emocionante.",
        ],
      },
      {
        heading: "Os 10 Passos Estratégicos",
        paragraphs: [
          "1. Definição do orçamento global e perfil de convidados.",
          "2. Contratação do cerimonial e escolha do espaço com infraestrutura acústica.",
          "3. Projeto cenográfico: paleta de cores, mobiliário e iluminação âmbar.",
          "4. Seleção dos vestidos: entrada, cerimônia solene e transformação para a pista.",
          "5. Coreografia da valsa e ensaios com pais, padrinhos e amigos.",
          "6. Cardápio jovem com ilha de hambúrguer artesanal, massas e doces finos.",
          "7. Bar de drinks sem álcool decorados e refrescantes.",
          "8. DJ especialista em repertório teen, sonorização linear e efeitos cênicos.",
          "9. Cobertura de foto e filme em 4K com entrega ágil para redes sociais.",
          "10. Roteiro de minuto a minuto executado com discrição pela equipe de cerimonial.",
        ],
      },
    ],
    quote: {
      text: "Ver os olhos de uma debutante brilharem ao entrar no salão é a maior recompensa do nosso trabalho.",
      attribution: "Leandro Santana",
    },
  },
  {
    slug: "tendencias-decoracao-floral-bahia",
    title: "Tendências de Decoração Floral e Cenografia para Celebrações Baianas",
    subtitle: "Flores nobres, iluminação intimista, arcos orgânicos e mobiliário contemporâneo.",
    excerpt: "Como transformar espaços de eventos em Salvador com projetos que valorizam a estética tropical chique, paletas peroladas e iluminação cênica arquitetural.",
    category: "Decoração & Cenografia",
    publishDate: "20 de Fevereiro de 2026",
    readTime: "5 min de leitura",
    author: {
      name: "Leandro Santana",
      role: "Diretor Criativo & Cerimonialista",
    },
    heroImage: "/images/hero/hero-secondary.webp",
    metaDescription: "Tendências de decoração e cenografia floral em Salvador. Iluminação cênica, flores nobres, lounges acolhedores e projetos autorais na Bahia.",
    tags: ["Decoração de Eventos", "Cenografia", "Flores Nobres", "Iluminação Cênica", "Design Floral"],
    keyTakeaways: [
      "A paleta Ink, Marfim e Ouro envelhecido confere imponência e atemporalidade.",
      "Arcos florais orgânicos e assimétricos criam pontos focais marcantes para fotos.",
      "A iluminação âmbar quente é indispensável para valorizar a arquitetura e acolher os convidados.",
      "Móveis de fibras nobres e tecidos de linho elevam o padrão de eventos litorâneos.",
    ],
    sections: [
      {
        heading: "A Estética 'Tropical Chic' e o Luxo Atemporal",
        paragraphs: [
          "O luxo contemporâneo na Bahia rejeita o excesso artificial. A grande tendência é valorizar a organicidade: orquídeas, folhagens nobres, proteas e sementes combinadas com estruturas limpas e mobiliário de design assinado.",
          "Em nossos projetos, criamos camadas visuais: alturas alternadas nos arranjos de mesa, velas suspensas e passadeiras com detalhes em dourado nobre.",
        ],
      },
      {
        heading: "Iluminação Cênica: A Alma do Projeto",
        paragraphs: [
          "Uma decoração magnífica pode se perder se a iluminação não for planejada tecnicamente. Trabalhamos com focos de luz direcional para realçar os pontos altos do buffet e da mesa de doces, mantendo os lounges em meia-luz aconchegante.",
          "Cada detalhe é calibrado para que fotos e vídeos registrem fielmente as tonalidades reais das flores e tecidos.",
        ],
      },
    ],
    quote: {
      text: "Cenografia de luxo não é sobre encher o ambiente, mas sobre desenhar emoções com luz, texturas e flores.",
      attribution: "Leandro Santana",
    },
  },
  {
    slug: "espacos-nobres-salvador-litoral-norte",
    title: "Guia de Espaços Nobres para Eventos em Salvador e Litoral Norte",
    subtitle: "Critérios de escolha entre casarões históricos, hotéis de luxo e vilas à beira-mar.",
    excerpt: "Analise capacidade, infraestrutura de geradores, climatização, facilidade de acesso e privacidade para casamentos e convenções corporativas na Bahia.",
    category: "Espaços & Locações",
    publishDate: "05 de Março de 2026",
    readTime: "6 min de leitura",
    author: {
      name: "Leandro Santana",
      role: "Diretor Criativo & Cerimonialista",
    },
    heroImage: "/images/hero/hero-main.webp",
    metaDescription: "Guia dos melhores espaços para eventos e casamentos em Salvador e Litoral Norte da Bahia. Infraestrutura, logística e cerimonial completo.",
    tags: ["Espaços Salvador", "Litoral Norte Bahia", "Locação para Casamento", "Eventos Corporativos", "Infraestrutura"],
    keyTakeaways: [
      "Verifique sempre a capacidade elétrica e a presença de gerador automático de contingência.",
      "Avalie a acústica do local para respeitar horários e garantir a potência do som na pista.",
      "Confirme a presença de camarim privativo com climatização e banheiro exclusivo para anfitriões.",
      "Nossa assessoria realiza visitas técnicas prévias para avaliar a viabilidade operacional de cada local.",
    ],
    sections: [
      {
        heading: "Os Três Perfis de Locação na Bahia",
        paragraphs: [
          "1. Casarões Históricos e Museus: Oferecem imponência e atmosfera cultural inigualável no Santo Antônio Além do Carmo e Vitória, ideais para recepções intimistas e clássicas.",
          "2. Hotéis e Resorts Urbanos: Garantem infraestrutura hoteleira completa para convidados que vêm de fora, estacionamento e suporte técnico.",
          "3. Vilas e Espaços no Litoral Norte (Guarajuba, Praia do Forte, Busca Vida): Perfeitos para 'destination weddings' de fim de semana, com o mar ao fundo e pés na grama.",
        ],
      },
      {
        heading: "Itens Críticos na Visita Técnica",
        paragraphs: [
          "Antes de assinar o contrato de locação de qualquer espaço, nossa equipe inspeciona pontos que passam despercebidos aos olhos do cliente: dimensionamento da cozinha para o buffet, pontos de carga e descarga para a montagem de cenografia, acessibilidade e rotas de emergência.",
          "Essa diligência prévia evita custos adicionais inesperados e assegura a realização impecável da festa.",
        ],
      },
    ],
    quote: {
      text: "O local perfeito é aquele que não apenas emociona pelo visual, mas sustenta com segurança toda a engenharia do evento.",
      attribution: "Leandro Santana",
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
