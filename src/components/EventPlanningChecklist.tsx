"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Circle,
  Sparkles,
  ArrowDown,
  RotateCcw,
  CheckSquare,
  ShieldCheck,
  Utensils,
  Flower2,
  Building2,
  Music,
  Camera,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistItem {
  id: string;
  label: string;
  categoryKey: string;
  serviceMapping: string; // maps to ContactForm services
}

interface ChecklistCategory {
  key: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  items: ChecklistItem[];
}

const CHECKLIST_DATA: ChecklistCategory[] = [
  {
    key: "cerimonial",
    title: "1. Cerimonial & Assessoria",
    icon: ShieldCheck,
    description: "Planejamento estruturado e tranquilidade absoluta no grande dia.",
    items: [
      {
        id: "cerim_planejamento",
        label: "Planejamento Estratégico & Cronograma Minucioso",
        categoryKey: "cerimonial",
        serviceMapping: "Cerimonial",
      },
      {
        id: "cerim_ensaios",
        label: "Ensaios Protocolares com Família e Padrinhos",
        categoryKey: "cerimonial",
        serviceMapping: "Cerimonial",
      },
      {
        id: "cerim_coordenacao",
        label: "Coordenação Executiva em Tempo Real no Dia",
        categoryKey: "cerimonial",
        serviceMapping: "Cerimonial",
      },
      {
        id: "cerim_rsvp",
        label: "Gestão Ativa de RSVP & Confirmação de Presença",
        categoryKey: "cerimonial",
        serviceMapping: "Cerimonial",
      },
    ],
  },
  {
    key: "buffet",
    title: "2. Buffet & Gastronomia",
    icon: Utensils,
    description: "Experiência culinária nobre para encantar todos os convidados.",
    items: [
      {
        id: "buffet_coquetel",
        label: "Coquetel Volante com Finger Foods e Canapés Nobres",
        categoryKey: "buffet",
        serviceMapping: "Buffet",
      },
      {
        id: "buffet_jantar",
        label: "Jantar Nobre Empratado ou Estações Quentes",
        categoryKey: "buffet",
        serviceMapping: "Buffet",
      },
      {
        id: "buffet_bar",
        label: "Bar de Drinks Autorais & Coquetelaria Premium",
        categoryKey: "buffet",
        serviceMapping: "Bar de drinks",
      },
      {
        id: "buffet_doces",
        label: "Mesa de Doces Finos & Sobremesas Artesanais",
        categoryKey: "buffet",
        serviceMapping: "Buffet",
      },
    ],
  },
  {
    key: "decoracao",
    title: "3. Decoração & Cenografia",
    icon: Flower2,
    description: "Harmonia visual, flores nobres e iluminação cênica intimista.",
    items: [
      {
        id: "decor_flores",
        label: "Projeto Floral Exclusivo com Flores Nobres e Folhagens",
        categoryKey: "decoracao",
        serviceMapping: "Decoração",
      },
      {
        id: "decor_mobiliario",
        label: "Mobiliário Elegante, Lounges e Mesa dos Homenageados",
        categoryKey: "decoracao",
        serviceMapping: "Decoração",
      },
      {
        id: "decor_passadeira",
        label: "Cenografia de Entrada, Passadeira e Pórticos",
        categoryKey: "decoracao",
        serviceMapping: "Decoração",
      },
      {
        id: "decor_iluminacao",
        label: "Iluminação Cênica Âmbar Arquitetural",
        categoryKey: "decoracao",
        serviceMapping: "Decoração",
      },
    ],
  },
  {
    key: "espaco",
    title: "4. Espaço & Infraestrutura",
    icon: Building2,
    description: "Segurança operacional, conforto térmico e acústica impecável.",
    items: [
      {
        id: "espaco_climatizacao",
        label: "Climatização Adequada e Conforto Acústico",
        categoryKey: "espaco",
        serviceMapping: "Espaço",
      },
      {
        id: "espaco_gerador",
        label: "Gerador de Energia de Contingência Ininterrupto",
        categoryKey: "espaco",
        serviceMapping: "Espaço",
      },
      {
        id: "espaco_camarim",
        label: "Camarim Privativo Climatizado para os Anfitriões",
        categoryKey: "espaco",
        serviceMapping: "Espaço",
      },
    ],
  },
  {
    key: "musica",
    title: "5. Música & Pista de Dança",
    icon: Music,
    description: "Som cristalino e iluminação robótica para animar a celebração.",
    items: [
      {
        id: "musica_dj",
        label: "DJ Residente Especialista no Repertório Desejado",
        categoryKey: "musica",
        serviceMapping: "Música",
      },
      {
        id: "musica_som",
        label: "Sonorização Linear de Alta Fidelidade (Line Array)",
        categoryKey: "musica",
        serviceMapping: "Música",
      },
      {
        id: "musica_boate",
        label: "Boate Contemporânea com Luz Robótica e Efeitos",
        categoryKey: "musica",
        serviceMapping: "Música",
      },
    ],
  },
  {
    key: "foto",
    title: "6. Foto & Audiovisual",
    icon: Camera,
    description: "Registros eternos em altíssima definição e olhar documental.",
    items: [
      {
        id: "foto_cobertura",
        label: "Cobertura Fotográfica Completa (Making-of à Pista)",
        categoryKey: "foto",
        serviceMapping: "Foto e filmagem",
      },
      {
        id: "foto_filme",
        label: "Filme Cinematográfico em Resolução 4K",
        categoryKey: "foto",
        serviceMapping: "Foto e filmagem",
      },
      {
        id: "foto_social",
        label: "Prévia de Fotos e Teaser Ágil para Redes Sociais",
        categoryKey: "foto",
        serviceMapping: "Foto e filmagem",
      },
    ],
  },
];

