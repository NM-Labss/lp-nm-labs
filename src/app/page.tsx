import dynamic from 'next/dynamic';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";

// Lazy load komponen yang lebih berat
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection').then(mod => ({ default: mod.ProjectsSection })));
const MembersSection = dynamic(() => import('@/components/MembersSection').then(mod => ({ default: mod.MembersSection })));
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection').then(mod => ({ default: mod.TestimonialSection })));
const ContactSection = dynamic(() => import('@/components/ContactSection').then(mod => ({ default: mod.ContactSection })));

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <FeaturesSection />
      <ProjectsSection />
      <TestimonialSection />
      <MembersSection />
      <ContactSection />
    </>
  );
}
