import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { AnimatedBackground } from "./AnimatedBackground";

export function HeroSection() {
  return (
    <Section className="py-20 relative" id="home">
      <AnimatedBackground />
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--text-primary)] tracking-tight leading-tight">
          Membangun Masa Depan Teknologi Komputer Bersama NM Labs
        </h2>
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed max-w-2xl">
          Komunitas inovatif yang menghubungkan mahasiswa Teknik Komputer IT Del dengan industri melalui pembelajaran berbasis proyek, riset kolaboratif, dan pengembangan solusi teknologi terdepan.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Button href="#" variant="primary">
            Bergabung dengan Komunitas
          </Button>
          <Button href="#" variant="secondary">
            Eksplorasi Proyek
          </Button>
        </div>
      </div>
    </Section>
  );
}
