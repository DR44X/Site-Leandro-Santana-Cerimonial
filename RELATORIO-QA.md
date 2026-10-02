# Relatório de Auditoria Técnica e de QA — Leandro Santana Cerimonial

**Data da Auditoria:** 02 de Outubro de 2026  
**Auditor Responsável:** Engenheiro de QA Sênior & Especialista em Design/SEO/Acessibilidade  
**Versão do Projeto:** 1.0.0 (Next.js 15.5.27, React 19, Tailwind CSS 3.4.17)  
**Status do Build:** Compilado com sucesso (`next build` estático — 18 páginas geradas)

---

## 1. Resumo Executivo

O projeto **Leandro Santana Cerimonial** apresenta uma arquitetura base sólida, com Next.js 15 configurado para exportação estática (`output: 'export'`), tipagem rigorosa em TypeScript sem erros (`tsc --noEmit` zerado) e excelente fidelidade estética ao briefing (paleta nobre em preto, café, off-white e dourado suave, tipografia serifada elegante e estrutura completa de páginas). O formulário comercial possui validações completas em pt-BR, máscara telefônica, honeypot e fallback funcional para WhatsApp com dados estruturados. No entanto, o site **ainda não está pronto para publicação final** devido a quatro ordens de problemas: **(1)** peso crítico de mídia (fotos não comprimidas de até 5.7 MB e vídeo de ~20 MB servidos sem otimização estática), **(2)** vazamento de textos e badges `// TODO` de desenvolvimento diretamente na interface pública dos usuários (Depoimentos, Contato e Eventos), **(3)** falha no script de lint em ambiente de CI/CD por ausência de `.eslintrc.json`, e **(4)** inconsistências funcionais e de acessibilidade no lightbox, no botão fixo do topo em telas mobile e no foco por teclado.

**Nota Geral:** **7.4 / 10**  
*Justificativa:* O código é limpo, a separação em arquivos de conteúdo em `/src/content/` é exemplar e as páginas foram construídas com alto esmero visual. Porém, os vazamentos de TODOs visíveis e o peso excessivo de mídia inviabilizam o lançamento em produção sem as devidas correções.

### Os 5 Problemas Mais Graves:
1. **Peso excessivo de mídia e falta de otimização de imagens (`images.unoptimized: true`):** Galeria e eventos servem arquivos JPEG brutos de 2.2 MB a 5.7 MB, além de vídeo de 19.65 MB no Hero, resultando em mais de 35 MB de transferência e destruindo o tempo de carregamento em redes móveis.
2. **Textos internos e badges `// TODO` vazados na interface pública:** Badges e textos com `// TODO: CONFIRMAR...` estão visíveis para os clientes nas páginas de Depoimentos (Home), Contato e páginas de Eventos (Aniversários e Confraternizações).
3. **Quebra do script de lint (`npm run lint`):** Ausência do arquivo de configuração do ESLint faz o comando travar interativamente e falhar com código 1 em pipelines de integração contínua.
4. **Botão fixo "SOLICITE SEU ORÇAMENTO" no topo oculto no mobile:** Em telas menores que 640px, a classe `hidden sm:flex` remove o botão principal de conversão do cabeçalho fixo, descumprindo requisito do briefing.
5. **Lightbox da Galeria incompleto:** Não fecha ao clicar fora (backdrop), não possui navegação por gestos de swipe em smartphones e não prende o foco do teclado (Focus Trap).

---

## 2. Como a Auditoria Foi Feita

