import { Container } from "./ui/Container";

export function Header() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">NM Labs</h1>
          <p className="text-xl text-center text-[var(--text-secondary)] max-w-2xl">
            Komunitas Mahasiswa Teknik Komputer Institut Teknologi Del
          </p>
        </div>
      </Container>
    </header>
  );
}
