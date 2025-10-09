"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/images/LOGO.png"; // direct import ensures correct bundling

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src={logo}
            width={160}
            height={40}
            alt="Jaxon Security Systems Logo"
            priority
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-900 tracking-tight hidden sm:inline">
            Jaxon <span className="text-gold">Investments</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none text-2xl"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-md overflow-hidden"
      >
        <ul className="flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-800 font-medium hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
