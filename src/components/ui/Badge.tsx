import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default',
  className = "" 
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-[var(--button-bg)] text-[var(--text-secondary)]',
    primary: 'bg-[var(--primary)] text-white',
    secondary: 'bg-[var(--secondary)] text-[var(--background)]',
    success: 'bg-emerald-600 text-white',
    warning: 'bg-amber-500 text-white',
    danger: 'bg-rose-600 text-white',
  };

  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}