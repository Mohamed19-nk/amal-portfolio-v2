import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import AmalTalentBridge from "../components/sections/AmalTalentBridge";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certificates from "../components/sections/Certificates";
import CV from "@/components/sections/CV";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

import VisitorTracker from "@/components/sections/VisitorTracker";
import VisitorCount from "@/components/sections/VisitorCount";



export default function Home() {
  return (
    <>
      <Navbar />
      
      <VisitorTracker />
      <VisitorCount />
      
      <main className="min-h-[90vh] flex items-center justify-center px-6 pt-10 md:pt-16">
  <div className="text-center max-w-4xl">

<p className="text-sky-400 uppercase tracking-widest mb-4">
  AI Engineer • Founder • Innovator
</p>

<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
  Maxamed Axmed
</h1>

<h2 className="text-xl md:text-3xl text-slate-300 mb-6">
  Co-Founder of Amal TalentBridge AI
</h2>

<p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
  Building AI-powered solutions that help people discover opportunities,
  develop skills, and accelerate career growth.
</p>

<div className="flex flex-col md:flex-row gap-4 justify-center">
  <a
    href="#projects"
    className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="border border-slate-600 hover:border-sky-400 px-6 py-3 rounded-lg transition"
  >
    Contact Me
  </a>
</div>

  </div>
</main>



      {/* SECTIONS BELOW HERO */}
      <About />
      <AmalTalentBridge />
      <Skills />
      <Projects />
      <CV />
      <Contact />
      <Certificates />
      <Footer />
    </>
  );
}