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

    <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24 py-10">
    <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">
        <div>
        <img className="hidden object-cover  w-full h-full rounded-l-xl md:block "  src="/assets/tiktok.jpg" alt="tiktok" style={{clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%"}}  />
        </div>
        <article className="relative p-6 md:p-8 md:col-span-2">
            <svg className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block" width="256"
                height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                    stroke="currentColor" strokeWidth="8"></path>
            </svg>

            <div className="space-y-8">
                <p className="text-base sm:leading-relaxed md:text-2xl">
                    Hi, I'm Henry. I'm a 35-year-old software engineer with a passion for creating innovative solutions.
                    I graduated with a degree in Computer Science from a prestigious university and have been working in
                    the tech industry for over a decade. Throughout my career, I have gained extensive experience in
                    programming languages like React, Next JS, and React Native. I thrive in challenging environments and enjoy
                    collaborating with teams to develop cutting-edge software applications.
                </p>

                <div className="flex items-center space-x-4 md:space-x-0">
                    <img className="w-12 h-12 rounded-full md:hidden" src="/team1.jpg " alt="team1"/>
                    <span className="font-bold text-lg">Eboge Henry</span>
                </div>
            </div>
        </article>
    </blockquote>
</div>
  < Footer />
</>


       

        
   

     
     
   
  );
}
