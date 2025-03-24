import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  date: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function TimelineItem({ title, date, children, icon }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l border-[var(--border-color)] last:border-0 last:pb-0">
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[var(--primary)]">
        {icon && <div className="absolute inset-0 flex items-center justify-center text-xs">{icon}</div>}
      </div>
      <div className="mb-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-[var(--text-tertiary)]">{date}</p>
      </div>
      <div className="text-[var(--text-secondary)]">{children}</div>
    </div>
  );
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className = "" }: TimelineProps) {
  return (
    <div className={`mt-6 ${className}`}>
      {children}
    </div>
  );
}