### Procedimentos Executados:
- **Verificação de dependências e tipagem:** Execução de `tsc --noEmit` (0 erros encontrados em todo o projeto).
- **Verificação de linter:** Execução de `npm run lint` (detectada falha por ausência de configuração de ESLint).
- **Compilação e exportação estática:** Execução de `npm run build` (sucesso, 18 rotas geradas no diretório `/out/`).
- **Inspeção de assets e rede:** Mapeamento de tamanho de arquivos em `/public/images/` e `/public/videos/`.
- **Análise estática de código-fonte:** Auditoria linha a linha de todos os componentes (`Header`, `Footer`, `Hero`, `ContactForm`, `Lightbox`, `Gallery`, `EventCard`, `ServiceCard`, `Photo`), rotas em `/src/app/` e dados em `/src/content/`.
- **Verificação de SEO e Metadados:** Inspeção dos arquivos `robots.txt`, `sitemap.xml`, OpenGraph tags, JSON-LD (`LocalBusiness`) e hierarquia de tags `<h1-h6>`.
- **Testes de responsividade estrutural:** Análise das classes CSS e breakpoints do Tailwind para as larguras: **360px, 390px, 768px, 1024px, 1440px e 1920px**.

### Limitações e o que NÃO foi possível testar:
- **Testes automatizados via browser headless (Lighthouse / Playwright):** Não foi possível rodar o subagente de browser headless nem coletar relatórios automatizados do Lighthouse via Playwright devido a indisponibilidade momentânea do CDN de download do driver Playwright (`404 Not Found` no endpoint da Microsoft/Azure). Todas as validações visuais e de rede foram executadas por inspeção direta do código compilado, do servidor local e do diretório `/out/`. Não inventamos nem estimamos pontuações numéricas sintéticas do Lighthouse.

---

## 3. Tabela de Achados

