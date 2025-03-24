"use client";
import { Container } from "./ui/Container";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

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
    <footer className="py-16 border-t border-[var(--border-color)] bg-[var(--card-bg)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-10 h-10 mr-3 rounded-md overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="NM Labs Logo" 
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <h3 className="font-bold text-xl">NM Labs</h3>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Komunitas inovatif mahasiswa Teknik Komputer Institut Teknologi Del yang menghubungkan pembelajaran akademis dengan kebutuhan industri.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/nmlabs-del" className="text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com/company/nmlabs-del" className="text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:nmlabs@del.ac.id" className="text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Tentang
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("kegiatan")}
                  className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Kegiatan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("proyek")}
                  className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Proyek
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("anggota")}
                  className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Anggota
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-[var(--text-tertiary)] mr-2 mt-0.5" />
                <span className="text-sm text-[var(--text-tertiary)]">
                  Institut Teknologi Del<br />
                  Jl. Sisingamangaraja, Sitoluama<br />
                  Laguboti, Toba, Sumatera Utara
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[var(--text-tertiary)] mr-2" />
                <a href="mailto:nmlabs@del.ac.id" className="text-sm text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors">
                  nmlabs@del.ac.id
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Join */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bergabung</h3>
            <p className="text-sm text-[var(--text-tertiary)] mb-4">
              Tertarik menjadi bagian dari komunitas NM Labs? Bergabunglah dengan Discord kami untuk informasi lebih lanjut.
            </p>
            <Link 
              href="https://discord.gg/nmlabs" 
              className="inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-opacity-90 transition-colors text-sm"
            >
              Discord Community
            </Link>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} NM Labs. Institut Teknologi Del.
          </p>
          <p className="text-sm text-[var(--text-tertiary)]">
            Dibuat dengan ❤️ oleh Tim NM Labs
          </p>
        </div>
      </Container>
    </footer>
  );
}
