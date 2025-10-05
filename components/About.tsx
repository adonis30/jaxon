"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../public/images"; // adjust path if needed

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

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
    <section id="about" className="py-16 bg-gray-50">
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
            About Jaxon Investments
          </h2>
          <p className="text-gray-700 mb-4">
            Jaxon Investments Ltd is your trusted partner for high-quality construction,
            hardware supply, procurement, logistics, and technology solutions. Based in
            Ndola, Zambia, we deliver reliable, cost-effective, and innovative solutions
            tailored to your needs.
          </p>
          <p className="text-gray-700">
            At the heart of our operations is a passion for innovation and a drive to
            create value for our clients. We believe in building lasting partnerships,
            fostering innovation, and contributing to the growth of Zambia’s infrastructure
            and business landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
