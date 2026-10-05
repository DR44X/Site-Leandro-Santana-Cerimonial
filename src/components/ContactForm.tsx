"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/content/site";
import { maskPhone, buildWhatsAppLink } from "@/lib/utils";

const AVAILABLE_SERVICES = [
  "Cerimonial",
  "Buffet",
  "Decoração",
  "Espaço",
  "Bar de drinks",
  "Música",
  "Foto e filmagem",
  "Evento completo",
];

const EVENT_TYPES = [
  { value: "casamentos", label: "Casamento" },
  { value: "15-anos", label: "15 Anos / Debutante" },
  { value: "formaturas", label: "Formatura" },
  { value: "corporativos", label: "Evento Corporativo" },
  { value: "aniversarios", label: "Aniversário" },
  { value: "confraternizacoes", label: "Confraternização / Chá" },
  { value: "outro", label: "Outro formato de evento" },
];

const GUEST_PRESETS = ["50", "100", "150", "200", "250", "300+"];

const VENUE_PRESETS = [
  "Ainda procurando em Salvador",
  "Salão / Cerimonial",
  "Praia / Litoral Norte",
  "Sítio / Área externa",
  "Já possuo local reservado",
];

const PERIOD_OPTIONS = [
  "Noturno",
  "Pôr do Sol / Fim de tarde",
  "Diurno / Manhã",
  "A definir",
];

