import { cn } from "@/lib/cn";

const sizes = {
  xs: "max-w-xl",
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  fluid: "max-w-none",
} as const;

export function Container({
  size = "lg",
  className,
  children,
}: {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("mx-auto w-full px-4 sm:px-6", sizes[size], className)}>{children}</div>;
}
