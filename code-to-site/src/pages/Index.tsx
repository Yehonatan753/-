import { useEffect } from "react";
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="reveal"><Departments /></div>
      <div className="reveal"><BrandsCarousel /></div>
      <div className="reveal"><Features /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