| ID | Severidade | Categoria | Página / Arquivo | Descrição | Como Reproduzir | Esperado x Atual | Evidência | Status | Correção Sugerida | Esforço |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BUG-01** | **Crítico** | Performance | `/public/images/` e `/public/videos/` | Arquivos brutos de mídia sem compressão e `unoptimized: true` no `next.config.ts`. Arquivos atingem até 5.72 MB cada e o vídeo atinge 19.65 MB. | Acessar `/galeria` ou `/eventos/15-anos` e inspecionar o tamanho dos downloads na aba de rede. | **Esperado:** Imagens WebP/AVIF comprimidas (< 150 KB normais, < 250 KB hero).<br>**Atual:** Imagens brutas de até 5.72 MB e vídeo de 19.65 MB baixados sem otimização. | `15-anos-detalhe.jpg` (5.72 MB), `15-anos-debutante.jpg` (2.97 MB), `hero.mp4` (19.65 MB). | Confirmado | Comprimir fotos para WebP via script/sharp mantendo qualidade visual e otimizar/comprimir vídeo para < 3 MB (ou carregar vídeo sob demanda com `loading="lazy"`). | M |
| **BUG-02** | **Crítico** | Código | Raiz do projeto (`package.json`) | O comando `npm run lint` falha com código 1 em execução não interativa por falta de configuração do ESLint. | Executar `cmd.exe /c "npm run lint"` no terminal. | **Esperado:** Executar o linter sem erros ou avisos.<br>**Atual:** Next.js abre prompt interativo perguntando como configurar o ESLint e encerra com código 1. | Terminal: `? How would you like to configure ESLint? ... Error code 1`. | Confirmado | Criar arquivo `.eslintrc.json` com `{"extends": "next/core-web-vitals"}`. | P |
| **BUG-03** | **Alto** | Conteúdo | `Testimonial.tsx`, `contato/page.tsx`, `eventos/[slug]/page.tsx` | Comentários e badges de desenvolvimento com `// TODO` são exibidos visualmente na interface pública para os visitantes. | 1. Visitar a Home na seção de Depoimentos.<br>2. Visitar `/contato` sob o endereço.<br>3. Visitar `/eventos/aniversarios`. | **Esperado:** Nenhum texto técnico ou "TODO" visível ao usuário final.<br>**Atual:** Badges visíveis com `// TODO: CONFIRMAR COM O CLIENTE`, `// TODO: CONFIRMAR COMPLEMENTO...` e nota de depoimento. | `Testimonial.tsx` (L36-38), `contato/page.tsx` (L91), `eventos/[slug]/page.tsx` (L128). | Confirmado | Remover a renderização desses elementos da interface ou exibir apenas textos institucionais limpos e polidos. | P |
| **BUG-04** | **Alto** | Briefing / Mobile | `src/components/Header.tsx` | O botão fixo "SOLICITE SEU ORÇAMENTO" no cabeçalho fica oculto em telas menores que 640px. | Reduzir a largura de tela para 360px ou 390px e observar o topo da página. | **Esperado:** Botão de orçamento presente e visível no cabeçalho fixo em todas as páginas.<br>**Atual:** O elemento está com `hidden sm:flex`, visível apenas dentro do menu hambúrguer. | `Header.tsx`, linha 115: `<div className="hidden sm:flex items-center gap-4">`. | Confirmado | Ajustar layout do header mobile (ex.: exibir botão compacto ou ícone de destaque ao lado do hambúrguer). | P |
| **BUG-05** | **Alto** | Briefing / Funcionalidade | `src/components/Lightbox.tsx` | O lightbox não fecha ao clicar no fundo (backdrop) e não suporta navegação por arrasto/swipe em telas sensíveis ao toque. | Abrir uma foto na Galeria. Clicar no espaço escuro fora da imagem ou tentar arrastar a tela no mobile. | **Esperado:** Fechar ao clicar fora e permitir navegação por swipe (gestos).<br>**Atual:** Clique fora é ignorado; apenas botões e setas do teclado funcionam. | `Lightbox.tsx`, linhas 72-145: ausência de `onClick` no backdrop e ausência de manipuladores `onTouchStart`/`onTouchEnd`. | Confirmado | Adicionar `onClick` no container para fechar ao clicar no backdrop e listeners de touch para navegação por swipe. | M |
| **BUG-06** | **Alto** | Conteúdo / Consistência | `src/content/eventos.ts` | A categoria Casamentos não possui o array de `topics` definido, gerando assimetria estrutural com as outras 5 categorias. | Acessar `/eventos/casamentos` e comparar com `/eventos/15-anos` ou `/eventos/formaturas`. | **Esperado:** Todas as 6 categorias possuírem o bloco "Destaques da Produção" ou tratamento padronizado.<br>**Atual:** Casamentos pula direto do texto comercial para a galeria. | `src/content/eventos.ts`, linhas 17-41: ausência da propriedade `topics`. | Confirmado | Adicionar os 5 a 6 tópicos da produção de casamentos em `src/content/eventos.ts` alinhados com o briefing. | P |
| **BUG-07** | **Médio** | Design / Layout | `src/app/page.tsx`, `ServiceCard.tsx` | Quebra de alinhamento no grid de serviços da Home em desktop (1024px+), deixando um espaço em branco na primeira linha. | Visualizar a seção "Estrutura completa em cada etapa" na Home em viewport 1280px ou 1440px. | **Esperado:** Grid balanceado sem colunas vazias.<br>**Atual:** Card 03 tem `md:col-span-2`, forçando quebra para a 2ª linha e deixando 1 slot vazio à direita do Card 02. | `page.tsx`, linha 178 (`isWide={idx === 2}`). Grid `grid-cols-3` com cards ocupando [1, 1], [2, 1], [1, 1, 1]. | Confirmado | Remover `isWide` forçado no 3º card ou padronizar grid para 3 colunas regulares com o último card centralizado ou expandido. | P |
| **BUG-08** | **Médio** | Acessibilidade | `Header.tsx`, `Lightbox.tsx` | Falta de aprisionamento de foco (Focus Trap) no Menu Mobile e no Lightbox em tela cheia. | Abrir o menu mobile ou o lightbox e navegar pressionando a tecla `Tab`. | **Esperado:** O foco do teclado circular exclusivamente dentro do modal ativo.<br>**Atual:** O foco avança para links e botões da página de trás que estão ocultos pela sobreposição. | `Header.tsx` (L161-224) e `Lightbox.tsx` (L72-145): ausência de interceptação do evento `Tab`. | Confirmado | Implementar verificação de foco cíclico ou utilizar o atributo `inert` nos irmãos do modal enquanto ativo. | M |
| **BUG-09** | **Médio** | Acessibilidade | `src/components/Footer.tsx` | Contraste insuficiente de cor em textos com opacidade reduzida no rodapé (`text-ivory/50`). | Inspecionar a linha de CNPJ e direitos autorais no rodapé. | **Esperado:** Relação de contraste mínima de 4.5:1 (WCAG AA).<br>**Atual:** `#F6F0E6` a 50% sobre `#1B120E` resulta em ~3.2:1 de contraste. | `Footer.tsx`, linhas 85 e 128 (`text-ivory/50`). | Confirmado | Alterar a classe de opacidade para `text-ivory/70` ou `text-champagne/80`. | P |
| **BUG-10** | **Médio** | Briefing | `src/content/site.ts`, `Footer.tsx` | Menu de navegação do rodapé exibe 6 itens, omitindo o item "Orçamentos". | Visualizar a 2ª coluna do rodapé ("Navegação"). | **Esperado:** Consistência com o menu principal ou inclusão do link direto de Orçamentos.<br>**Atual:** Exibe Home, Quem Somos, Eventos, Serviços, Galeria e Contato (falta Orçamentos). | `site.ts`, linhas 93-100: array `footerNavigation` não contém `{ label: "Orçamentos", href: "/orcamentos" }`. | Confirmado | Adicionar o item "Orçamentos" ao `footerNavigation` em `site.ts`. | P |
| **BUG-11** | **Médio** | Responsividade / UX | `WhatsAppButton.tsx` | Botão flutuante de WhatsApp fixo no canto inferior direito pode cobrir botões de envio em telas mobile estreitas (360px). | Acessar `/orcamentos` em viewport de 360px de largura e rolar até o botão "Enviar solicitação". | **Esperado:** Espaçamento livre para toque sem sobreposição de botões de conversão.<br>**Atual:** O botão flutuante sobrepõe a borda direita inferior do botão de formulário. | `WhatsAppButton.tsx`, linha 18 (`fixed bottom-6 right-6 z-40`). | Confirmado | Em telas pequenas (< 640px), reduzir o offset para `bottom-4 right-4` e adicionar `padding-bottom` extra nas páginas de formulário. | P |
| **BUG-12** | **Médio** | Código / Repositório | Raiz / `public/images/` | Duplicação de fotos idênticas entre pastas e pasta bruta `cada de festa/` mantida na raiz ocupando ~30 MB no repositório. | Comparar `public/images/eventos/` com `public/images/galeria/` e listar raiz do projeto. | **Esperado:** Imagens compartilhadas pelo mesmo caminho de asset e arquivos de trabalho fora do build.<br>**Atual:** Fotos de 3 MB duplicadas em 2 pastas e arquivos brutos no repositório. | `eventos/15-anos-debutante.jpg` e `galeria/15-anos-debutante.jpg` idênticas; diretório `/cada de festa/`. | Confirmado | Centralizar o manifesto `images.ts` para apontar para um arquivo único e mover `/cada de festa/` para pasta de backup externa ou adicionar ao `.gitignore`. | P |
| **BUG-13** | **Baixo** | SEO / Assets | `public/favicon.svg` | Ausência de arquivo de fallback `favicon.ico` para navegadores legados ou atalhos de desktop. | Fazer requisição GET em `http://localhost:3000/favicon.ico`. | **Esperado:** Retornar 200 OK com ícone favicon.<br>**Atual:** Retorna 404 porque apenas `favicon.svg` está presente. | Requisição HTTP para `/favicon.ico` falha. | Confirmado | Gerar um arquivo `favicon.ico` multi-resolução (16x16, 32x32) na pasta `public/`. | P |
| **BUG-14** | **Baixo** | Performance / UX | `src/components/Hero.tsx` | Flash de substituição visual no Hero: o componente monta inicialmente a imagem estática e, após a requisição `fetch HEAD`, troca bruscamente pelo vídeo. | Carregar a página inicial com rede normal e observar o Hero durante o primeiro segundo. | **Esperado:** Transição suave ou renderização direta do elemento de mídia.<br>**Atual:** Leve "salto" visual no Hero quando o vídeo assume a reprodução. | `Hero.tsx`, linhas 28-36 (`checkVideo()` com `setVideoAvailable(true)` pós-montagem). | Confirmado | Inicializar com estado pré-determinado ou fade-in suave com CSS `opacity` entre poster e vídeo. | P |

