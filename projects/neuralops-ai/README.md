# NeuralOps AI

Primeiro projeto do laboratório de estudos em IA e produto ([ai-futuristic-product-lab](../../README.md)). Landing page simples com UI dark/light, usada como base para aprender Next.js, Tailwind e shadcn/ui na prática.

## Stack

- [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) (Button, Card, Badge)
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
  app/            rotas (App Router), layout, estilos globais
  components/ui/  componentes shadcn/ui (button, card, badge)
  components/     componentes próprios (ex: theme-toggle)
  lib/            utilitários (ex: cn)
```

## Tema claro/escuro

O tema começa em modo escuro por padrão. A escolha do usuário é salva no `localStorage` e aplicada antes da renderização (script inline em `layout.tsx`) para evitar flash de tela.
