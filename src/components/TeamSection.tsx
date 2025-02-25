import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const teamMembers = [
  {
    name: "Eboge Henry",
    title: "CEO & Founder",
    image: "/team1.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
    },
  },
  {
    name: "Joe Smith",
    title: "CTO",
    image: "/assets/team2.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
    },
  },
  {
    name: "Michael Brown",
    title: "Lead Developer",
    image: "/assets/team3.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
    },
  },
  {
    name: "Emily Johnson",
    title: "UI/UX Designer",
    image: "/assets/team4.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      youtube: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-4 inline-block border-blue-500">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
              <div className="flex justify-center mt-4 space-x-4 text-blue-600">
                <a href={member.social.facebook} target="_blank">
                  <FaFacebook size={24} />
                </a>
                <a href={member.social.instagram} target="_blank">
                  <FaInstagram size={24} />
                </a>
                <a href={member.social.linkedin} target="_blank">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.social.youtube} target="_blank">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
