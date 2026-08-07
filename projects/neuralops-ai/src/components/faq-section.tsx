type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'O que é a NeuralOps AI?',
    answer:
      'A NeuralOps AI é uma plataforma fictícia para criar, organizar e monitorar fluxos de automação com agentes de inteligência artificial.',
  },
  {
    question: 'Preciso saber programar para usar?',
    answer:
      'Não. A proposta da plataforma é permitir a criação de fluxos visuais, mantendo opções avançadas para integrações técnicas.',
  },
  {
    question: 'Os agentes executam tarefas automaticamente?',
    answer:
      'Sim. Os agentes podem executar tarefas dentro das permissões e regras configuradas para cada fluxo.',
  },
  {
    question: 'É possível exigir aprovação humana?',
    answer:
      'Sim. Etapas críticas podem exigir confirmação humana antes da continuação da execução.',
  },
  {
    question: 'Posso integrar ferramentas externas?',
    answer:
      'Sim. A plataforma foi idealizada para conectar APIs, bancos de dados e aplicações utilizadas pela equipe.',
  },
  {
    question: 'Como as execuções são monitoradas?',
    answer:
      'O painel apresenta histórico, status, erros, tempo economizado e desempenho dos agentes.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {'// DÚVIDAS FREQUENTES'}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Perguntas comuns sobre a NeuralOps AI
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Entenda como a plataforma organiza agentes, automações e aprovações
            humanas.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              name="faq"
              className="group relative rounded-2xl border border-border glass p-6 transition-colors duration-300 open:border-primary/40 sm:p-8"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium marker:content-none after:absolute after:inset-0 after:content-[''] [&::-webkit-details-marker]:hidden">
                <span className="relative z-10">{faq.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="relative z-10 mt-4 text-pretty leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
