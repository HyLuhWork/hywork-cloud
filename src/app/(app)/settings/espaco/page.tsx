import { PageLayout, Section } from "@/components/ui";

export default function EspacosPage() {
  return (
    <PageLayout title="Espaços" subtitle="Configure seus workspaces de forma prática e rápida">
      <Section title="Hywork">
        <p className="text-sm text-muted-foreground">Espaço ativo.</p>
      </Section>
    </PageLayout>
  );
}
