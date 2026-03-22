import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import MusicSection from "@/components/MusicSection";
import TeachingSection from "@/components/TeachingSection";
import ProductionsSection from "@/components/ProductionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <section id="music">
        <MusicSection />
      </section>
      <section id="teaching">
        <TeachingSection />
      </section>
      <ProductionsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
