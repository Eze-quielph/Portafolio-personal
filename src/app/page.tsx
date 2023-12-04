import Image from "next/image";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import AboutSection from "./Components/AboutSection/AboutSection";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";
import EmailSection from "./Components/EmailSection/EmailSection";
import Footer from "./Components/Footer/Footer";
import AchievementsSection from "./Components/ArchievemenSection/ArchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
        <Footer />
    </main>
  );
}
//58