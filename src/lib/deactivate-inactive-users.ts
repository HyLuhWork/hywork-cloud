import { prisma } from "@/lib/prisma";
import { getSecuritySettings } from "@/lib/security-settings";

/**
 * Marks users inactive once they've gone longer than the tenant's configured
 * number of days without logging in. Meant to be invoked periodically (e.g.
 * from a daily scheduled job hitting the /api/security/deactivate-inactive
 * route) since this app has no built-in cron runner.
 */
export async function deactivateInactiveUsers(tenantId: string): Promise<{ deactivatedCount: number }> {
  const settings = await getSecuritySettings(tenantId);
  if (!settings.inactiveUserDeactivationEnabled) return { deactivatedCount: 0 };

  const cutoff = new Date(Date.now() - settings.inactiveUserDeactivationDays * 24 * 60 * 60 * 1000);

  const result = await prisma.user.updateMany({
    where: {
      tenantId,
      isActive: true,
      OR: [{ lastLoginAt: { lt: cutoff } }, { lastLoginAt: null, createdAt: { lt: cutoff } }],
    },
    data: { isActive: false },
  });

  return { deactivatedCount: result.count };
}
