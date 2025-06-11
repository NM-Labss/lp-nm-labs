import { Container } from "./ui/Container";
import Image from "next/image";

export function Header() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="https://nm-card.netlify.app/images/nm21.png"
            alt="Logo LP-NM"
            width={120}
            height={120}
            priority
            className="rounded-full"
          />
          <p className="text-xl text-center text-[var(--text-secondary)] max-w-2xl">
            Komunitas Mahasiswa Teknik Komputer Institut Teknologi Del
          </p>
        </div>
      </Container>
    </header>
  );
}
