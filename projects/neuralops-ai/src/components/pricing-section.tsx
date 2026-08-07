import { Check } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type Plan = {
  name: string
  price: string
  period?: string
  features: string[]
  cta: string
  variant: 'default' | 'outline'
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 'Grátis',
    features: [
      '3 automações',
      '1 agente de IA',
      '500 execuções por mês',
      'Monitoramento básico',
    ],
    cta: 'Começar grátis',
    variant: 'outline',
  },
  {
    name: 'Pro',
    price: 'R$ 149',
    period: '/mês',
    features: [
      'Automações ilimitadas',
      'Até 10 agentes de IA',
      '10.000 execuções por mês',
      'Aprovação humana',
      'Observabilidade completa',
    ],
    cta: 'Escolher Pro',
    variant: 'default',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    features: [
      'Agentes ilimitados',
      'Execuções personalizadas',
      'Segurança avançada',
      'Suporte prioritário',
      'Integrações exclusivas',
    ],
    cta: 'Falar com vendas',
    variant: 'outline',
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {'// PLANOS'}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Escolha o nível certo de automação
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Comece com o essencial e evolua conforme sua operação cresce.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.highlighted
                  ? 'border-primary/60 bg-primary/5 shadow-lg shadow-primary/10 hover:border-primary hover:shadow-xl hover:shadow-primary/25'
                  : 'border-border glass hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10'
              }`}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  RECOMENDADO
                </Badge>
              )}

              <h3 className="text-lg font-semibold tracking-tight">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  variant={plan.variant}
                  size="lg"
                  className={`w-full transition-all duration-300 ${
                    plan.variant === 'outline'
                      ? 'border-border glass'
                      : 'hover:scale-105 hover:shadow-lg hover:shadow-primary/40'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
