"use client";

import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { useState, useRef, useEffect } from "react";

export function TestimonialsSection() {
  // Gunakan satu URL gambar dari Unsplash untuk semua anggota
  const memberImage = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  
  const members = [
    {
      name: "Budi Santoso",
      role: "Ketua NM Labs",
      image: memberImage,
      expertise: "Embedded Systems, IoT",
      description: "Mahasiswa Teknik Komputer angkatan 2021 dengan fokus pada pengembangan embedded systems dan IoT."
    },
    {
      name: "Siti Rahma",
      role: "Wakil Ketua",
      image: memberImage,
      expertise: "Robotika, Computer Vision",
      description: "Mahasiswa Teknik Komputer angkatan 2022 dengan keahlian di bidang robotika dan computer vision."
    },
    {
      name: "Andi Wijaya",
      role: "Koordinator Proyek",
      image: memberImage,
      expertise: "Microcontroller, PCB Design",
      description: "Mahasiswa Teknik Komputer angkatan 2021 yang berpengalaman dalam desain PCB dan pemrograman mikrokontroler."
    },
    {
      name: "Diana Putri",
      role: "Koordinator Workshop",
      image: memberImage,
      expertise: "FPGA, Digital Design",
      description: "Mahasiswa Teknik Komputer angkatan 2022 dengan minat khusus pada FPGA dan desain digital."
    },
    {
      name: "Reza Pratama",
      role: "Koordinator Kompetisi",
      image: memberImage,
      expertise: "AI, Machine Learning",
      description: "Mahasiswa Teknik Komputer angkatan 2021 yang fokus pada implementasi AI dan machine learning pada sistem embedded."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === members.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  // Scroll to center the current member card
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.querySelector('.member-card')?.clientWidth || 0;
      const scrollPosition = (cardWidth + 16) * currentIndex - (container.clientWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <Section className="py-20 bg-white dark:bg-gray-800" id="anggota">
      <Container>
        <h2 className="text-2xl font-bold mb-10 text-center">Anggota Inti NM Labs</h2>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Previous member"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Next member"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Carousel container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-8 -mx-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {members.map((member, index) => (
              <div 
                key={index} 
                className={`member-card flex-shrink-0 w-full max-w-xs mx-2 snap-center
                           transition-all duration-300`}
                style={{ width: '320px', height: '480px' }} // Ukuran tetap untuk semua card
              >
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden h-full">
                  <div className="h-48 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Keahlian: {member.expertise}</p>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {members.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
