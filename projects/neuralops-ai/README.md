# NeuralOps AI

Primeiro projeto do laboratório de estudos em IA e produto ([ai-futuristic-product-lab](../../README.md)). Landing page dark/futurista para uma plataforma fictícia de automação com IA, usada como base para aprender Next.js, Tailwind e componentes de UI na prática.

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

## Tema

A landing page é dark-only por design (`color-scheme: dark` fixo em `globals.css`); não há alternância para modo claro.
