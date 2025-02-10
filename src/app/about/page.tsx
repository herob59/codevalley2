import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";


export default function About() {
  const teams = [
    {
      id : 1,
      "name": "Eboge Henry Binakeyi",
      "title": "CEO/Full Stake Developer",
      "description": "Expert in building scalable web applications."
    },
    {
      id : 2,
      "name": "Eboge Henry Binakeyi",
      "title": "CEO/Full Stake Developer",
      "description": "Expert in building scalable web applications."
    },
    {
      id : 3,
      "name": "Eboge Henry Binakeyi",
      "title": "CEO/Full Stake Developer",
      "description": "Expert in building scalable web applications."
    },
    {
      id : 4,
      "name": "Eboge Henry Binakeyi",
      "title": "CEO/Full Stake Developer",
      "description": "Expert in building scalable web applications."
    },
  ]
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

   
  {/* Team Section */}
  <section className="mt-10">
          <h2 className="text-2xl font-bold text-center">Our Team</h2>
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4 justify-center">
            {/* Team Member Cards */}
            {teams.map((team) => (
              <div key={team.id} className="text-center bg-gray-100 p-4 rounded-lg">
                <img src={`/assets/team1.jpg`} alt={`Team Member ${team.id}`} className="w-32 h-36 mx-auto  rounded-full" />
                <h3 className="mt-2 font-semibold">{team.name}</h3>
                <p className="text-gray-600">{team.title}</p>
                <p className="text-sm mt-1">{team.description}.</p>
              </div>
            ))}
          </div>
        </section>
    </div>
  
   
  </div>
  < Footer />
</>


       

        
   

     
     
   
  );
}
