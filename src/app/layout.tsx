import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { ThemeProvider } from "@/components/ThemeContext";
import { siteConfig } from "@/content/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.leandrosantanacerimonial.com.br";

export const viewport: Viewport = {
  themeColor: "#0B0908",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cerimonial e Eventos em Salvador | Leandro Santana",
    template: "%s",
  },
  description:
    "Cerimonial, buffet e decoração de eventos em Salvador/BA. Casamentos, 15 anos e formaturas com assessoria completa e presença em todas as etapas.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "cerimonial Salvador",
    "eventos Salvador",
    "buffet Salvador",
    "decoração de casamentos Salvador",
    "festa de 15 anos Salvador",
    "formaturas Salvador",
    "Leandro Santana Cerimonial",
    "assessoria de eventos Bahia",
  ],
  authors: [{ name: "Leandro Santana" }],
  creator: "Leandro Santana Cerimonial",
  publisher: "Leandro Santana Cerimonial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Cerimonial e Eventos em Salvador | Leandro Santana",
    description:
      "Cerimonial, buffet e decoração de eventos em Salvador/BA. Planejamento completo para casamentos, 15 anos, formaturas e celebrações.",
    siteName: "Leandro Santana Cerimonial",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Leandro Santana Cerimonial — Eventos em Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerimonial e Eventos em Salvador | Leandro Santana",
    description:
      "Cerimonial, buffet e decoração de eventos em Salvador/BA.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness & EventPlanner JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventPlanner"],
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone.display,
    email: siteConfig.email,
    url: siteUrl,
    taxID: siteConfig.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, nº ${siteConfig.address.number}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zipCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -12.9777,
      longitude: -38.4908,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.phone.whatsappUrl],
    priceRange: "$$$",
    areaServed: [
      {
        "@type": "City",
        name: "Salvador",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bahia",
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light')}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-ink text-ivory antialiased selection:bg-gold selection:text-ink min-h-screen flex flex-col">
        <ThemeProvider>
          {/* Skip Link para acessibilidade */}
          <a
            href="#conteudo-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-ink focus:font-medium focus:outline-none"
          >
            Pular para o conteúdo principal
          </a>

          {/* Cabeçalho global com menu de 7 itens */}
          <Header />

          {/* Conteúdo da página */}
          <main id="conteudo-principal" className="flex-1 w-full pb-14 sm:pb-0">
            {children}
          </main>

          {/* Botão flutuante WhatsApp com mensagem dinâmica */}
          <WhatsAppButton />

          {/* Barra fixa de CTA no celular */}
          <MobileCtaBar />

          {/* Rodapé institucional com 4 colunas */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
