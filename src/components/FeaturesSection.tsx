import { Container } from "./ui/Container";
import { Section } from "./ui/Section";

export function FeaturesSection() {
  const features = [
    {
      title: "Program Pengembangan Profesional",
      description: "Seri workshop, pelatihan teknis, dan sertifikasi industri yang dirancang untuk membangun kompetensi anggota dalam teknologi terkini dan praktik terbaik pengembangan sistem."
    },
    {
      title: "Riset & Pengembangan Kolaboratif",
      description: "Inisiatif proyek multidisiplin yang menghubungkan mahasiswa dengan dosen dan mitra industri untuk mengembangkan solusi teknologi inovatif yang mengatasi tantangan dunia nyata."
    },
    {
      title: "Kompetisi & Eksposur Industri",
      description: "Partisipasi dalam hackathon, kompetisi teknologi, dan konferensi yang memberikan platform bagi anggota untuk menampilkan keahlian mereka dan membangun jaringan profesional."
    }
  ];

  return (
    <Section className="py-20" id="kegiatan">
      <Container>
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--text-primary)] tracking-tight">Program Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-[var(--border-color)] rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)] leading-snug">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
