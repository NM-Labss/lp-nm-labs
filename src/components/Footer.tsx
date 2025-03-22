import Link from "next/link";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border-color)]">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} NM Labs. Institut Teknologi Del.
          </p>
          <div className="flex gap-6">
            <Link 
              href="#" 
              className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Kegiatan
            </Link>
            <Link 
              href="#" 
              className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Anggota
            </Link>
            <Link 
              href="#" 
              className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Kontak
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
