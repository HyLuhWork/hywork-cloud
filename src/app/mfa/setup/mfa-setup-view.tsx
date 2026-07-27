"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Alert, Container } from "@/components/ui";

export function MfaSetupView({ required }: { required: boolean }) {
  const router = useRouter();
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function startEnrollment() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/mfa/enroll", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Erro ao iniciar cadastro de MFA.");
        return;
      }
      setQrCodeDataUrl(data.qrCodeDataUrl);
      setSecret(data.secret);
    } finally {
      setLoading(false);
    }
  }

  async function confirmEnrollment(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/mfa/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Código incorreto.");
        return;
      }
      router.push("/home");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container size="xs" className="flex min-h-screen flex-col justify-center py-12">
      <div className="rounded-md border border-border bg-card p-8">
        <h1 className="mb-1 text-2xl font-bold text-foreground">Configurar autenticação em dois fatores</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          {required
            ? "O administrador do seu ambiente exige MFA para todos os usuários. Conclua a configuração para continuar."
            : "Adicione uma camada extra de segurança à sua conta."}
        </p>

        {error && (
          <Alert variant="error" className="mb-4">
            {error}
          </Alert>
        )}

        {!qrCodeDataUrl && (
          <Button onClick={startEnrollment} isLoading={loading}>
            Gerar código QR
          </Button>
        )}

        {qrCodeDataUrl && (
          <form onSubmit={confirmEnrollment} className="flex flex-col gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrCodeDataUrl} alt="QR Code MFA" className="mx-auto h-40 w-40" />
            <p className="text-center text-xs text-muted-foreground">
              Escaneie no seu app autenticador ou digite manualmente: <code>{secret}</code>
            </p>
            <div>
              <label className="mb-1 block text-xs font-medium text-foreground">Código de 6 dígitos</label>
              <Input value={token} onChange={(e) => setToken(e.target.value)} maxLength={6} required autoFocus />
            </div>
            <Button type="submit" isLoading={loading}>
              Confirmar e ativar MFA
            </Button>
          </form>
        )}
      </div>
    </Container>
  );
}
