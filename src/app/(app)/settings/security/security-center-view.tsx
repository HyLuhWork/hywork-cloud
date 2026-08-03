"use client";

import { useState } from "react";
import {
  Section,
  Stack,
  Switch,
  Select,
  Input,
  Button,
  Alert,
  RadioCard,
  KeyIcon,
  LockIcon,
  LayersIcon,
  SmartphoneIcon,
  MailIcon,
  ShieldIcon,
} from "@/components/ui";

type SessionTimeoutUnit = "MINUTES" | "HOURS";
type DevicePolicy = "MULTIPLE" | "SINGLE";
type MfaPolicy = "OPTIONAL" | "REQUIRED_ALL" | "REQUIRED_BY_ROLE";
type UserRoleValue = "ADMIN" | "MEMBER";

const ROLE_LABELS: Record<UserRoleValue, string> = {
  ADMIN: "Administrador",
  MEMBER: "Membro",
};

export interface EditableSecuritySettings {
  sessionTimeoutEnabled: boolean;
  sessionTimeoutValue: number;
  sessionTimeoutUnit: SessionTimeoutUnit;
  inactiveUserDeactivationEnabled: boolean;
  inactiveUserDeactivationDays: number;
  devicePolicy: DevicePolicy;
  passwordMinLength: number;
  passwordMaxLength: number | null;
  passwordRequireUppercase: boolean;
  passwordRequireLowercase: boolean;
  passwordRequireNumber: boolean;
  passwordRequireSpecialChar: boolean;
  passwordHistoryEnabled: boolean;
  passwordHistoryCount: number;
  mfaEnabled: boolean;
  mfaPolicy: MfaPolicy;
  mfaRequiredRoles: UserRoleValue[];
  mfaMethodAuthenticatorApp: boolean;
  mfaMethodSms: boolean;
  mfaMethodEmail: boolean;
}

