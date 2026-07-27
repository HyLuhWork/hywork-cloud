import Link from "next/link";
import { requireUser } from "@/lib/require-user";
import { LogoutButton } from "@/components/logout-button";

const navItems = [
  { label: "Analytics", href: "/home" },
  { label: "Modelos", href: "/home" },
  { label: "Conteúdos", href: "/home" },
  { label: "Reconhecimentos", href: "/home" },
  { label: "Academy", href: "/home" },
];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await requireUser();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-card p-4">
        <div className="mb-6 flex items-center gap-2 px-2">
          <span className="text-xl font-bold text-primary">hywork</span>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}

          {session.user.role === "ADMIN" && (
            <>
              <div className="mt-6 mb-1 px-3 text-xs font-semibold uppercase text-muted-foreground">
                Administração
              </div>
              <Link href="/settings/usuarios" className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted">
                Usuários
              </Link>
              <Link
                href="/settings/espaco"
                className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
              >
                Configurações
              </Link>
            </>
          )}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-end border-b border-border bg-card px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-foreground">{session.user.name}</div>
              <div className="text-xs text-muted-foreground">{session.user.email}</div>
            </div>
            <LogoutButton />
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
