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
    src: "/images/hero/hero-main.jpg", // TEMPORÁRIA
    alt: "Salão de festas luxuoso com arranjos florais suspensos e iluminação dourada intimista",
    categoria: "hero",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
    nota: "Trocar pela foto oficial de abertura de evento produzida por Leandro Santana",
  },
  "hero-secondary": {
    id: "hero-secondary",
    src: "/images/hero/hero-secondary.jpg", // TEMPORÁRIA
    alt: "Brinde com taças de champagne em celebração refinada",
    categoria: "hero",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },

  // ==========================================
  // EQUIPE & QUEM SOMOS
  // ==========================================
  "leandro-santana": {
    id: "leandro-santana",
    src: "/images/equipe/leandro-santana.jpg", // TEMPORÁRIA
    alt: "Leandro Santana, fundador e diretor de cerimonial",
    categoria: "equipe",
    proporcao: "3:4",
    foco: "top center",
    isTemporaria: true,
    nota: "Substituir pelo retrato profissional em estúdio de Leandro Santana",
  },
  "bastidores-evento": {
    id: "bastidores-evento",
    src: "/images/equipe/bastidores-evento.jpg", // TEMPORÁRIA
    alt: "Equipe de produção e cerimonial ajustando detalhes da mesa de recepção",
    categoria: "equipe",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },

  // ==========================================
  // CATEGORIAS DE EVENTOS (CARDS & PÁGINAS)
  // ==========================================
  "evento-casamentos": {
    id: "evento-casamentos",
    src: "/images/eventos/casamentos.jpg", // TEMPORÁRIA
    alt: "Cenário cerimonial de casamento com gazebo floral e cadeiras clássicas",
    categoria: "casamentos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "evento-casamentos-cerimonia": {
    id: "evento-casamentos-cerimonia",
    src: "/images/eventos/casamentos-cerimonia.jpg", // TEMPORÁRIA
    alt: "Cerimônia de casamento emocionante com passadeira espelhada e velas",
    categoria: "casamentos",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
  },
  "evento-casamentos-festa": {
    id: "evento-casamentos-festa",
    src: "/images/eventos/casamentos-festa.jpg", // TEMPORÁRIA
    alt: "Recepção de casamento animada com iluminação cênica e pista",
    categoria: "casamentos",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },

  "evento-15-anos": {
    id: "evento-15-anos",
    src: "/images/eventos/15-anos-debutante.jpg", // FOTO REAL DO CLIENTE (cada de festa)
    alt: "Debutante sorridente com tiara de cristais e vestido rosé brilhante em festa de 15 anos",
    categoria: "15-anos",
    proporcao: "3:4",
    foco: "top center",
    isTemporaria: false,
    nota: "Foto real da celebração de 15 anos produzida pela DeCasa / Leandro Santana",
  },
  "evento-15-anos-pista": {
    id: "evento-15-anos-pista",
    src: "/images/eventos/15-anos-valsa.jpg", // FOTO REAL DO CLIENTE (cada de festa)
    alt: "Valsa da debutante em pista com piso de LED e iluminação cênica magenta",
    categoria: "15-anos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
    nota: "Foto real de valsa na pista de LED iluminada",
  },

  "evento-formaturas": {
    id: "evento-formaturas",
    src: "/images/eventos/formaturas.jpg", // TEMPORÁRIA
    alt: "Baile de formatura com salão nobre e mesa de formandos decorada",
    categoria: "formaturas",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "evento-formaturas-brinde": {
    id: "evento-formaturas-brinde",
    src: "/images/eventos/formaturas-brinde.jpg", // TEMPORÁRIA
    alt: "Comemoração de formandos brindando a conquista acadêmica",
    categoria: "formaturas",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
  },

  "evento-corporativos": {
    id: "evento-corporativos",
    src: "/images/eventos/corporativos.jpg", // TEMPORÁRIA
    alt: "Jantar corporativo de alto nível com iluminação arquitetural e mesas executivas",
    categoria: "corporativos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "evento-corporativos-coquetel": {
    id: "evento-corporativos-coquetel",
    src: "/images/eventos/corporativos-coquetel.jpg", // TEMPORÁRIA
    alt: "Coquetel executivo e networking com serviço volante de buffet",
    categoria: "corporativos",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
  },

  "evento-aniversarios": {
    id: "evento-aniversarios",
    src: "/images/eventos/aniversarios.jpg", // TEMPORÁRIA
    alt: "Festa de aniversário sofisticada com mesa posta e iluminação a velas",
    categoria: "aniversarios",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "evento-aniversarios-bolo": {
    id: "evento-aniversarios-bolo",
    src: "/images/eventos/aniversarios-bolo.jpg", // TEMPORÁRIA
    alt: "Mesa de doces finos e bolo decorado para aniversário comemorativo",
    categoria: "aniversarios",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },

  "evento-confraternizacoes": {
    id: "evento-confraternizacoes",
    src: "/images/eventos/confraternizacoes.jpg", // TEMPORÁRIA
    alt: "Confraternização festiva ao entardecer com lounge e cordões de luz",
    categoria: "confraternizacoes",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "evento-confraternizacoes-lounge": {
    id: "evento-confraternizacoes-lounge",
    src: "/images/eventos/confraternizacoes-lounge.jpg", // TEMPORÁRIA
    alt: "Lounge descontraído e sofisticado para confraternizações de fim de ano",
    categoria: "confraternizacoes",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
  },

  // ==========================================
  // SERVIÇOS EM DESTAQUE (01 A 07)
  // ==========================================
  "servico-cerimonial": {
    id: "servico-cerimonial",
    src: "/images/servicos/cerimonial.jpg", // TEMPORÁRIA
    alt: "Assessoria e cerimonial alinhando cronograma e montagem antes do evento",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "servico-buffet": {
    id: "servico-buffet",
    src: "/images/servicos/buffet.jpg", // TEMPORÁRIA
    alt: "Buffet gastronômico completo com entradas empratadas e gastronomia requintada",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "servico-decoracao": {
    id: "servico-decoracao",
    src: "/images/servicos/decoracao.jpg", // TEMPORÁRIA
    alt: "Projeto de decoração floral suntuosa com lustres de cristal e detalhes dourados",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "servico-espaco": {
    id: "servico-espaco",
    src: "/images/servicos/espaco.jpg", // TEMPORÁRIA
    alt: "Espaço nobre para eventos com arquitetura ampla e estrutura climatizada",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "servico-bar": {
    id: "servico-bar",
    src: "/images/servicos/bar.jpg", // TEMPORÁRIA
    alt: "Bar de drinks artesanais com bartenders profissionais e coquetelaria exclusiva",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "servico-musica": {
    id: "servico-musica",
    src: "/images/servicos/musica.jpg", // TEMPORÁRIA
    alt: "Estrutura técnica com iluminação robótica, sonorização de alta fidelidade e DJ",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "servico-foto": {
    id: "servico-foto",
    src: "/images/servicos/foto.jpg", // TEMPORÁRIA
    alt: "Cobertura fotográfica e cinematográfica registrando momentos marcantes do evento",
    categoria: "servicos",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },

  // ==========================================
  // GALERIA (FILTROS)
  // ==========================================
  "galeria-casamento-01": {
    id: "galeria-casamento-01",
    src: "/images/galeria/casamento-01.jpg", // TEMPORÁRIA
    alt: "Casamento ao ar livre com decoração rústico-chique e arranjos aéreos",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-casamento-02": {
    id: "galeria-casamento-02",
    src: "/images/galeria/casamento-02.jpg", // TEMPORÁRIA
    alt: "Detalhe da aliança e bouquet da noiva com flores nobres",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-casamento-03": {
    id: "galeria-casamento-03",
    src: "/images/galeria/casamento-03.jpg", // TEMPORÁRIA
    alt: "Recepção nupcial com mesa de bolo iluminada e arranjos altos",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
  },

  "galeria-15-anos-01": {
    id: "galeria-15-anos-01",
    src: "/images/galeria/15-anos-debutante.jpg", // FOTO REAL DO CLIENTE
    alt: "Debutante com coroa de pedrarias e vestido de baile rosé",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "top center",
    isTemporaria: false,
    nota: "Foto real da debutante realizada pela DeCasa / Leandro Santana",
  },
  "galeria-15-anos-02": {
    id: "galeria-15-anos-02",
    src: "/images/galeria/15-anos-valsa.jpg", // FOTO REAL DO CLIENTE
    alt: "Momento da valsa da debutante em pista iluminada",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
    nota: "Foto real da pista de LED e iluminação cênica",
  },
  "galeria-15-anos-03": {
    id: "galeria-15-anos-03",
    src: "/images/galeria/15-anos-detalhe.jpg", // FOTO REAL DO CLIENTE
    alt: "Debutante sentada sobre a saia do vestido com iluminação estelar ao fundo",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: false,
    nota: "Foto real do ensaio no salão",
  },

  "galeria-formatura-01": {
    id: "galeria-formatura-01",
    src: "/images/galeria/formatura-01.jpg", // TEMPORÁRIA
    alt: "Entrada triunfal dos formandos na solenidade de formatura",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-formatura-02": {
    id: "galeria-formatura-02",
    src: "/images/galeria/formatura-02.jpg", // TEMPORÁRIA
    alt: "Brinde com taças personalizadas no baile de gala dos formandos",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },

  "galeria-decoracao-01": {
    id: "galeria-decoracao-01",
    src: "/images/galeria/decoracao-01.jpg", // TEMPORÁRIA
    alt: "Mesa de recepção decorada com castiçais de cristal e flores em tons quentes",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-decoracao-02": {
    id: "galeria-decoracao-02",
    src: "/images/galeria/decoracao-02.jpg", // TEMPORÁRIA
    alt: "Ambientação com velas suspensas e folhagens tropicais elegantes",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-decoracao-03": {
    id: "galeria-decoracao-03",
    src: "/images/galeria/decoracao-03.jpg", // TEMPORÁRIA
    alt: "Mesa principal ornamentada com peças clássicas e sousplats dourados",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
  },

  "galeria-buffet-01": {
    id: "galeria-buffet-01",
    src: "/images/galeria/buffet-01.jpg", // TEMPORÁRIA
    alt: "Canapés finos montados com precisão artística para coquetel de abertura",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-buffet-02": {
    id: "galeria-buffet-02",
    src: "/images/galeria/buffet-02.jpg", // TEMPORÁRIA
    alt: "Mesa de antepastos nobres, queijos finos e pães artesanais",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-buffet-03": {
    id: "galeria-buffet-03",
    src: "/images/galeria/buffet-03.jpg", // TEMPORÁRIA
    alt: "Jantar empratado com finalização gourmet e serviço impecável",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },

  "galeria-momentos-01": {
    id: "galeria-momentos-01",
    src: "/images/galeria/momentos-01.jpg", // TEMPORÁRIA
    alt: "Abraço emocionante entre anfitriões em meio à pista de dança",
    categoria: "galeria",
    proporcao: "4:3",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-momentos-02": {
    id: "galeria-momentos-02",
    src: "/images/galeria/momentos-02.jpg", // TEMPORÁRIA
    alt: "Cerimonialista coordenando a contagem regressiva para a valsa",
    categoria: "galeria",
    proporcao: "3:4",
    foco: "center center",
    isTemporaria: true,
  },
  "galeria-momentos-03": {
    id: "galeria-momentos-03",
    src: "/images/galeria/momentos-03.jpg", // TEMPORÁRIA
    alt: "Chuva de fogos indoor e efeitos luminosos celebrando o ponto alto da noite",
    categoria: "galeria",
    proporcao: "16:9",
    foco: "center center",
    isTemporaria: true,
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
      src: "/images/hero/hero-main.jpg",
      alt: "Leandro Santana Cerimonial",
      categoria: "hero",
      proporcao: "16:9",
      foco: "center center",
      isTemporaria: true,
    };
  }
  return item;
}
