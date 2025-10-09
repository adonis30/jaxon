"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services"; // NEW security section
import Projects from "@/components/Pojects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <Header />

      {/* HERO */}
      <motion.div
        id="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>

      {/* ABOUT */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <About />
      </motion.div>

      {/* SERVICES – focus on Security Systems */}
      <motion.div
        id="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Services />
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Projects />
      </motion.div>

      {/* TESTIMONIALS */}
      <motion.div
        id="testimonials"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Testimonials />
      </motion.div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
