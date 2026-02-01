import AssignMatePreview from "./assets/assignmate.png";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/10 blur-3xl rounded-full" />
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-violet-600/10 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-28">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Devansh Yadav
          </h1>

          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Computer Science undergraduate building real-world AI products with a
            focus on backend safety, responsible AI, and clean UX.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#project"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg hover:opacity-90 transition"
            >
              View Project
            </a>

            <a
              href="https://github.com/Devansh-Yadav22"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/devansh-yadav-3b59b4359"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECT ================= */}
      <section id="project" className="bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Featured Project
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              AssignMate
            </h3>

            <p className="text-slate-400 mb-6">
              A multi-mode AI assignment rewriting tool that gives students
              transparent control over writing quality and AI detection risk.
            </p>

            <ul className="space-y-2 text-slate-300 text-sm mb-8">
              <li>• Academic / Balanced / Aggressive rewrite modes</li>
              <li>• Two-stage AI pipeline for controlled humanization</li>
              <li>• Backend rate limiting & input caps</li>
              <li>• Deployed full-stack app (Render + Vercel)</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="https://assignmate-frontend.vercel.app/"
                target="_blank"
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Devansh-Yadav22/assignmate-frontend"
                target="_blank"
                className="px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="max-w-md mx-auto">
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
              <img
                src={AssignMatePreview}
                alt="AssignMate preview"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-2xl font-semibold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Frontend", items: "React, TypeScript, Tailwind, UX" },
            { title: "Backend", items: "Node.js, Express, REST APIs" },
            { title: "AI", items: "Gemini API, prompt engineering, safety controls" },
            { title: "DevOps", items: "Git, GitHub, Vercel, Render" },
          ].map((skill) => (
            <div
              key={skill.title}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:-translate-y-1 transition"
            >
              <h3 className="font-medium mb-2">{skill.title}</h3>
              <p className="text-sm text-slate-400">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} Devansh Yadav
      </footer>
    </div>
  );
}

export default App;
