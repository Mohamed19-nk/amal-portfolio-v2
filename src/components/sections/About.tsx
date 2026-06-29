import FadeIn from "../FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-sky-400 mb-8">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-slate-700 dark:text-slate-300 leading-8 text-lg">
                I am Maxamed Axmed, a Computer Science student, AI Engineer,
                Graphic Designer, and Co-Founder of Amal TalentBridge AI.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-6">
                My mission is to build intelligent systems that help people access
                opportunities, develop skills, and create better futures through
                technology.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-6">
                I am passionate about Artificial Intelligence, software
                development, entrepreneurship, branding, and creating impactful
                digital products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-sky-400">1+</h3>
                <p className="text-slate-700 dark:text-slate-300 mt-2">Startup Founded</p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-sky-400">AI</h3>
                <p className="text-slate-700 dark:text-slate-300 mt-2">Engineering Focus</p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-sky-400">CS</h3>
                <p className="text-slate-700 dark:text-slate-300 mt-2">Computer Science</p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-sky-400">UI</h3>
                <p className="text-slate-700 dark:text-slate-300 mt-2">Design & Branding</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}