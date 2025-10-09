"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  images12,
  image13,
  image14,
  image15,
  image16,
  image17
} from "@/public/images";

const gallery = [
  {
    image: images12,
    title: "Storage server at ZAMFA Headquarters Luanshya",
    desc: "High-resolution surveillance network with remote monitoring integration.",
  },
  {
    image: image13,
    title: "Monitoring System at - ZAMEFA Headquarters Luanshya",
    desc: "Biometric access system with centralized employee management.",
  },
  {
    image: image14,
    title: "Monitoring System at - Ruida mine Kasempa",
    desc: "Full smart-home integration including cameras, lighting, and motion sensors.",
  },
  {
    image: image15,
    title: "Monitoring System at - Sino metals kitwe",
    desc: "Advanced intruder detection with instant mobile alerts and sirens.",
  },
  {
    image: image16,
    title: "Monitoring System at - AAA Ventures",
    desc: "Complete multi-site camera and access network for educational facilities.",
  },
   {
    image: image17,
    title: "Monitoring System at - Ndola School of Nursing",
    desc: "High-resolution surveillance network with remote monitoring integration.",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Featured Installations
        </h2>

        <div className="relative w-full h-[400px] md:h-[500px] mx-auto overflow-hidden rounded-xl shadow-lg">
          <Image
            src={gallery[current].image}
            alt={gallery[current].title}
            fill
            className="object-cover transition-all duration-700 ease-in-out"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 text-left p-6 md:p-8 text-white">
            <h3 className="text-gray-200 text-xl md:text-2xl font-semibold mb-2">
              {gallery[current].title}
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-2xl">
              {gallery[current].desc}
            </p>
          </div>

          {/* Left button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-900/70 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-900/70 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <p className="mt-10 text-gray-700 max-w-2xl mx-auto">
          From advanced CCTV control rooms to smart residential systems,
          <span className="text-gold font-semibold"> Jaxon Security Systems </span>
          has successfully deployed reliable protection solutions across Zambia and beyond.
        </p>
      </div>
    </section>
  );
}
