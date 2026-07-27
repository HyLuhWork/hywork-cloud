import { requireAdmin } from "@/lib/require-user";
import { getSecuritySettings } from "@/lib/security-settings";
import { PageLayout } from "@/components/ui";
import { SecurityCenterView, type EditableSecuritySettings } from "./security-center-view";

export default async function SecurityCenterPage() {
  const session = await requireAdmin();
  const settings = await getSecuritySettings(session.tenant.id);

  const editableSettings: EditableSecuritySettings = {
    sessionTimeoutEnabled: settings.sessionTimeoutEnabled,
    sessionTimeoutValue: settings.sessionTimeoutValue,
    sessionTimeoutUnit: settings.sessionTimeoutUnit as EditableSecuritySettings["sessionTimeoutUnit"],
    inactiveUserDeactivationEnabled: settings.inactiveUserDeactivationEnabled,
    inactiveUserDeactivationDays: settings.inactiveUserDeactivationDays,
    devicePolicy: settings.devicePolicy as EditableSecuritySettings["devicePolicy"],
    passwordMinLength: settings.passwordMinLength,
    passwordMaxLength: settings.passwordMaxLength,
    passwordRequireUppercase: settings.passwordRequireUppercase,
    passwordRequireLowercase: settings.passwordRequireLowercase,
    passwordRequireNumber: settings.passwordRequireNumber,
    passwordRequireSpecialChar: settings.passwordRequireSpecialChar,
    passwordHistoryEnabled: settings.passwordHistoryEnabled,
    passwordHistoryCount: settings.passwordHistoryCount,
    mfaPolicy: settings.mfaPolicy as EditableSecuritySettings["mfaPolicy"],
  };

  return (
    <PageLayout
      title="Segurança"
      subtitle="Configurações de autenticação e segurança aplicadas a todos os usuários deste ambiente."
    >
      <SecurityCenterView initialSettings={editableSettings} />
    </PageLayout>
  );
}
