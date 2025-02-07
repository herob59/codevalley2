import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";


export default function About() {
  return (
    <div>
      <Header /> {/* Reusing the Header Component */}

      <main className=" mx-auto mt-5 p-4">
        {/* Hero Section */}
        <section
      className="relative bg-cover bg-center h-[900px] flex items-center"
      style={{ backgroundImage: "url('/assets/clock face.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-white px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
        <p className="text-lg md:text-xl">
          We are a digital transformation consultancy and engineering company that delivers
          cutting-edge solutions for global organizations and technology startups. Since 2007, we
          have been helping companies and established brands reimagine their business through
          digitalization.
        </p>
      </div>
    </section>


        {/* Team Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center">Our Team</h2>
          <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {/* Team Member Cards */}
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="text-center bg-gray-100 p-4 rounded-lg">
                <img src={`/team${id}.jpg`} alt={`Team Member ${id}`} className="w-24 h-24 mx-auto rounded-full" />
                <h3 className="mt-2 font-semibold">John Doe</h3>
                <p className="text-gray-600">Software Engineer</p>
                <p className="text-sm mt-1">Expert in building scalable web applications.</p>
              </div>
            ))}
          </div>
        </section>

        
      </main>

      {/* Footer */}
     < Footer />
    </div>
  );
}
