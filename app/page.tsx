"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";


import { motion } from "framer-motion";
import BoardOfDirectors from "@/components/BoardOfDirectors";
import Contact from "@/components/Contact";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import OtherClients from "@/components/OtherClients";
import Projects from "@/components/Pojects";
import Testimonials from "@/components/Testimonials";
import { i } from "framer-motion/client";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <Header />

      <motion.div id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Hero />
      </motion.div>

      <motion.div id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <About />
      </motion.div>

      <motion.div id="values" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
        <CoreValues />
      </motion.div>

      <motion.div id="team" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
        <BoardOfDirectors />
      </motion.div>

      <motion.div id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
        <Projects />
      </motion.div>

      <motion.div id="testimonials" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }}>
        <Testimonials />
      </motion.div>

      <motion.div id="clients" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1 }}>
        <OtherClients />
      </motion.div>

      <motion.div id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.2 }}>
        <Contact />
      </motion.div>

      <Footer />
    </main>
  );
}
