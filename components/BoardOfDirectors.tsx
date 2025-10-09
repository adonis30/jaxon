import Image from "next/image";

const directors = [
  {
    name: "Onisy Chirwa Ndhlovu",
    role: "Head Technician",
    bio: "Visionary leader driving innovation, strategy, and business growth.",
    image: "/images/team/arthur.jpg",
  },
  {
    name: "Augustine Chirwa",
    role: "Technician",
    bio: "Ensures smooth day-to-day operations and efficient service delivery.",
    image: "/images/team/jackson.jpg",
  },
  {
    name: "Andrew Mwiksa",
    role: "Technician",
    bio: "Handles installation planning and ensures sustainable business growth.",
    image: "/images/team/mwape.jpg",
  },
  {
    name: "Vincent Mwewa",
    role: "Sales Supervisor",
    bio: "Dedicated to ensuring exceptional customer service and satisfaction.",
    image: "/images/team/vincent.jpg",
  },
  {
    name: "Andrew Chishala",
    role: "Consultant",
    bio: "Brings extensive expertise in logistics, infrastructure, and digital transformation.",
    image: "/images/team/andrew.jpg",
  },
];

export default function BoardOfDirectors() {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Meet the Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {directors.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gold font-medium">{member.role}</p>
                <p className="text-gray-700 mt-2 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
