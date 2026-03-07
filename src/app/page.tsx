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
      {/* Enhanced Global Background - Blue/Cyan Developer Theme */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0d1520] to-[#0a1628]">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 bg-[length:50px_50px]" />

        {/* Blue/Cyan Aurora Glows - Enhanced */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/25 blur-[120px] mix-blend-screen animate-float" />
        <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/30 blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: "-2s", animationDuration: "10s" }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-sky-500/25 blur-[150px] mix-blend-screen animate-float" style={{ animationDelay: "-5s", animationDuration: "12s" }} />
        <div className="absolute top-[50%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-indigo-600/22 blur-[100px] mix-blend-screen animate-float" style={{ animationDelay: "-3s", animationDuration: "11s" }} />

        {/* Additional Shine Layers */}
        <div className="absolute top-[20%] right-[30%] w-[25vw] h-[25vw] rounded-full bg-blue-400/15 blur-[80px] mix-blend-screen animate-float" style={{ animationDelay: "-4s", animationDuration: "9s" }} />
        <div className="absolute bottom-[30%] left-[40%] w-[20vw] h-[20vw] rounded-full bg-cyan-400/20 blur-[60px] mix-blend-screen animate-float" style={{ animationDelay: "-1s", animationDuration: "8s" }} />

        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
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