---

## 4. Severidade dos Problemas Encontrados

- **Críticos (2 achados):**
  - **BUG-01:** Peso desmedido de mídia (fotos de 5.7 MB e vídeo de 20 MB) comprometendo carregamento móvel.
  - **BUG-02:** Script de lint falhando com código 1 por ausência de `.eslintrc.json`.
- **Altos (4 achados):**
  - **BUG-03:** Textos de teste e `// TODO` visíveis ao público em páginas-chave.
  - **BUG-04:** Botão fixo de orçamento ausente no topo em telas mobile.
  - **BUG-05:** Lightbox sem fechamento por clique fora e sem gestos touch.
  - **BUG-06:** Categoria Casamentos sem bloco de tópicos de produção.
- **Médios (6 achados):**
  - **BUG-07:** Quebra visual no grid de serviços da Home em desktop.
  - **BUG-08:** Falta de focus trap em modais (menu mobile e lightbox).
  - **BUG-09:** Contraste reduzido no rodapé para textos com 50% de opacidade.
  - **BUG-10:** Item Orçamentos ausente no menu do rodapé.
  - **BUG-11:** Sobreposição potencial do WhatsApp flutuante em formulários mobile.
  - **BUG-12:** Duplicação de arquivos pesados e pasta bruta na raiz.
