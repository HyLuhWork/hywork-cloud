import { requireUser } from "@/lib/require-user";
import { PageLayout, Button } from "@/components/ui";
import { ProcessosView } from "./processos-view";

export default async function ProcessosPage() {
  await requireUser();

  return (
    <PageLayout
      title="Central de Processos"
      subtitle="Crie e acompanhe os processos internos deste ambiente, como férias, reembolso, compras e onboarding."
      actions={<Button>Criar do 0</Button>}
    >
      <ProcessosView />
    </PageLayout>
  );
}
