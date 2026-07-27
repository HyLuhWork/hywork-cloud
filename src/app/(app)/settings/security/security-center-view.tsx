"use client";

import { useState } from "react";
import { Section, Stack, Switch, Select, Input, Button, Alert } from "@/components/ui";

type SessionTimeoutUnit = "MINUTES" | "HOURS";
type DevicePolicy = "MULTIPLE" | "SINGLE";
type MfaPolicy = "OPTIONAL" | "REQUIRED";

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
  mfaPolicy: MfaPolicy;
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

      <Section title="Autenticação" subtitle="Obrigatoriedade de MFA">
        <div className="w-72">
          <Select
            value={settings.mfaPolicy}
            onChange={(e) => update("mfaPolicy", e.target.value as MfaPolicy)}
          >
            <option value="OPTIONAL">MFA opcional</option>
            <option value="REQUIRED">MFA obrigatório</option>
          </Select>
        </div>
      </Section>

      <Stack direction="row" justify="end">
        <Button onClick={onSave} isLoading={saving}>
          Salvar alterações
        </Button>
      </Stack>
    </Stack>
  );
}
