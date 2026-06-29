"use client";

import { useState } from "react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-300 dark:border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-sky-400 font-bold text-xl">Maxamed Axmed</h1>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>

          <ThemeToggle />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-300 dark:border-slate-800">
          <div className="flex flex-col p-6 gap-4">
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
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}