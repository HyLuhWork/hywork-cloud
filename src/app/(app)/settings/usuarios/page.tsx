import { requireAdmin } from "@/lib/require-user";
import { prisma } from "@/lib/prisma";
import { PageLayout, Section, Badge } from "@/components/ui";

export default async function UsuariosPage() {
  const session = await requireAdmin();
  const users = await prisma.user.findMany({
    where: { tenantId: session.tenant.id },
    orderBy: { createdAt: "asc" },
  });

  return (
    <PageLayout title="Usuários" subtitle="Gerencie os usuários deste ambiente">
      <Section title="Usuários">
        <div className="divide-y divide-border">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between py-3">
              <div>
                <div className="text-sm font-medium text-foreground">{user.name}</div>
                <div className="text-xs text-muted-foreground">{user.email}</div>
              </div>
              <div className="flex items-center gap-2">
                {user.mfaEnabled && <Badge variant="info">MFA ativo</Badge>}
                <Badge variant={user.isActive ? "success" : "error"}>
                  {user.isActive ? "Ativo" : "Desativado"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
