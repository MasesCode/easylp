@AGENTS.md

## Sobre o projeto

Nova Landing Page de marketing da **Easy Faxina** — marketplace brasileiro que profissionaliza o setor de faxina doméstica via IA, background check, escrow e MEI.

Substitui a LP anterior em `../easy-faxina-lp`, que serve apenas como fonte de copy e posicionamento.

**Tagline:** "Faxina fácil. Paz garantida."
**Posicionamento:** "A Arquitetura da Confiança".
**Público:** Moradores urbanos brasileiros classes A/B (primário) + faxineiras buscando formalização (secundário).

## Idioma

Responder sempre em **português brasileiro**. Código, nomes de componentes e props em português.

**Capitalização:** sentence case normal, como no Figma. A marca é **"Easy Faxina"**, com maiúsculas — nunca em caixa baixa. Títulos, botões e itens de menu começam com maiúscula. A LP antiga usava tudo minúsculo; esse padrão foi abandonado.

## Stack

- Next.js 16.4.3 (static export, Turbopack)
- React 19.3
- Tailwind CSS v4 (via `@theme inline` em `src/app/globals.css`, sem `tailwind.config.js`)
- shadcn/ui sobre **Base UI** (ver AGENTS.md)
- framer-motion, lucide-react
- TypeScript 5

```bash
npm run dev     # porta 3000
npm run build   # gera ./out
```

## Design System

A LP nasce de duas fontes, com papéis separados:

**Clanyeco** (tema WordPress ClanyEco da VamTam, `~/Downloads/clanyeco-24.rar`) — só os **fundamentos visuais**, medidos na demo real:
- Cartões `border-radius: 32px`, **sem box-shadow** (visual flat)
- Botões pill, `padding: 15px 30px`, peso 500
- Selos e ícones circulares `border-radius: 100px`
- Superfícies off-white (`#F4F6F0`) e tints claros
- Tipografia geométrica, títulos em peso medium com tracking apertado

**Figma** (`Easy Faxina`, node 327-1887) — a **cara do site**: cores, logos e identidade.

Os valores abaixo são os **declarados no arquivo**, lidos pelo MCP da Figma (`get_design_context` / `get_variable_defs`), não amostrados de imagem.

| token | hex | nome no Figma |
|---|---|---|
| `--marca` | `#0A84FF` | `bg/brand` |
| `--marca-forte` | `#006EE0` | `text/brand` |
| `--apoio` | `#10B981` | verde do perfil cliente |
| `--superficie-tint` | `#F8FAFC` | `bg/screen` |
| `--tinta` | `#0F172A` | `text/primary` |
| `--tinta-suave` | `#64748B` | `text/secondary` |
| `--contorno` | `#E2E8F0` | `border/default` |

O gradiente de marca é `linear-gradient(152deg, #10B981 0%, #0A84FF 100%)` — usado na splash e no fundo do perfil cliente. Na LP ele veste hero, comparação e CTA final (`from-apoio to-marca`).

`--destaque` (CTA) é `#006EE0` e não `#0A84FF`: o app usa o azul de marca em botão com texto branco, o que dá 3,65:1 e reprova AA para texto de 16px. `#006EE0` é cor do próprio design system (`text/brand`) e dá 4,90:1.

**Tipografia** (declarada): **Nunito** ExtraBold para títulos, wordmark e botões; **Inter** para corpo, rótulos e legendas.

| estilo do Figma | fonte |
|---|---|
| Display/Wordmark | Nunito ExtraBold 27/34 |
| Title/Screen | Nunito ExtraBold 19/26 |
| Button/Default | Nunito SemiBold 13/18 |
| Body/Default | Inter Regular 13/19 |
| Body/Strong | Inter SemiBold 13/19 |
| Label/Default | Inter Medium 11/16 |
| Caption/Default | Inter Regular 10/13 |

Os tamanhos são de app mobile; na LP valem como proporção e peso, não como valor absoluto.

O app ainda declara `radius/card: 16px`, `radius/sheet: 26px`, `radius/pill: 999px` e uma escala de espaçamento (`tight: 3`, `inline: 8`, `field: 10`, `stack: 13`, `screen: 19`, `section: 20`). A LP segue o raio do Clanyeco (32px) por ser peça de desktop, conforme combinado — trocar para 16px se a preferência for aderir ao app.

**Logo:** `public/marca/logo.png` (1024px) e `logo-512.png`, exportadas do Figma. O arquivo **não tem versão vetorial** — a marca é bitmap no próprio design (`svgAssets: []`). O símbolo é claro, pensado para fundo colorido, então em superfície clara ele vai dentro de um badge com o gradiente da marca, como na splash. Ver `src/components/marca/logo.tsx`.

Toda a cor do site passa por esses tokens — nenhuma cor literal nos componentes. Trocar os tokens troca a identidade inteira.

### Regras de uso da cor

1. `--destaque` é **exclusivo de CTA de conversão** — sobreuso destrói o gatilho
2. Seções emocionais (hero, comparação, CTA final) = gradiente `--marca` → `--apoio`, texto branco
3. Seções racionais = fundo neutro com acentos

## Estrutura

- `src/lib/conteudo.ts` — toda a copy da LP, uma constante por seção
- `src/components/secoes/` — uma seção da home por arquivo
- `src/components/layout/` — cabeçalho e rodapé
- `src/components/marca/` — logo
- `src/components/ui/` — shadcn (Base UI)

Ordem das seções da home: hero → como funciona → pilares → comparação → segurança → depoimentos → profissionais → FAQ → CTA final.

## Regras

- **Proibido comentar código** — TS, CSS, HTML. Decisão que precisa de explicação vai em `CLAUDE.md` ou no PR.
- **Proibida qualquer atribuição a IA** em commits, PRs ou MRs.
