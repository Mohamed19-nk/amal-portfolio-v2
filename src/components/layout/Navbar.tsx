"use client";

import { useState } from "react";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-slate-950/90 border-b border-slate-800 z-50"> <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center"> <h1 className="text-sky-400 font-bold text-xl">
Maxamed Axmed </h1>

    <div className="hidden md:flex items-center gap-8 text-slate-300">
      <a href="#about" className="hover:text-sky-400 transition">
        About
      </a>

      <a href="#skills" className="hover:text-sky-400 transition">
        Skills
      </a>

      <a href="#projects" className="hover:text-sky-400 transition">
        Projects
      </a>

      <a href="#certificates" className="hover:text-sky-400 transition">
        Certificates
      </a>

      <a href="#contact" className="hover:text-sky-400 transition">
        Contact
      </a>
    </div>

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-2xl text-white"
      aria-label="Toggle Menu"
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {menuOpen && (
    <div className="md:hidden bg-slate-900 border-t border-slate-800">
      <div className="flex flex-col p-6 gap-4 text-slate-300">
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#certificates" onClick={() => setMenuOpen(false)}>
          Certificates
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
    </div>
  )}
</nav>

);
}