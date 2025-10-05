// components/Header.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { logo } from "@/public/images";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Values", href: "#values" },
  { name: "Team", href: "#team" },
  { name: "Projects", href: "#projects" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gold">
           <a className="block w-[12rem] xl:mr-8" href="#hero">
        <img src={logo.src} width={190} height={40} alt="Jaxon Investments logo" />
      </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-900 font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md overflow-hidden"
        >
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-900 font-medium hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
