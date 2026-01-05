"use client";

import { useState } from "react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Training", href: "#training" },
  { name: "Consulting", href: "#consulting" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-purple-900/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); window.history.pushState({}, '', window.location.pathname); }} className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
            <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold text-white">Nevolute Cloud Labs</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-purple-100/70 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-900/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-purple-100/70 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
