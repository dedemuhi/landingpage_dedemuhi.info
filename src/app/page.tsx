import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AppsSection from "@/components/AppsSection";
import SkillsSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AppsSection />
        <SkillsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
