"use client";

import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { useState, useEffect } from "react";
import Image from "next/image";

export function MembersSection() {
  // Data anggota tetap sama
  const members = [
    {
      name: "Budi Santoso, S.Kom.",
      role: "Ketua NM Labs",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      expertise: "Embedded Systems, IoT Architecture",
      description: "Mahasiswa senior Teknik Komputer dengan spesialisasi dalam arsitektur sistem tertanam dan IoT. Memiliki pengalaman sebagai asisten peneliti di Laboratorium Sistem Tertanam IT Del dan magang di Telkom Indonesia."
    },
    {
      name: "Siti Rahma",
      role: "Wakil Ketua & Koordinator Riset",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      expertise: "Robotika, Computer Vision, Machine Learning",
      description: "Peneliti muda dengan fokus pada integrasi computer vision dan robotika. Finalis kompetisi robotika nasional 2023 dan kontributor aktif pada proyek open-source di bidang machine learning untuk embedded systems."
    },
    {
      name: "Andi Wijaya",
      role: "Koordinator Proyek",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      expertise: "Microcontroller, PCB Design",
      description: "Mahasiswa Teknik Komputer angkatan 2021 yang berpengalaman dalam desain PCB dan pemrograman mikrokontroler."
    },
    {
      name: "Diana Putri",
      role: "Koordinator Workshop",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      expertise: "FPGA, Digital Design",
      description: "Mahasiswa Teknik Komputer angkatan 2022 dengan minat khusus pada FPGA dan desain digital."
    },
    {
      name: "Reza Pratama",
      role: "Koordinator Kompetisi",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      expertise: "AI, Machine Learning",
      description: "Mahasiswa Teknik Komputer angkatan 2021 yang fokus pada implementasi AI dan machine learning pada sistem embedded."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Fungsi untuk navigasi carousel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= members.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  // Effect untuk mendeteksi perubahan ukuran layar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    const handleResize = () => {
      checkMobile();
      // Reset index jika perlu
      setCurrentIndex(prev => {
        if (window.innerWidth < 768 && prev % 2 !== 0) {
          return prev - 1;
        }
        return prev;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mendapatkan anggota yang akan ditampilkan berdasarkan viewport
  const visibleMembers = isMobile 
    ? [members[currentIndex]]
    : [
        members[currentIndex],
        members[(currentIndex + 1) % members.length]
      ].filter(Boolean);

  return (
    <Section className="py-20 bg-[var(--background)]" id="anggota">
      <Container>
        <h2 className="text-2xl font-bold mb-10 text-center">Anggota Inti NM Labs</h2>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--background)] rounded-full p-2 shadow-md hover:bg-[var(--hover-bg)]"
            aria-label="Previous members"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--background)] rounded-full p-2 shadow-md hover:bg-[var(--hover-bg)]"
            aria-label="Next members"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Member cards container */}
          <div className="flex justify-center gap-4 md:gap-6 px-8 md:px-12">
            {visibleMembers.map((member, index) => (
              <div 
                key={index} 
                className="member-card flex-shrink-0 w-full max-w-xs"
                style={{ width: '100%', maxWidth: '320px', height: '480px' }}
              >
                <div className="bg-[var(--card-bg)] rounded-lg overflow-hidden h-full">
                  <div className="h-48 relative">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">{member.name}</h3>
                    <p className="text-[var(--primary)] font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-[var(--text-tertiary)] mb-3">Keahlian: {member.expertise}</p>
                    <p className="text-[var(--text-secondary)] flex-grow">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: members.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentIndex === index || (!isMobile && (currentIndex === index - 1 || (currentIndex === members.length - 1 && index === 0)))
                    ? 'bg-indigo-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
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
