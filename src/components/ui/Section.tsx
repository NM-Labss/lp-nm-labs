import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string; // Tambahkan id sebagai prop opsional
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
}
