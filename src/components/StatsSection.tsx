import { Container } from "./ui/Container";
import { Section } from "./ui/Section";

interface StatProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

function Stat({ value, label, icon }: StatProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl font-bold mb-2 text-[var(--primary)]">{value}</div>
      <div className="text-sm text-[var(--text-secondary)]">{label}</div>
      {icon && <div className="mt-2">{icon}</div>}
    </div>
  );
}

export function StatsSection() {
  return (
    <Section className="py-16 bg-[var(--background)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Stat value="50+" label="Anggota Aktif" />
          <Stat value="25+" label="Proyek Selesai" />
          <Stat value="10+" label="Workshop" />
          <Stat value="5+" label="Penghargaan" />
        </div>
      </Container>
    </Section>
  );
}