- **Baixos (2 achados):**
  - **BUG-13:** Ausência de `favicon.ico` legado.
  - **BUG-14:** Flash de transição imagem/vídeo no Hero.

---

## 5. Checklist de Conformidade com o Briefing

| Item do Briefing | Status | Observação |
| :--- | :---: | :--- |
| **Menu principal com exatamente 7 itens** | ✅ Atende | Home, Quem Somos, Eventos, Serviços, Galeria, Orçamentos e Contato no desktop e mobile. |
| **Botão fixo SOLICITE SEU ORÇAMENTO no topo** | ⚠️ Parcial | Presente no desktop e tablet (`>= 640px`), mas oculto em mobile (`hidden sm:flex`). |
| **Botão flutuante de WhatsApp (71) 98321-6686** | ✅ Atende | Presente em todas as páginas, número correto e mensagem pré-definida. |
| **Home com as 7 seções exatas** | ⚠️ Parcial | Todas as 7 seções existem, mas Depoimentos exibe texto temporário e badge `TODO` visível. |
| **Quem Somos com as 4 partes** | ✅ Atende | Banner, História da marca, Essência (5 pilares) e Estrutura (4 tópicos). |
| **Página de Eventos com 6 categorias próprias** | ⚠️ Parcial | Todas as 6 rotas funcionam e Corporativos não tem galeria. Porém, Aniversários e Confraternizações exibem badge de TODO e Casamentos não possui tópicos. |
| **Página de Serviços com os 7 serviços e tópicos** | ✅ Atende | 7 serviços detalhados com subtópicos e menu índice de rolagem rápida 01–07. |
| **Galeria com os 7 filtros e lightbox tela cheia** | ⚠️ Parcial | 7 filtros funcionam instantaneamente, mas Lightbox não fecha ao clicar no fundo e não suporta swipe. |
| **Orçamentos com 9 campos e 8 serviços desejados** | ✅ Atende | 9 campos corretos, 8 opções de serviços, botão "Enviar solicitação" e mensagem de sucesso exata. |
| **Contato completo com mapa, dados e formulário** | ⚠️ Parcial | Todos os dados, mapa do Google e formulário integrados, mas exibe nota `TODO` visível abaixo do endereço. |
| **Rodapé em 4 colunas com dados do briefing** | ⚠️ Parcial | 4 colunas corretas com CNPJ, endereço e telefone, mas lista de navegação omite "Orçamentos". |
| **Nada fora do escopo (sem backend/banco/login)** | ✅ Atende | 100% estático, sem backend próprio ou painel não solicitado. |
| **Textos obrigatórios idênticos ao briefing** | ✅ Atende | Frases de impacto, dados cadastrais e mensagem pós-envio rigorosamente idênticos. |

