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
    note?: string;
  };
  cnpj: string;
  social: {
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
  tagline: "Assessoria completa, gastronomia e ambientação com atenção dedicada a você.",
  description:
    "Cerimonial, buffet e decoração de eventos em Salvador/BA. Planejamento completo para casamentos, 15 anos, formaturas e eventos corporativos.",
  phone: {
    display: "(71) 98321-6686",
    raw: "5571983216686",
    whatsappUrl: "https://wa.me/5571983216686",
    defaultMessage: "Olá! Gostaria de solicitar um orçamento com a Leandro Santana Cerimonial.",
  },
  email: "atendimento@leandrosantanacerimonial.com.br",
  address: {
    full: "Rua Hélio de Oliveira, nº 215, Luiz Anselmo, Salvador/BA, CEP 40.261-060",
    street: "Rua Hélio de Oliveira",
    number: "215",
    complement: "",
    neighborhood: "Luiz Anselmo",
    city: "Salvador",
    state: "BA",
    zipCode: "40.261-060",
  },
  cnpj: "59.814.115/0001-62",
  social: {
    instagram: "https://www.instagram.com/decasafestas",
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
  // Menu do rodapé incluindo Orçamentos e Blog para acesso completo
  footerNavigation: [
    { label: "Home", href: "/" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Eventos", href: "/eventos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Galeria", href: "/galeria" },
    { label: "Blog & Dicas", href: "/blog" },
    { label: "Orçamentos", href: "/orcamentos" },
    { label: "Contato", href: "/contato" },
  ],
};
