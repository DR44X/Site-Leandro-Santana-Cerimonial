import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  Share2,
  CheckCircle2,
} from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo Não Encontrado",
    };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.leandrosantanacerimonial.com.br";

  return {
    title: `${post.title} | Blog Leandro Santana Cerimonial`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article className="w-full bg-ink min-h-screen text-ivory pb-24">
      {/* Top Header & Breadcrumb */}
      <div className="pt-28 sm:pt-36 pb-12 border-b border-gold/15 bg-espresso/40 bg-grain">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-sans text-ivory/60"
          >
            <Link href="/" className="hover:text-gold transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gold truncate max-w-xs">{post.category}</span>
          </nav>

          {/* Zero-Pill Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-sans text-gold">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.publishDate}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed max-w-3xl">
            {post.subtitle}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-gold/15 text-xs font-sans text-ivory/70">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center bg-espresso text-gold font-serif text-xs font-semibold">
                LS
              </div>
              <div>
                <span className="text-ivory font-medium block">{post.author.name}</span>
                <span className="text-[11px] text-ivory/50">{post.author.role}</span>
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-gold hover:text-ivory uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar ao Blog</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="relative h-72 sm:h-96 md:h-[440px] border border-gold/30 shadow-2xl overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            referrerPolicy="no-referrer"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>
      </div>

      {/* Conteúdo Principal do Artigo */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12 font-sans font-light">
        {/* Destaques Principais (Key Takeaways) */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="p-6 sm:p-8 bg-espresso/70 border border-gold/30 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Pontos Essenciais para o seu Planejamento</span>
            </div>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/90 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Seções com Parágrafos Editoriais */}
        <div className="space-y-10 text-sm sm:text-base text-ivory/80 leading-relaxed">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Bloco de Citação Editorial */}
        {post.quote && (
          <blockquote className="my-10 p-6 sm:p-8 border-l-2 border-gold bg-espresso/40 space-y-2">
            <p className="font-serif text-lg sm:text-xl text-ivory italic leading-relaxed">
              &ldquo;{post.quote.text}&rdquo;
            </p>
            <cite className="block text-xs uppercase tracking-widest text-gold font-sans not-italic">
              — {post.quote.attribution}
            </cite>
          </blockquote>
        )}

        {/* Tags Sem Pill */}
        <div className="pt-6 border-t border-gold/15 flex flex-wrap items-center gap-2 text-xs text-ivory/60">
          <span className="text-gold font-medium">Tópicos:</span>
          {post.tags.map((tag, i) => (
            <span key={tag} className="inline-flex items-center">
              <span>{tag}</span>
              {i < post.tags.length - 1 && <span className="mx-1.5 text-gold/40">·</span>}
            </span>
          ))}
        </div>

        {/* Bio do Fundador */}
        <div className="p-6 sm:p-8 bg-espresso/60 border border-gold/20 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-14 h-14 rounded-full border border-gold/50 bg-espresso text-gold flex items-center justify-center font-serif text-xl font-bold shrink-0">
            LS
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="font-serif text-lg text-ivory font-normal">
              Sobre {post.author.name}
            </h4>
            <p className="text-xs text-ivory/70 leading-relaxed font-light">
              Especialista em cerimonial, alta gastronomia e cenografia de eventos na Bahia. Com mais de uma década de experiência, lidera produções memoráveis que unem rigor técnico e sensibilidade humana.
            </p>
          </div>
        </div>

        {/* Bloco de Conversão Direta */}
        <div className="bg-gradient-to-r from-espresso via-ink to-espresso p-8 border border-gold/30 text-center space-y-4 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-gold font-medium block">
            Planejamento Sob Medida
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
            Planeje o seu evento com a Leandro Santana Cerimonial
          </h3>
          <p className="text-xs sm:text-sm text-ivory/70 max-w-lg mx-auto leading-relaxed">
            Utilize nosso checklist de pré-qualificação ou envie sua solicitação de orçamento completa para receber atendimento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/orcamentos#checklist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gold/50 text-gold hover:bg-gold/10 text-xs uppercase tracking-widest font-medium py-3 px-6 transition-colors min-h-[44px]"
            >
              <span>Ver Checklist de Eventos</span>
            </Link>
            <Link
              href="/orcamentos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink text-xs uppercase tracking-widest font-medium py-3 px-6 shadow transition-colors min-h-[44px]"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Artigos Relacionados */}
        {relatedPosts.length > 0 && (
          <div className="pt-12 border-t border-gold/15 space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal">
              Você também pode se interessar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="p-5 bg-espresso/40 border border-gold/20 hover:border-gold/50 transition-colors block group space-y-2"
                >
                  <span className="text-[11px] text-gold uppercase tracking-wider block">
                    {related.category}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-ivory group-hover:text-gold transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <p className="text-xs text-ivory/60 line-clamp-2 font-light">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