---

## 6. Inconsistências de Design Agrupadas por Tema

### Espaçamento e Grids:
- **Grid de Serviços na Home (`page.tsx`):** A adição de `isWide` no terceiro card quebra o alinhamento do grid de 3 colunas em desktop, gerando um espaço em branco involuntário na primeira linha.
- **Assimetria estrutural em Eventos:** Enquanto cinco categorias possuem o bloco "Destaques da Produção" em cards cinza-café, a página de Casamentos salta diretamente do texto para as fotos.

### Tipografia e Legibilidade:
- **Contraste no Rodapé:** Textos em `text-ivory/50` (50% de opacidade) sobre o fundo espresso escuro não atingem o contraste de 4.5:1 exigido para acessibilidade WCAG AA.
- **Texto sobre Foto nos EventCards:** Em telas menores, onde a imagem de fundo pode ter pontos claros, o contraste de títulos brancos finos depende estritamente do gradiente, que poderia ser ligeiramente reforçado na base.

### Botões e Interatividade:
- **Botão Fixo no Topo:** A ocultação em smartphones (< 640px) reduz a taxa de conversão justamente no canal com maior volume de tráfego (mobile).
- **Áreas de Toque:** Quase todos os botões e links respeitam a recomendação de altura mínima de 44px a 48px, o que é um ponto forte da implementação atual.

### Imagens e Mídia:
- **Compressão Inexistente:** Fotos reais fornecidas pelo cliente foram adicionadas em resolução de câmera profissional (arquivos de até 5.7 MB) sem passar por pipeline de compressão para WebP.
- **Proporção e Foco:** O uso de `foco: "top center"` no retrato da debutante funcionou com precisão, evitando cortes no rosto.

### Animações:
- **Respeito a Movimento Reduzido:** A folha `globals.css` implementa `@media (prefers-reduced-motion: reduce)` anulando durações de animações e transições, cumprindo boas práticas de acessibilidade.

---

## 7. O Que Está Bom (Pontos Fortes a Preservar)

1. **Arquitetura de Conteúdo Centralizada:** Todas as informações, textos, listas de serviços e manifesto de imagens residem de forma limpa em arquivos TypeScript dentro de `/src/content/`, facilitando manutenção futura sem poluição no JSX.
2. **Direção de Arte e Sofisticação:** A paleta de cores (preto carvão, café profundo, off-white e dourado sutil), combinada aos títulos em Cormorant Garamond e às molduras em arco (`arch-frame`), transmite luxo e autoridade visual.
3. **Formulário com Experiência Robusta:** Validação nativa completa em português, formatação automática do telefone com máscara `(XX) XXXXX-XXXX`, seleção inteligente do chip "Evento completo", honeypot invisível anti-spam e fallback garantido para WhatsApp com orçamento pré-formatado.
4. **SEO e Metadados Técnicos:** Implementação completa de JSON-LD Schema.org (`LocalBusiness`), tags OpenGraph e Twitter Card, `sitemap.xml` dinâmico e `robots.txt` bem configurado com URLs canônicas.
5. **Código Tipado e Compilação Limpa:** 0 erros de TypeScript em todo o projeto e compilação do build Next.js 15 em apenas 5.7 segundos para 18 páginas estáticas.

---

## 8. Plano de Correção Priorizado

