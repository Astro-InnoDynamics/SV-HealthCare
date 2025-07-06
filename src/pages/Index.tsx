import Header from '@/components/medical/Header';
import HeroSection from '@/components/medical/HeroSection';
import ServicesSection from '@/components/medical/ServicesSection';
import AboutSection from '@/components/medical/AboutSection';
import DoctorsSection from '@/components/medical/DoctorsSection';
import Footer from '@/components/medical/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-medical">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <DoctorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
