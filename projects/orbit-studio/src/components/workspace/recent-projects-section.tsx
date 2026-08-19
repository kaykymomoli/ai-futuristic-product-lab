import { Card } from "@/components/ui/card";
import { Badge, type BadgeProps } from "@/components/ui/badge";

interface Project {
  name: string;
  category: string;
  status: string;
  statusVariant: BadgeProps["variant"];
  updatedAt: string;
  preview: string;
}

const projects: Project[] = [
  {
    name: "Solaris Branding",
    category: "Branding",
    status: "Ativo",
    statusVariant: "primary",
    updatedAt: "Atualizado há 2h",
    preview: "var(--gradient-orbit)",
  },
  {
    name: "Nebula UI Kit",
    category: "UI/UX",
    status: "Em revisão",
    statusVariant: "secondary",
    updatedAt: "Atualizado há 5h",
    preview: "linear-gradient(135deg, var(--secondary), var(--primary))"
  },
];

export function RecentProjectsSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">
          Projetos Recentes
        </h2>
        <span className="text-sm font-medium text-muted">Ver todos</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="overflow-hidden">
            <div
              className="-mx-6 -mt-6 mb-4 h-28 sm:h-32"
              style={{ backgroundImage: project.preview }}
            />

            <div className="flex items-center justify-between">
              <Badge variant={project.statusVariant}>{project.status}</Badge>
              <span className="text-xs text-muted">{project.updatedAt}</span>
            </div>

            <div className="mt-3">
              <h3 className="text-base font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="text-sm text-muted">{project.category}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
