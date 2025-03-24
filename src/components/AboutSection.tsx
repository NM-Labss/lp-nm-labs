import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import Image from "next/image";

export function AboutSection() {
  return (
    <Section className="py-20 animated-gradient-bg" id="about">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)] tracking-tight">Tentang NM Labs</h2>
            <div className="space-y-4">
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                NM Labs merupakan pusat keunggulan mahasiswa Teknik Komputer Institut Teknologi Del yang didedikasikan untuk pengembangan kompetensi profesional dalam bidang teknologi komputer.
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Melalui pendekatan pembelajaran berbasis proyek, anggota NM Labs memperoleh pengalaman praktis dalam:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)] text-lg">
                <li>Pengembangan embedded systems</li>
                <li>Internet of Things (IoT)</li>
                <li>Robotika dan komputasi terkini</li>
                <li>Kolaborasi dengan industri</li>
              </ul>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Bergabung dengan NM Labs berarti menjadi bagian dari ekosistem inovasi yang mendorong pengembangan keterampilan teknis dan pola pikir profesional.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="NM Labs Team" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QOQvhAAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm font-medium">Kolaborasi dan inovasi di laboratorium teknologi</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
