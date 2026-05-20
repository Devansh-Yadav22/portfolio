import "./App.css";
import AssignMatePreview from "./assets/assignmate.png";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 app-shell">
      <div className="absolute inset-0 opacity-80">
        <div className="glow-ring blue left-[-160px] top-[-120px] w-[420px] h-[420px] rounded-full animated-blob" />
        <div className="glow-ring purple right-[-140px] top-[80px] w-[340px] h-[340px] rounded-full animated-blob" />
        <div className="glow-ring blue left-[20%] top-[60%] w-[520px] h-[520px] rounded-full animated-blob" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden px-6 pt-28 pb-24">
        <div className="max-w-6xl mx-auto glass-card border-white/10 p-10 md:p-14 rounded-[2rem] shadow-[0_40px_120px_-60px_rgba(14,25,43,0.9)]">
          <div className="mb-10 max-w-3xl">
           
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I’m <span className="text-violet-300">Devansh Yadav</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Computer Science undergraduate building real-world AI products with a focus on backend safety, responsible AI, and clean UX.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#project"
              className="group rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              View Project
            </a>

            <a
              href="https://github.com/Devansh-Yadav22"
              target="_blank"
              className="rounded-3xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition duration-500 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/devansh-yadav-3b59b4359"
              target="_blank"
              className="rounded-3xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition duration-500 hover:border-violet-400/40 hover:bg-white/10 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECT ================= */}
      <section id="project" className="relative px-6 pb-28">
        <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-2">
          <div className="glass-card rounded-[2rem] border-white/10 p-10 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.9)] transition duration-500 hover:-translate-y-1">
            <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-200 ring-1 ring-violet-300/20">
              Featured Project
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">AssignMate</h2>
            <p className="mt-5 text-slate-300">
              A multi-mode AI assignment rewriting tool that gives students transparent control over writing quality and AI detection risk.
            </p>

            <ul className="mt-8 space-y-3 text-slate-300 text-sm leading-7">
              <li>• Academic / Balanced / Aggressive rewrite modes</li>
              <li>• Two-stage AI pipeline for controlled humanization</li>
              <li>• Backend rate limiting & input caps</li>
              <li>• Deployed full-stack app (Render + Vercel)</li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://assignmate-frontend.vercel.app/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition duration-500 hover:scale-[1.01]"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Devansh-Yadav22/assignmate-frontend"
                target="_blank"
                className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-500 hover:border-cyan-300/40 hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-0 bottom-12 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] border-white/10 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.95)]">
              <img
                src={AssignMatePreview}
                alt="AssignMate preview"
                className="w-full h-auto transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="relative px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.9)] backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Skills</h3>
            
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: "Frontend", items: "React, TypeScript, Tailwind, UX" },
              { title: "Backend", items: "Node.js, Express, REST APIs" },
              { title: "AI", items: "Gemini API, prompt engineering, safety controls" },
              { title: "DevOps", items: "Git, GitHub, Vercel, Render" },
            ].map((skill) => (
              <div
                key={skill.title}
                className="glass-card rounded-[1.75rem] border-white/10 p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative border-t border-white/10 bg-slate-950/80 py-10 text-center text-slate-500 text-sm backdrop-blur-xl">
        © {new Date().getFullYear()} Devansh Yadav
      </footer>
    </div>
  );
}

export default App;
