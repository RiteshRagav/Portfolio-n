import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaUserAlt } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black border-b border-blue-900 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5 md:py-6">
        <a href="#about" className="flex items-center gap-3 text-2xl md:text-3xl font-extrabold text-blue-400 dark:text-white">
          <FaUserAlt className="text-blue-500 dark:text-white text-2xl md:text-3xl" />
          Ritesh Ragav
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors font-semibold text-lg text-blue-400 dark:text-white px-2 py-1 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <DarkModeToggle />
        </div>
        <button className="md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-9 h-9 text-blue-400 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-black/95 border-b border-blue-900">
          <div className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition-colors font-semibold text-lg text-blue-400 dark:text-white px-2 py-3 rounded-md text-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center mt-2">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}