export interface ImageManifestItem {
  id: string;
  src: string;
  alt: string;
  categoria:
    | "hero"
    | "equipe"
    | "casamentos"
    | "15-anos"
    | "formaturas"
    | "corporativos"
    | "aniversarios"
    | "confraternizacoes"
    | "servicos"
    | "galeria";
  proporcao: "16:9" | "4:3" | "3:4" | "1:1" | "21:9" | "2:3";
  foco: string; // CSS object-position, ex: 'center center', 'top center'
  isTemporaria: boolean;
  nota?: string;
}

export const imageManifest: Record<string, ImageManifestItem> = {
  // ==========================================
  // HERO & VÍDEO
  // ==========================================
  "hero-main": {
    id: "hero-main",
    src: "/images/hero/hero-main.webp",
    alt: "Mesa majestosa de bolo e doces finos com três lustres de cristal e cortinamento verde esmeralda",
    categoria: "hero",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
    nota: "Produção cenográfica oficial de evento por Leandro Santana",
  },
  "hero-secondary": {
    id: "hero-secondary",
    src: "/images/hero/hero-secondary.webp",
    alt: "Leandro Santana e equipe de cerimonial celebrando com braços abertos diante de letras iluminadas",
    categoria: "hero",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },

  // ==========================================
  // EQUIPE & QUEM SOMOS
  // ==========================================
  "leandro-santana": {
    id: "leandro-santana",
    src: "/ChatGPT-Image-19-de-mai.-de-2026--18_18_07-640w.png",
    alt: "Leandro Santana, cerimonialista e produtor de eventos de luxo em Salvador",
    categoria: "equipe",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
    nota: "Retrato oficial de Leandro Santana em traje de gala",
  },
  "bastidores-evento": {
    id: "bastidores-evento",
    src: "/images/equipe/bastidores-evento.webp",
    alt: "Equipe de produção e cerimonial Leandro Santana reunida no salão de eventos",
    categoria: "equipe",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },

  // ==========================================
  // CATEGORIAS DE EVENTOS (CARDS & PÁGINAS)
  // ==========================================
  "evento-casamentos": {
    id: "evento-casamentos",
    src: "/images/eventos/casamentos.webp",
    alt: "Casal de noivos apaixonados abraçados sob pórtico de flores naturais",
    categoria: "casamentos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "evento-casamentos-cerimonia": {
    id: "evento-casamentos-cerimonia",
    src: "/images/eventos/casamentos-cerimonia.webp",
    alt: "Cerimônia solene de casamento na igreja com noiva, daminha de honra e pajem",
    categoria: "casamentos",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },
  "evento-casamentos-festa": {
    id: "evento-casamentos-festa",
    src: "/images/eventos/casamentos-festa.webp",
    alt: "Noivos e padrinhos em festa vibrando e comemorando com taças de champanhe",
    categoria: "casamentos",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },

  "evento-15-anos": {
    id: "evento-15-anos",
    src: "/images/eventos/15-anos-debutante.webp",
    alt: "Debutante sorridente com tiara de cristais e vestido rosé brilhante em festa de 15 anos",
    categoria: "15-anos",
    proporcao: "3:4",
    foco: "top center",
    isTemporaria: false,
    nota: "Foto real da celebração de 15 anos produzida pela DeCasa / Leandro Santana",
  },
  "evento-15-anos-pista": {
    id: "evento-15-anos-pista",
    src: "/images/eventos/15-anos-valsa.webp",
    alt: "Valsa da debutante em pista com piso de LED e iluminação cênica magenta",
    categoria: "15-anos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
    nota: "Foto real de valsa na pista de LED iluminada",
  },

  "evento-formaturas": {
    id: "evento-formaturas",
    src: "/images/eventos/formaturas.webp",
    alt: "Salão de baile de formatura com escadaria monumental e mesas decoradas",
    categoria: "formaturas",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "evento-formaturas-brinde": {
    id: "evento-formaturas-brinde",
    src: "/images/eventos/formaturas-brinde.webp",
    alt: "Banquete de gala com taças de cristal, arranjos de rosas vermelhas e iluminação cênica",
    categoria: "formaturas",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },

  "evento-corporativos": {
    id: "evento-corporativos",
    src: "/images/eventos/corporativos.webp",
    alt: "Produção de gala com iluminação cênica e celebração executiva de alto padrão",
    categoria: "corporativos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "evento-corporativos-coquetel": {
    id: "evento-corporativos-coquetel",
    src: "/images/eventos/corporativos-coquetel.webp",
    alt: "Recepção refinada de convidados com moldura barroca dourada e ambientação exclusiva",
    categoria: "corporativos",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },

  "evento-aniversarios": {
    id: "evento-aniversarios",
    src: "/images/eventos/aniversarios.webp",
    alt: "Mesa cenográfica de aniversário infantil com tema O Pequeno Príncipe em tons de azul e dourado",
    categoria: "aniversarios",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "evento-aniversarios-bolo": {
    id: "evento-aniversarios-bolo",
    src: "/images/eventos/aniversarios-bolo.webp",
    alt: "Topo de bolo artesanal com coroa dourada do príncipe para comemoração de aniversário",
    categoria: "aniversarios",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },

  "evento-confraternizacoes": {
    id: "evento-confraternizacoes",
    src: "/images/eventos/confraternizacoes.webp",
    alt: "Gestante radiante em elegante vestido verde esmeralda no chá de bebê",
    categoria: "confraternizacoes",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "evento-confraternizacoes-lounge": {
    id: "evento-confraternizacoes-lounge",
    src: "/images/eventos/confraternizacoes-lounge.webp",
    alt: "Abraço caloroso de convidadas em lounge decorado com arranjos de balões orgânicos",
    categoria: "confraternizacoes",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },

  // ==========================================
  // SERVIÇOS EM DESTAQUE (01 A 07)
  // ==========================================
  "servico-cerimonial": {
    id: "servico-cerimonial",
    src: "/images/servicos/cerimonial.webp",
    alt: "Leandro Santana e equipe de cerimonial conduzindo dinâmicas e animação do evento",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "servico-buffet": {
    id: "servico-buffet",
    src: "/images/servicos/buffet.webp",
    alt: "Serviço de buffet requintado com louça fina de porcelana floral e talheres nobres",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "servico-decoracao": {
    id: "servico-decoracao",
    src: "/images/servicos/decoracao.webp",
    alt: "Balão cenográfico de ar quente com iluminação interna e lustre de cristal suspenso",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "servico-espaco": {
    id: "servico-espaco",
    src: "/images/servicos/espaco.webp",
    alt: "Salão nobre de recepção com escadaria clássica imponente e arquitetura monumental",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "servico-bar": {
    id: "servico-bar",
    src: "/images/servicos/bar.webp",
    alt: "Bolo cenográfico escultural temático O Fantasma da Ópera e estrutura de bar requintada",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "servico-musica": {
    id: "servico-musica",
    src: "/images/servicos/musica.webp",
    alt: "Estrutura completa com letras gigantes iluminadas, iluminação cênica e pista animada",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "servico-foto": {
    id: "servico-foto",
    src: "/images/servicos/foto.webp",
    alt: "Ensaio fotográfico na praia ao pôr do sol enquadrado pela aliança de casamento",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },

  // ==========================================
  // GALERIA (FILTROS)
  // ==========================================
  "galeria-casamento-01": {
    id: "galeria-casamento-01",
    src: "/images/galeria/casamento-01.webp",
    alt: "Casamento emocionante com os noivos de smoking trocando beijo carinhoso",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-casamento-02": {
    id: "galeria-casamento-02",
    src: "/images/galeria/casamento-02.webp",
    alt: "Making of exclusivo da noiva recebendo cuidados do maquiador profissional",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-casamento-03": {
    id: "galeria-casamento-03",
    src: "/images/galeria/casamento-03.webp",
    alt: "Registro poético em bokeh das mãos dos noivos com a aliança de casamento",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-casamento-04": {
    id: "galeria-casamento-04",
    src: "/images/galeria/casamento-04.webp",
    alt: "Entrada triunfal da noiva na igreja acompanhada por daminha de honra e pajem",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-casamento-05": {
    id: "galeria-casamento-05",
    src: "/images/galeria/casamento-05.webp",
    alt: "Noivos e padrinhos em euforia comemorando na recepção de casamento",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-casamento-06": {
    id: "galeria-casamento-06",
    src: "/images/galeria/casamento-06.webp",
    alt: "Noivos abraçados sob belíssimo pórtico de flores naturais ao entardecer",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-casamento-07": {
    id: "galeria-casamento-07",
    src: "/images/galeria/casamento-07.webp",
    alt: "Composição artística de pré-wedding na praia vista através da aliança dourada",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },

  "galeria-15-anos-01": {
    id: "galeria-15-anos-01",
    src: "/images/galeria/15-anos-debutante.webp",
    alt: "Debutante com coroa de pedrarias e vestido de baile rosé",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "top center",
    isTemporaria: false,
    nota: "Foto real da debutante realizada pela DeCasa / Leandro Santana",
  },
  "galeria-15-anos-02": {
    id: "galeria-15-anos-02",
    src: "/images/galeria/15-anos-valsa.webp",
    alt: "Momento da valsa da debutante em pista iluminada com piso de LED",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
    nota: "Foto real da pista de LED e iluminação cênica",
  },
  "galeria-15-anos-03": {
    id: "galeria-15-anos-03",
    src: "/images/galeria/15-anos-detalhe.webp",
    alt: "Debutante sentada sobre a saia do vestido com iluminação estelar ao fundo",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
    nota: "Foto real do ensaio no salão",
  },
  "galeria-15-anos-04": {
    id: "galeria-15-anos-04",
    src: "/images/galeria/15-anos-04.webp",
    alt: "Debutante em ensaio temático Alice no País das Maravilhas com relógio gigante e piso xadrez",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
    nota: "Ensaio temático produzido com cenografia exclusiva",
  },

  "galeria-formatura-01": {
    id: "galeria-formatura-01",
    src: "/images/galeria/formatura-01.webp",
    alt: "Recepção solene do baile de gala com moldura barroca dourada e iluminação refinada",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-formatura-02": {
    id: "galeria-formatura-02",
    src: "/images/galeria/formatura-02.webp",
    alt: "Salão de gala imperial com escadaria monumental para o baile dos concluintes",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },

  "galeria-decoracao-01": {
    id: "galeria-decoracao-01",
    src: "/images/galeria/decoracao-01.webp",
    alt: "Cenografia temática Dino Baby com cubos decorativos e elementos lúdicos",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-decoracao-02": {
    id: "galeria-decoracao-02",
    src: "/images/galeria/decoracao-02.webp",
    alt: "Painel circular temático com acabamento refinado e iluminação suave",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-decoracao-03": {
    id: "galeria-decoracao-03",
    src: "/images/galeria/decoracao-03.webp",
    alt: "Mesa principal suntuosa de bolo e doces com 3 lustres de cristal e cortinamento esmeralda",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-decoracao-04": {
    id: "galeria-decoracao-04",
    src: "/images/galeria/decoracao-04.webp",
    alt: "Balão de ar quente cenográfico com lustre de cristal e iluminação acolhedora",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-decoracao-05": {
    id: "galeria-decoracao-05",
    src: "/images/galeria/decoracao-05.webp",
    alt: "Topo de bolo com coroa artesanal dourada e detalhes personalizados",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-decoracao-06": {
    id: "galeria-decoracao-06",
    src: "/images/galeria/decoracao-06.webp",
    alt: "Mesa de doces finos O Pequeno Príncipe em tons de azul royal e dourado",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },

  "galeria-buffet-01": {
    id: "galeria-buffet-01",
    src: "/images/galeria/buffet-01.webp",
    alt: "Mesa de banquete finamente posta com taças de cristal e arranjos florais de rosas vermelhas",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-buffet-02": {
    id: "galeria-buffet-02",
    src: "/images/galeria/buffet-02.webp",
    alt: "Bolo cenográfico de luxo temático O Fantasma da Ópera com detalhes esculpidos",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-buffet-03": {
    id: "galeria-buffet-03",
    src: "/images/galeria/buffet-03.webp",
    alt: "Serviço de chá e degustação com conjunto de louças florais de porcelana",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },

  "galeria-momentos-01": {
    id: "galeria-momentos-01",
    src: "/images/galeria/momentos-01.webp",
    alt: "Beijo carinhoso do casal durante a celebração do chá revelação",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-momentos-02": {
    id: "galeria-momentos-02",
    src: "/images/galeria/momentos-02.webp",
    alt: "Debutante no ensaio temático Alice diante de relógio monumental",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-momentos-03": {
    id: "galeria-momentos-03",
    src: "/images/galeria/momentos-03.webp",
    alt: "Bebê Bento sorridente com coroa de príncipe celebrando 1 aninho",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-momentos-04": {
    id: "galeria-momentos-04",
    src: "/images/galeria/momentos-04.webp",
    alt: "Crianças se divertindo e comemorando em clima de festa",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-momentos-05": {
    id: "galeria-momentos-05",
    src: "/images/galeria/momentos-05.webp",
    alt: "Registro espontâneo do bebê brincando com cubos decorativos",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-momentos-06": {
    id: "galeria-momentos-06",
    src: "/images/galeria/momentos-06.webp",
    alt: "Momento carinhoso e descontraído da criança no espaço de celebração",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-momentos-07": {
    id: "galeria-momentos-07",
    src: "/images/galeria/momentos-07.webp",
    alt: "Abraço afetuoso e genuíno entre convidadas da festa",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: false,
  },
  "galeria-momentos-08": {
    id: "galeria-momentos-08",
    src: "/images/galeria/momentos-08.webp",
    alt: "Gestante elegante em vestido verde esmeralda celebrando a espera do bebê",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
  },
};

/**
 * Função utilitária para recuperar dados de imagem com segurança pelo ID
 */
export function getImage(id: string): ImageManifestItem {
  const item = imageManifest[id];
  if (!item) {
    console.warn(`Imagem com ID "${id}" não encontrada no manifesto. Retornando fallback.`);
    return {
      id,
      src: "/images/hero/hero-main.webp",
      alt: "Leandro Santana Cerimonial",
      categoria: "hero",
      proporcao: "16:9",
      foco: "center center",
      isTemporaria: false,
    };
  }
  return item;
}
