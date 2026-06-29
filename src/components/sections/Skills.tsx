export default function Skills() {
return ( <section
   id="skills"
   className="py-24 px-6 transition-colors duration-300"
 > <div className="max-w-6xl mx-auto"> <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
Skills & Achievements </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-6 text-sky-400">
          Computer Science
        </h3>

        <Skill name="C Programming" level={85} />
        <Skill name="Data Structures & Algorithms" level={80} />
        <Skill name="Computer Networks" level={75} />
        <Skill name="Calculus & Linear Algebra" level={70} />
        <Skill name="Probability & Statistics" level={75} />
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-6 text-sky-400">
          Web Development
        </h3>

        <Skill name="HTML & CSS" level={90} />
        <Skill name="JavaScript" level={85} />
        <Skill name="React" level={82} />
        <Skill name="Next.js" level={80} />
        <Skill name="Firebase" level={85} />
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-6 text-sky-400">
          AI & Cybersecurity
        </h3>

        <Skill name="Artificial Intelligence" level={80} />
        <Skill name="Prompt Engineering" level={85} />
        <Skill name="Machine Learning" level={70} />
        <Skill name="Cybersecurity Fundamentals" level={75} />
        <Skill name="Digital Problem Solving" level={85} />
      </div>

    </div>
  </div>
</section>
);
}

function Skill({
name,
level,
}: {
name: string;
level: number;
}) {
return ( <div className="mb-4"> <div className="flex justify-between mb-1"> <span>{name}</span> <span>{level}%</span> </div>
  <div className="w-full bg-slate-300 dark:bg-slate-700 h-2 rounded-full">
    <div
      className="bg-sky-500 h-2 rounded-full transition-all duration-700"
      style={{ width: `${level}%` }}
    />
  </div>
</div>
);
}