function normalizeEventType(param: string): string {
  const p = param.toLowerCase();
  if (p === "casamento" || p === "casamentos") return "casamentos";
  if (p === "15-anos" || p === "15anos" || p === "debutante") return "15-anos";
  if (p === "formatura" || p === "formaturas") return "formaturas";
  if (p === "corporativo" || p === "corporativos") return "corporativos";
  if (p === "aniversario" || p === "aniversarios") return "aniversarios";
  if (p === "confraternizacao" || p === "confraternizacoes" || p === "cha") return "confraternizacoes";
  return param;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const rawPreselected = searchParams.get("evento") || "";
  const preselectedEvent = normalizeEventType(rawPreselected);

  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    tipoEvento: preselectedEvent || "",
    dataEvento: "",
    dataAproximada: "",
    periodo: "Noturno",
    convidados: "",
    localEvento: "",
    servicos: [] as string[],
    mensagem: "",
    company_website: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isDataFlexivel, setIsDataFlexivel] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "server-error">("idle");
  const [whatsAppLink, setWhatsAppLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [syncedFromChecklist, setSyncedFromChecklist] = useState<string | null>(null);

  const formTopRef = useRef<HTMLDivElement>(null);

  // Listener para sincronização do checklist de planejamento
  useEffect(() => {
    const handleChecklistSync = (e: Event) => {
      const customEvent = e as CustomEvent<{
        services: string[];
        itemsCount: number;
        itemsList: string[];
        profileName: string;
      }>;
      const { services, itemsCount, profileName } = customEvent.detail;

      setFormData((prev) => ({
        ...prev,
        servicos: services,
        tipoEvento:
          prev.tipoEvento ||
          (profileName === "Casamento"
            ? "casamentos"
            : profileName === "15 Anos"
            ? "15-anos"
            : profileName === "Formatura"
            ? "formaturas"
            : profileName === "Corporativo"
            ? "corporativos"
            : prev.tipoEvento),
      }));

      // Limpa erro de serviços se agora foram selecionados
      if (services.length > 0) {
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next.servicos;
          return next;
        });
      }

      setSyncedFromChecklist(
        `${itemsCount} etapas planejadas (${profileName}) foram sincronizadas no seu orçamento!`
      );
    };

    window.addEventListener("syncChecklistToForm", handleChecklistSync);
    return () => window.removeEventListener("syncChecklistToForm", handleChecklistSync);
  }, []);

  // Atualiza tipoEvento se vier pela URL query
  useEffect(() => {
    if (preselectedEvent) {
      setFormData((prev) => ({
        ...prev,
        tipoEvento: preselectedEvent,
      }));
    }
  }, [preselectedEvent]);

  const today = new Date().toISOString().split("T")[0];

  const validateSingleField = (
    field: string,
    currentData = formData,
    flexible = isDataFlexivel
  ): string | null => {
    switch (field) {
      case "nome":
        if (!currentData.nome.trim()) return "Por favor, informe seu nome completo.";
        if (currentData.nome.trim().length < 3) return "O nome deve conter pelo menos 3 caracteres.";
        return null;

      case "whatsapp": {
        const phoneDigits = currentData.whatsapp.replace(/\D/g, "");
        if (!currentData.whatsapp.trim()) return "Por favor, informe seu número de WhatsApp.";
        if (phoneDigits.length < 10) return "Informe um WhatsApp válido com DDD (ex.: (71) 98888-7777).";
        return null;
      }

      case "email":
        if (currentData.email.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(currentData.email.trim())) {
            return "Por favor, informe um endereço de e-mail válido (ex.: seu@email.com).";
          }
        }
        return null;

      case "tipoEvento":
        if (!currentData.tipoEvento) return "Por favor, selecione o formato da sua celebração.";
        return null;

      case "dataEvento":
        if (flexible) {
          if (!currentData.dataAproximada.trim()) {
            return "Por favor, informe o mês/ano ou período aproximado previsto.";
          }
        } else {
          if (!currentData.dataEvento) {
            return "Por favor, selecione a data prevista ou use a opção de data aproximada.";
          }
          if (currentData.dataEvento < today) {
            return "A data do evento não pode ser anterior a hoje.";
          }
        }
        return null;

      case "convidados": {
        if (!currentData.convidados.trim()) return "Por favor, informe o número estimado de convidados.";
        const guestNum = parseInt(currentData.convidados, 10);
        if (isNaN(guestNum) || guestNum <= 0) return "A quantidade de convidados deve ser maior que zero.";
        if (guestNum > 10000) return "Informe uma quantidade válida de convidados.";
        return null;
      }

      case "localEvento":
        if (!currentData.localEvento.trim()) {
          return "Por favor, informe o local do evento ou escolha uma das opções sugeridas.";
        }
        if (currentData.localEvento.trim().length < 3) {
          return "O local deve conter pelo menos 3 caracteres.";
        }
        return null;

      case "servicos":
        if (currentData.servicos.length === 0) {
          return "Selecione ao menos um serviço para compor a proposta.";
        }
        return null;

      default:
        return null;
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateSingleField(field);
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (error) {
        next[field] = error;
      } else {
        delete next[field];
      }
      return next;
    });
  };

  const clearFieldError = (field: string) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleFieldChange = (field: string, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    // Se o campo já foi tocado ou tem erro, revalida em tempo real
    if (touched[field] || fieldErrors[field]) {
      const error = validateSingleField(field, updated);
      setFieldErrors((prev) => {
        const next = { ...prev };
        if (error) {
          next[field] = error;
        } else {
          delete next[field];
        }
        return next;
      });
    }
  };

  const handleServiceToggle = (service: string) => {
    clearFieldError("servicos");
    setTouched((prev) => ({ ...prev, servicos: true }));

    if (service === "Evento completo") {
      if (formData.servicos.includes("Evento completo")) {
        setFormData((prev) => ({ ...prev, servicos: [] }));
        setFieldErrors((prev) => ({
          ...prev,
          servicos: "Selecione ao menos um serviço para compor a proposta.",
        }));
      } else {
        setFormData((prev) => ({ ...prev, servicos: [...AVAILABLE_SERVICES] }));
        clearFieldError("servicos");
      }
      return;
    }

    setFormData((prev) => {
      let updated: string[];
      if (prev.servicos.includes(service)) {
        updated = prev.servicos.filter((s) => s !== service && s !== "Evento completo");
      } else {
        updated = [...prev.servicos, service];
        const individual = AVAILABLE_SERVICES.filter((s) => s !== "Evento completo");
        if (individual.every((s) => updated.includes(s))) {
          updated.push("Evento completo");
        }
      }
      if (updated.length === 0) {
        setFieldErrors((fPrev) => ({
          ...fPrev,
          servicos: "Selecione ao menos um serviço para compor a proposta.",
        }));
      } else {
        clearFieldError("servicos");
      }
      return { ...prev, servicos: updated };
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskPhone(e.target.value);
    const updated = { ...formData, whatsapp: masked };
    setFormData(updated);

    if (touched.whatsapp || fieldErrors.whatsapp) {
      const error = validateSingleField("whatsapp", updated);
      setFieldErrors((prev) => {
        const next = { ...prev };
        if (error) {
          next.whatsapp = error;
        } else {
          delete next.whatsapp;
        }
        return next;
      });
    }
  };

  const constructWhatsAppMessage = () => {
    const eventLabel =
      EVENT_TYPES.find((t) => t.value === formData.tipoEvento)?.label || formData.tipoEvento;
    const dateText = isDataFlexivel
      ? formData.dataAproximada || "A definir"
      : formData.dataEvento || "A definir";

    return [
      `*Solicitação de Orçamento — Leandro Santana Cerimonial*`,
      `• *Nome:* ${formData.nome}`,
      `• *WhatsApp:* ${formData.whatsapp}`,
      formData.email ? `• *E-mail:* ${formData.email}` : "",
      `• *Tipo de Evento:* ${eventLabel}`,
      `• *Data:* ${dateText}`,
      formData.periodo ? `• *Período:* ${formData.periodo}` : "",
      `• *Convidados:* ${formData.convidados}`,
      `• *Local:* ${formData.localEvento || "A definir"}`,
      formData.servicos.length > 0
        ? `• *Serviços:* ${formData.servicos.join(", ")}`
        : "",
      formData.mensagem ? `• *Detalhes:* ${formData.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    const fieldsToValidate = [
      "nome",
      "whatsapp",
      "email",
      "tipoEvento",
      "dataEvento",
      "convidados",
      "localEvento",
      "servicos",
    ];

    const markAllTouched: Record<string, boolean> = {};
    fieldsToValidate.forEach((field) => {
      markAllTouched[field] = true;
      const err = validateSingleField(field);
      if (err) {
        errors[field] = err;
      }
    });

    setTouched((prev) => ({ ...prev, ...markAllTouched }));
    setFieldErrors(errors);

    // Se houver erros, rola suavemente até o topo do formulário para visualizar os erros
    if (Object.keys(errors).length > 0) {
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificação honeypot anti-spam
    if (formData.company_website) {
      setStatus("success");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    const waText = constructWhatsAppMessage();
    const waUrl = buildWhatsAppLink(waText);
    setWhatsAppLink(waUrl);

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    const isPlaceholderEndpoint =
      !endpoint ||
      endpoint.includes("SEU_FORM_ID") ||
      endpoint.includes("placeholder");

    if (isPlaceholderEndpoint) {
      // Simula uma resposta de envio bem-sucedida no ambiente local/demonstração
      setTimeout(() => {
        setStatus("success");
        formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          dataFinal: isDataFlexivel ? formData.dataAproximada : formData.dataEvento,
          destinatario: siteConfig.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro na comunicação com o servidor.");
      }
      setStatus("success");
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setStatus("server-error");
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(constructWhatsAppMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const handleResetForm = () => {
    setStatus("idle");
    setFieldErrors({});
    setTouched({});
    setFormData({
      nome: "",
      whatsapp: "",
      email: "",
      tipoEvento: "",
      dataEvento: "",
      dataAproximada: "",
      periodo: "Noturno",
      convidados: "",
      localEvento: "",
      servicos: [],
      mensagem: "",
      company_website: "",
    });
    setWhatsAppLink("");
    setCopied(false);
  };

  const hasErrors = Object.keys(fieldErrors).length > 0;

  return (
    <div
      ref={formTopRef}
      id="formulario-orcamento"
      className="bg-espresso p-6 sm:p-10 md:p-12 border border-gold/30 shadow-2xl relative bg-grain scroll-mt-28"
    >
      {syncedFromChecklist && (
        <div className="mb-6 p-4 bg-gold/15 border border-gold/40 text-gold flex items-center justify-between text-xs sm:text-sm font-sans animate-fade-in">
          <span>✓ {syncedFromChecklist}</span>
          <button
            type="button"
            onClick={() => setSyncedFromChecklist(null)}
            className="text-gold/60 hover:text-gold text-xs uppercase tracking-wider ml-2 cursor-pointer"
          >
            Dispensar
          </button>
        </div>
      )}

      {/* FEEDBACK DE SUCESSO */}
      {status === "success" && (
        <div className="py-8 text-center space-y-6 animate-fade-in" role="alert" aria-live="polite">
          <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center mx-auto text-gold bg-gold/10">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-widest text-gold font-medium block">
              Solicitação Concluída com Sucesso
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
              Pronto, {formData.nome.split(" ")[0]}! Seus dados foram validados e estruturados.
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-sans leading-relaxed">
              Para receber o orçamento detalhado e alinhar a degustação presencial com Leandro Santana, abra o WhatsApp no botão dourado abaixo:
            </p>
          </div>

          {/* Resumo da Proposta */}
          <div className="p-5 sm:p-6 bg-ink/70 border border-gold/20 text-left max-w-lg mx-auto space-y-2.5 text-xs font-sans">
            <div className="text-[10px] uppercase tracking-wider text-gold font-medium border-b border-gold/15 pb-2">
              Resumo da sua Solicitação:
            </div>
            <div className="flex justify-between text-ivory/90">
              <span className="text-ivory/60">Nome:</span>
              <span className="font-medium text-ivory">{formData.nome}</span>
            </div>
            <div className="flex justify-between text-ivory/90">
              <span className="text-ivory/60">WhatsApp:</span>
              <span className="font-medium text-ivory">{formData.whatsapp}</span>
            </div>
            <div className="flex justify-between text-ivory/90">
              <span className="text-ivory/60">Formato:</span>
              <span className="font-medium text-gold">
                {EVENT_TYPES.find((t) => t.value === formData.tipoEvento)?.label || formData.tipoEvento}
              </span>
            </div>
            <div className="flex justify-between text-ivory/90">
              <span className="text-ivory/60">Data prevista:</span>
              <span>{isDataFlexivel ? formData.dataAproximada : formData.dataEvento}</span>
            </div>
            <div className="flex justify-between text-ivory/90">
              <span className="text-ivory/60">Período:</span>
              <span>{formData.periodo}</span>
            </div>
            <div className="flex justify-between text-ivory/90">
              <span className="text-ivory/60">Convidados:</span>
              <span>{formData.convidados} pessoas</span>
            </div>
            <div className="flex justify-between text-ivory/90">
              <span className="text-ivory/60">Local:</span>
              <span>{formData.localEvento}</span>
            </div>
            <div className="flex justify-between text-ivory/90">
              <span className="text-ivory/60">Serviços:</span>
              <span className="text-right max-w-[240px] truncate text-gold">
                {formData.servicos.join(", ")}
              </span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsAppLink || siteConfig.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-ink font-sans font-medium uppercase tracking-widest text-xs py-4 px-8 shadow-xl transition-all min-h-[48px] w-full sm:w-auto"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.96.525 1.961.815 3.02.816h.005c3.181 0 5.767-2.586 5.768-5.766 0-1.54-.599-2.989-1.688-4.079-1.09-1.089-2.54-1.687-4.079-1.687zm0-2c4.295 0 7.769 3.474 7.769 7.766 0 2.076-.816 4.028-2.288 5.5-1.472 1.472-3.424 2.288-5.5 2.288-1.341 0-2.65-.353-3.805-1.023l-4.526 1.187 1.21-4.417c-.742-1.206-1.135-2.593-1.135-3.987 0-4.292 3.474-7.766 7.769-7.766zm4.515 11.026c-.247-.123-1.464-.722-1.691-.805-.227-.082-.392-.123-.557.123-.165.247-.641.805-.785.97-.144.164-.288.185-.535.062-.247-.123-1.043-.385-1.986-1.226-.734-.655-1.23-1.465-1.374-1.712-.144-.247-.015-.38.109-.503.111-.11.247-.288.371-.432.124-.144.165-.247.247-.412.082-.164.041-.309-.021-.432-.062-.124-.557-1.34-.763-1.835-.2-.484-.403-.418-.557-.426l-.474-.008c-.165 0-.432.062-.659.309-.227.247-.866.845-.866 2.062 0 1.216.886 2.391 1.01 2.556.124.165 1.745 2.665 4.227 3.738.591.256 1.052.408 1.411.523.593.188 1.133.161 1.56.098.476-.071 1.464-.598 1.67-1.175.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
              </svg>
              <span>Abrir WhatsApp com minha Proposta</span>
            </a>

            <button
              type="button"
              onClick={handleCopySummary}
              className="px-4 py-3.5 border border-gold/40 hover:border-gold text-xs uppercase tracking-wider text-ivory/80 hover:text-gold transition-colors cursor-pointer"
            >
              {copied ? "✓ Copiado!" : "Copiar texto da proposta"}
            </button>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleResetForm}
              className="text-xs uppercase tracking-widest text-ivory/50 hover:text-gold transition-colors py-2 cursor-pointer"
            >
              ← Fazer nova simulação de orçamento
            </button>
          </div>
        </div>
      )}

      {/* FEEDBACK DE ERRO NO SERVIDOR */}
      {status === "server-error" && (
        <div className="py-8 text-center space-y-6 animate-fade-in" role="alert" aria-live="assertive">
          <div className="w-16 h-16 border-2 border-red-400 rounded-full flex items-center justify-center mx-auto text-red-400 bg-red-950/40">
            <span className="text-2xl font-serif">!</span>
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-widest text-red-400 font-medium block">
              Aviso de Envio
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
              Não conseguimos conectar ao servidor no momento.
            </h3>
            <p className="text-xs sm:text-sm text-ivory/75 font-sans leading-relaxed">
              Mas sua proposta está pronta! Você pode enviar todos os detalhes diretamente pelo canal oficial do WhatsApp de Leandro Santana:
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsAppLink || siteConfig.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-ink font-sans font-medium uppercase tracking-widest text-xs py-4 px-8 shadow-xl transition-all min-h-[48px] w-full sm:w-auto"
            >
              <span>Continuar pelo WhatsApp Agora</span>
            </a>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="px-4 py-3.5 border border-gold/40 hover:border-gold text-xs uppercase tracking-wider text-ivory/80 hover:text-gold transition-colors cursor-pointer"
            >
              Voltar ao formulário
            </button>
          </div>
        </div>
      )}

      {/* FORMULÁRIO PRINCIPAL */}
      {(status === "idle" || status === "submitting") && (
        <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Formulário de solicitação de orçamento">
          {/* Honeypot invisível para bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Não preencha este campo</label>
            <input
              type="text"
              id="company_website"
              name="company_website"
              value={formData.company_website}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, company_website: e.target.value }))
              }
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* BANNER GERAL DE ERROS DE VALIDAÇÃO */}
          {hasErrors && (
            <div
              className="p-4 bg-red-950/70 border border-red-500/60 text-red-200 text-xs sm:text-sm font-sans flex items-start gap-3 animate-fade-in"
              role="alert"
              aria-live="assertive"
            >
              <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                !
              </div>
              <div className="space-y-1">
                <strong className="font-medium text-red-300 block">
                  Por favor, preencha os campos obrigatórios destacados abaixo:
                </strong>
                <ul className="list-disc list-inside text-red-200/90 text-xs space-y-0.5">
                  {Object.values(fieldErrors).map((msg, i) => (
                    <li key={i}>{msg}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Campo 1: Nome Completo */}
          <div className="space-y-2">
            <label htmlFor="nome" className="block text-xs uppercase tracking-wider text-gold font-medium">
              Nome Completo <span className="text-red-400" aria-label="obrigatório">*</span>
            </label>
            <input
              type="text"
              id="nome"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.nome}
              aria-describedby={fieldErrors.nome ? "error-nome" : undefined}
              value={formData.nome}
              onChange={(e) => handleFieldChange("nome", e.target.value)}
              onBlur={() => handleBlur("nome")}
              placeholder="Ex.: Carolina de Medeiros"
              className={`w-full bg-espresso-dark/90 border px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors ${
                fieldErrors.nome
                  ? "border-red-500 bg-red-950/20 focus:border-red-400"
                  : "border-gold/30 focus:border-gold"
              }`}
            />
            {fieldErrors.nome && (
              <p id="error-nome" className="text-xs text-red-400 font-sans mt-1 flex items-center gap-1.5" role="alert">
                <span>⚠</span>
                <span>{fieldErrors.nome}</span>
              </p>
            )}
          </div>

          {/* Campo 2: WhatsApp e E-mail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="block text-xs uppercase tracking-wider text-gold font-medium">
                WhatsApp com DDD <span className="text-red-400" aria-label="obrigatório">*</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.whatsapp}
                aria-describedby={fieldErrors.whatsapp ? "error-whatsapp" : undefined}
                value={formData.whatsapp}
                onChange={handlePhoneChange}
                onBlur={() => handleBlur("whatsapp")}
                placeholder="(71) 98888-7777"
                maxLength={15}
                className={`w-full bg-espresso-dark/90 border px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors ${
                  fieldErrors.whatsapp
                    ? "border-red-500 bg-red-950/20 focus:border-red-400"
                    : "border-gold/30 focus:border-gold"
                }`}
              />
              {fieldErrors.whatsapp && (
                <p id="error-whatsapp" className="text-xs text-red-400 font-sans mt-1 flex items-center gap-1.5" role="alert">
                  <span>⚠</span>
                  <span>{fieldErrors.whatsapp}</span>
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gold font-medium">
                E-mail <span className="text-ivory/40 text-[10px] normal-case">(opcional)</span>
              </label>
              <input
                type="email"
                id="email"
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "error-email" : undefined}
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder="seuemail@exemplo.com.br"
                className={`w-full bg-espresso-dark/90 border px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors ${
                  fieldErrors.email
                    ? "border-red-500 bg-red-950/20 focus:border-red-400"
                    : "border-gold/30 focus:border-gold"
                }`}
              />
              {fieldErrors.email && (
                <p id="error-email" className="text-xs text-red-400 font-sans mt-1 flex items-center gap-1.5" role="alert">
                  <span>⚠</span>
                  <span>{fieldErrors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Campo 3: Tipo de Evento e Período */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="tipoEvento" className="block text-xs uppercase tracking-wider text-gold font-medium">
                Tipo de Evento <span className="text-red-400" aria-label="obrigatório">*</span>
              </label>
              <select
                id="tipoEvento"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.tipoEvento}
                aria-describedby={fieldErrors.tipoEvento ? "error-tipoEvento" : undefined}
                value={formData.tipoEvento}
                onChange={(e) => handleFieldChange("tipoEvento", e.target.value)}
                onBlur={() => handleBlur("tipoEvento")}
                className={`w-full bg-espresso-dark/90 border px-4 py-3.5 text-sm text-ivory outline-none transition-colors cursor-pointer ${
                  fieldErrors.tipoEvento
                    ? "border-red-500 bg-red-950/20 focus:border-red-400"
                    : "border-gold/30 focus:border-gold"
                }`}
              >
                <option value="" disabled className="bg-ink text-ivory/50">
                  Selecione o formato...
                </option>
                {EVENT_TYPES.map((t) => (
                  <option key={t.value} value={t.value} className="bg-ink text-ivory">
                    {t.label}
                  </option>
                ))}
              </select>
              {fieldErrors.tipoEvento && (
                <p id="error-tipoEvento" className="text-xs text-red-400 font-sans mt-1 flex items-center gap-1.5" role="alert">
                  <span>⚠</span>
                  <span>{fieldErrors.tipoEvento}</span>
                </p>
              )}
            </div>

            <div className="space-y-2">
              <span className="block text-xs uppercase tracking-wider text-gold font-medium">
                Período / Turno Desejado
              </span>
              <div className="grid grid-cols-2 gap-2">
                {PERIOD_OPTIONS.map((periodo) => (
                  <button
                    key={periodo}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, periodo }))}
                    className={`px-2.5 py-2.5 text-[11px] rounded transition-all border text-center cursor-pointer ${
                      formData.periodo === periodo
                        ? "bg-gold text-ink border-gold font-medium shadow-xs"
                        : "bg-espresso-dark/80 text-ivory/70 border-gold/20 hover:border-gold/50"
                    }`}
                  >
                    {periodo}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Campo 4: Data Prevista com Opção Flexível */}
          <div className={`space-y-2 p-4 bg-espresso-dark/50 border rounded transition-colors ${
            fieldErrors.dataEvento ? "border-red-500/80 bg-red-950/20" : "border-gold/20"
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor={isDataFlexivel ? "dataAproximada" : "dataEvento"} className="block text-xs uppercase tracking-wider text-gold font-medium">
                Data do Evento <span className="text-red-400" aria-label="obrigatório">*</span>
              </label>
              <button
                type="button"
                onClick={() => {
                  const nextFlexible = !isDataFlexivel;
                  setIsDataFlexivel(nextFlexible);
                  clearFieldError("dataEvento");
                }}
                className="text-[11px] text-gold/90 hover:text-gold underline text-left sm:text-right cursor-pointer"
              >
                {isDataFlexivel ? "← Escolher dia exato no calendário" : "Ainda não tenho dia exato definido"}
              </button>
            </div>

            {isDataFlexivel ? (
              <div className="space-y-1.5 pt-1">
                <input
                  type="text"
                  id="dataAproximada"
                  aria-invalid={!!fieldErrors.dataEvento}
                  aria-describedby={fieldErrors.dataEvento ? "error-dataEvento" : undefined}
                  value={formData.dataAproximada}
                  onChange={(e) => handleFieldChange("dataAproximada", e.target.value)}
                  onBlur={() => handleBlur("dataEvento")}
                  placeholder="Ex.: Novembro de 2026 / Segundo semestre de 2026"
                  className="w-full bg-espresso-dark/90 border border-gold/40 focus:border-gold px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 outline-none"
                />
                <span className="text-[11px] text-ivory/50 block">
                  Informe o mês e ano ou período aproximado em que deseja realizar sua comemoração.
                </span>
              </div>
            ) : (
              <input
                type="date"
                id="dataEvento"
                min={today}
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.dataEvento}
                aria-describedby={fieldErrors.dataEvento ? "error-dataEvento" : undefined}
                value={formData.dataEvento}
                onChange={(e) => handleFieldChange("dataEvento", e.target.value)}
                onBlur={() => handleBlur("dataEvento")}
                className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold px-4 py-3 text-sm text-ivory outline-none transition-colors"
              />
            )}

            {fieldErrors.dataEvento && (
              <p id="error-dataEvento" className="text-xs text-red-400 font-sans mt-1 flex items-center gap-1.5" role="alert">
                <span>⚠</span>
                <span>{fieldErrors.dataEvento}</span>
              </p>
            )}
          </div>

          {/* Campo 5: Quantidade de Convidados com Chips */}
          <div className="space-y-2">
            <label htmlFor="convidados" className="block text-xs uppercase tracking-wider text-gold font-medium">
              Quantidade de Convidados <span className="text-red-400" aria-label="obrigatório">*</span>
            </label>
            <div className="flex flex-wrap items-center gap-2 pb-1">
              <span className="text-[10px] text-ivory/50 uppercase tracking-wider">Atalhos rápidos:</span>
              {GUEST_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    handleFieldChange("convidados", preset.replace("+", ""));
                  }}
                  className="px-2.5 py-1 text-[11px] font-sans rounded bg-ink/50 text-gold/90 hover:bg-gold hover:text-ink border border-gold/30 transition-colors cursor-pointer"
                >
                  {preset}
                </button>
              ))}
            </div>
            <input
              type="number"
              id="convidados"
              min="1"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.convidados}
              aria-describedby={fieldErrors.convidados ? "error-convidados" : undefined}
              value={formData.convidados}
              onChange={(e) => handleFieldChange("convidados", e.target.value)}
              onBlur={() => handleBlur("convidados")}
              placeholder="Digite a quantidade estimada (ex.: 150)"
              className={`w-full bg-espresso-dark/90 border px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors ${
                fieldErrors.convidados
                  ? "border-red-500 bg-red-950/20 focus:border-red-400"
                  : "border-gold/30 focus:border-gold"
              }`}
            />
            {fieldErrors.convidados && (
              <p id="error-convidados" className="text-xs text-red-400 font-sans mt-1 flex items-center gap-1.5" role="alert">
                <span>⚠</span>
                <span>{fieldErrors.convidados}</span>
              </p>
            )}
          </div>

          {/* Campo 6: Local do Evento com Chips */}
          <div className="space-y-2">
            <label htmlFor="localEvento" className="block text-xs uppercase tracking-wider text-gold font-medium">
              Local do Evento em Salvador / Região <span className="text-red-400" aria-label="obrigatório">*</span>
            </label>
            <div className="flex flex-wrap items-center gap-1.5 pb-1">
              {VENUE_PRESETS.map((venue) => (
                <button
                  key={venue}
                  type="button"
                  onClick={() => {
                    handleFieldChange("localEvento", venue);
                  }}
                  className="px-2.5 py-1 text-[11px] font-sans rounded bg-ink/50 text-gold/80 hover:bg-gold hover:text-ink border border-gold/25 transition-colors cursor-pointer"
                >
                  {venue}
                </button>
              ))}
            </div>
            <input
              type="text"
              id="localEvento"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.localEvento}
              aria-describedby={fieldErrors.localEvento ? "error-localEvento" : undefined}
              value={formData.localEvento}
              onChange={(e) => handleFieldChange("localEvento", e.target.value)}
              onBlur={() => handleBlur("localEvento")}
              placeholder="Ex.: Cerimonial DeCasa, Casa de praia ou 'Ainda procurando'"
              className={`w-full bg-espresso-dark/90 border px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors ${
                fieldErrors.localEvento
                  ? "border-red-500 bg-red-950/20 focus:border-red-400"
                  : "border-gold/30 focus:border-gold"
              }`}
            />
            {fieldErrors.localEvento && (
              <p id="error-localEvento" className="text-xs text-red-400 font-sans mt-1 flex items-center gap-1.5" role="alert">
                <span>⚠</span>
                <span>{fieldErrors.localEvento}</span>
              </p>
            )}
          </div>

          {/* Campo 7: Serviços Desejados */}
          <div className={`space-y-3 pt-2 p-3 sm:p-4 rounded border transition-colors ${
            fieldErrors.servicos ? "border-red-500/80 bg-red-950/20" : "border-transparent"
          }`}>
            <div className="flex items-center justify-between">
              <span className="block text-xs uppercase tracking-wider text-gold font-medium">
                Serviços Desejados <span className="text-red-400" aria-label="obrigatório">*</span>
              </span>
              <span className="text-[11px] text-gold/80 font-medium">
                {formData.servicos.length} selecionado(s)
              </span>
            </div>
            <p className="text-xs text-ivory/60 font-sans">
              Monte seu pacote integrado. Escolher &quot;Evento completo&quot; abrange cerimonial, gastronomia e ambientação:
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {AVAILABLE_SERVICES.map((servico) => {
                const isSelected = formData.servicos.includes(servico);
                const isFullEventActive =
                  formData.servicos.includes("Evento completo") && servico !== "Evento completo";

                return (
                  <button
                    key={servico}
                    type="button"
                    onClick={() => handleServiceToggle(servico)}
                    className={`px-4 py-2.5 text-xs font-sans rounded-full transition-all duration-300 border min-h-[44px] flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? "bg-gold text-ink border-gold font-medium shadow"
                        : isFullEventActive
                        ? "bg-gold/20 text-gold border-gold/40"
                        : "bg-espresso-dark/60 text-ivory/80 border-gold/20 hover:border-gold/50"
                    }`}
                  >
                    <span>{isSelected ? "✓" : "+"}</span>
                    <span>{servico}</span>
                  </button>
                );
              })}
            </div>

            {fieldErrors.servicos && (
              <p id="error-servicos" className="text-xs text-red-400 font-sans mt-1 flex items-center gap-1.5" role="alert">
                <span>⚠</span>
                <span>{fieldErrors.servicos}</span>
              </p>
            )}
          </div>

          {/* Campo 8: Mensagem / Detalhes */}
          <div className="space-y-2 pt-2">
            <label htmlFor="mensagem" className="block text-xs uppercase tracking-wider text-gold font-medium">
              Observações ou Detalhes Específicos <span className="text-ivory/40 text-[10px] normal-case">(opcional)</span>
            </label>
            <textarea
              id="mensagem"
              rows={3}
              value={formData.mensagem}
              onChange={(e) => handleFieldChange("mensagem", e.target.value)}
              placeholder="Conte-nos sobre o estilo desejado, atrações musicais, preferências no buffet ou horário..."
              className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold p-4 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors resize-y"
            />
          </div>

          {/* Botão de Envio com indicador de carregamento */}
          <div className="pt-4 space-y-3">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-gold hover:bg-gold-light text-ink font-sans font-medium uppercase tracking-editorial text-sm py-4 px-8 transition-all duration-300 shadow-xl disabled:opacity-50 min-h-[52px] flex items-center justify-center gap-3 focus-visible:outline-2 focus-visible:outline-ivory cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                  <span>Validando e enviando solicitação...</span>
                </>
              ) : (
                <>
                  <span>Enviar Solicitação de Orçamento</span>
                  <span>→</span>
                </>
              )}
            </button>

            <div className="text-center">
              <span className="text-[11px] text-ivory/50">
                Atendimento direto com Leandro Santana e equipe especializada em Salvador / BA.
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
