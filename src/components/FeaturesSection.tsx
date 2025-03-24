import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";
import { ArrowRight, Lightbulb, Users, Trophy } from "lucide-react";
import Link from "next/link";

export function FeaturesSection() {
  const features = [
    {
      title: "Program Pengembangan Profesional",
      description: "Seri workshop, pelatihan teknis, dan sertifikasi industri yang dirancang untuk membangun kompetensi anggota dalam teknologi terkini dan praktik terbaik pengembangan sistem.",
      icon: <Lightbulb className="w-8 h-8 text-[var(--primary)]" />,
      badge: "Populer"
    },
    {
      title: "Riset & Pengembangan Kolaboratif",
      description: "Inisiatif proyek multidisiplin yang menghubungkan mahasiswa dengan dosen dan mitra industri untuk mengembangkan solusi teknologi inovatif yang mengatasi tantangan dunia nyata.",
      icon: <Users className="w-8 h-8 text-[var(--primary)]" />
    },
    {
      title: "Kompetisi & Eksposur Industri",
      description: "Partisipasi dalam hackathon, kompetisi teknologi, dan konferensi yang memberikan platform bagi anggota untuk menampilkan keahlian mereka dan membangun jaringan profesional.",
      icon: <Trophy className="w-8 h-8 text-[var(--primary)]" />
    }
  ];

  return (
    <Section className="py-20" id="kegiatan">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">Program Kami</Badge>
          <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)] tracking-tight">Program Unggulan</h2>
          <p className="text-[var(--text-secondary)] text-lg">Kami menawarkan berbagai program yang dirancang untuk mengembangkan keterampilan teknis dan profesional mahasiswa.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 border border-[var(--border-color)] rounded-xl bg-[var(--card-bg)]/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-3 bg-[var(--background)] rounded-lg">
                  {feature.icon}
                </div>
                {feature.badge && (
                  <Badge variant="primary">{feature.badge}</Badge>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)] leading-snug">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{feature.description}</p>
              
              <Link 
                href="#" 
                className="inline-flex items-center text-[var(--primary)] hover:underline font-medium"
              >
                Pelajari lebih lanjut <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
