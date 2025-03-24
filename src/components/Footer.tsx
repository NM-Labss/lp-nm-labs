"use client";
import { Container } from "./ui/Container";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <footer className="py-8 border-t border-[var(--border-color)]">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} NM Labs. Institut Teknologi Del.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection("kegiatan")}
              className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Kegiatan
            </button>
            <button 
              onClick={() => scrollToSection("anggota")}
              className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Anggota
            </button>
            <button 
              onClick={() => scrollToSection("kontak")}
              className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Kontak
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
