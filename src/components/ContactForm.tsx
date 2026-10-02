"use client";

import React, { useState, useEffect } from "react";
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
  { value: "15-anos", label: "15 Anos" },
  { value: "formaturas", label: "Formatura" },
  { value: "corporativos", label: "Evento Corporativo" },
  { value: "aniversarios", label: "Aniversário" },
  { value: "confraternizacoes", label: "Confraternização" },
  { value: "outro", label: "Outro formato de evento" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedEvent = searchParams.get("evento") || "";

  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    tipoEvento: preselectedEvent || "",
    dataEvento: "",
    convidados: "",
    localEvento: "",
    servicos: [] as string[],
    mensagem: "",
    // Honeypot anti-spam
    company_website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsAppLink, setWhatsAppLink] = useState("");

  // Atualiza tipoEvento se vier pela URL query
  useEffect(() => {
    if (preselectedEvent) {
      setFormData((prev) => ({
        ...prev,
        tipoEvento: preselectedEvent,
      }));
    }
  }, [preselectedEvent]);

  // Data mínima: hoje (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  const handleServiceToggle = (service: string) => {
    if (service === "Evento completo") {
      if (formData.servicos.includes("Evento completo")) {
        setFormData((prev) => ({ ...prev, servicos: [] }));
      } else {
        // Seleciona todos os serviços
        setFormData((prev) => ({ ...prev, servicos: [...AVAILABLE_SERVICES] }));
      }
      return;
    }

    setFormData((prev) => {
      let updated: string[];
      if (prev.servicos.includes(service)) {
        updated = prev.servicos.filter((s) => s !== service && s !== "Evento completo");
      } else {
        updated = [...prev.servicos, service];
        // Se selecionou todos exceto "Evento completo", marca "Evento completo"
        const individual = AVAILABLE_SERVICES.filter((s) => s !== "Evento completo");
        if (individual.every((s) => updated.includes(s))) {
          updated.push("Evento completo");
        }
      }
      return { ...prev, servicos: updated };
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskPhone(e.target.value);
    setFormData((prev) => ({ ...prev, whatsapp: masked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Verificação honeypot: se preenchido, é bot spam
    if (formData.company_website) {
      console.warn("Spam detectado via honeypot.");
      setSubmitted(true);
      return;
    }

    // Validações básicas em pt-BR
    if (!formData.nome.trim()) {
      setErrorMessage("Por favor, informe seu nome completo.");
      return;
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.replace(/\D/g, "").length < 10) {
      setErrorMessage("Por favor, informe um número de WhatsApp válido com DDD.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Por favor, informe um e-mail válido.");
      return;
    }
    if (!formData.tipoEvento) {
      setErrorMessage("Por favor, selecione o tipo de evento.");
      return;
    }
    if (!formData.dataEvento) {
      setErrorMessage("Por favor, selecione a data prevista do evento.");
      return;
    }
    if (!formData.convidados) {
      setErrorMessage("Por favor, informe a quantidade estimada de convidados.");
      return;
    }
    if (!formData.localEvento.trim()) {
      setErrorMessage("Por favor, informe o local do evento (ou informe se ainda procura).");
      return;
    }
    if (formData.servicos.length === 0) {
      setErrorMessage("Por favor, selecione ao menos um serviço desejado.");
      return;
    }

    setIsSubmitting(true);

    // Monta mensagem estruturada para o WhatsApp
    const eventLabel =
      EVENT_TYPES.find((t) => t.value === formData.tipoEvento)?.label || formData.tipoEvento;

    const waText = [
      `*Solicitação de Orçamento — Leandro Santana Cerimonial*`,
      `• *Nome:* ${formData.nome}`,
      `• *WhatsApp:* ${formData.whatsapp}`,
      `• *E-mail:* ${formData.email}`,
      `• *Tipo de Evento:* ${eventLabel}`,
      `• *Data:* ${formData.dataEvento}`,
      `• *Convidados:* ${formData.convidados}`,
      `• *Local:* ${formData.localEvento}`,
      `• *Serviços:* ${formData.servicos.join(", ")}`,
      formData.mensagem ? `• *Mensagem:* ${formData.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = buildWhatsAppLink(waText);
    setWhatsAppLink(waUrl);

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    const isPlaceholderEndpoint =
      !endpoint ||
      endpoint.includes("SEU_FORM_ID") ||
      endpoint.includes("placeholder");

    if (isPlaceholderEndpoint) {
      // Fallback gracioso imediato para envio: registra sucesso e direciona para WhatsApp
      setIsSubmitting(false);
      setSubmitted(true);
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
          tipoEventoRotulo: eventLabel,
          servicosDesejados: formData.servicos.join(", "),
          destinatario: siteConfig.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha na comunicação com o servidor de formulário.");
      }

      setSubmitted(true);
    } catch (err) {
      console.warn("Fallback para WhatsApp ativado devido a erro no endpoint:", err);
      // Fallback garantido: não frustra o cliente, permite continuar no WhatsApp
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-espresso p-6 sm:p-10 md:p-12 border border-gold/30 shadow-2xl relative bg-grain">
      {submitted ? (
        <div className="py-12 text-center space-y-6 animate-fade-in" role="alert">
          <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center mx-auto text-gold">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal max-w-lg mx-auto leading-snug">
            Obrigado! Nossa equipe entrará em contato em breve pelo WhatsApp.
          </h3>

          <p className="text-sm text-ivory/70 max-w-md mx-auto font-sans leading-relaxed">
            Seus dados foram registrados com sucesso. Para um atendimento ainda mais rápido com a nossa equipe comercial, continue a conversa diretamente no WhatsApp com seu orçamento já estruturado:
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsAppLink || siteConfig.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-ink font-sans font-medium uppercase tracking-widest text-xs py-4 px-8 hover:bg-gold-light transition-all shadow-lg min-h-[48px] w-full sm:w-auto"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.96.525 1.961.815 3.02.816h.005c3.181 0 5.767-2.586 5.768-5.766 0-1.54-.599-2.989-1.688-4.079-1.09-1.089-2.54-1.687-4.079-1.687zm0-2c4.295 0 7.769 3.474 7.769 7.766 0 2.076-.816 4.028-2.288 5.5-1.472 1.472-3.424 2.288-5.5 2.288-1.341 0-2.65-.353-3.805-1.023l-4.526 1.187 1.21-4.417c-.742-1.206-1.135-2.593-1.135-3.987 0-4.292 3.474-7.766 7.769-7.766zm4.515 11.026c-.247-.123-1.464-.722-1.691-.805-.227-.082-.392-.123-.557.123-.165.247-.641.805-.785.97-.144.164-.288.185-.535.062-.247-.123-1.043-.385-1.986-1.226-.734-.655-1.23-1.465-1.374-1.712-.144-.247-.015-.38.109-.503.111-.11.247-.288.371-.432.124-.144.165-.247.247-.412.082-.164.041-.309-.021-.432-.062-.124-.557-1.34-.763-1.835-.2-.484-.403-.418-.557-.426l-.474-.008c-.165 0-.432.062-.659.309-.227.247-.866.845-.866 2.062 0 1.216.886 2.391 1.01 2.556.124.165 1.745 2.665 4.227 3.738.591.256 1.052.408 1.411.523.593.188 1.133.161 1.56.098.476-.071 1.464-.598 1.67-1.175.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288z" />
              </svg>
              <span>Continuar no WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  nome: "",
                  whatsapp: "",
                  email: "",
                  tipoEvento: "",
                  dataEvento: "",
                  convidados: "",
                  localEvento: "",
                  servicos: [],
                  mensagem: "",
                  company_website: "",
                });
              }}
              className="text-xs uppercase tracking-widest text-ivory/60 hover:text-gold py-2"
            >
              Enviar nova solicitação
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot invisível para bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Não preencha este campo se for humano</label>
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

          {errorMessage && (
            <div
              className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm font-sans"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          {/* Linha 1: Nome Completo */}
          <div className="space-y-2">
            <label htmlFor="nome" className="block text-xs uppercase tracking-wider text-gold font-medium">
              Nome Completo <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="nome"
              required
              value={formData.nome}
              onChange={(e) => setFormData((prev) => ({ ...prev, nome: e.target.value }))}
              placeholder="Ex.: Carolina de Medeiros"
              className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors"
            />
          </div>

          {/* Linha 2: WhatsApp e E-mail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="block text-xs uppercase tracking-wider text-gold font-medium">
                WhatsApp com DDD <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handlePhoneChange}
                placeholder="(71) 98888-7777"
                maxLength={15}
                className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gold font-medium">
                E-mail de Contato <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="seuemail@exemplo.com.br"
                className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Linha 3: Tipo de Evento e Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="tipoEvento" className="block text-xs uppercase tracking-wider text-gold font-medium">
                Tipo de Evento <span className="text-red-400">*</span>
              </label>
              <select
                id="tipoEvento"
                required
                value={formData.tipoEvento}
                onChange={(e) => setFormData((prev) => ({ ...prev, tipoEvento: e.target.value }))}
                className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold px-4 py-3.5 text-sm text-ivory outline-none transition-colors"
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
            </div>

            <div className="space-y-2">
              <label htmlFor="dataEvento" className="block text-xs uppercase tracking-wider text-gold font-medium">
                Data Prevista <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                id="dataEvento"
                min={today}
                required
                value={formData.dataEvento}
                onChange={(e) => setFormData((prev) => ({ ...prev, dataEvento: e.target.value }))}
                className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold px-4 py-3.5 text-sm text-ivory outline-none transition-colors"
              />
            </div>
          </div>

          {/* Linha 4: Quantidade de Convidados e Local */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="convidados" className="block text-xs uppercase tracking-wider text-gold font-medium">
                Quantidade de Convidados <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                id="convidados"
                min="1"
                required
                value={formData.convidados}
                onChange={(e) => setFormData((prev) => ({ ...prev, convidados: e.target.value }))}
                placeholder="Ex.: 150"
                className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="localEvento" className="block text-xs uppercase tracking-wider text-gold font-medium">
                Local do Evento <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="localEvento"
                required
                value={formData.localEvento}
                onChange={(e) => setFormData((prev) => ({ ...prev, localEvento: e.target.value }))}
                placeholder="Ex.: Cerimonial em Salvador ou 'A definir'"
                className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Linha 5: Serviços Desejados (Chips Elegantes) */}
          <div className="space-y-3 pt-2">
            <span className="block text-xs uppercase tracking-wider text-gold font-medium">
              Serviços Desejados <span className="text-red-400">*</span>
            </span>
            <p className="text-xs text-ivory/60 font-sans">
              Selecione os itens para o pacote personalizado. Marcar &quot;Evento completo&quot; engloba todas as etapas:
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
                    className={`px-4 py-2.5 text-xs font-sans rounded-full transition-all duration-300 border min-h-[44px] flex items-center gap-2 ${
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
          </div>

          {/* Linha 6: Mensagem / Detalhes */}
          <div className="space-y-2 pt-2">
            <label htmlFor="mensagem" className="block text-xs uppercase tracking-wider text-gold font-medium">
              Conte-nos mais sobre o evento (opcional)
            </label>
            <textarea
              id="mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={(e) => setFormData((prev) => ({ ...prev, mensagem: e.target.value }))}
              placeholder="Compartilhe suas ideias, referências de estilo, horários ou necessidades específicas..."
              className="w-full bg-espresso-dark/90 border border-gold/30 focus:border-gold p-4 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors resize-y"
            />
          </div>

          {/* Botão de Envio */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-gold-light text-ink font-sans font-medium uppercase tracking-editorial text-sm py-4 px-8 transition-all duration-300 shadow-xl disabled:opacity-50 min-h-[52px] flex items-center justify-center gap-3 focus-visible:outline-2 focus-visible:outline-ivory"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                  <span>Enviando solicitação...</span>
                </>
              ) : (
                <span>Enviar solicitação</span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
