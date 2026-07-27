import Link from "next/link";
import { requireAdmin } from "@/lib/require-user";

const generalItems = [
  { label: "Espaços", href: "/settings/espaco" },
  { label: "Usuários", href: "/settings/usuarios" },
  { label: "Segurança", href: "/settings/security" },
];

export default async function SettingsLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r border-border bg-card p-4">
        <Link href="/home" className="mb-6 flex items-center gap-2 px-2 text-sm text-muted-foreground">
          ← Espaço
        </Link>

        <div className="mb-1 px-3 text-xs font-semibold uppercase text-muted-foreground">
          Configurações de Conta
        </div>
        <Link href="/settings/conta" className="mb-4 block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted">
          Conta
        </Link>

        <div className="mb-1 px-3 text-xs font-semibold uppercase text-muted-foreground">Gerais</div>
        <nav className="flex flex-col gap-1">
          {generalItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
