import { cn } from "@/lib/cn";

const gapClass = {
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "6": "gap-6",
  "8": "gap-8",
} as const;

const alignClass = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

const justifyClass = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

export function Stack({
  direction = "column",
  gap = "4",
  align,
  justify,
  className,
  children,
}: {
  direction?: "row" | "column";
  gap?: keyof typeof gapClass;
  align?: keyof typeof alignClass;
  justify?: keyof typeof justifyClass;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gapClass[gap],
        align && alignClass[align],
        justify && justifyClass[justify],
        className,
      )}
    >
      {children}
    </div>
  );
}
