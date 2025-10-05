export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Get in touch today for a quotation or inquiries about our products and services.
        </p>
        <p className="text-gray-900 font-semibold mb-2">Plot No. 7701, Lusemfwa Road, Ndola, Zambia</p>
        <p className="text-gray-900 font-semibold mb-2">+260 77 1433555 | +260 97 3863344</p>
        <p className="text-gold font-semibold mb-6">jaxon.inv@gmail.com</p>
        <a
          href="mailto:jaxon.inv@gmail.com"
          className="inline-block bg-gold text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}
