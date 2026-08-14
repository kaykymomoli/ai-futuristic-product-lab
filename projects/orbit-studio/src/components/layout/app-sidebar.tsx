import { Button } from "@/components/ui/button";

const navItems = ["Workspace", "Assets", "AI Engine", "Templates", "Settings"];

export function AppSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-surface p-4 lg:flex">
      <div className="mb-8 px-2">
        <p className="text-base font-semibold text-foreground">
          Orbit Studio
        </p>
        <p className="text-xs text-muted">AI Creative Suite</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <span
            key={item}
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </nav>

      <Button variant="primary" className="w-full">
        New Project
      </Button>
    </aside>
  );
}
