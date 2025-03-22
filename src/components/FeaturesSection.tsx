import { Container } from "./ui/Container";
import { Section } from "./ui/Section";

export function FeaturesSection() {
  const features = [
    {
      title: "Workshop & Pelatihan",
      description: "Mengadakan workshop dan pelatihan untuk mengembangkan keterampilan teknis anggota."
    },
    {
      title: "Proyek Kolaboratif",
      description: "Mengerjakan proyek bersama untuk menerapkan pengetahuan dalam situasi nyata."
    },
    {
      title: "Kompetisi",
      description: "Berpartisipasi dalam kompetisi teknologi untuk menguji kemampuan dan mendapatkan pengalaman."
    }
  ];

  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-bold mb-10 text-center">Kegiatan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}