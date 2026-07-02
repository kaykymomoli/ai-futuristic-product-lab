'use client'

import { useState } from 'react'
import {
  Workflow,
  Plug,
  ShieldCheck,
  Gauge,
  Bot,
  GitBranch,
  type LucideIcon,
} from 'lucide-react'

type Feature = {
  id: string
  label: string
  title: string
  description: string
  icon: LucideIcon
  metrics: { label: string; value: string }[]
}

const features: Feature[] = [
  {
    id: 'orchestration',
    label: 'Orquestração',
    title: 'Orquestração de agentes autônomos',
    description:
      'Coordene múltiplos agentes de IA que executam tarefas em paralelo, tomam decisões e se adaptam ao contexto do seu negócio em tempo real.',
    icon: Bot,
    metrics: [
      { label: 'Agentes simultâneos', value: '∞' },
      { label: 'Latência média', value: '120ms' },
    ],
  },
  {
    id: 'workflows',
    label: 'Fluxos visuais',
    title: 'Fluxos de trabalho sem código',
    description:
      'Monte automações complexas arrastando blocos. Cada etapa é versionada e pode ser testada antes de entrar em produção.',
    icon: Workflow,
    metrics: [
      { label: 'Blocos prontos', value: '80+' },
      { label: 'Tempo de setup', value: '5 min' },
    ],
  },
  {
    id: 'integrations',
    label: 'Integrações nativas',
    title: 'Conecte todo o seu stack',
    description:
      'Integrações nativas com as ferramentas que sua equipe já usa. Sincronize dados e dispare ações entre sistemas sem esforço.',
    icon: Plug,
    metrics: [
      { label: 'Integrações', value: '200+' },
      { label: 'Webhooks', value: 'Ilimitados' },
    ],
  },
  {
    id: 'security',
    label: 'Segurança',
    title: 'Segurança de nível empresarial',
    description:
      'Criptografia ponta a ponta, controle de acesso granular e conformidade com SOC 2 e GDPR para manter seus dados protegidos.',
    icon: ShieldCheck,
    metrics: [
      { label: 'Uptime', value: '99,99%' },
      { label: 'Certificações', value: 'SOC 2' },
    ],
  },
  {
    id: 'observability',
    label: 'Observabilidade',
    title: 'Monitoramento em tempo real',
    description:
      'Acompanhe cada execução com logs detalhados, alertas inteligentes e métricas de desempenho em um painel unificado.',
    icon: Gauge,
    metrics: [
      { label: 'Retenção de logs', value: '90 dias' },
      { label: 'Alertas', value: 'Em tempo real' },
    ],
  },
  {
    id: 'versioning',
    label: 'Versionamento',
    title: 'Controle de versão dos fluxos',
    description:
      'Cada alteração é registrada. Reverta, compare e faça deploy de versões específicas com total confiança e rastreabilidade.',
    icon: GitBranch,
    metrics: [
      { label: 'Histórico', value: 'Completo' },
      { label: 'Rollback', value: '1 clique' },
    ],
  },
]

export function FeaturesSection() {
  const [active, setActive] = useState(features[0].id)
  const current = features.find((f) => f.id === active) ?? features[0]
  const Icon = current.icon

  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Módulos
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Tudo que você precisa para automatizar
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Explore os módulos que compõem a plataforma NeuralOps.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr]">
          {/* Trilha neural */}
          <ul className="relative flex flex-col">
            <span
              aria-hidden
              className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent"
            />
            {features.map((feature, index) => {
              const isActive = feature.id === active
              const StepIcon = feature.icon
              return (
                <li key={feature.id}>
                  <button
                    type="button"
                    onClick={() => setActive(feature.id)}
                    aria-pressed={isActive}
                    className={`group relative flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition-colors ${
                      isActive ? 'bg-secondary/60' : 'hover:bg-secondary/30'
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive
                          ? 'border-primary/50 bg-primary/10 text-primary shadow-lg shadow-primary/10'
                          : 'border-border bg-card text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      <StepIcon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`block truncate text-sm font-medium ${
                          isActive ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {feature.label}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Painel de destaque */}
          <div className="rounded-2xl border border-border glass p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary shadow-lg shadow-primary/10">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-balance text-2xl font-semibold tracking-tight">
              {current.title}
            </h3>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {current.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {current.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-secondary/40 p-4"
                >
                  <p className="text-2xl font-semibold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
