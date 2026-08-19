import { Button } from "@/components/ui/button";

export function WorkspaceHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-foreground">
          Espaço de Trabalho
        </h1>
        <p className="text-sm text-muted">
          Gerencie seus projetos criativos e fluxos de trabalho com IA
        </p>
      </div>

      <Button variant="primary">Novo Projeto</Button>
    </div>
  );
}
