"use client"; 

import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import Image from "next/image";
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Smart Home System",
      description: "Sistem rumah pintar berbasis IoT dengan kontrol melalui aplikasi mobile dan integrasi AI untuk otomatisasi.",
      image: "https://images.unsplash.com/photo-1585503418537-88331351ad99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["IoT", "Mobile App", "Embedded Systems", "AI"],
      featured: true,
      demoUrl: "#",
      repoUrl: "#",
      stats: { stars: 45, forks: 12 }
    },
    {
      title: "Autonomous Robot",
      description: "Robot otonom dengan kemampuan navigasi dan penghindaran rintangan menggunakan computer vision dan deep learning.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Robotics", "Computer Vision", "AI", "Deep Learning"],
      demoUrl: "#",
      repoUrl: "#",
      stats: { stars: 32, forks: 8 }
    },
    {
      title: "Monitoring Kualitas Air",
      description: "Sistem monitoring kualitas air real-time dengan sensor IoT dan dashboard analitik berbasis cloud.",
      image: "https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["IoT", "Data Analytics", "Environmental", "Cloud"],
      demoUrl: "#",
      repoUrl: "#",
      stats: { stars: 28, forks: 5 }
    }
  ];

  return (
    <Section className="py-24 bg-gradient-to-b from-[var(--card-bg)] to-[var(--background)]" id="proyek">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">Karya Inovatif</Badge>
          <h2 className="text-4xl font-bold mb-6 text-[var(--text-primary)] tracking-tight">
            Proyek <span className="text-[var(--primary)]">Terbaru</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Eksplorasi proyek-proyek inovatif yang dikembangkan oleh tim NM Labs, 
            menggabungkan teknologi terkini untuk menyelesaikan masalah dunia nyata.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-[var(--background)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform ${
                hoveredIndex === index ? 'scale-[1.02] -translate-y-2' : ''
              } ${
                project.featured ? 'ring-2 ring-[var(--primary)] ring-offset-4 ring-offset-[var(--card-bg)]' : ''
              }`}
            >
              <div className="h-52 relative group">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QOQvhAAAAABJRU5ErkJggg=="
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {project.featured && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="featured" className="flex items-center">
                      <Star className="w-3 h-3 mr-1" /> Featured
                    </Badge>
                  </div>
                )}
                
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="flex items-center text-white text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{project.stats.stars}</span>
                    <span className="mx-2">•</span>
                    <span>{project.stats.forks} forks</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{project.title}</h3>
                <p className="text-[var(--text-secondary)] mb-5 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-[var(--card-bg)] text-[var(--text-tertiary)] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button href={project.demoUrl} variant="primary" className="flex-1 text-xs h-10 group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" /> Demo
                  </Button>
                  <Button href={project.repoUrl} variant="secondary" className="flex-1 text-xs h-10 group">
                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" /> Repo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button 
            href="/projects" 
            variant="primary" 
            className="px-8 py-3 text-base group hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all"
          >
            Lihat Semua Proyek
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
