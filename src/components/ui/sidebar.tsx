"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/icon";

export function Sidebar({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <aside className={cn("flex w-60 shrink-0 flex-col gap-0.5 border-r border-border bg-card p-3", className)}>
      {children}
    </aside>
  );
}

export function SidebarBrand() {
  return (
    <div className="mb-3 flex items-center gap-2 px-2 pb-1 pt-1.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand text-[13px] font-extrabold text-white">
        H
      </div>
      <span className="text-base font-extrabold tracking-tight text-foreground">hywork</span>
    </div>
  );
}

export function SidebarWorkspace({ name, subtitle = "Espaço atual" }: { name: string; subtitle?: string }) {
  return (
    <div className="mb-3 flex items-center gap-2.5 rounded-md border border-border bg-muted p-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-foreground text-[11px] font-bold text-background">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-xs font-semibold text-foreground">{name}</div>
        <div className="truncate text-[11px] text-muted-foreground">{subtitle}</div>
      </div>
      <Icon name="chevronDown" size={14} className="shrink-0 text-muted-foreground" />
    </div>
  );
}

export function SidebarNav({ className, children }: { className?: string; children: React.ReactNode }) {
  return <nav className={cn("flex flex-col gap-0.5", className)}>{children}</nav>;
}

export function SidebarGroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 mt-4 px-2.5 text-[10.5px] font-bold uppercase tracking-wide text-muted-foreground first:mt-0">
      {children}
    </div>
  );
}

export function SidebarLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: IconName;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5 rounded-[6px] border-l-[2.5px] border-transparent py-2 pl-[9px] pr-2.5 text-[13px] font-semibold transition-colors",
        active ? "border-brand bg-brand-50 text-brand" : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {icon && <Icon name={icon} size={17} className={active ? "opacity-100" : "opacity-75"} />}
      <span>{children}</span>
    </Link>
  );
}
