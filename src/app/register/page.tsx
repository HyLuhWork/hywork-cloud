"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Alert, Container } from "@/components/ui";

export default function RegisterPage() {
  const router = useRouter();
  const [tenantName, setTenantName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [details, setDetails] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDetails([]);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tenantName, name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Falha ao criar conta.");
        setDetails(data.details ?? []);
        return;
      }
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container size="xs" className="flex min-h-screen flex-col justify-center py-12">
      <div className="rounded-md border border-border bg-card p-8">
        <h1 className="mb-1 text-2xl font-bold text-foreground">Criar ambiente</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Cria um novo tenant e o primeiro usuário administrador.
        </p>

        {error && (
          <Alert variant="error" className="mb-4">
            <p>{error}</p>
            {details.length > 0 && (
              <ul className="mt-2 list-disc pl-4">
                {details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </Alert>
        )}

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-foreground">Nome da empresa</label>
            <Input value={tenantName} onChange={(e) => setTenantName(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-foreground">Seu nome</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-foreground">E-mail</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-foreground">Senha</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" isLoading={loading} className="mt-2">
            Criar conta
          </Button>
        </form>
      </div>
    </Container>
  );
}
