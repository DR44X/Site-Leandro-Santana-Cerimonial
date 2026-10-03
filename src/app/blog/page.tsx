import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Blog & Editorial de Eventos em Salvador",
  description:
    "Artigos e guias especializados sobre casamentos, 15 anos, buffet gastronômico, cenografia floral e locações exclusivas em Salvador e Litoral Norte da Bahia.",
};

export default function BlogIndexPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="w-full">
      {/* Banner Principal do Blog */}
      <PageBanner
        eyebrow="Editorial & Inteligência de Eventos"
        title="Blog Leandro Santana"
        subtitle="Guias autorais, tendências gastronômicas e bastidores do mercado de celebrações de alto padrão na Bahia."
        imageSrc="/images/hero/hero-secondary.webp"
      />

      <section className="py-16 sm:py-24 bg-ink relative overflow-hidden bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Artigo em Destaque (Vogue Weddings Style) */}
          {featuredPost && (
            <div className="border border-gold/30 bg-espresso/70 overflow-hidden group hover:border-gold/60 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden">
                  <Image
                    src={featuredPost.heroImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent lg:hidden" />
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Metadata sem pill: texto limpo com separadores tipográficos */}
                    <div className="flex items-center gap-2 text-xs font-sans text-gold">
                      <span>Destaque Editorial</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal leading-tight group-hover:text-gold transition-colors">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-ivory/70 font-sans font-light leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                    <div className="text-xs font-sans text-ivory/60">
                      <span>Por {featuredPost.author.name}</span>
                      <span className="mx-1.5">·</span>
                      <span>{featuredPost.publishDate}</span>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ivory font-medium transition-colors"
                    >
                      <span>Ler artigo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid de Artigos Recentes */}
          <div className="space-y-8">
            <div className="flex items-end justify-between border-b border-gold/20 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-sans block mb-1">
                  Artigos & Guias
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                  Todas as Publicações
                </h3>
              </div>
              <span className="text-xs text-ivory/50 font-sans">
                {blogPosts.length} artigos publicados
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-espresso/50 border border-gold/20 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      {/* Zero-Pill Metadata */}
                      <div className="flex items-center gap-2 text-xs font-sans text-gold">
                        <span>{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h4 className="font-serif text-xl sm:text-2xl text-ivory font-normal leading-snug group-hover:text-gold transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>

                      <p className="text-xs sm:text-sm text-ivory/70 font-sans font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-sans">
                      <span className="text-ivory/50">{post.publishDate}</span>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold hover:text-ivory font-medium transition-colors"
                      >
                        <span>Ler completo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Banner de Chamada para Orçamento */}
          <div className="bg-espresso border border-gold/30 p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-gold font-sans block">
              Assessoria & Produção em Salvador
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
              Deseja um planejamento personalizado para o seu evento?
            </h4>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans max-w-xl mx-auto font-light leading-relaxed">
              Converse com o time Leandro Santana Cerimonial e receba uma proposta detalhada com cerimonial, buffet, cenografia e estrutura técnica.
            </p>
            <div className="pt-2">
              <Link
                href="/orcamentos"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink text-xs uppercase tracking-widest font-medium py-3.5 px-8 shadow transition-all duration-300 min-h-[46px]"
              >
                <span>Solicitar Proposta Exclusiva</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
