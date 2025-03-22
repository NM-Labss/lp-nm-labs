import { Container } from "./ui/Container";
import { Section } from "./ui/Section";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "NM Labs memberikan saya kesempatan untuk mengembangkan keterampilan praktis yang tidak saya dapatkan di kelas reguler.",
      author: "Budi Santoso",
      role: "Mahasiswa Teknik Komputer 2021"
    },
    {
      quote: "Berkolaborasi dalam proyek bersama anggota NM Labs membantu saya memahami bagaimana bekerja dalam tim teknis.",
      author: "Siti Rahma",
      role: "Mahasiswa Teknik Komputer 2022"
    },
    {
      quote: "Workshop yang diadakan NM Labs membuka wawasan saya tentang teknologi terbaru di bidang embedded systems.",
      author: "Andi Wijaya",
      role: "Mahasiswa Teknik Komputer 2020"
    }
  ];

  return (
    <Section className="bg-white dark:bg-gray-800">
      <Container>
        <h2 className="text-2xl font-bold mb-10 text-center">Testimoni Anggota</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {/* Fix unescaped quotes */}
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
