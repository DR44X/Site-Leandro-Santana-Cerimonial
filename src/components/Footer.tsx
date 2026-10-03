import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-dark border-t border-gold/20 text-ivory/80 pt-16 pb-12 relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Colunas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gold/15">
          {/* Coluna 1: Marca & Síntese */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-gold/70 flex items-center justify-center bg-espresso">
                <span className="font-serif text-lg tracking-wider text-gold font-semibold">LS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider text-ivory font-medium">
                  LEANDRO SANTANA
                </span>
                <span className="text-[9px] tracking-widest text-gold uppercase">
                  Cerimonial & Eventos
                </span>
              </div>
            </div>
            <p className="text-sm text-ivory/70 leading-relaxed font-sans pt-2">
              Assessoria completa, buffet e decoração com atendimento dedicado a você.
            </p>
            <p className="text-xs text-gold/80 italic font-serif">
              Salvador, Bahia e Região Metropolitana.
            </p>
          </div>

          {/* Coluna 2: Menu (6 itens exatos do briefing) */}
          <div className="space-y-4">
            <h3 className="font-serif text-base tracking-widest uppercase text-gold font-medium">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors inline-block py-0.5 focus-visible:outline-1 focus-visible:outline-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato & Dados Fiscais */}
          <div className="space-y-4">
            <h3 className="font-serif text-base tracking-widest uppercase text-gold font-medium">
              Atendimento
            </h3>
            <div className="space-y-2.5 text-sm text-ivory/75 font-sans">
              <p>
                <strong className="text-gold/90 font-normal">WhatsApp / Tel:</strong>{" "}
                <a
                  href={siteConfig.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold underline-offset-4 hover:underline"
                >
                  {siteConfig.phone.display}
                </a>
              </p>
              <p>
                <strong className="text-gold/90 font-normal">E-mail:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold underline-offset-4 hover:underline break-all"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="leading-relaxed">
                <strong className="text-gold/90 font-normal">Endereço:</strong>{" "}
                {siteConfig.address.full}
              </p>
              <p className="text-xs text-ivory/75 pt-1">
                CNPJ: {siteConfig.cnpj}
              </p>
            </div>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-serif text-base tracking-widest uppercase text-gold font-medium">
              Conecte-se
            </h3>
            <p className="text-sm text-ivory/70 leading-relaxed font-sans">
              Acompanhe os bastidores e os melhores momentos das nossas produções.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ivory hover:text-gold transition-colors border border-gold/30 hover:border-gold px-4 py-2 bg-espresso/30 rounded-sm"
              >
                <svg className="w-4 h-4 fill-current text-gold" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram {siteConfig.social.instagramUser}</span>
              </a>

              <a
                href={siteConfig.phone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ivory hover:text-gold transition-colors border border-gold/30 hover:border-gold px-4 py-2 bg-espresso/30 rounded-sm"
              >
                <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.96.525 1.961.815 3.02.816h.005c3.181 0 5.767-2.586 5.768-5.766 0-1.54-.599-2.989-1.688-4.079-1.09-1.089-2.54-1.687-4.079-1.687zm0-2c4.295 0 7.769 3.474 7.769 7.766 0 2.076-.816 4.028-2.288 5.5-1.472 1.472-3.424 2.288-5.5 2.288-1.341 0-2.65-.353-3.805-1.023l-4.526 1.187 1.21-4.417c-.742-1.206-1.135-2.593-1.135-3.987 0-4.292 3.474-7.766 7.769-7.766zm4.515 11.026c-.247-.123-1.464-.722-1.691-.805-.227-.082-.392-.123-.557.123-.165.247-.641.805-.785.97-.144.164-.288.185-.535.062-.247-.123-1.043-.385-1.986-1.226-.734-.655-1.23-1.465-1.374-1.712-.144-.247-.015-.38.109-.503.111-.11.247-.288.371-.432.124-.144.165-.247.247-.412.082-.164.041-.309-.021-.432-.062-.124-.557-1.34-.763-1.835-.2-.484-.403-.418-.557-.426l-.474-.008c-.165 0-.432.062-.659.309-.227.247-.866.845-.866 2.062 0 1.216.886 2.391 1.01 2.556.124.165 1.745 2.665 4.227 3.738.591.256 1.052.408 1.411.523.593.188 1.133.161 1.56.098.476-.071 1.464-.598 1.67-1.175.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
                </svg>
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final com Copyright e ano dinâmico */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/75 gap-4">
          <p>© {currentYear} Leandro Santana Cerimonial. Todos os direitos reservados.</p>
          <p className="tracking-wide">
            Salvador / BA • Cerimonial, Buffet, Decoração & Produção
          </p>
        </div>
      </div>
    </footer>
  );
}
