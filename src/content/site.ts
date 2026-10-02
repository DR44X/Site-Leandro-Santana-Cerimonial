export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: {
    display: string;
    raw: string;
    whatsappUrl: string;
    defaultMessage: string;
  };
  email: string;
  address: {
    full: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    // TODO: CONTEÚDO REAL - confirmar complemento "Pavimento" com o cliente
    note: string;
  };
  cnpj: string;
  social: {
    // TODO: CONTEÚDO REAL - confirmar se @decasafestas é o perfil oficial permanente a linkar
    instagram: string;
    instagramUser: string;
    whatsapp: string;
  };
  brandContext: {
    founder: string;
    foundationBrand: string;
    phase: string;
    positioning: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  footerNavigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Leandro Santana Cerimonial",
  tagline: "Eventos completos com sofisticação, emoção e cuidado em cada detalhe.",
  description:
    "Cerimonial, buffet, decoração e produção de eventos em Salvador/BA. Transformamos casamentos, 15 anos, formaturas e eventos corporativos em experiências inesquecíveis.",
  phone: {
    display: "(71) 98321-6686",
    raw: "5571983216686",
    whatsappUrl: "https://wa.me/5571983216686",
    defaultMessage: "Olá! Gostaria de solicitar um orçamento com a Leandro Santana Cerimonial.",
  },
  email: "atendimento@leandrosantanacerimonial.com.br",
  address: {
    full: "Rua Hélio de Oliveira, nº 215, Pavimento, Luiz Anselmo, Salvador/BA, CEP 40.261-060",
    street: "Rua Hélio de Oliveira",
    number: "215",
    complement: "Pavimento",
    neighborhood: "Luiz Anselmo",
    city: "Salvador",
    state: "BA",
    zipCode: "40.261-060",
    note: "Confirmar complemento 'Pavimento' com o cliente", // TODO: CONTEÚDO REAL
  },
  cnpj: "59.814.115/0001-62",
  social: {
    instagram: "https://www.instagram.com/decasafestas", // TODO: CONTEÚDO REAL - verificar perfil oficial definitivo
    instagramUser: "@decasafestas",
    whatsapp: "https://wa.me/5571983216686",
  },
  brandContext: {
    founder: "Leandro Santana",
    foundationBrand: "DeCasa",
    phase: "Marca própria de alta assinatura",
    positioning: "Cerimonial, buffet, decoração e produção de eventos de alto padrão em Salvador e região metropolitana.",
  },
  // Menu principal com os 7 itens exatos exigidos no briefing
  navigation: [
    { label: "Home", href: "/" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Eventos", href: "/eventos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Galeria", href: "/galeria" },
    { label: "Orçamentos", href: "/orcamentos" },
    { label: "Contato", href: "/contato" },
  ],
  // Menu do rodapé com os 6 itens exatos do briefing do cliente (Seção 15)
  footerNavigation: [
    { label: "Home", href: "/" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Eventos", href: "/eventos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Galeria", href: "/galeria" },
    { label: "Contato", href: "/contato" },
  ],
};
