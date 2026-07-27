import { cn } from "@/lib/cn";

type ColsConfig = { base?: number; sm?: number; md?: number; lg?: number };

const colClass: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const colClassAt: Record<string, Record<number, string>> = {
  sm: { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" },
  md: { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" },
  lg: { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" },
};

const gapClass = {
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "6": "gap-6",
  "8": "gap-8",
} as const;

export function Grid({
  cols = { base: 1 },
  gap = "6",
  className,
  children,
}: {
  cols?: ColsConfig;
  gap?: "2" | "3" | "4" | "6" | "8";
  className?: string;
  children: React.ReactNode;
}) {
  const classes = [
    "grid",
    gapClass[gap],
    cols.base ? colClass[cols.base] : undefined,
    cols.sm ? colClassAt.sm[cols.sm] : undefined,
    cols.md ? colClassAt.md[cols.md] : undefined,
    cols.lg ? colClassAt.lg[cols.lg] : undefined,
  ];
  return <div className={cn(...classes, className)}>{children}</div>;
}
