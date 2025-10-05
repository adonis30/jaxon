"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
        >
          Experience Excellence with Jaxon Investments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 text-gray-700"
        >
          Your trusted partner in hardware, construction, procurement, and logistics in Zambia
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gold text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
        >
          Get a Quote
        </motion.a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gold opacity-10 pointer-events-none"></div>
    </section>
  );
}
