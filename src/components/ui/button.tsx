import { forwardRef } from "react";
import { cn } from "@/lib/cn";

const variantClass = {
  default: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
  success: "bg-success text-success-foreground hover:opacity-90",
  warning: "bg-warning text-warning-foreground hover:opacity-90",
  error: "bg-error text-error-foreground hover:opacity-90",
  info: "bg-info text-info-foreground hover:opacity-90",
  outline: "border border-border bg-transparent text-foreground hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
} as const;

const sizeClass = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
} as const;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClass;
  size?: keyof typeof sizeClass;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", isLoading, disabled, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
          variantClass[variant],
          sizeClass[size],
          className,
        )}
        {...props}
      >
        {isLoading ? "..." : children}
      </button>
    );
  },
);
Button.displayName = "Button";