export function SecurityCenterView({ initialSettings }: { initialSettings: EditableSecuritySettings }) {
  const [settings, setSettings] = useState(initialSettings);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  function update<K extends keyof EditableSecuritySettings>(key: K, value: EditableSecuritySettings[K]) {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

  async function onSave() {
    setSaving(true);
    setFeedback(null);
    try {
      const res = await fetch("/api/security-settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (!res.ok) {
        setFeedback({ type: "error", message: data.error ?? "Erro ao salvar as configurações." });
        return;
      }
      setFeedback({ type: "success", message: "Configurações salvas com sucesso." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <Stack direction="column" gap="6">
      {feedback && (
        <Alert variant={feedback.type === "success" ? "success" : "error"}>{feedback.message}</Alert>
      )}

      <Section title="Sessão" subtitle="Expiração de sessão por inatividade">
        <Stack direction="column" gap="4">
          <Switch
            id="sessionTimeoutEnabled"
            checked={settings.sessionTimeoutEnabled}
            onChange={(checked) => update("sessionTimeoutEnabled", checked)}
            label="Desconectar automaticamente após período de inatividade"
          />
          {settings.sessionTimeoutEnabled && (
            <Stack direction="row" gap="3" align="end">
              <div className="w-32">
                <label className="mb-1 block text-xs font-medium text-foreground">Tempo</label>
                <Input
                  type="number"
                  min={1}
                  value={settings.sessionTimeoutValue}
                  onChange={(e) => update("sessionTimeoutValue", Number(e.target.value))}
                />
              </div>
              <div className="w-40">
                <label className="mb-1 block text-xs font-medium text-foreground">Unidade</label>
                <Select
                  value={settings.sessionTimeoutUnit}
                  onChange={(e) => update("sessionTimeoutUnit", e.target.value as SessionTimeoutUnit)}
                >
                  <option value="MINUTES">Minutos</option>
                  <option value="HOURS">Horas</option>
                </Select>
              </div>
            </Stack>
          )}
        </Stack>
      </Section>

      <Section title="Usuários" subtitle="Inatividade e dispositivos">
        <Stack direction="column" gap="6">
          <div>
            <Switch
              id="inactiveUserDeactivationEnabled"
              checked={settings.inactiveUserDeactivationEnabled}
              onChange={(checked) => update("inactiveUserDeactivationEnabled", checked)}
              label="Desativar automaticamente usuários sem login por um período"
            />
            {settings.inactiveUserDeactivationEnabled && (
              <div className="mt-3 w-32">
                <label className="mb-1 block text-xs font-medium text-foreground">Dias sem login</label>
                <Input
                  type="number"
                  min={1}
                  value={settings.inactiveUserDeactivationDays}
                  onChange={(e) => update("inactiveUserDeactivationDays", Number(e.target.value))}
                />
              </div>
            )}
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-foreground">
              Bloqueio de múltiplos dispositivos
            </label>
            <Select
              className="w-72"
              value={settings.devicePolicy}
              onChange={(e) => update("devicePolicy", e.target.value as DevicePolicy)}
            >
              <option value="MULTIPLE">Permitir múltiplos dispositivos</option>
              <option value="SINGLE">Permitir apenas um dispositivo por usuário</option>
            </Select>
          </div>
        </Stack>
      </Section>

      <Section title="Senhas" subtitle="Complexidade e histórico">
        <Stack direction="column" gap="6">
          <Stack direction="row" gap="3">
            <div className="w-40">
              <label className="mb-1 block text-xs font-medium text-foreground">Mínimo de caracteres</label>
              <Input
                type="number"
                min={4}
                value={settings.passwordMinLength}
                onChange={(e) => update("passwordMinLength", Number(e.target.value))}
              />
            </div>
            <div className="w-48">
              <label className="mb-1 block text-xs font-medium text-foreground">
                Máximo de caracteres (opcional)
              </label>
              <Input
                type="number"
                min={4}
                value={settings.passwordMaxLength ?? ""}
                onChange={(e) => update("passwordMaxLength", e.target.value ? Number(e.target.value) : null)}
              />
            </div>
          </Stack>

          <Stack direction="column" gap="2">
            <Switch
              checked={settings.passwordRequireUppercase}
              onChange={(checked) => update("passwordRequireUppercase", checked)}
              label="Exigir letras maiúsculas"
            />
            <Switch
              checked={settings.passwordRequireLowercase}
              onChange={(checked) => update("passwordRequireLowercase", checked)}
              label="Exigir letras minúsculas"
            />
            <Switch
              checked={settings.passwordRequireNumber}
              onChange={(checked) => update("passwordRequireNumber", checked)}
              label="Exigir números"
            />
            <Switch
              checked={settings.passwordRequireSpecialChar}
              onChange={(checked) => update("passwordRequireSpecialChar", checked)}
              label="Exigir caracteres especiais"
            />
          </Stack>

          <div className="border-t border-border pt-4">
            <Switch
              id="passwordHistoryEnabled"
              checked={settings.passwordHistoryEnabled}
              onChange={(checked) => update("passwordHistoryEnabled", checked)}
              label="Impedir reutilização de senhas anteriores"
            />
            {settings.passwordHistoryEnabled && (
              <div className="mt-3 w-32">
                <label className="mb-1 block text-xs font-medium text-foreground">
                  Quantidade de senhas
                </label>
                <Input
                  type="number"
                  min={1}
                  value={settings.passwordHistoryCount}
                  onChange={(e) => update("passwordHistoryCount", Number(e.target.value))}
                />
              </div>
            )}
          </div>
        </Stack>
      </Section>

      <Section
        title="Autenticação"
        subtitle="Gerencie as políticas de Multi-Fator de Autenticação (MFA) para toda a organização."
      >
        <Stack direction="column" gap="6">
          <Switch
            id="mfaEnabled"
            checked={settings.mfaEnabled}
            onChange={(checked) => update("mfaEnabled", checked)}
            label="Habilitar configurações de MFA"
          />

          {settings.mfaEnabled && (
            <Stack direction="column" gap="6">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Política de obrigatoriedade
                </div>
                <Stack direction="column" gap="3">
                  <RadioCard
                    id="mfa-policy-optional"
                    name="mfaPolicy"
                    icon={<KeyIcon />}
                    title="Opcional"
                    description="O usuário decide individualmente se deseja ativar o MFA em seu perfil."
                    checked={settings.mfaPolicy === "OPTIONAL"}
                    onSelect={() => update("mfaPolicy", "OPTIONAL")}
                  />
                  <RadioCard
                    id="mfa-policy-required-all"
                    name="mfaPolicy"
                    icon={<LockIcon />}
                    title="Obrigatório para todos"
                    description="Todos os colaboradores da organização serão obrigados a configurar o segundo fator."
                    checked={settings.mfaPolicy === "REQUIRED_ALL"}
                    onSelect={() => update("mfaPolicy", "REQUIRED_ALL")}
                  />
                  <RadioCard
                    id="mfa-policy-required-role"
                    name="mfaPolicy"
                    icon={<LayersIcon />}
                    title="Obrigatório por Grupo/Perfil"
                    description="Exige o segundo fator apenas de perfis selecionados."
                    checked={settings.mfaPolicy === "REQUIRED_BY_ROLE"}
                    onSelect={() => update("mfaPolicy", "REQUIRED_BY_ROLE")}
                  >
                    <Stack direction="column" gap="2">
                      {(Object.keys(ROLE_LABELS) as UserRoleValue[]).map((role) => (
                        <label key={role} className="flex items-center gap-2 text-sm text-foreground">
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-primary"
                            checked={settings.mfaRequiredRoles.includes(role)}
                            onChange={(e) => {
                              const next = e.target.checked
                                ? [...settings.mfaRequiredRoles, role]
                                : settings.mfaRequiredRoles.filter((r) => r !== role);
                              update("mfaRequiredRoles", next);
                            }}
                          />
                          {ROLE_LABELS[role]}
                        </label>
                      ))}
                    </Stack>
                  </RadioCard>
                </Stack>
              </div>

              <div className="rounded-md border border-border bg-muted/30 p-4">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Métodos permitidos
                </div>
                <p className="mb-4 text-xs text-muted-foreground">Escolha as opções liberadas.</p>
                <Stack direction="column" gap="3">
                  <MethodRow
                    icon={<SmartphoneIcon />}
                    title="Código por SMS"
                    description="Mensagem de texto"
                    checked={settings.mfaMethodSms}
                    onChange={(checked) => update("mfaMethodSms", checked)}
                  />
                  <MethodRow
                    icon={<MailIcon />}
                    title="Código por e-mail"
                    description="E-mail corporativo"
                    checked={settings.mfaMethodEmail}
                    onChange={(checked) => update("mfaMethodEmail", checked)}
                  />
                  <MethodRow
                    icon={<ShieldIcon />}
                    title="Aplicativo autenticador"
                    description="Google Authenticator, Microsoft Authenticator, etc."
                    checked={settings.mfaMethodAuthenticatorApp}
                    onChange={(checked) => update("mfaMethodAuthenticatorApp", checked)}
                  />
                </Stack>
                <p className="mt-4 text-xs text-muted-foreground">
                  Hoje o cadastro de MFA (/mfa/setup) só está implementado via aplicativo autenticador (TOTP).
                  SMS e e-mail ficam registrados como política, mas ainda não enviam código.
                </p>
              </div>
            </Stack>
          )}
        </Stack>
      </Section>

      <Stack direction="row" justify="end">
        <Button onClick={onSave} isLoading={saving}>
          Salvar alterações
        </Button>
      </Stack>
    </Stack>
  );
}

function MethodRow({
  icon,
  title,
  description,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-border bg-card p-3">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
          {icon}
        </span>
        <div>
          <div className="text-sm font-medium text-foreground">{title}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
      <Switch checked={checked} onChange={onChange} />
    </div>
  );
}
