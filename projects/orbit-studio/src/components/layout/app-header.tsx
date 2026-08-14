import { Button } from "@/components/ui/button";

const navItems = ["Design System", "Code", "Collaborate"];

export function AppHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-surface px-4 sm:px-6">
      <nav className="hidden items-center gap-6 sm:flex">
        {navItems.map((item) => (
          <span
            key={item}
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </nav>

      <Button variant="primary" className="ml-auto">
        Publish
      </Button>
    </header>
  );
}
