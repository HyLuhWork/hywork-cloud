"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Alert, Container } from "@/components/ui";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mfaToken, setMfaToken] = useState("");
  const [mfaRequired, setMfaRequired] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, mfaToken: mfaToken || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Falha ao entrar.");
        return;
      }
      if (data.mfaRequired) {
        setMfaRequired(true);
        return;
      }
      router.push("/");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container size="xs" className="flex min-h-screen flex-col justify-center py-12">
      <div className="rounded-md border border-border bg-card p-8">
        <h1 className="mb-1 text-2xl font-bold text-foreground">Entrar</h1>
        <p className="mb-6 text-sm text-muted-foreground">Acesse sua conta HyWork.</p>

        {error && (
          <Alert variant="error" className="mb-4">
            {error}
          </Alert>
        )}

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-foreground">E-mail</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={mfaRequired}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-foreground">Senha</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={mfaRequired}
            />
          </div>
          {mfaRequired && (
            <div>
              <label className="mb-1 block text-xs font-medium text-foreground">
                Código de autenticação (MFA)
              </label>
              <Input
                value={mfaToken}
                onChange={(e) => setMfaToken(e.target.value)}
                placeholder="000000"
                required
                autoFocus
              />
            </div>
          )}
          <Button type="submit" isLoading={loading} className="mt-2">
            {mfaRequired ? "Confirmar código" : "Entrar"}
          </Button>
        </form>
      </div>
    </Container>
  );
}
