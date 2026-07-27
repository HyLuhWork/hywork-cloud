import { cn } from "@/lib/cn";

const variantClass = {
  default: "bg-muted text-foreground border-border",
  success: "bg-success/10 text-success border-success/30",
  warning: "bg-warning/10 text-warning border-warning/30",
  error: "bg-error/10 text-error border-error/30",
  info: "bg-info/10 text-info border-info/30",
} as const;

export function Alert({
  variant = "default",
  className,
  children,
}: {
  variant?: keyof typeof variantClass;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-md border p-4 text-sm", variantClass[variant], className)} role="alert">
      {children}
    </div>
  );
}
