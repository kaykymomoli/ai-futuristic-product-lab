'use client'

import { useEffect, useState } from 'react'
import { Hexagon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Produto', href: '#features' },
  { label: 'Recursos', href: '#features' },
  { label: 'Preços', href: '#cta' },
  { label: 'Docs', href: '#footer' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-10 mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-border glass px-4 py-3 transition-colors duration-300 hover:border-primary/30 hover:bg-background/95 hover:shadow-lg hover:shadow-primary/5 focus-within:bg-background/95 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Hexagon className="size-4" />
          </span>
          <span className="text-base">NeuralOps AI</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Entrar
          </Button>
          <Button size="sm" className="rounded-full">
            Começar agora
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-0 bg-background/70 backdrop-blur-sm md:hidden"
          />
          <div className="relative z-10 mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-4 shadow-lg shadow-primary/5 md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
              <Button size="lg" className="rounded-full px-6 center max-w-[200px] mx-auto">
                Começar agora
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
