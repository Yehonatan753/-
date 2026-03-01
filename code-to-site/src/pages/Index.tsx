import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import BrandsCarousel from "@/components/BrandsCarousel";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Departments />
      <BrandsCarousel />
      <Features />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
