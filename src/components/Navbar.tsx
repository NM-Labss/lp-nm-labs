"use client";

import Link from "next/link";
import { Container } from "./ui/Container";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  return (
    <nav className="py-4 border-b border-[var(--border-color)]">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">NM Labs</Link>
          
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
            <Link href="/" className="hover:opacity-70">Beranda</Link>
            <Link href="#about" className="hover:opacity-70">Tentang</Link>
            <Link href="#kegiatan" className="hover:opacity-70">Kegiatan</Link>
            <Link href="#proyek" className="hover:opacity-70">Proyek</Link>
            <Link href="#kontak" className="hover:opacity-70">Kontak</Link>
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
              <Link 
                href="/" 
                className="text-lg font-medium hover:opacity-70"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="#about" 
                className="text-lg font-medium hover:opacity-70"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                href="#kegiatan" 
                className="text-lg font-medium hover:opacity-70"
                onClick={() => setIsMenuOpen(false)}
              >
                Kegiatan
              </Link>
              <Link 
                href="#proyek" 
                className="text-lg font-medium hover:opacity-70"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyek
              </Link>
              <Link 
                href="#kontak" 
                className="text-lg font-medium hover:opacity-70"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