const ALL_ITEMS: ChecklistItem[] = CHECKLIST_DATA.flatMap((cat) => cat.items);

const PROFILE_PRESETS: Record<string, string[]> = {
  casamento: [
    "cerim_planejamento",
    "cerim_ensaios",
    "cerim_coordenacao",
    "cerim_rsvp",
    "buffet_coquetel",
    "buffet_jantar",
    "buffet_bar",
    "buffet_doces",
    "decor_flores",
    "decor_mobiliario",
    "decor_passadeira",
    "decor_iluminacao",
    "espaco_camarim",
    "espaco_gerador",
    "musica_dj",
    "musica_som",
    "foto_cobertura",
    "foto_filme",
  ],
  debutante: [
    "cerim_planejamento",
    "cerim_ensaios",
    "cerim_coordenacao",
    "cerim_rsvp",
    "buffet_coquetel",
    "buffet_bar",
    "buffet_doces",
    "decor_flores",
    "decor_mobiliario",
    "decor_iluminacao",
    "espaco_camarim",
    "espaco_gerador",
    "musica_dj",
    "musica_som",
    "musica_boate",
    "foto_cobertura",
    "foto_filme",
    "foto_social",
  ],
  formatura: [
    "cerim_planejamento",
    "cerim_coordenacao",
    "buffet_coquetel",
    "buffet_jantar",
    "buffet_bar",
    "decor_passadeira",
    "decor_iluminacao",
    "espaco_climatizacao",
    "espaco_gerador",
    "musica_dj",
    "musica_som",
    "musica_boate",
    "foto_cobertura",
    "foto_filme",
  ],
  corporativo: [
    "cerim_planejamento",
    "cerim_coordenacao",
    "cerim_rsvp",
    "buffet_coquetel",
    "buffet_jantar",
    "buffet_bar",
    "decor_mobiliario",
    "decor_iluminacao",
    "espaco_climatizacao",
    "espaco_gerador",
    "musica_som",
    "foto_cobertura",
  ],
};

