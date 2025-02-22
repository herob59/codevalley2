import ContactSection from "@/components/ContactSection";
import CounterSection from "@/components/CounterSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import  './globals.css'
import TeamSection from "@/components/TeamSection";
import AboutUsSection from "@/components/AboutUsSection";


export default function Home() {
  return (
    <main>

     <Header /> 
       <HeroSection/> 
       <AboutUsSection /> 
       <ServiceSection />
        <CounterSection /> 
        <TeamSection />
        <ContactSection />
        < Footer />  
 
    </main>
  );
}
