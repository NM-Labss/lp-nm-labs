import dynamic from 'next/dynamic';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";

// Lazy load komponen yang lebih berat
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection').then(mod => ({ default: mod.ProjectsSection })));
const MembersSection = dynamic(() => import('@/components/MembersSection').then(mod => ({ default: mod.MembersSection })));
const ContactSection = dynamic(() => import('@/components/ContactSection').then(mod => ({ default: mod.ContactSection })));

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
