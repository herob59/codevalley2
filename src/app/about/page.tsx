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

    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
  <div className="max-w-7xl mx-auto">
  
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold">Meet Our Team</h1>
      <p className="text-gray-600 dark:text-gray-400">Our dedicated team of professionals is here to help you succeed.</p>
    </div>

   
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
    
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src="/assets/team1.jpg" alt="Team Member 1" className="w-full h-50 object-fit" />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Eboge Henry</h2>
          <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
          <div className="flex items-center mt-4 space-x-3">
            <a href="#" className="text-blue-500 hover:text-blue-600">[Facebook]</a>
            <a href="#" className="text-blue-400 hover:text-blue-500">[Twitter]</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">[Portfolio]</a>
          </div>
        </div>
      </div>

      
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src="/assets/team1.jpg" alt="Team Member 2" className="w-full h-50 object-fit" />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Jane Smith</h2>
          <p className="text-gray-600 dark:text-gray-400">UI/UX Designer</p>
          <div className="flex items-center mt-4 space-x-3">
            <a href="#" className="text-blue-500 hover:text-blue-600">[Facebook]</a>
            <a href="#" className="text-blue-400 hover:text-blue-500">[Twitter]</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">[Portfolio]</a>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-lg   rounded-lg overflow-hidden">
        <img src="/assets/team1.jpg" alt="Team Member 3" className="w-full h-50 object-fit" />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Alex Johnson</h2>
          <p className="text-gray-600 dark:text-gray-400">Project Manager</p>
          <div className="flex items-center mt-4 space-x-3">
            <a href="#" className="text-blue-500 hover:text-blue-600">[Facebook]</a>
            <a href="#" className="text-blue-400 hover:text-blue-500">[Twitter]</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">[Portfolio]</a>
          </div>
        </div>
      </div>
    
<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src="/assets/team1.jpg" alt="Team Member 3" className="w-full h-50 object-fit " />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Alex Johnson</h2>
          <p className="text-gray-600 dark:text-gray-400">Project Manager</p>
          <div className="flex items-center mt-4 space-x-3">
            <a href="#" className="text-blue-500 hover:text-blue-600">[Facebook]</a>
            <a href="#" className="text-blue-400 hover:text-blue-500">[Twitter]</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">[Portfolio]</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  
   
  </div>
  < Footer />
</>


       

        
   

     
     
   
  );
}
