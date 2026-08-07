type Step = {
  number: string
  action: string
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: '01',
    action: 'CONECTE',
    title: 'Conecte suas ferramentas',
    description:
      'Integre APIs, bancos de dados e aplicações usadas pela sua equipe.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8 8l8 8" />
      </svg>
    ),
  },
  {
    number: '02',
    action: 'CONFIGURE',
    title: 'Configure seus fluxos',
    description:
      'Defina tarefas, regras, agentes e pontos de aprovação humana.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M6.5 16.5l4-9M17.5 16.5l-4-9" />
      </svg>
    ),
  },
  {
    number: '03',
    action: 'MONITORE',
    title: 'Monitore os resultados',
    description:
      'Acompanhe execuções, desempenho, erros e economia de tempo.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 18V13" />
        <path d="M10 18V9" />
        <path d="M16 18V6" />
        <path d="M20 18V11" />
      </svg>
    ),
  },
]

export function HowItWorksSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {'// COMO FUNCIONA'}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Automação inteligente em três etapas
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Conecte suas ferramentas, configure seus fluxos e acompanhe cada
            execução em tempo real.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex h-full flex-col rounded-2xl border border-border glass p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/40 text-primary">
                {step.icon}
              </span>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                {step.number} — {step.action}
              </p>
              <h3 className="mt-2 text-balance text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
