import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NM Labs | Pusat Keunggulan Teknologi Komputer IT Del",
  description: "Komunitas inovatif mahasiswa Teknik Komputer Institut Teknologi Del yang menghubungkan pembelajaran akademis dengan kebutuhan industri melalui pengembangan proyek, riset kolaboratif, dan solusi teknologi terdepan.",
  keywords: "teknologi komputer, embedded systems, IoT, robotika, komunitas mahasiswa, IT Del, riset kolaboratif, pengembangan profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-[80px]"> {/* Add padding-top to account for fixed navbar */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
