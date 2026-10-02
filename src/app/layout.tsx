import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
    default: "Leandro Santana Cerimonial | Salvador / BA",
    template: "%s | Leandro Santana Cerimonial",
  },
  description:
    "Cerimonial, buffet, decoração e produção de eventos em Salvador/BA. Transformamos casamentos, 15 anos, formaturas e eventos corporativos em experiências inesquecíveis.",
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
    title: "Leandro Santana Cerimonial | Eventos de Alto Padrão em Salvador",
    description:
      "Cerimonial, buffet, decoração e produção de eventos em Salvador/BA. Momentos únicos orquestrados com sofisticação e excelência.",
    siteName: "Leandro Santana Cerimonial",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Leandro Santana Cerimonial — Eventos de Alto Padrão em Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandro Santana Cerimonial | Salvador / BA",
    description:
      "Cerimonial, buffet, decoração e produção de eventos em Salvador/BA.",
    images: ["/og-image.jpg"],
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
  // Schema.org LocalBusiness JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: "+5571983216686",
    email: siteConfig.email,
    url: siteUrl,
    taxID: siteConfig.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, nº ${siteConfig.address.number}, ${siteConfig.address.complement}`,
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
    areaServed: {
      "@type": "City",
      name: "Salvador",
    },
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-ink text-ivory antialiased selection:bg-gold selection:text-ink min-h-screen flex flex-col">
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
        <main id="conteudo-principal" className="flex-1 w-full">
          {children}
        </main>

        {/* Botão flutuante WhatsApp */}
        <WhatsAppButton />

        {/* Rodapé institucional com 4 colunas */}
        <Footer />
      </body>
    </html>
  );
}
