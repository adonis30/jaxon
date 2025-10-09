const testimonials = [
  {
    quote:
      "Jaxon Security Systems installed our CCTV and access control with precision and professionalism. The clarity and reliability are unmatched.",
    client: "Ndola School of Nursing",
  },
  {
    quote:
      "We rely on Jaxon for all our surveillance and alarm systems. Their after-sales service and technical support are excellent.",
    client: "AAA Ventures",
  },
  {
    quote:
      "Their smart home integration transformed our estate security. We can monitor and control everything from our phones.",
    client: "Mr Reuben Mpando",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gold">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <p className="italic text-gray-300 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-semibold text-gold">{t.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
