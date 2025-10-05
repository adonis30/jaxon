const values = [
  {
    title: "Integrity",
    description: "Honesty, transparency, and ethical business practices in everything we do.",
  },
  {
    title: "Excellence",
    description: "Committed to delivering high-quality products and services that exceed expectations.",
  },
  {
    title: "Innovation",
    description: "Embracing creativity and continuous improvement to provide cutting-edge solutions.",
  },
];

export default function CoreValues() {
  return (
    <section id="values" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gold">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
