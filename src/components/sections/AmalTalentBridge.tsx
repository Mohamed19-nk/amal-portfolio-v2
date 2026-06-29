import FadeIn from "../FadeIn";
export default function AmalTalentBridge() {
return (
    <section
      id="amal"
      className="py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold text-sky-400 mb-6">
      Amal TalentBridge AI
    </h2>

    <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
      An AI-powered career development platform that connects
      individuals with opportunities, skills, and personalized
      learning pathways.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2 text-sky-400">
          AI Career Matching
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Smart recommendations based on skills, goals, and interests.
        </p>
      </div>

      <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2 text-sky-400">
          Skill Gap Analysis
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Identify missing skills and suggest personalized learning paths.
        </p>
      </div>

      <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2 text-sky-400">
          Opportunity Engine
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Discover jobs, internships, and learning opportunities instantly.
        </p>
      </div>

      </div>
        </FadeIn>
      </div>
    </section>
  );
}