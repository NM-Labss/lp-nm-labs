"use client";

import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials = [
    {
      quote: "NM Labs telah menjadi katalisator utama dalam perjalanan akademik saya. Melalui proyek-proyek praktis dan mentoring dari senior, saya memperoleh keterampilan teknis yang sangat relevan dengan kebutuhan industri saat ini.",
      author: "Budi Santoso",
      role: "Mahasiswa Teknik Komputer",
      year: "Angkatan 2022",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      company: "IT Del",
      rating: 5,
      linkedIn: "https://linkedin.com/in/username"
    },
    {
      quote: "Bergabung dengan NM Labs adalah keputusan terbaik selama masa studi saya. Pengalaman membangun proyek IoT dan embedded systems bersama tim memberikan fondasi yang kuat untuk karir saya di industri teknologi.",
      author: "Dewi Lestari",
      role: "Software Engineer",
      year: "Alumni 2020",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      company: "Tech Innovate",
      rating: 5,
      linkedIn: "https://linkedin.com/in/username"
    },
    {
      quote: "Kolaborasi kami dengan NM Labs telah menghasilkan solusi inovatif yang signifikan meningkatkan efisiensi operasional perusahaan. Mahasiswa memiliki kombinasi unik antara pengetahuan teoretis yang solid dan kemampuan implementasi praktis.",
      author: "Rudi Hartono",
      role: "Chief Technology Officer",
      year: "Partner Industri",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      company: "StartupX Indonesia",
      rating: 5,
      linkedIn: "https://linkedin.com/in/username"
    },
    {
      quote: "NM Labs menciptakan ekosistem pembelajaran yang luar biasa dimana mahasiswa dapat mengeksplorasi teknologi terkini dan mengembangkan solusi untuk masalah dunia nyata. Ini adalah model pendidikan yang sangat efektif.",
      author: "Dr. Siti Rahayu",
      role: "Dosen Pembimbing",
      year: "Fakultas Teknik Komputer",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      company: "Institut Teknologi Del",
      rating: 5,
      linkedIn: "https://linkedin.com/in/username"
    }
  ];

  // Setup autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 6000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, testimonials.length]);

  // Pause autoplay on hover
  const pauseAutoplay = () => setIsAutoplay(false);
  const resumeAutoplay = () => setIsAutoplay(true);

  // Render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Format for quote marks
  const QuoteMark = ({ className }: { className?: string }) => (
    <svg 
      className={`w-12 h-12 text-[var(--primary)] opacity-20 ${className}`} 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );

  return (
    <Section className="py-24 relative" id="testimonial">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
      </div>
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">Apa Kata Mereka</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Pengalaman dan testimoni dari mahasiswa, alumni, dan mitra industri yang telah berkolaborasi dengan NM Labs.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="relative h-[450px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] p-8 md:p-10 rounded-2xl shadow-lg border border-[var(--border-color)] h-full flex flex-col">
                  <QuoteMark className="absolute top-6 left-6 opacity-10" />
                  
                  <div className="flex flex-col h-full justify-between z-10 relative">
                    <div>
                      <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-secondary)] italic mb-8">
                        &ldquo;{testimonials[activeIndex].quote}&rdquo;
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center md:items-end justify-between mt-auto">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--primary)] mr-4 shadow-md">
                          <Image 
                            src={testimonials[activeIndex].avatar} 
                            alt={testimonials[activeIndex].author}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-[var(--text-primary)]">
                            {testimonials[activeIndex].author}
                          </p>
                          <p className="text-[var(--text-tertiary)]">
                            {testimonials[activeIndex].role}
                          </p>
                          <p className="text-sm text-[var(--text-tertiary)]">
                            {testimonials[activeIndex].company}, {testimonials[activeIndex].year}
                          </p>
                          <a 
                            href={testimonials[activeIndex].linkedIn} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[var(--primary)] hover:underline text-sm flex items-center mt-1"
                          >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            LinkedIn
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center md:items-end">
                        <div className="flex mb-1">
                          {renderStars(testimonials[activeIndex].rating)}
                        </div>
                        <p className="text-sm text-[var(--text-tertiary)]">
                          {testimonials[activeIndex].rating}/5 rating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Progress bar */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md bg-[var(--border-color)] h-1 rounded-full overflow-hidden flex">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`h-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-[var(--primary)] flex-grow' 
                      : 'bg-transparent flex-grow-0 w-0'
                  }`}
                  style={{
                    animation: index === activeIndex && isAutoplay 
                      ? 'progress 6s linear' 
                      : 'none'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={() => {
                setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
                setIsAutoplay(false);
                setTimeout(() => setIsAutoplay(true), 10000);
              }}
              className="bg-[var(--card-bg)] rounded-full p-3 shadow-md border border-[var(--border-color)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoplay(false);
                    setTimeout(() => setIsAutoplay(true), 10000);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-[var(--primary)] scale-125' 
                      : 'bg-[var(--border-color)] hover:bg-[var(--text-tertiary)]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => {
                setActiveIndex((activeIndex + 1) % testimonials.length);
                setIsAutoplay(false);
                setTimeout(() => setIsAutoplay(true), 10000);
              }}
              className="bg-[var(--card-bg)] rounded-full p-3 shadow-md border border-[var(--border-color)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      
      {/* Add CSS for progress animation */}
      <style jsx global>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </Section>
  );
}
