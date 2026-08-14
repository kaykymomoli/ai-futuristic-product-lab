import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { AppShell } from "@/components/layout/app-shell";

export default function Home() {
  return (
    <AppShell>
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <Card>
            <CardContent>
              <p className="text-sm text-foreground">
                Orbit Studio conecta sua equipe em tempo real.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fluxos automatizados</CardTitle>
              <CardDescription>
                Organize tarefas e acompanhe o progresso do estúdio em um só
                lugar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground">
                Disponível para todos os planos do Orbit Studio.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <h2 className="text-sm font-medium text-muted">Inputs</h2>
          <div className="flex w-full max-w-sm flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="project-name">Nome do projeto</Label>
              <Input id="project-name" placeholder="Nome do projeto" />
            </div>
            <Input defaultValue="Orbit Campaign" />
            <Input placeholder="Campo indisponível" disabled />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <h2 className="text-sm font-medium text-muted">Badges</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="default">DRAFT</Badge>
            <Badge variant="primary">PRO</Badge>
            <Badge variant="secondary">AI MODEL</Badge>
            <Badge variant="outline">BETA</Badge>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <h2 className="text-sm font-medium text-muted">Textarea</h2>
          <div className="flex w-full max-w-sm flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="project-description">
                Descrição do projeto
              </Label>
              <Textarea
                id="project-description"
                placeholder="Descreva seu projeto..."
              />
            </div>
            <Textarea placeholder="Descrição indisponível" disabled />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <h2 className="text-sm font-medium text-muted">Select</h2>
          <div className="flex w-full max-w-sm flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="project-category">Categoria</Label>
              <Select id="project-category" defaultValue="">
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                <option value="branding">Branding</option>
                <option value="social-media">Social Media</option>
                <option value="ui-ux">UI/UX</option>
                <option value="campaign">Campaign</option>
              </Select>
            </div>
            <Select disabled defaultValue="unavailable">
              <option value="unavailable">Indisponível</option>
            </Select>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
