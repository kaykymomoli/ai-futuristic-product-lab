import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";

interface Metric {
  label: string;
  value: string;
  progress?: number;
}

const metrics: Metric[] = [
  { label: "Projetos Ativos", value: "12" },
  { label: "Gerações com IA", value: "1,2 mil" },
  { label: "Membros da Equipe", value: "8" },
  { label: "Armazenamento Utilizado", value: "64%", progress: 64 },
];

export function MetricsSection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label}>
          <CardHeader>
            <CardDescription>{metric.label}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-foreground">
              {metric.value}
            </p>

            {metric.progress !== undefined ? (
              <div
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border"
                role="progressbar"
                aria-label={metric.label}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={metric.progress}
              >
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${metric.progress}%` }}
                />
              </div>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
