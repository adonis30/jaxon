import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/security-bg.jpg"
          alt="Security systems background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Protecting What Matters Most
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Trusted experts in CCTV, alarm systems, and access control solutions
          across Zambia.
        </p>
        <Link
          href="#services"
          className="bg-gold text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition"
        >
          Explore Our Solutions
        </Link>
      </div>
    </section>
  );
}
