import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Activity {
  title: string;
  model: string;
  status: string;
  time: string;
}

const activities: Activity[] = [
  {
    title: "Transferência de estilo: Logo Solaris",
    model: "ORBIT V2",
    status: "Concluído",
    time: "há 10 min",
  },
  {
    title: "Refinamento de prompt: Ícones Nebula",
    model: "GPT-4",
    status: "Gerando",
    time: "agora",
  },
];

export function AIActivitySection() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-foreground">
        Atividade de IA
      </h2>

      <Card>
        <div className="divide-y divide-border">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
            >
              <div className="min-w-0 flex flex-col gap-1">
                <p className="text-sm font-medium text-foreground">
                  {activity.title}
                </p>
                <p className="text-xs text-muted">{activity.status}</p>
              </div>

              <div className="shrink-0 flex flex-col items-end gap-1">
                <Badge variant="outline">{activity.model}</Badge>
                <span className="text-xs text-muted">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
