import { Hexagon } from 'lucide-react'

const columns = [
  {
    title: 'Produto',
    links: ['Recursos', 'Integrações', 'Preços', 'Novidades'],
  },
  {
    title: 'Empresa',
    links: ['Sobre', 'Carreiras', 'Blog', 'Contato'],
  },
  {
    title: 'Recursos',
    links: ['Documentação', 'API', 'Comunidade', 'Suporte'],
  },
  {
    title: 'Legal',
    links: ['Privacidade', 'Termos', 'Segurança', 'Status'],
  },
]

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Hexagon className="size-4" />
              </span>
              <span>NeuralOps AI</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A plataforma de automação por IA que dá superpoderes às equipes
              modernas.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NeuralOps AI. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Termos
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
