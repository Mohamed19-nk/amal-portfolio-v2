export default function Footer() {
return ( <footer className="border-t border-slate-300 dark:border-slate-800 py-10 px-6 transition-colors duration-300"> <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8">

      <div>
        <h3 className="text-xl font-bold text-sky-400 mb-3">
          Maxamed Axmed
        </h3>

        <p className="text-slate-600 dark:text-slate-400">
          Computer Science Student, AI Enthusiast,
          Software Developer and Co-Founder of
          Amal TalentBridge AI.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Quick Links
        </h3>

        <div className="flex flex-col gap-2">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Contact
        </h3>

        <p className="text-slate-600 dark:text-slate-400">
          nunkinho114@gmail.com
        </p>

        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Thika, Kenya
        </p>
      </div>

    </div>

    <div className="border-t border-slate-300 dark:border-slate-800 mt-8 pt-6 text-center text-slate-500">
  
    </div>
    <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
  Made with ❤️ by Maxamed Axmed | AI Engineer | Co-Founder of Amal TalentBridge AI
</div>

  </div>
</footer>
);
}