import { cn } from "@/lib/cn";

const variantClass = {
  default: "bg-muted text-muted-foreground",
  success: "bg-success/15 text-success",
  warning: "bg-warning/15 text-warning",
  error: "bg-error/15 text-error",
  info: "bg-info/15 text-info",
} as const;

export function Badge({
  variant = "default",
  className,
  children,
}: {
  variant?: keyof typeof variantClass;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClass[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