### Grupo 1: Correções Críticas e Desbloqueio Técnico (Esforço: Médio)
- **Ação 1.1 (BUG-02):** Criar `.eslintrc.json` para normalizar o comando `npm run lint`.
- **Ação 1.2 (BUG-01):** Otimizar e converter todas as imagens pesadas de `/public/images/` para formato WebP com qualidade 80-85%, reduzindo arquivos de 5.7 MB para ~80–140 KB.
- **Ação 1.3 (BUG-01):** Comprimir `hero.mp4` para resolução web 720p/1080p otimizada (< 3 MB) ou condicionar seu carregamento.
- **Ação 1.4 (BUG-12):** Eliminar duplicatas de fotos em pastas separadas e limpar pasta temporária da raiz.

### Grupo 2: Remoção de Vazamentos de Conteúdo e Alinhamento com o Briefing (Esforço: Pequeno)
- **Ação 2.1 (BUG-03):** Remover os badges e textos `// TODO` em `Testimonial.tsx`, `contato/page.tsx` e `eventos/[slug]/page.tsx`. Na seção de Depoimentos, ajustar a citação institucional para uma frase autoral refinada da marca.
- **Ação 2.2 (BUG-04):** Ajustar o cabeçalho no mobile (`Header.tsx`) para manter o botão "Orçamento" visível de forma compacta e elegante ao lado do menu.
- **Ação 2.3 (BUG-06):** Inserir tópicos estruturados de produção na categoria Casamentos em `eventos.ts`.
- **Ação 2.4 (BUG-10):** Adicionar o link "Orçamentos" na navegação do rodapé em `site.ts`.

### Grupo 3: Acessibilidade e Melhorias Interativas (Esforço: Médio)
- **Ação 3.1 (BUG-05):** Atualizar `Lightbox.tsx` para fechar ao clicar no backdrop e adicionar suporte a gestos de toque (swipe) para navegação mobile.
- **Ação 3.2 (BUG-08):** Adicionar aprisionamento de foco (Focus Trap) no Menu Mobile e no Lightbox.
- **Ação 3.3 (BUG-09):** Corrigir contraste de textos com opacidade no rodapé (`text-ivory/75`).
- **Ação 3.4 (BUG-07):** Reorganizar o grid de serviços da Home para manter 3 colunas simétricas sem buracos visuais.

### Grupo 4: Acabamento e Polimento (Esforço: Pequeno)
- **Ação 4.1 (BUG-11):** Ajustar posicionamento do WhatsApp flutuante em telas < 640px para evitar sobreposição em formulários.
- **Ação 4.2 (BUG-13):** Gerar arquivo `favicon.ico` padrão na raiz de `/public/`.
- **Ação 4.3 (BUG-14):** Suavizar a transição inicial de imagem para vídeo no componente Hero.

---

## 9. Pendências do Cliente

Para a entrega final após a aprovação das correções técnicas, as seguintes definições e materiais dependem exclusivamente de retorno do cliente:

1. **Fotos Oficiais de Alta Definição:**
   - Retrato profissional de Leandro Santana para a página Quem Somos (atualmente usando foto temporária).
   - Fotos reais de casamentos, formaturas, corporativos e gastronomia do buffet com assinatura do cerimonial.
2. **Depoimentos Reais de Clientes:**
   - 2 a 3 depoimentos autênticos com nomes dos noivos/famílias ou prints autorizados de mensagens de agradecimento do WhatsApp.
3. **Perfil Oficial do Instagram:**
   - Confirmar se o perfil comercial definitivo a ser divulgado no site é `@decasafestas` ou se haverá perfil próprio `@leandrosantanacerimonial`.
4. **Endereço Comercial:**
   - Confirmar se a menção ao termo `"Pavimento"` deve permanecer expressa no endereço público do site ou apenas nos dados cadastrais fiscais (CNPJ).
5. **Serviço de Envio de Formulário:**
   - Criar conta gratuita e endpoint no Formspree (ex.: `https://formspree.io/f/seu-id`) ou Web3Forms para receber as solicitações de orçamento também por e-mail (atualmente o site já opera com fallback seguro 100% integrado ao WhatsApp).
