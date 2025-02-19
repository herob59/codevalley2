import ContactSection from "@/components/ContactSection";
import CounterSection from "@/components/CounterSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Category from "@/sections/Category";
import  './globals.css'
import ProductSlider from "@/components/ProductSlider";

export default function Home() {
  return (
    <main>

     <Header /> 
       <HeroSection/>
       <ProductSlider />     
       <Category />
       <ServiceSection />
        <CounterSection /> 
        <ContactSection />
        < Footer />  
 
    </main>
  );
}
