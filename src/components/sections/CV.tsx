import FadeIn from "../FadeIn";
export default function Resume() {
return ( 
<FadeIn>
  <section
   id="resume"
   className="py-24 px-6 transition-colors duration-300"
 > <div className="max-w-4xl mx-auto">
    <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-10 shadow-lg text-center">

      <h2 className="text-4xl font-bold text-sky-400 mb-6">
        My Resume
      </h2>

      <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
        Download my professional CV to learn more about my
        education, technical skills, projects, certifications,
        leadership experience and career journey.
      </p>

      <a
        href="/cv.pdf"
        download
        className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
      >
        📄 Download CV
      </a>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
          <h3 className="text-sky-400 font-bold text-xl">🎓</h3>
          <p className="mt-2">Computer Science Student</p>
        </div>

        <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
          <h3 className="text-sky-400 font-bold text-xl">🤖</h3>
          <p className="mt-2">AI & Software Development</p>
        </div>

        <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
          <h3 className="text-sky-400 font-bold text-xl">🚀</h3>
          <p className="mt-2">Founder & Innovator</p>
        </div>

      </div>

    </div>
  </div>
</section>
</FadeIn>
);
}