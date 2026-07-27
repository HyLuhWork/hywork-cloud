import { requireUser } from "@/lib/require-user";
import { LogoutButton } from "@/components/logout-button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sidebar,
  SidebarBrand,
  SidebarWorkspace,
  SidebarNav,
  SidebarGroupLabel,
  SidebarLink,
  TopbarSearch,
  TopbarIconButton,
  UserChip,
  type IconName,
} from "@/components/ui";

const navItems: { label: string; href: string; icon: IconName }[] = [
  { label: "Analytics", href: "/home", icon: "chart" },
  { label: "Processos", href: "/processos", icon: "flow" },
  { label: "Modelos", href: "/home", icon: "grid" },
  { label: "Conteúdos", href: "/home", icon: "doc" },
  { label: "Reconhecimentos", href: "/home", icon: "award" },
  { label: "Academy", href: "/home", icon: "gradcap" },
];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await requireUser();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar>
        <SidebarBrand />
        <SidebarWorkspace name={session.tenant.name} />

        <SidebarNav className="flex-1">
          {navItems.map((item) => (
            <SidebarLink key={item.label} href={item.href} icon={item.icon}>
              {item.label}
            </SidebarLink>
          ))}

          {session.user.role === "ADMIN" && (
            <>
              <SidebarGroupLabel>Administração</SidebarGroupLabel>
              <SidebarLink href="/settings/usuarios" icon="users">
                Usuários
              </SidebarLink>
              <SidebarLink href="/settings/espaco" icon="gear">
                Configurações
              </SidebarLink>
            </>
          )}
        </SidebarNav>
      </Sidebar>

      <div className="flex flex-1 flex-col">
        <header className="flex h-[58px] shrink-0 items-center gap-3.5 border-b border-border bg-card px-5">
          <TopbarSearch />
          <div className="flex-1" />
          <ThemeToggle />
          <TopbarIconButton icon="bell" title="Notificações" />
          <UserChip name={session.user.name} email={session.user.email} />
          <LogoutButton />
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
