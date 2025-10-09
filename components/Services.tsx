import { ShieldCheck, Video, Lock, Bell, Cpu, Key } from "lucide-react";

const services = [
  {
    icon: <Video className="w-10 h-10 text-gold" />,
    title: "CCTV & Video Surveillance",
    description:
      "High-definition indoor and outdoor surveillance systems with remote monitoring and smart analytics.",
  },
  {
    icon: <Lock className="w-10 h-10 text-gold" />,
    title: "Access Control Systems",
    description:
      "Biometric and RFID access management solutions designed for offices, homes, and industrial facilities.",
  },
  {
    icon: <Bell className="w-10 h-10 text-gold" />,
    title: "Alarm & Intrusion Detection",
    description:
      "Reliable alarm systems that detect and alert you of unauthorized entry or emergency conditions.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-gold" />,
    title: "Fire Detection & Safety",
    description:
      "Advanced smoke detection, fire alarms, and suppression systems ensuring maximum protection.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-gold" />,
    title: "Smart Home Integration",
    description:
      "Seamless smart home automation that connects cameras, sensors, and alarms for complete control.",
  },
  {
    icon: <Key className="w-10 h-10 text-gold" />,
    title: "Maintenance & Support",
    description:
      "Regular system health checks, troubleshooting, and professional upgrades to keep your network secure.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 text-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gold">
          Our Security Solutions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-left shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-gold text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
