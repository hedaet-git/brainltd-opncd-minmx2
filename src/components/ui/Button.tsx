import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-muted-brass focus:ring-offset-2 focus:ring-offset-warm-off-white",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-charcoal text-warm-off-white hover:bg-muted-brass": variant === "primary",
            "bg-muted-brass text-charcoal hover:bg-charcoal hover:text-warm-off-white": variant === "secondary",
            "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-off-white": variant === "outline",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";