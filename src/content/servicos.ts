export interface ServiceItem {
  id: string;
  number: string; // "01" a "07"
  title: string;
  tagline: string;
  description: string;
  imageId: string;
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "cerimonial",
    number: "01",
    title: "Cerimonial e Assessoria",
    tagline: "A tranquilidade de viver cada segundo com a certeza de que tudo foi minuciosamente ensaiado.",
    description:
      "A espinha dorsal de qualquer celebração bem-sucedida. Nossa assessoria atua desde o planejamento inicial e cronograma minucioso até a gestão de fornecedores e a condução serena e firme dos protocolos no grande dia.",
    imageId: "servico-cerimonial",
    highlights: [
      "Planejamento estratégico e cronograma detalhado do evento",
      "Organização prévia e ensaios protocolares",
      "Curadoria, alinhamento e gestão integrada de fornecedores",
      "Coordenação executiva em tempo real e resolução ágil de imprevistos",
      "Acompanhamento dedicado aos anfitriões e homenageados",
    ],
  },
  {
    id: "buffet",
    number: "02",
    title: "Buffet Completo",
    tagline: "Uma experiência gastronômica memorável, onde sabor, apresentação e hospitalidade se encontram.",
    description:
      "Gastronomia pensada para encantar todos os sentidos. Cardápios balanceados com ingredientes de excelência, apresentação artística e uma equipe de garçons e maitres treinada para atender com gentileza e distinção.",
    imageId: "servico-buffet",
    highlights: [
      "Entradas nobres e canapés contemporâneos empratados",
      "Salgados finos quentes e frios servidos com agilidade",
      "Jantar completo com opções de carnes nobres, frutos do mar e massas artesanais",
      "Mesa de sobremesas e doces finos com finalização delicada",
      "Bebidas não alcoólicas completas e equipe de serviço uniformizada",
    ],
  },
  {
    id: "decoracao",
    number: "03",
    title: "Decoração e Cenografia",
    tagline: "Transformamos espaços comuns em cenários mágicos que expressam a alma e o estilo de cada cliente.",
    description:
      "Projetos cenográficos autorais que harmonizam flores nobres, mobiliário elegante, paletas de cores refinadas e iluminação decorativa intimista. Cada canto do espaço é valorizado para render lembranças e fotos deslumbrantes.",
    imageId: "servico-decoracao",
    highlights: [
      "Projeto visual personalizado e layout de ocupação do espaço",
      "Design floral exclusivo com flores frescas e arranjos nobres",
      "Mesa principal e mesa do bolo decoradas com peças suntuosas",
      "Cenografia para cerimônia com passadeira e pórticos florais",
      "Ambientação aconchegante de lounges e iluminação decorativa suave",
    ],
  },
  {
    id: "espaco",
    number: "04",
    title: "Espaço para Eventos",
    tagline: "Locais privilegiados que combinam infraestrutura completa, conforto térmico e excelente localização.",
    description:
      "Oferecemos opções de espaços próprios ou parceiros criteriosamente selecionados em Salvador e região, preparados para receber seus convidados com acessibilidade, segurança e versatilidade de montagem.",
    imageId: "servico-espaco",
    highlights: [
      "Espaços próprios e parcerias com as melhores casas e salões de Salvador",
      "Infraestrutura com climatização de ponta e isolamento acústico",
      "Área de montagem técnica e cozinha industrial completa para apoio",
      "Acessibilidade e conforto planejado para todos os públicos",
      "Hall de recepção imponente com facilidade de desembarque",
    ],
  },
  {
    id: "bolos-elegantes",
    number: "05",
    title: "Bolos Elegantes",
    tagline: "Verdadeiras obras de arte da confeitaria artística que unem imponência estética e sabor inesquecível.",
    description:
      "O ponto focal mais aguardado na mesa principal. Confeccionamos bolos cenográficos e artísticos sob medida, perfeitamente integrados ao conceito e à paleta da celebração — harmonizando acabamentos impecáveis em pasta americana nobre, flores de açúcar feitas à mão e recheios sofisticados da alta confeitaria.",
    imageId: "servico-bar",
    highlights: [
      "Projetos autorais desenvolvidos em sintonia com a identidade visual da festa",
      "Bolos cenográficos suntuosos e opções de bolo de corte para servir os convidados",
      "Flores de açúcar esculpidas à mão, texturas orgânicas e detalhes em folha de ouro",
      "Degustação prévia para seleção personalizada de massas e recheios finos",
      "Montagem impecável e iluminação focal dedicada no centro da mesa de doces",
    ],
  },
  {
    id: "musica",
    number: "06",
    title: "Música e Estrutura Técnica",
    tagline: "Acústica impecável, pista vibrante e iluminação computadorizada para animar a noite toda.",
    description:
      "A energia sonora e visual que faz o coração do evento bater mais forte. Contamos com DJs versáteis, suporte para bandas ao vivo, rider técnico completo e efeitos especiais que transformam o salão em uma verdadeira celebração.",
    imageId: "servico-musica",
    highlights: [
      "DJs conceituados com repertório personalizado para o perfil dos anfitriões",
      "Rider completo para suporte a bandas musicais ao vivo",
      "Sonorização linear de alta fidelidade e clareza acústica",
      "Iluminação cênica com moving heads, refletores LED e laser",
      "Pistas de LED e efeitos especiais de palco e contagem regressiva",
    ],
  },
  {
    id: "foto",
    number: "07",
    title: "Foto e Filmagem",
    tagline: "O olhar sensível que eterniza a emoção em registros cinematográficos para gerações.",
    description:
      "Mais do que registrar poses, capturamos lágrimas de alegria, risos espontâneos e a grandiosidade de cada momento. Cobertura audiovisual em alta definição, com edição comemorativa e entrega ágil para recordação duradoura.",
    imageId: "servico-foto",
    highlights: [
      "Cobertura fotográfica completa do making of até o fim da festa",
      "Filmagem cinematográfica em 4K com câmeras estabilizadas e drones",
      "Teaser dinâmico com edição rápida para compartilhamento nas redes",
      "Ensaios pré-evento temáticos e registros de cortejo e recepção",
      "Galeria digital privativa em alta resolução para download dos anfitriões",
    ],
  },
];
