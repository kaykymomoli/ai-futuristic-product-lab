import { Card } from "@/components/ui/card";

interface Activity {
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    description: "Alex editou Solaris Branding",
    time: "há 2 horas",
  },
  {
    description: "Sarah compartilhou Nebula UI Kit",
    time: "há 4 horas",
  },
  {
    description: "Motor de IA gerou 4 recursos para Campanha Quantum",
    time: "ontem",
  },
];

export function TeamActivitySection() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-foreground">
        Atividade da Equipe
      </h2>

      <Card>
        <div className="divide-y divide-border">
          {activities.map((activity) => (
            <div
              key={activity.description}
              className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
            >
              <p className="min-w-0 flex-1 text-sm text-foreground">
                {activity.description}
              </p>
              <span className="shrink-0 text-xs text-muted">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
