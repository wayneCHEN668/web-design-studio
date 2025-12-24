import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import ValueSection from "@/components/sections/ValueSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AudienceSection from "@/components/sections/AudienceSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="pain-points">
        <PainPointsSection />
      </section>
      <section id="value">
        <ValueSection />
      </section>
      <FeaturesSection />
      <HowItWorksSection />
      <section id="audience">
        <AudienceSection />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
