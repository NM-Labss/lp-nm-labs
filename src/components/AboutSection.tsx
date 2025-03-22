import { Container } from "./ui/Container";
import { Section } from "./ui/Section";

export function AboutSection() {
  return (
    <Section className="py-20 bg-[var(--card-bg)]" id="about">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Tentang Kami</h2>
          <div className="prose dark:prose-invert">
            <p className="mb-4 text-justify text-[var(--text-secondary)]">
              NM Labs adalah komunitas mahasiswa Teknik Komputer di Institut Teknologi Del yang berfokus pada pengembangan keterampilan praktis dan kolaborasi dalam bidang teknologi komputer.
            </p>
            <p className="text-justify text-[var(--text-secondary)]">
              Kami mengadakan workshop, proyek kolaboratif, dan kegiatan belajar bersama untuk meningkatkan kemampuan anggota dalam bidang hardware, embedded systems, dan teknologi terkini.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
