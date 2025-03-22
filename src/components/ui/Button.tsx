import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ 
  children, 
  href, 
  variant = "primary", 
  className = "" 
}: ButtonProps) {
  const baseStyles = "rounded-md transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5";
  
  const variantStyles = {
    primary: "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90",
    secondary: "border border-solid border-[var(--border-color)] hover:bg-[var(--hover-bg)]"
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses}>
      {children}
    </button>
  );
}
