import { Container } from "./ui/Container";
import { Section } from "./ui/Section";

export function AboutSection() {
  return (
    <Section className="py-20 bg-[var(--card-bg)]" id="about">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[var(--text-primary)] tracking-tight">Tentang NM Labs</h2>
          <div className="prose dark:prose-invert">
            <p className="mb-6 text-justify text-[var(--text-secondary)] text-lg leading-relaxed">
              NM Labs merupakan pusat keunggulan mahasiswa Teknik Komputer Institut Teknologi Del yang didedikasikan untuk pengembangan kompetensi profesional dalam bidang teknologi komputer. Didirikan dengan visi menjembatani kesenjangan antara pendidikan akademis dan kebutuhan industri, komunitas kami menyediakan lingkungan kolaboratif untuk mengembangkan solusi inovatif berbasis teknologi.
            </p>
            <p className="mb-6 text-justify text-[var(--text-secondary)] text-lg leading-relaxed">
              Melalui pendekatan pembelajaran berbasis proyek, anggota NM Labs memperoleh pengalaman praktis dalam pengembangan embedded systems, Internet of Things (IoT), robotika, dan teknologi komputasi terkini. Kami berkomitmen untuk memfasilitasi pertumbuhan profesional anggota melalui kolaborasi dengan industri, riset aplikatif, dan partisipasi dalam kompetisi teknologi nasional dan internasional.
            </p>
            <p className="text-justify text-[var(--text-secondary)] text-lg leading-relaxed">
              Bergabung dengan NM Labs berarti menjadi bagian dari ekosistem inovasi yang mendorong pengembangan keterampilan teknis, kemampuan pemecahan masalah, dan pola pikir profesional yang dibutuhkan untuk sukses di era transformasi digital.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
