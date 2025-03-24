import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "featured";
  className?: string;
}

export function Badge({ 
  children, 
  variant = "secondary",
  className = "" 
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[var(--primary)] text-white",
    secondary: "bg-[var(--card-bg)] text-[var(--text-tertiary)]",
    featured: "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
  };
  
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
