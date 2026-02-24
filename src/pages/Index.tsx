import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import OctopusSection from "@/components/landing/OctopusSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import EducationSection from "@/components/landing/EducationSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OctopusSection />
      <ProblemSection />
      <HowItWorksSection />
      <EducationSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
