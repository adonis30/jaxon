import Image from "next/image";
import {
  hero5,
  hero6,
  hero7,
  hero8,
  
} from "../public/images"; // adjust path if needed
import { useEffect, useState } from "react";

const images = [hero5, hero6, hero7, hero8];


export default function About() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-80 md:h-[400px] rounded-xl shadow-lg overflow-hidden">
           <Image
            src={images[current]}
            alt={`Jaxon Investments slide ${current + 1}`}
            fill
            className="object-cover transition-transform duration-700 ease-in-out"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            About Jaxon Security Systems
          </h2>
          <p className="text-gray-700 mb-4">
            Jaxon Security Systems is a trusted provider of innovative security
            and surveillance solutions, serving both residential and commercial
            clients across Zambia. With deep expertise in advanced CCTV,
            intrusion alarms, and access control technologies, we ensure your
            people, property, and data are fully protected.
          </p>
          <p className="text-gray-700">
            Our approach combines cutting-edge hardware, expert installation,
            and proactive support — delivering reliable, scalable systems that
            secure your environment around the clock.
          </p>
        </div>
      </div>
    </section>
  );
}
