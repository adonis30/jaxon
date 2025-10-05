const testimonials = [
  {
    quote:
      "We've been working with Jaxon Investments for over a year now, and the team has consistently provided excellent service.",
    client: "Mortus Car Rental",
  },
  {
    quote:
      "Jaxon Investments has proven to be a reliable partner. Their commitment to excellence and customer satisfaction is evident in every interaction.",
    client: "YLEM Network",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Client Feedback
        </h2>
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
              {/* Use curly braces to include quotes */}
              <p className="text-gray-700 italic mb-4">
                {`"${t.quote}"`}
              </p>
              <p className="font-semibold text-gold">{t.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
