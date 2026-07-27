import { requireAdmin } from "@/lib/require-user";
import { PageLayout, Section } from "@/components/ui";

export default async function ContaPage() {
  const session = await requireAdmin();

  return (
    <PageLayout title="Conta" subtitle="Suas informações pessoais">
      <Section title="Perfil">
        <p className="text-sm text-foreground">{session.user.name}</p>
        <p className="text-sm text-muted-foreground">{session.user.email}</p>
      </Section>
    </PageLayout>
  );
}
