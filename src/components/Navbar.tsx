"use client";

import { Container } from "./ui/Container";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Simple direct approach with console logging for debugging
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    console.log(`Found element:`, element);
    
    if (element) {
      const navbarHeight = 80; // navbar height
      const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      console.log(`Scrolling to position: ${y}`);
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <nav 
      className={`py-4 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection("home")} 
            className="font-bold text-xl"
          >
            NM Labs
          </button>
          
          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="hover:opacity-70">Beranda</button>
            <button onClick={() => scrollToSection("about")} className="hover:opacity-70">Tentang</button>
            <button onClick={() => scrollToSection("kegiatan")} className="hover:opacity-70">Kegiatan</button>
            <button onClick={() => scrollToSection("proyek")} className="hover:opacity-70">Proyek</button>
            <button onClick={() => scrollToSection("contact")} className="hover:opacity-70">Kontak</button>
          </div>
        </div>
      </Container>
      
      {/* Mobile menu modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Modal content */}
          <div className="fixed right-0 top-0 h-full w-[75%] max-w-sm bg-[var(--background)] p-6 shadow-xl">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md hover:bg-[var(--hover-bg)]"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-lg font-medium hover:opacity-70 text-left"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-lg font-medium hover:opacity-70 text-left"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection("kegiatan")}
                className="text-lg font-medium hover:opacity-70 text-left"
              >
                Kegiatan
              </button>
              <button 
                onClick={() => scrollToSection("proyek")}
                className="text-lg font-medium hover:opacity-70 text-left"
              >
                Proyek
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-lg font-medium hover:opacity-70 text-left"
              >
                Kontak
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
