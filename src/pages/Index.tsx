
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ResumeSection from '@/components/ResumeSection';
import ProfilesSection from '@/components/ProfilesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="space-y-32">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ProfilesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
