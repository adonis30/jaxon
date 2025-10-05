import Image from "next/image";

const clients = [
  "/images/clients/client1.png",
  "/images/clients/client2.png",
  "/images/clients/client3.png",
  "/images/clients/client4.png",
];

export default function OtherClients() {
  return (
    <section id="clients" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Other Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((logo, i) => (
            <img key={i} src={logo} alt={`Client ${i + 1}`} className="mx-auto h-16 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
