import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

export function ContactSection() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900" id="kontak">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Hubungi Kami</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nama</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700"
                  placeholder="Subjek pesan"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Pesan</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <div>
                <Button variant="primary" className="w-full">
                  Kirim Pesan
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="mb-2 flex justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-medium">Telepon</h3>
              <p className="text-gray-600 dark:text-gray-400">+62 123 4567 890</p>
            </div>
            <div className="p-4">
              <div className="mb-2 flex justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">nmlabs@del.ac.id</p>
            </div>
            <div className="p-4">
              <div className="mb-2 flex justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium">Lokasi</h3>
              <p className="text-gray-600 dark:text-gray-400">Institut Teknologi Del, Laguboti, Sumatera Utara</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}