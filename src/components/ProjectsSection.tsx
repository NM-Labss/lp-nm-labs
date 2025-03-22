import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Home System",
      description: "Sistem rumah pintar berbasis IoT dengan kontrol melalui aplikasi mobile",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["IoT", "Mobile App", "Embedded Systems"]
    },
    {
      title: "Autonomous Robot",
      description: "Robot otonom dengan kemampuan navigasi dan penghindaran rintangan",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Robotics", "Computer Vision", "AI"]
    },
    {
      title: "Weather Monitoring Station",
      description: "Stasiun pemantau cuaca dengan sensor suhu, kelembaban, dan tekanan udara",
      image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Sensors", "Data Analysis", "Web Dashboard"]
    }
  ];

  return (
    <Section className="py-20 bg-[var(--card-bg)]" id="proyek">
      <Container>
        <h2 className="text-2xl font-bold mb-10 text-center">Proyek Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[var(--background)] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">{project.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button href="#" variant="secondary" className="w-full">
                  Lihat Detail
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="#" variant="primary" className="px-4 py-2 text-xs h-8 w-48">
            Lihat Semua Proyek
          </Button>
        </div>
      </Container>
    </Section>
  );
}
