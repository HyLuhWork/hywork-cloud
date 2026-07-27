import { requireUser } from "@/lib/require-user";
import { LogoutButton } from "@/components/logout-button";
import { Sidebar, SidebarNav, SidebarGroupLabel, SidebarLink } from "@/components/ui";

const navItems = [
  { label: "Analytics", href: "/home" },
  { label: "Processos", href: "/processos" },
  { label: "Modelos", href: "/home" },
  { label: "Conteúdos", href: "/home" },
  { label: "Reconhecimentos", href: "/home" },
  { label: "Academy", href: "/home" },
];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await requireUser();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar>
        <div className="mb-6 flex items-center gap-2 px-2">
          <span className="text-xl font-bold text-primary">hywork</span>
        </div>

        <SidebarNav className="flex-1">
          {navItems.map((item) => (
            <SidebarLink key={item.label} href={item.href}>
              {item.label}
            </SidebarLink>
          ))}

          {session.user.role === "ADMIN" && (
            <>
              <SidebarGroupLabel>Administração</SidebarGroupLabel>
              <SidebarLink href="/settings/usuarios">Usuários</SidebarLink>
              <SidebarLink href="/settings/espaco">Configurações</SidebarLink>
            </>
          )}
        </SidebarNav>
      </Sidebar>

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
