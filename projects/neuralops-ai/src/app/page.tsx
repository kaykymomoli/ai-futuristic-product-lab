import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

const features = [
  {
    title: "Laboratório de Estudos",
    description:
      "Um espaço para testar conceitos de UI, arquitetura front-end e boas práticas com Next.js.",
  },
  {
    title: "Stack Moderna",
    description:
      "Next.js, Tailwind CSS v4 e componentes shadcn/ui prontos para evoluir junto com o projeto.",
  },
  {
    title: "Evolução Contínua",
    description:
      "Cada semana adiciona uma nova camada: componentes, integrações e experimentos de produto.",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/25" />
        <div className="absolute -right-16 -bottom-32 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/20" />
      </div>

      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <span className="text-sm font-semibold tracking-wide text-foreground">
          NeuralOps<span className="text-muted-foreground">.ai</span>
        </span>
        <ThemeToggle />
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 pt-8 pb-24 text-center sm:px-10">
        <Badge variant="secondary" className="mb-6">
          Laboratório de IA &amp; Produto
        </Badge>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl">
          NeuralOps AI
        </h1>

        <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Um laboratório de experimentos para aprender, construir e evoluir
          produtos com inteligência artificial.
        </p>

        <div className="mt-8">
          <Button size="lg" className="h-11 gap-2 px-6 text-base">
            Explorar o projeto
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          Este é o primeiro projeto do laboratório de estudos em IA — criado
          para testar ideias, aprender na prática e servir de base para os
          próximos experimentos.
        </p>

        <div className="mt-16 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-left">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
