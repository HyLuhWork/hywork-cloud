import { requireUser } from "@/lib/require-user";
import { PageLayout } from "@/components/ui";

export default async function HomePage() {
  const session = await requireUser();

  return (
    <PageLayout title={`Boa tarde, ${session.user.name.split(" ")[0]}!`} subtitle="Aqui, estamos falando sobre Hywork.">
      <p className="text-sm text-muted-foreground">Bem-vindo(a) de volta.</p>
    </PageLayout>
  );
}
