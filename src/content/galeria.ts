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

  // Casamentos
  {
    id: "g-casamento-1",
    imageId: "galeria-casamento-01",
    category: "casamentos",
    title: "Cerimônia ao Ar Livre",
    subtitle: "Pórtico floral e iluminação natural em celebração romântica",
    span: "wide",
  },
  {
    id: "g-casamento-2",
    imageId: "galeria-casamento-02",
    category: "casamentos",
    title: "Atenção Meticulosa aos Detalhes",
    subtitle: "Alianças, flores nobres e essência dos noivos",
    span: "tall",
  },
  {
    id: "g-casamento-3",
    imageId: "galeria-casamento-03",
    category: "casamentos",
    title: "Recepção Nupcial",
    subtitle: "Mesa nobre de bolo com lustres e arranjos suspensos",
    span: "wide",
  },

  // Formaturas
  {
    id: "g-formatura-1",
    imageId: "galeria-formatura-01",
    category: "formaturas",
    title: "Entrada Solene dos Formandos",
    subtitle: "Emoção e aplausos na colação de grau oficial",
    span: "wide",
  },
  {
    id: "g-formatura-2",
    imageId: "galeria-formatura-02",
    category: "formaturas",
    title: "Baile de Gala dos Concluintes",
    subtitle: "Brinde coletivo em noite de gala memorável",
    span: "normal",
  },

  // Decoração
  {
    id: "g-decoracao-1",
    imageId: "galeria-decoracao-01",
    category: "decoracao",
    title: "Mesa Posta e Castiçais de Cristal",
    subtitle: "Arranjos florais nobres com toques dourados acetinados",
    span: "tall",
  },
  {
    id: "g-decoracao-2",
    imageId: "galeria-decoracao-02",
    category: "decoracao",
    title: "Iluminação Aérea e Velas",
    subtitle: "Clima intimista com elementos suspensos e folhagens tropicais",
    span: "normal",
  },
  {
    id: "g-decoracao-3",
    imageId: "galeria-decoracao-03",
    category: "decoracao",
    title: "Cenografia de Salão Principal",
    subtitle: "Harmonia visual planejada para encantar desde a entrada",
    span: "wide",
  },

  // Buffet
  {
    id: "g-buffet-1",
    imageId: "galeria-buffet-01",
    category: "buffet",
    title: "Finger Foods e Canapés Contemporâneos",
    subtitle: "Apresentação impecável com serviço volante ágil",
    span: "normal",
  },
  {
    id: "g-buffet-2",
    imageId: "galeria-buffet-02",
    category: "buffet",
    title: "Mesa de Frios e Queijos Nobres",
    subtitle: "Ilha gastronômica com ingredientes selecionados",
    span: "wide",
  },
  {
    id: "g-buffet-3",
    imageId: "galeria-buffet-03",
    category: "buffet",
    title: "Gastronomia Empratada",
    subtitle: "Pratos quentes executados com precisão e sabor inigualável",
    span: "tall",
  },

  // Momentos Especiais
  {
    id: "g-momentos-1",
    imageId: "galeria-momentos-01",
    category: "momentos-especiais",
    title: "A Dança dos Noivos",
    subtitle: "Cumplicidade e emoção genuína na pista",
    span: "normal",
  },
  {
    id: "g-momentos-2",
    imageId: "galeria-momentos-02",
    category: "momentos-especiais",
    title: "Coordenação de Cerimonial",
    subtitle: "Presença discreta garantindo que tudo aconteça na hora certa",
    span: "tall",
  },
  {
    id: "g-momentos-3",
    imageId: "galeria-momentos-03",
    category: "momentos-especiais",
    title: "Celebração e Efeitos Especiais",
    subtitle: "Chuva de prata e momentos de êxtase na comemoração",
    span: "wide",
  },
];
