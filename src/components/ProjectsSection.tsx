import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
// import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Home System",
      description: "Sistem rumah pintar berbasis IoT dengan kontrol melalui aplikasi mobile",
      image: "/images/project1.jpg", // Tambahkan gambar proyek
      tags: ["IoT", "Mobile App", "Embedded Systems"]
    },
    {
      title: "Autonomous Robot",
      description: "Robot otonom dengan kemampuan navigasi dan penghindaran rintangan",
      image: "/images/project2.jpg", // Tambahkan gambar proyek
      tags: ["Robotics", "Computer Vision", "AI"]
    },
    {
      title: "Weather Monitoring Station",
      description: "Stasiun pemantau cuaca dengan sensor suhu, kelembaban, dan tekanan udara",
      image: "/images/project3.jpg", // Tambahkan gambar proyek
      tags: ["Sensors", "Data Analysis", "Web Dashboard"]
    }
  ];

  return (
    <Section className="bg-gray-50 dark:bg-gray-900" id="proyek">
      <Container>
        <h2 className="text-2xl font-bold mb-10 text-center">Proyek Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-500">Image Placeholder</span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
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
        <div className="mt-10 text-center">
          <Button href="#" variant="primary">
            Lihat Semua Proyek
          </Button>
        </div>
      </Container>
    </Section>
  );
}
