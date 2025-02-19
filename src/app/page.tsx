import ContactSection from "@/components/ContactSection";
import CounterSection from "@/components/CounterSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import  './globals.css'


export default function Home() {
  return (
    <main>

     <Header /> 
       <HeroSection/>  
       <ServiceSection />
        <CounterSection /> 
        <ContactSection />
        < Footer />  
 
    </main>
  );
}
