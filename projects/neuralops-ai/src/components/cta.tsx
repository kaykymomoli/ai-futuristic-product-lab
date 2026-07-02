import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-border glass px-6 py-14 text-center sm:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Pronto para colocar sua operação no piloto automático?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Comece gratuitamente hoje. Sem cartão de crédito, sem
              complicação, apenas resultados.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Criar conta grátis
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-border glass sm:w-auto"
              >
                Falar com vendas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
