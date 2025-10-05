const projects = [
  {
    title: "Efficient Warehousing & Distribution Network",
    description: "Optimizing inventory management, streamlining transportation, and enhancing last-mile delivery efficiency.",
  },
  {
    title: "Sustainable Infrastructure Development",
    description: "Building resilient, eco-friendly, and long-lasting infrastructure in Zambia.",
  },
  {
    title: "Digital Logistics Transformation",
    description: "Modernizing supply chain operations with cutting-edge technology for efficiency, transparency, and reliability.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
