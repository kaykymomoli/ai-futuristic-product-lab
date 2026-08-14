# NeuralOps AI

Landing page futurista para uma plataforma fictícia de automação e orquestração de agentes de inteligência artificial.

O projeto foi desenvolvido como parte do [AI Futuristic Product Lab](../../README.md), uma trilha prática focada em desenvolvimento de produtos digitais com IA.

A NeuralOps AI foi utilizada para estudar e aplicar conceitos de frontend moderno, componentização, responsividade, acessibilidade, performance e desenvolvimento assistido por inteligência artificial.

## Demo

[Acessar NeuralOps AI](https://ai-futuristic-product-lab-two.vercel.app)

## Case Study

📄 [Ver case técnico completo](./docs/case-study.md)

## Funcionalidades

- Landing page responsiva para desktop, tablet e mobile
- Hero section com apresentação do produto
- Seção de empresas fictícias
- Fluxo "Como funciona"
- Módulos da plataforma
- Planos e preços
- FAQ interativo
- CTA final
- Navegação acessível por teclado
- Vercel Web Analytics

## Screenshots

### Desktop

![NeuralOps AI - Desktop](./docs/images/neuralops-hero-desktop.png)

### Página completa

![NeuralOps AI - Página completa](./docs/images/neuralops-desktop-full.png)

### Mobile

![NeuralOps AI - Mobile](./docs/images/neuralops-mobile.png)

## Qualidade

Última auditoria realizada com Lighthouse em produção:

- Performance: 99
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Stack

- [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- TypeScript
- Tailwind CSS v4
- [Base UI](https://base-ui.com) (`@base-ui/react`) para o componente `Button`
- [Vercel Analytics](https://vercel.com/docs/analytics) (ativo apenas em produção)
- pnpm

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
pnpm build   # build de produção
pnpm start   # roda o build de produção
pnpm lint    # eslint
```

## Estrutura

```
src/
  app/            rotas (App Router), layout, estilos globais, ícone
  components/     seções da landing page (navbar, hero, features, cta, footer)
  components/ui/  componentes de UI (button, card, badge)
  lib/            utilitários (ex: cn)
```

## Arquitetura

A aplicação utiliza o App Router do Next.js e foi organizada em componentes independentes para cada seção da landing page.

O `page.tsx` funciona como ponto de composição da página, importando e organizando os componentes na ordem em que são exibidos.

Fluxo principal:

```text
src/app/page.tsx
│
├── Navbar
├── HeroSection
├── TrustedCompaniesSection
├── HowItWorksSection
├── FeaturesSection
├── PricingSection
├── FAQSection
├── CTASection
└── Footer
```

## Desenvolvimento assistido por IA

O projeto foi desenvolvido utilizando IA como apoio em diferentes etapas do processo, sem substituir a validação técnica e visual.

## Resultados

Ao final do projeto, a NeuralOps AI foi publicada em produção e validada em diferentes resoluções e critérios de qualidade.

Principais resultados:

- Landing page responsiva em desktop, tablet e mobile
- Componentização por seções independentes
- Navegação acessível por teclado
- FAQ interativo
- Deploy contínuo pela Vercel
- Web Analytics configurado
- Lighthouse em produção:
  - Performance: 99
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

## Aprendizados

Durante o desenvolvimento do projeto, foram praticados conceitos como:

- Estruturação de projetos com Next.js App Router
- Componentização de interfaces React
- Estilização responsiva com Tailwind CSS
- Organização de componentes reutilizáveis
- Validação de acessibilidade
- Análise de performance com Lighthouse
- Deploy e diagnóstico em ambiente de produção
- Uso de IA de forma incremental durante o desenvolvimento
- Revisão crítica de sugestões e código gerados por IA

### Ferramentas utilizadas

- **ChatGPT** — planejamento das etapas, definição de escopo, revisão de decisões e apoio técnico
- **Google Stitch** — geração de referências visuais para novas seções da interface
- **Claude Code** — implementação e revisão de código com escopo controlado
- **Vercel** — deploy, Analytics e validação da aplicação em produção

## Tema

A landing page é dark-only por design (`color-scheme: dark` fixo em `globals.css`); não há alternância para modo claro.
