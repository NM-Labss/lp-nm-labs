import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MembersSection } from "@/components/MembersSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProjectsSection />
      <MembersSection />
      <ContactSection />
    </>
  );
}
