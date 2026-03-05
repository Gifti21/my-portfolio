import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground flex flex-col relative bg-transparent">
      {/* Global Attractive Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
        {/* Subtle global grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-[length:50px_50px]" />

        {/* Animated Aurora Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-screen animate-float" />
        <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: "-2s", animationDuration: "10s" }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-teal-500/10 blur-[150px] mix-blend-screen animate-float" style={{ animationDelay: "-5s", animationDuration: "12s" }} />
      </div>

      <Navbar />

      <main className="flex-grow flex flex-col pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
