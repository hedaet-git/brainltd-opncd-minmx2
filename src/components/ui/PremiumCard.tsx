import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function PremiumCard({ children, className, hover = true }: PremiumCardProps) {
  return (
    <div
      className={cn(
        "bg-white shadow-sm border border-charcoal/5",
        hover && "transition-all duration-500 ease-out hover:shadow-lg hover:border-muted-brass/30",
        className
      )}
    >
      {children}
    </div>
  );
}