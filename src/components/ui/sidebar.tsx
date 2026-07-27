"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export function Sidebar({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <aside className={cn("flex w-64 shrink-0 flex-col border-r border-border bg-card p-4", className)}>
      {children}
    </aside>
  );
}

export function SidebarNav({ className, children }: { className?: string; children: React.ReactNode }) {
  return <nav className={cn("flex flex-col gap-1", className)}>{children}</nav>;
}

export function SidebarGroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 mt-6 px-3 text-xs font-semibold uppercase text-muted-foreground first:mt-0">
      {children}
    </div>
  );
}

export function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm transition-colors",
        active ? "bg-primary/10 font-medium text-primary" : "text-foreground hover:bg-muted",
      )}
    >
      {children}
    </Link>
  );
}
