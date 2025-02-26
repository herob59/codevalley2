import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";


export default function About() {
  
  return (
    <>
      <Header /> 

     
        
        <section
            className="relative bg-cover bg-center h-[900px] flex items-center"
            style={{ backgroundImage: "url('/assets/clock face.jpg')" }}
          >
          
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
            <div className="relative z-10 max-w-2xl text-white px-8 md:px-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-lg md:text-xl">
                We are a digital transformation consultancy and engineering company that delivers
                cutting-edge solutions for global organizations and technology startups. Since 2020, we
                have been helping companies and established brands reimagine their business through
                digitalization.
              </p>
      </div>
    </section>

         {/*About the author section*/}
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Image for large screens */}
        <div className="hidden md:block w-1/3">
          <img
           src="/team1.jpg" // Change to your image path
            alt="Eboge Henry"
            className="w-full h-auto rounded-lg"
            style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">About the Author</h2>
          <p className="text-lg mt-4 text-gray-600">
            Hi, I'm <strong>Eboge Henry</strong>. I'm a 35-year-old software engineer with a passion for creating innovative solutions.
            I graduated with a degree in Computer Science from a prestigious university and have been working in
            the tech industry for over a decade. Throughout my career, I have gained extensive experience in
            programming languages like React, Next.js, and React Native. I thrive in challenging environments and enjoy
            collaborating with teams to develop cutting-edge software applications.
          </p>
        </div>

        {/* Image for small screens */}
        <div className="block md:hidden w-full mt-6">
          <img
            src="/team1.jpg" // Change to your image path
            alt="Eboge Henry"
            className="w-40 h-40 mx-auto rounded-full"
          />
        </div>

      </div>
    </section>
  < Footer />
</>


       

        
   

     
     
   
  );
}
