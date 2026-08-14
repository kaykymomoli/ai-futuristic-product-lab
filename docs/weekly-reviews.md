## Semana 3 — NeuralOps AI: UI Premium SaaS

### Objetivo da semana
Evoluir a landing page da NeuralOps AI para uma interface mais completa e profissional, mantendo a identidade visual futurista e melhorando a experiência em desktop e mobile.

### O que estudei
- Estrutura de landing pages SaaS
- Componentização com React
- Responsividade com Tailwind CSS
- Organização visual de seções
- Uso de grids responsivos
- Acessibilidade básica com atributos ARIA
- Uso de accordion com HTML sem dependências adicionais
- Uso de IA para design e desenvolvimento incremental

### O que desenvolvi
- Seção de empresas parceiras
- Seção “Como funciona”
- Seção de Pricing
- FAQ com Accordion
- Melhorias de acessibilidade
- Validação mobile e desktop
- Build de produção
- Deploy atualizado na Vercel

### Como usei IA
- Google Stitch para gerar referências visuais das novas seções
- Claude Code para implementar e revisar componentes
- ChatGPT para orientar o desenvolvimento passo a passo
- IA utilizada uma seção por vez para reduzir erros e consumo de contexto

### Stack utilizada
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- pnpm
- Git
- GitHub
- Vercel
- Google Stitch
- Claude Code
- ChatGPT

### Principais aprendizados
- Como transformar uma referência visual gerada por IA em componentes reais
- Como limitar o escopo do Claude Code para reduzir consumo de tokens
- Como organizar uma landing page SaaS em seções independentes
- Como validar responsividade antes de realizar commits
- Como revisar alterações feitas por agentes de código antes de aceitá-las
- Como usar Git de forma incremental durante o desenvolvimento

### Dificuldades encontradas
- O Google Stitch nem sempre preservou exatamente a identidade visual da página
- Algumas implementações do Claude Code ficaram diferentes da referência visual
- Foi necessário ajustar componentes após comparar o resultado implementado com o design

### Como resolvi
- Passei a gerar apenas uma seção por vez no Google Stitch
- Usei screenshots da página atual como referência visual
- Utilizei prompts curtos e com escopo limitado no Claude Code
- Validei cada componente em desktop e mobile antes de fazer commit

### Resultado final
A NeuralOps AI passou de uma landing page básica para uma landing page SaaS mais completa, com seções de confiança, funcionamento do produto, planos e FAQ.

### Link do repositório
- https://github.com/kaykymomoli/ai-futuristic-product-lab/tree/main/projects/neuralops-ai

### Link do deploy
- https://ai-futuristic-product-lab-two.vercel.app/

### Status
Concluído.

## Semana 4 — Responsividade, Acessibilidade e Qualidade

### Objetivo da semana
Validar a qualidade técnica da landing page NeuralOps AI em diferentes dispositivos, acessibilidade, boas práticas, SEO e performance.

### O que validei
- Responsividade em 390px, 768px, 1024px e 1440px
- Navegação completa utilizando teclado
- Funcionamento do FAQ via teclado
- Performance com Lighthouse
- Acessibilidade
- Best Practices
- SEO

### Lighthouse final
- Performance: 99
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Problemas encontrados
O primeiro teste apresentou notas inferiores por influência do ambiente local e extensões do navegador.

Também foi identificado um erro 404 relacionado ao Vercel Web Analytics.

### Como resolvi
- Ativei o Web Analytics na Vercel
- Realizei um novo deploy
- Reexecutei o Lighthouse em ambiente limpo
- Comparei os resultados antes de realizar qualquer alteração no código

### Principal aprendizado
Métricas de performance devem ser analisadas em ambiente de produção e com o mínimo possível de interferência externa antes de realizar otimizações no código.

### Status
Concluído.

## Semana 6 — Orbit Studio: Design System e Layout Base

### Objetivo
Iniciar o segundo projeto do laboratório, criando a fundação visual e estrutural do Orbit Studio, uma plataforma SaaS fictícia para equipes criativas trabalharem com IA.

### Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- pnpm
- Claude Code
- Google Stitch

### O que foi construído

#### Design System
Foram definidos tokens globais para:
- background
- surface
- primary
- secondary
- border
- foreground
- muted
- gradient

Também foi configurada a tipografia Geist utilizando `next/font` e os tokens do Tailwind.

#### Componentes reutilizáveis
- Button
- Card
- Input
- Textarea
- Badge
- Label
- Select

Os componentes utilizam os tokens do design system em vez de cores hardcoded.

#### Layout da aplicação
Foram criados:
- AppSidebar
- AppHeader
- AppShell

O layout possui sidebar e header fixos no desktop, área principal com scroll independente e comportamento responsivo para tablet e mobile.

### Validações realizadas
- Testes visuais dos componentes
- Navegação por teclado
- Estados de foco
- Estados disabled
- Responsividade em 390px e 768px
- Scroll independente do conteúdo
- `pnpm lint`
- `pnpm build`

### Principais aprendizados
- Criação de design tokens com Tailwind CSS v4
- Separação entre tokens, componentes e interface
- Componentização reutilizável com React
- Uso de elementos HTML nativos para preservar acessibilidade
- Uso de `forwardRef`
- Estruturação de um layout SaaS com Flexbox
- Desenvolvimento incremental assistido por IA
- Revisão crítica do código gerado antes de avançar

### Status
Concluído.