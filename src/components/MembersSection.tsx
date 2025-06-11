"use client";

import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { useState, useEffect } from "react";
import Image from "next/image";

export function MembersSection() {
  const members = [
    {
      name: "Frengky Soritua Manurung",
      role: "DevOps Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE2FA_4On2PlA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732696003432?e=1755129600&v=beta&t=aMVdjKVJRePqA6oEqbQdtHgV5N7kccrY584vPvg-VFI",
      expertise: "profesional ctrl + c and ctlr + v",
      description: "debug undifined is not a function",
    },
        {
      name: "Josua Wira Sembiring",
      role: "Product Manager",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGmBVV4TSQG6Q/profile-displayphoto-shrink_400_400/B4EZZQvxJHHEAg-/0/1745111422463?e=1755129600&v=beta&t=p8Wh0cYJwhvYh4huFfbMGquylP9Z79NXdUBz3wV5Ii0",
      expertise: "yapping soal infra + pm",
      description: "sifu ngapain sifu"
    },
    {
      name: "Haratama Felix Tamba",
      role: "Information Technology Staff",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGq9tLAokr3lA/profile-displayphoto-shrink_400_400/B56ZddTdvTGQAg-/0/1749617107272?e=1755129600&v=beta&t=QFrEID_EAX1nGuWf4OAhmOCjg2r3bpUbTAxIuwz44A4",
      expertise: "jarkom all role",
      description: "hari hari jumpa thinkpad"
    },
    {
      name: "Andreas Arta Putra Manik",
      role: "Server Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5635AQEmPhjhNR8d2Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725094776886?e=1750233600&v=beta&t=1Oe9N8-aoRFZqxRiwVBh_2Qy1tv84lGKu6rrT8omfyY",
      expertise: "-",
      description: "Desc"
    },
    {
      name: "Joe Manurung",
      role: "Network Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5635AQF3UGrJJiqhQQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1729306065985?e=1750233600&v=beta&t=yDm5N_f0pW33jIjBOYSQgS5FcoLJpWn9zHngzMdetVo",
      expertise: "",
      description: "Desc"
    },
    {
      name: "Maruli Tua Panjaitan",
      role: "Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHpmSt-dgJFhQ/profile-displayphoto-shrink_400_400/B56ZcgzHXFHoAg-/0/1748601960887?e=1755129600&v=beta&t=XJU85NVodX-9q_WtW9ufo_DpXxdY6yLX2Iu3a8424w8",
      expertise: "-",
      description: "Desc"
    },
    {
      name: "Naek Benhoven Butarbutar",
      role: "IT Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5635AQF68UMOdJ8yRg/profile-framedphoto-shrink_400_400/B56ZZw.mY0GkAg-/0/1745652180890?e=1750233600&v=beta&t=32V4zf8BxjkRR_jXBFEAOM1wTOlqCqRacYvlehO9W1I",
      expertise: "-",
      description: "Desc"
    },
    {
      name: "Albert Panggabean",
      role: "Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEs5NZPUDYBkg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709714522168?e=1755129600&v=beta&t=fv9RGhPi8-TpLR0qYOLsX77jAXvhhUnoqt43Ml506u8",
      expertise: "-",
      description: "Desc"
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
        <h2 className="text-4xl font-bold mb-4 text-center mb-20 text-[var(--text-primary)]">Anggota Inti NM Labs</h2>
        
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