export function EventPlanningChecklist() {
  const [selectedIds, setSelectedIds] = useState<string[]>(PROFILE_PRESETS.casamento);
  const [activeProfile, setActiveProfile] = useState<string>("casamento");
  const [syncStatus, setSyncStatus] = useState(false);

  const totalCount = ALL_ITEMS.length;
  const selectedCount = selectedIds.length;
  const progressPercent = Math.round((selectedCount / totalCount) * 100);

  const toggleItem = (id: string) => {
    setActiveProfile("");
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const applyProfile = (profileKey: string) => {
    setActiveProfile(profileKey);
    setSelectedIds(PROFILE_PRESETS[profileKey] || []);
  };

  const selectAll = () => {
    setActiveProfile("");
    setSelectedIds(ALL_ITEMS.map((item) => item.id));
  };

  const clearAll = () => {
    setActiveProfile("");
    setSelectedIds([]);
  };

  const handleSyncToForm = () => {
    // Coleta mapeamento de serviços únicos selecionados
    const mappedServices = Array.from(
      new Set(
        ALL_ITEMS.filter((item) => selectedIds.includes(item.id)).map(
          (item) => item.serviceMapping
        )
      )
    );

    const selectedTitles = ALL_ITEMS.filter((item) => selectedIds.includes(item.id)).map(
      (item) => item.label
    );

    // Emite evento global para que o ContactForm receba os serviços
    if (typeof window !== "undefined") {
      const event = new CustomEvent("syncChecklistToForm", {
        detail: {
          services: mappedServices,
          itemsCount: selectedCount,
          itemsList: selectedTitles,
          profileName:
            activeProfile === "casamento"
              ? "Casamento"
              : activeProfile === "debutante"
              ? "15 Anos"
              : activeProfile === "formatura"
              ? "Formatura"
              : activeProfile === "corporativo"
              ? "Corporativo"
              : "Personalizado",
        },
      });
      window.dispatchEvent(event);

      setSyncStatus(true);
      setTimeout(() => setSyncStatus(false), 4000);

      // Desloca suavemente para o formulário
      const formEl = document.getElementById("formulario-orcamento");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-espresso/60 border-y border-gold/20 relative" id="checklist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Título & Introdução */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa de Pré-Qualificação</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-ivory font-normal tracking-wide">
            Checklist de Planejamento de Evento
          </h2>
          <p className="text-xs sm:text-sm text-ivory/70 font-sans font-light leading-relaxed">
            Selecione as etapas e itens essenciais para sua celebração. Use os perfis rápidos para pré-preencher recomendações e sincronize tudo com o formulário de orçamento abaixo.
          </p>
        </div>

        {/* Barra de Perfis Rápidos e Controles */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-ink/70 border border-gold/20 rounded">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-gold font-sans font-medium block">
              Selecione o perfil do seu evento:
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { id: "casamento", label: "Casamento" },
                { id: "debutante", label: "15 Anos" },
                { id: "formatura", label: "Formatura" },
                { id: "corporativo", label: "Corporativo" },
              ].map((profile) => {
                const isActive = activeProfile === profile.id;
                return (
                  <button
                    key={profile.id}
                    type="button"
                    onClick={() => applyProfile(profile.id)}
                    className={cn(
                      "px-3.5 py-1.5 rounded text-xs font-sans transition-all duration-200 border",
                      isActive
                        ? "bg-gold text-ink border-gold font-medium shadow-sm"
                        : "bg-espresso/80 text-ivory/80 border-gold/30 hover:border-gold hover:text-gold"
                    )}
                  >
                    {profile.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={selectAll}
              className="text-[11px] uppercase tracking-wider text-ivory/70 hover:text-gold transition-colors px-2 py-1 flex items-center gap-1"
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Marcar todos</span>
            </button>
            <span className="text-gold/40">·</span>
            <button
              type="button"
              onClick={clearAll}
              className="text-[11px] uppercase tracking-wider text-ivory/70 hover:text-gold transition-colors px-2 py-1 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar</span>
            </button>
          </div>
        </div>

        {/* Barra de Progresso e Prontidão */}
        <div className="p-4 sm:p-5 bg-ink/50 border border-gold/20 space-y-2.5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm font-sans gap-1">
            <span className="text-ivory font-medium">
              Índice de Prontidão do Evento:{" "}
              <strong className="text-gold font-semibold">{progressPercent}% concluído</strong>
            </span>
            <span className="text-ivory/60 text-xs">
              {selectedCount} de {totalCount} itens planejados
            </span>
          </div>
          <div className="w-full h-2.5 bg-espresso rounded-full overflow-hidden border border-gold/20">
            <div
              className="h-full bg-gradient-to-r from-gold/80 via-gold to-champagne transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        {/* Grid com as 6 Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHECKLIST_DATA.map((category) => {
            const Icon = category.icon;
            const categoryItems = category.items;
            const categorySelectedCount = categoryItems.filter((it) =>
              selectedIds.includes(it.id)
            ).length;

            return (
              <div
                key={category.key}
                className="bg-espresso/50 border border-gold/20 hover:border-gold/40 transition-colors p-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-ink/60 text-gold border border-gold/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-lg text-ivory">{category.title}</h3>
                    </div>
                    <span className="text-[11px] text-gold/80 font-sans">
                      {categorySelectedCount}/{categoryItems.length}
                    </span>
                  </div>

                  <p className="text-xs text-ivory/60 font-sans font-light leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gold/10">
                    {categoryItems.map((item) => {
                      const isChecked = selectedIds.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          className={cn(
                            "w-full text-left p-2.5 rounded transition-all duration-200 flex items-start gap-2.5 text-xs font-sans",
                            isChecked
                              ? "bg-gold/15 text-ivory border border-gold/40 shadow-xs"
                              : "bg-ink/30 text-ivory/70 hover:bg-ink/50 hover:text-ivory border border-transparent"
                          )}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-4 h-4 text-ivory/30 shrink-0 mt-0.5" />
                          )}
                          <span className={cn(isChecked ? "text-ivory" : "text-ivory/70")}>
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Barra de Ação de Sincronização */}
        <div className="p-6 bg-gradient-to-r from-espresso via-ink to-espresso border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl text-ivory font-normal">
              Pronto para transformar seu checklist em proposta real?
            </h4>
            <p className="text-xs text-ivory/70 font-sans">
              Os itens selecionados serão sincronizados diretamente no formulário abaixo com os serviços correspondentes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {syncStatus && (
              <span className="text-xs text-gold flex items-center gap-1.5 animate-fade-in font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Serviços sincronizados!</span>
              </span>
            )}
            <button
              type="button"
              onClick={handleSyncToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink text-xs uppercase tracking-widest font-medium py-3.5 px-6 shadow-md transition-all duration-300 min-h-[46px]"
            >
              <span>Sincronizar no Orçamento</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
