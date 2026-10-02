# Leandro Santana Cerimonial — Website Institucional & Comercial (v2)

Site institucional e comercial de alto padrão para **Leandro Santana Cerimonial** (cerimonial, buffet, decoração e produção de eventos em Salvador/BA).

Construído com **Next.js (App Router) + TypeScript + Tailwind CSS**, 100% estático (`output: 'export'`), pronto para deploy na Vercel ou qualquer hospedagem estática.

---

## 1. Como Trocar Textos e Informações

Todo o conteúdo do site é centralizado na pasta [`/src/content/`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/src/content):

- **Dados da Empresa & Contatos:** [`/src/content/site.ts`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/src/content/site.ts)  
  Edite telefones, WhatsApp, e-mail, endereço comercial, CNPJ, links de redes sociais e menus.
- **Categorias de Eventos (6 formatos):** [`/src/content/eventos.ts`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/src/content/eventos.ts)  
  Edite títulos, descrições comerciais, tópicos, serviços relacionados e chamadas para ação (CTAs).
- **Serviços Especializados (01 a 07):** [`/src/content/servicos.ts`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/src/content/servicos.ts)  
  Edite nomes, frases de impacto, descrições detalhadas e itens inclusos em cada serviço.
- **Galeria de Fotos:** [`/src/content/galeria.ts`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/src/content/galeria.ts)  
  Organize títulos, legendas e categorias dos registros.
- **Depoimentos:** [`/src/content/depoimentos.ts`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/src/content/depoimentos.ts)  
  Insira avaliações reais de clientes ou prints do WhatsApp quando fornecidos pelo cliente.

---

## 2. Como Trocar Imagens e Vídeos

Todas as imagens do projeto são controladas pelo **manifesto único** em [`/src/content/images.ts`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/src/content/images.ts).

1. Coloque o novo arquivo de imagem dentro da respectiva pasta em [`/public/images/`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/public/images):
   - `/public/images/hero/`
   - `/public/images/eventos/`
   - `/public/images/servicos/`
   - `/public/images/galeria/`
   - `/public/images/equipe/`
2. No manifesto [`images.ts`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/src/content/images.ts), altere a linha correspondente com o caminho `src`, o texto `alt` descritivo e o ponto focal `foco` (ex.: `'center center'`, `'top center'`).
3. Para o vídeo do Hero, basta colocar o arquivo MP4 em [`/public/videos/hero.mp4`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/public/videos/hero.mp4). O componente ativa a reprodução em loop suave automaticamente.

---

## 3. Como Configurar o Formulário (.env)

Crie um arquivo `.env.local` na raiz do projeto (copiando como base o [`.env.example`](file:///c:/Users/drax8/Downloads/Site%20Leandro%20Santana%20Cerimonial/.env.example)):

```bash
# Domínio público do site
NEXT_PUBLIC_SITE_URL=https://www.leandrosantanacerimonial.com.br

# Endpoint do serviço de envio (Formspree ou Web3Forms)
# Formspree: https://formspree.io/f/SEU_ID_AQUI
# Web3Forms: https://api.web3forms.com/submit
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/SEU_ID_AQUI
```

> **Fallback Inteligente:** Se o endpoint não estiver configurado ou ocorrer qualquer instabilidade de rede, o formulário direciona automaticamente para o WhatsApp com todos os dados preenchidos de forma estruturada.

---

## 4. Como Configurar o Domínio

No arquivo `.env.local` e nas configurações da sua hospedagem (ex.: Vercel, Cloudflare Pages ou Netlify), defina a variável `NEXT_PUBLIC_SITE_URL` com o endereço definitivo do site (ex.: `https://www.leandrosantanacerimonial.com.br`). Isso garante que as tags OpenGraph, Twitter Cards, `sitemap.xml` e `robots.txt` apontem para a URL canônica correta.

---

## 5. Como Publicar (Deploy)

### Na Vercel (Recomendado)
1. Conecte o repositório Git na plataforma Vercel.
2. A Vercel detectará o framework Next.js automaticamente.
3. Adicione as variáveis de ambiente (`NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_FORM_ENDPOINT`).
4. Clique em **Deploy**.

### Build Manual Estático
Para compilar localmente os arquivos HTML/CSS/JS prontos para qualquer servidor estático ou CDN:

```bash
npm run build
```

A pasta de saída estática `out/` conterá todo o site compilado.

---

## 6. Comandos Disponíveis

- `npm run dev`: Inicia o servidor local de desenvolvimento.
- `npm run build`: Compila o site estático para produção (`out/`).
- `npm run start`: Inicia o servidor de produção local.
