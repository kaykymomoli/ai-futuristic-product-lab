import { Atom, Boxes, Hexagon, Orbit, Radar, Triangle, type LucideIcon } from 'lucide-react'

type Company = {
  name: string
  icon: LucideIcon
}

const companies: Company[] = [
  { name: 'NovaCore', icon: Hexagon },
  { name: 'DataPulse', icon: Radar },
  { name: 'Orbit Labs', icon: Orbit },
  { name: 'FlowGrid', icon: Boxes },
  { name: 'Aether', icon: Atom },
  { name: 'Vertex Systems', icon: Triangle },
]

export function TrustedCompaniesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {'// CONFIADO POR EQUIPES MODERNAS'}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => {
            const Icon = company.icon
            return (
              <div
                key={company.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border glass px-4 py-6 text-center transition-colors duration-300 hover:border-primary/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/40 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {company.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
