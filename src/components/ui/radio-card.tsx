import { cn } from "@/lib/cn";

export function RadioCard({
  id,
  name,
  checked,
  onSelect,
  icon,
  title,
  description,
  disabled,
  children,
}: {
  id: string;
  name: string;
  checked: boolean;
  onSelect: () => void;
  icon?: React.ReactNode;
  title: string;
  description: string;
  disabled?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-md border p-4 transition-colors",
        checked ? "border-primary bg-primary/5" : "border-border",
        disabled && "opacity-50",
      )}
    >
      <label
        htmlFor={id}
        className={cn("flex items-start gap-3", disabled ? "cursor-not-allowed" : "cursor-pointer")}
      >
        {icon && (
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
            {icon}
          </span>
        )}
        <span className="flex-1">
          <span className="block text-sm font-semibold text-foreground">{title}</span>
          <span className="block text-xs text-muted-foreground">{description}</span>
        </span>
        <input
          id={id}
          type="radio"
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onSelect}
          className="mt-1 h-4 w-4 shrink-0 accent-primary"
        />
      </label>
      {checked && children && <div className="mt-3 border-t border-border pt-3">{children}</div>}
    </div>
  );
}
