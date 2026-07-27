import Link from "next/link";
import { requireAdmin } from "@/lib/require-user";
import { Sidebar, SidebarNav, SidebarGroupLabel, SidebarLink, Icon, type IconName } from "@/components/ui";

const generalItems: { label: string; href: string; icon: IconName }[] = [
  { label: "Espaços", href: "/settings/espaco", icon: "dept" },
  { label: "Usuários", href: "/settings/usuarios", icon: "users" },
  { label: "Segurança", href: "/settings/security", icon: "shield" },
];

export default async function SettingsLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <Link
          href="/home"
          className="mb-4 flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <Icon name="arrowLeft" size={15} /> Espaço
        </Link>

        <SidebarGroupLabel>Configurações de Conta</SidebarGroupLabel>
        <SidebarNav className="mb-4">
          <SidebarLink href="/settings/conta" icon="id">
            Conta
          </SidebarLink>
        </SidebarNav>

        <SidebarGroupLabel>Gerais</SidebarGroupLabel>
        <SidebarNav>
          {generalItems.map((item) => (
            <SidebarLink key={item.href} href={item.href} icon={item.icon}>
              {item.label}
            </SidebarLink>
          ))}
        </SidebarNav>
      </Sidebar>
      <div className="flex-1">{children}</div>
    </div>
  );
}
