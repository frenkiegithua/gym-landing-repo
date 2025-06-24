import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App(){
  return(
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;