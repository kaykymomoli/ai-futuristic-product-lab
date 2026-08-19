import { Button } from "@/components/ui/button";

const navItems = ["Espaço de Trabalho", "Recursos", "Motor de IA", "Modelos", "Configurações"];
const activeItem = "Espaço de Trabalho";

export function AppSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-surface p-4 lg:flex">
      <div className="mb-8 px-2">
        <p className="text-base font-semibold text-foreground">
          Orbit Studio
        </p>
        <p className="text-xs text-muted">Suíte Criativa com IA</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const isActive = item === activeItem;

          return (
            <span
              key={item}
              className={
                isActive
                  ? "rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-primary"
                  : "rounded-md px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
              }
            >
              {item}
            </span>
          );
        })}
      </nav>

      <Button variant="primary" className="w-full">
        Novo Projeto
      </Button>
    </aside>
  );
}
