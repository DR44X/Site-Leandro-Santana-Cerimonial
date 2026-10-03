export type GalleryCategoryKey =
  | "todos"
  | "casamentos"
  | "15-anos"
  | "formaturas"
  | "decoracao"
  | "buffet"
  | "momentos-especiais";

export interface GalleryFilterOption {
  key: GalleryCategoryKey;
  label: string;
}

export const galleryFilters: GalleryFilterOption[] = [
  { key: "todos", label: "Todos" },
  { key: "casamentos", label: "Casamentos" },
  { key: "15-anos", label: "15 Anos" },
  { key: "formaturas", label: "Formaturas" },
  { key: "decoracao", label: "Decoração" },
  { key: "buffet", label: "Buffet" },
  { key: "momentos-especiais", label: "Momentos especiais" },
];

export interface GalleryItem {
  id: string;
  imageId: string;
  category: GalleryCategoryKey;
  title: string;
  subtitle: string;
  span?: "tall" | "wide" | "normal"; // Para dinamismo do grid editorial
}

export const galleryItems: GalleryItem[] = [
  // 15 Anos (com fotos reais do cliente!)
  {
    id: "g-15-anos-1",
    imageId: "galeria-15-anos-01",
    category: "15-anos",
    title: "Ensaio e Celebração da Debutante",
    subtitle: "Produção exclusiva com tiara de cristais e vestido rosé",
    span: "tall",
  },
  {
    id: "g-15-anos-2",
    imageId: "galeria-15-anos-02",
    category: "15-anos",
    title: "Valsa Iluminada na Pista de LED",
    subtitle: "Harmonia entre som e luz na pista de dança",
    span: "tall",
  },
  {
    id: "g-15-anos-3",
    imageId: "galeria-15-anos-03",
    category: "15-anos",
    title: "Momentos Espontâneos no Salão",
    subtitle: "Alegria e autenticidade da debutante e convidados",
    span: "normal",
  },
  {
    id: "g-15-anos-4",
    imageId: "galeria-15-anos-04",
    category: "15-anos",
    title: "Ensaio Alice no País das Maravilhas",
    subtitle: "Cenografia temática com relógio monumental e piso xadrez",
    span: "tall",
  },

  // Casamentos
  {
    id: "g-casamento-1",
    imageId: "galeria-casamento-01",
    category: "casamentos",
    title: "Celebração Nupcial dos Noivos",
    subtitle: "Beijo carinhoso dos noivos de smoking na recepção de casamento",
    span: "wide",
  },
  {
    id: "g-casamento-2",
    imageId: "galeria-casamento-02",
    category: "casamentos",
    title: "Making of Exclusivo da Noiva",
    subtitle: "Preparação meticulosa e maquiagem profissional antes do altar",
    span: "tall",
  },
  {
    id: "g-casamento-3",
    imageId: "galeria-casamento-03",
    category: "casamentos",
    title: "Atenção Meticulosa aos Detalhes",
    subtitle: "Mãos entrelaçadas dos noivos destacando as alianças de casamento",
    span: "normal",
  },
  {
    id: "g-casamento-4",
    imageId: "galeria-casamento-04",
    category: "casamentos",
    title: "Entrada Solene na Nave da Igreja",
    subtitle: "Caminhada emocionante com daminha de honra e pajem",
    span: "wide",
  },
  {
    id: "g-casamento-5",
    imageId: "galeria-casamento-05",
    category: "casamentos",
    title: "Comemoração com Noivos e Padrinhos",
    subtitle: "Euforia contagiante e brinde na recepção de casamento",
    span: "normal",
  },
  {
    id: "g-casamento-6",
    imageId: "galeria-casamento-06",
    category: "casamentos",
    title: "Pórtico Floral ao Ar Livre",
    subtitle: "Abraço apaixonado dos noivos sob flores nobres",
    span: "tall",
  },
  {
    id: "g-casamento-7",
    imageId: "galeria-casamento-07",
    category: "casamentos",
    title: "Ensaio Pré-Wedding na Praia",
    subtitle: "Composição poética emoldurada através da aliança dourada",
    span: "normal",
  },

  // Formaturas
  {
    id: "g-formatura-1",
    imageId: "galeria-formatura-01",
    category: "formaturas",
    title: "Recepção do Baile de Gala",
    subtitle: "Ambientação nobre com moldura barroca dourada e iluminação clássica",
    span: "wide",
  },
  {
    id: "g-formatura-2",
    imageId: "galeria-formatura-02",
    category: "formaturas",
    title: "Salão Monumental com Escadaria Imperial",
    subtitle: "Cenário cinematográfico para a noite de gala dos formandos",
    span: "normal",
  },

  // Decoração
  {
    id: "g-decoracao-1",
    imageId: "galeria-decoracao-01",
    category: "decoracao",
    title: "Cenografia Temática Dino Baby",
    subtitle: "Cubos decorativos, folhagens e detalhes infantis acolhedores",
    span: "tall",
  },
  {
    id: "g-decoracao-2",
    imageId: "galeria-decoracao-02",
    category: "decoracao",
    title: "Painel Circular Cenográfico",
    subtitle: "Acabamento nobre e iluminação suave para momentos marcantes",
    span: "normal",
  },
  {
    id: "g-decoracao-3",
    imageId: "galeria-decoracao-03",
    category: "decoracao",
    title: "Mesa Principal de Três Lustres de Cristal",
    subtitle: "Harmonia visual com cortinamento verde esmeralda e doces finos",
    span: "wide",
  },
  {
    id: "g-decoracao-4",
    imageId: "galeria-decoracao-04",
    category: "decoracao",
    title: "Balão Cenográfico de Ar Quente",
    subtitle: "Instalação aérea com lustre de cristal suspenso e luz aconchegante",
    span: "tall",
  },
  {
    id: "g-decoracao-5",
    imageId: "galeria-decoracao-05",
    category: "decoracao",
    title: "Topo de Bolo Real Artesanal",
    subtitle: "Coroa dourada com acabamento minucioso para comemoração especial",
    span: "normal",
  },
  {
    id: "g-decoracao-6",
    imageId: "galeria-decoracao-06",
    category: "decoracao",
    title: "Mesa Temática O Pequeno Príncipe",
    subtitle: "Composição de doces finos em azul royal com peças douradas",
    span: "normal",
  },

  // Buffet
  {
    id: "g-buffet-1",
    imageId: "galeria-buffet-01",
    category: "buffet",
    title: "Mesa de Banquete com Taças de Cristal",
    subtitle: "Arranjos nobres de rosas vermelhas e mesa posta executiva",
    span: "normal",
  },
  {
    id: "g-buffet-2",
    imageId: "galeria-buffet-02",
    category: "buffet",
    title: "Bolo Escultural O Fantasma da Ópera",
    subtitle: "Design artístico exclusivo para eventos de alto impacto",
    span: "wide",
  },
  {
    id: "g-buffet-3",
    imageId: "galeria-buffet-03",
    category: "buffet",
    title: "Serviço Fino de Chá em Porcelana",
    subtitle: "Conjunto floral refinado para recepção e degustação elegante",
    span: "tall",
  },

  // Momentos Especiais
  {
    id: "g-momentos-1",
    imageId: "galeria-momentos-01",
    category: "momentos-especiais",
    title: "Chá Revelação em Família",
    subtitle: "Beijo carinhoso e cumplicidade dos pais na celebração da vida",
    span: "normal",
  },
  {
    id: "g-momentos-2",
    imageId: "galeria-momentos-02",
    category: "momentos-especiais",
    title: "Ensaio com Relógio Monumental",
    subtitle: "Composição cênica que eterniza o encanto da juventude",
    span: "tall",
  },
  {
    id: "g-momentos-3",
    imageId: "galeria-momentos-03",
    category: "momentos-especiais",
    title: "Primeiro Aninho do Príncipe Bento",
    subtitle: "Sorriso encantador do bebê com sua coroa dourada",
    span: "normal",
  },
  {
    id: "g-momentos-4",
    imageId: "galeria-momentos-04",
    category: "momentos-especiais",
    title: "Alegria Infantil na Pista",
    subtitle: "Crianças celebrando e se divertindo com muita descontração",
    span: "normal",
  },
  {
    id: "g-momentos-5",
    imageId: "galeria-momentos-05",
    category: "momentos-especiais",
    title: "Encanto e Descoberta",
    subtitle: "Bebê brincando com cubos decorativos no cenário temático",
    span: "normal",
  },
  {
    id: "g-momentos-6",
    imageId: "galeria-momentos-06",
    category: "momentos-especiais",
    title: "Espontaneidade e Carinho",
    subtitle: "Registros naturais da infância que tocam o coração",
    span: "normal",
  },
  {
    id: "g-momentos-7",
    imageId: "galeria-momentos-07",
    category: "momentos-especiais",
    title: "Abraço Caloroso entre Convidadas",
    subtitle: "Celebração genuína de amizade e momentos inesquecíveis",
    span: "normal",
  },
  {
    id: "g-momentos-8",
    imageId: "galeria-momentos-08",
    category: "momentos-especiais",
    title: "A Doce Espera do Bebê",
    subtitle: "Gestante radiante em verde esmeralda no seu chá de bebê",
    span: "tall",
  },
];
