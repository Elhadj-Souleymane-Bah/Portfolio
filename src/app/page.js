import HeroSection from "./components/HeroSection";
import PageApropos from "./components/PageApropos";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-2">
        <HeroSection />
        <PageApropos />
        <ProjectsSection />
      </div>
    </main>
  );
}
