import Link from "next/link";
import { requireAdmin } from "@/lib/require-user";
import { Sidebar, SidebarNav, SidebarGroupLabel, SidebarLink } from "@/components/ui";

const generalItems = [
  { label: "Espaços", href: "/settings/espaco" },
  { label: "Usuários", href: "/settings/usuarios" },
  { label: "Segurança", href: "/settings/security" },
];

export default async function SettingsLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <Link href="/home" className="mb-6 flex items-center gap-2 px-2 text-sm text-muted-foreground">
          ← Espaço
        </Link>

        <SidebarGroupLabel>Configurações de Conta</SidebarGroupLabel>
        <SidebarNav className="mb-4">
          <SidebarLink href="/settings/conta">Conta</SidebarLink>
        </SidebarNav>

        <SidebarGroupLabel>Gerais</SidebarGroupLabel>
        <SidebarNav>
          {generalItems.map((item) => (
            <SidebarLink key={item.href} href={item.href}>
              {item.label}
            </SidebarLink>
          ))}
        </SidebarNav>
      </Sidebar>
      <div className="flex-1">{children}</div>
    </div>
  );
}
