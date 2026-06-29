import FadeIn from "../FadeIn";
const projects = [
{
title: "Amal TalentBridge",
description:
"Modern portfolio and talent platform with Firebase integration and real-time messaging.",
tech: ["Next.js", "Firebase", "Tailwind CSS"],
github: "#",
demo: "#",
},
{
title: "Admin Dashboard",
description:
"Real-time dashboard featuring analytics, search, CSV export and spam detection.",
tech: ["React", "Firebase", "TypeScript"],
github: "#",
demo: "#",
},
{
title: "AI Spam Detection",
description:
"Message filtering system that automatically detects suspicious content.",
tech: ["JavaScript", "Firebase", "AI Logic"],
github: "#",
demo: "#",
},
];

export default function Projects() {
  return (
    <FadeIn>
      <section
        id="projects"
        className="py-24 px-6 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800 overflow-hidden hover:border-sky-500 transition"
              >
                <div className="h-48 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-6xl">
                  🚀
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-sky-500/20 text-sky-400 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-300 dark:bg-slate-800 px-4 py-2 rounded hover:bg-slate-400 dark:hover:bg-slate-700 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 px-4 py-2 rounded hover:bg-sky-600 text-white transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}