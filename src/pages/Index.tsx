import { useState, useEffect } from "react";
import PortfolioNav from "@/components/PortfolioNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SkillsSection from "@/components/SkillsSection";
import CertificationsVault from "@/components/CertificationsVault";
import AcademicPerformance from "@/components/AcademicPerformance";
import ContactSection from "@/components/ContactSection";

const sections = ["hero", "about", "journey", "projects", "skills", "academics", "certs", "contact"] as const;

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen">
      <PortfolioNav activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="md:ml-16">
        <div id="hero"><HeroSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="journey"><JourneyTimeline /></div>
        <div id="projects"><ProjectsShowcase /></div>
        <div id="skills"><SkillsSection /></div>
        <div id="academics"><AcademicPerformance /></div>
        <div id="certs"><CertificationsVault /></div>
        <div id="contact"><ContactSection /></div>
      </main>

      <footer className="md:ml-16 py-8 text-center text-muted-foreground font-mono text-xs border-t border-border">
        <p>© 2026 · Built with passion at the University of Malawi</p>
      </footer>
    </div>
  );
};

export default Index;
