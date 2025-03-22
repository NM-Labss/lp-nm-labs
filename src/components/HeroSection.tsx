import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

export function HeroSection() {
  return (
    <Section className="py-20" id="home">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Kembangkan Keterampilan Praktis dalam Teknologi Komputer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Bergabunglah dengan komunitas mahasiswa yang bersemangat untuk belajar, berkolaborasi, dan menciptakan solusi inovatif.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Button href="#" variant="primary">
            Bergabung Sekarang
          </Button>
          <Button href="#" variant="secondary">
            Lihat Proyek Kami
          </Button>
        </div>
      </div>
    </Section>
  );
}
