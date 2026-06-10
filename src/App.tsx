import "./App.css";
import HeadlynPreview from "./assets/headlyn.png";
import AssignMatePreview from "./assets/assignmate.png";
import CloudOptimizerPreview from "./assets/cloud_optimizer.png";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 app-shell">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 opacity-80 pointer-events-none">
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
              href="#projects"
              className="group rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Devansh-Yadav22"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition duration-500 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/devansh-yadav-3b59b4359"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition duration-500 hover:border-violet-400/40 hover:bg-white/10 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="relative px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-500/25">
              Portfolio
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base">
              A curated showcase of artificial intelligence products, multi-cloud FinOps systems, and cross-platform mobile utilities.
            </p>
          </div>

          {/* 1. FEATURED PROJECT (HEADLYN) - FULL WIDTH */}
          <div className="grid gap-12 lg:grid-cols-12 items-center glass-card rounded-[2rem] border-white/10 p-8 md:p-12 shadow-[0_40px_100px_-50px_rgba(15,23,42,0.9)] hover:border-violet-500/20 transition-all duration-500 mb-16">
            {/* Project Content */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap gap-2.5 items-center mb-6">
                  <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3.5 py-1 text-xs font-medium text-violet-200 ring-1 ring-violet-300/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-1.5 animate-pulse" />
                    Featured Project
                  </span>
                  <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-300/20">
                    <svg className="w-3.5 h-3.5 mr-1.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Web App
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-300/20">
                    <svg className="w-3.5 h-3.5 mr-1.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Mobile Ready
                  </span>
                </div>

                <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                  Headlyn
                </h3>
                <p className="mt-5 text-slate-300 leading-relaxed text-base">
                  A premium AI-powered news briefing platform designed to deliver sharp, highly curated, and visually stunning news updates. It distills complex stories from global sources into concise, bias-free briefings to keep readers informed without the noise. Developed as both an interactive web application and a cross-platform mobile utility.
                </p>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-violet-400 mr-2 font-bold">•</span>
                    <span>AI-Powered distillation & summarization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-400 mr-2 font-bold">•</span>
                    <span>Cross-platform mobile application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-400 mr-2 font-bold">•</span>
                    <span>Personalized multi-category aggregates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-400 mr-2 font-bold">•</span>
                    <span>Sleek, responsive premium UI layout</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://headlyn1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition duration-500 hover:scale-[1.02] shadow-lg shadow-blue-500/10"
                >
                  Live Web App
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Devansh-Yadav22/Headlyn1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-500 hover:border-violet-300/40 hover:bg-white/10"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="absolute right-0 bottom-12 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="glass-card relative overflow-hidden rounded-[2rem] border-white/10 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.95)] transition duration-500 hover:border-violet-500/30">
                <img
                  src={HeadlynPreview}
                  alt="Headlyn App Preview"
                  className="w-full h-auto transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* 2. GRID OF SECONDARY PROJECTS (ASSIGNMATE & CLOUD COST OPTIMIZER) */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1: AssignMate */}
            <div className="glass-card rounded-[2rem] border-white/10 p-8 flex flex-col justify-between shadow-[0_30px_80px_-50px_rgba(15,23,42,0.9)] hover:border-cyan-500/25 transition-all duration-500 hover:-translate-y-1">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-300/20">
                    AI Writing Assistant
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white">AssignMate</h3>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  A multi-mode AI assignment rewriting tool that grants students transparent control over writing style, quality, and AI detection footprints. It features a custom multi-stage humanization pipeline.
                </p>

                <ul className="mt-6 space-y-2 text-slate-300 text-xs">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Academic / Balanced / Aggressive rewrite modes
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Two-stage humanization pipeline using LLMs
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    Robust backend rate limiting and input filtering
                  </li>
                </ul>

                {/* Preview Thumbnail */}
                <div className="mt-6 glass-card overflow-hidden rounded-2xl border-white/5 bg-slate-900/40">
                  <img 
                    src={AssignMatePreview} 
                    alt="AssignMate UI Thumbnail" 
                    className="w-full h-auto opacity-85 transition-transform duration-500 hover:scale-[1.02] hover:opacity-100" 
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://assignmate-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3 text-xs font-semibold text-white transition duration-500 hover:scale-[1.01]"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Devansh-Yadav22/assignmate-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-slate-100 transition duration-500 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Card 2: Smart Cloud Cost Optimizer */}
            <div className="glass-card rounded-[2rem] border-white/10 p-8 flex flex-col justify-between shadow-[0_30px_80px_-50px_rgba(15,23,42,0.9)] hover:border-blue-500/25 transition-all duration-500 hover:-translate-y-1">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-300/20">
                    <svg className="w-3 h-3 mr-1.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Group Project
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-400 ring-1 ring-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-1.5" />
                    Offline Repository
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white">Smart Cloud Cost Optimizer</h3>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  A collaborative FinOps platform for multi-cloud spend visibility, analytics, forecasting, and resource optimization. Designed for AWS, GCP, and Azure cost intelligence.
                </p>

                <ul className="mt-6 space-y-2 text-slate-300 text-xs">
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">•</span>
                    Multi-cloud CSV & JSON billing data ingestion engine
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">•</span>
                    Computes idle instance, underutilized storage, and k8s savings
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">•</span>
                    Simulated approval workflows for Admin, DevOps & Finance
                  </li>
                </ul>

                {/* Preview Thumbnail */}
                <div className="mt-6 glass-card overflow-hidden rounded-2xl border-white/5 bg-slate-900/40">
                  <img 
                    src={CloudOptimizerPreview} 
                    alt="Cloud Cost Optimizer UI Thumbnail" 
                    className="w-full h-auto opacity-85 transition-transform duration-500 hover:scale-[1.02] hover:opacity-100" 
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Devansh-Yadav22/smart-cloud-cost-optimizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-xs font-semibold text-white transition duration-500 hover:scale-[1.01] shadow-lg shadow-blue-600/10"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="relative px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 ring-1 ring-violet-500/25">
              Expertise
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Technical Skillset
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base">
              A comprehensive stack of technologies, frameworks, and methodologies I leverage to design, build, and optimize products.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                title: "Frontend", 
                items: "React, TypeScript, Tailwind CSS, Next.js, responsive layouts, interactive UI design",
                icon: (
                  <svg className="w-6 h-6 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: "Backend", 
                items: "Node.js, Express, REST APIs, database scaling, application security, clean routing",
                icon: (
                  <svg className="w-6 h-6 text-violet-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                )
              },
              { 
                title: "Artificial Intelligence", 
                items: "Gemini API, prompt engineering, safety guards, conversational flows, context structures",
                icon: (
                  <svg className="w-6 h-6 text-pink-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                title: "DevOps & Infrastructure", 
                items: "Git, GitHub actions, Vercel deployments, Render configurations, multi-cloud principles",
                icon: (
                  <svg className="w-6 h-6 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="glass-card rounded-[1.75rem] border-white/10 p-8 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.8)]"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{skill.items}</p>
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
