import { AppShell } from "@/components/layout/app-shell";
import { WorkspaceHeader } from "@/components/workspace/workspace-header";
import { MetricsSection } from "@/components/workspace/metrics-section";
import { RecentProjectsSection } from "@/components/workspace/recent-projects-section";
import { AIActivitySection } from "@/components/workspace/ai-activity-section";
import { TeamActivitySection } from "@/components/workspace/team-activity-section";

export default function Home() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <WorkspaceHeader />
        <MetricsSection />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <RecentProjectsSection />

          <div className="flex flex-col gap-6">
            <AIActivitySection />
            <TeamActivitySection />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
