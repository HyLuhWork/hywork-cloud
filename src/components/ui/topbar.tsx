import { Icon, type IconName } from "@/components/ui/icon";

export function TopbarSearch({ placeholder = "Pesquise por aqui..." }: { placeholder?: string }) {
  return (
    <div className="flex max-w-[360px] flex-1 items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-muted-foreground">
      <Icon name="search" size={15} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}

export function TopbarIconButton({ icon, title }: { icon: IconName; title: string }) {
  return (
    <button
      type="button"
      title={title}
      className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
    >
      <Icon name={icon} size={17} />
    </button>
  );
}

export function UserChip({ name, email }: { name: string; email: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white">
        {initials}
      </div>
      <div>
        <div className="text-xs font-semibold text-foreground">{name}</div>
        <div className="text-[11px] text-muted-foreground">{email}</div>
      </div>
    </div>
  );
}
