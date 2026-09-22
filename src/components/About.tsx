import { BookOpen, GraduationCap, Compass, Code, Brain, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export function About() {
  const learningAreas = [
    {
      name: 'Python',
      detail: 'Core syntax, variables, conditionals, loops, functions, and logic building.',
      badge: 'Active Focus',
    },
    {
      name: 'Basic Web Development',
      detail: 'HTML5 structure, modern CSS styling, and responsive layout foundations.',
      badge: 'Foundations',
    },
    {
      name: 'Generative AI',
      detail: 'Understanding foundational concepts, prompts, and practical AI applications.',
      badge: 'Exploring',
    },
    {
      name: 'Computer Science Fundamentals',
      detail: 'Problem-solving logic, algorithmic thinking, and computer systems basics.',
      badge: 'Academic Core',
    },
    {
      name: 'AI Project Development',
      detail: 'Translating beginner programming knowledge into working hands-on mini projects.',
      badge: 'Practical Practice',
    },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-white/5 bg-[#0B0B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Student Perspective */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#12121D] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Subtle top corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Student Developer Journey</h3>
                  <p className="text-xs font-mono text-cyan-400">First-Year B.Tech in Computer Science</p>
                </div>
              </div>

              {/* Honest, student-centered text strictly following user prompt */}
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  My name is <strong className="text-white font-semibold">M. Jaswanth</strong>. I am currently a first-year B.Tech Computer Science student, taking my first dedicated steps in the world of technology and software development.
                </p>
                <p>
                  As someone at the beginning of my technology career, I am deeply fascinated by <span className="text-cyan-300 font-medium">Artificial Intelligence</span> and <span className="text-purple-300 font-medium">Generative AI</span>. I believe in learning by doing: rather than only reading theory, I actively practice Python and basic web development by creating small, functional projects to apply what I learn.
                </p>
                <p>
                  I am driven by a commitment to continuously learn, strengthen my technical reasoning, and build a solid foundation in computer science. My long-term aspiration is to develop into a skilled <span className="text-white font-semibold">AI Engineer</span> capable of solving meaningful real-world challenges.
                </p>
              </div>

              {/* Student Credibility Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10 text-xs">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Target className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Honest Foundation</span>
                    <span className="text-slate-400">Focusing on fundamentals rather than premature claims.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Code className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Hands-on Practice</span>
                    <span className="text-slate-400">Writing small Python scripts and web experiments.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Learning Section / Card */}
          <div className="lg:col-span-5">
            <div
              id="currently-learning-card"
              className="bg-[#12121E] border border-cyan-500/20 rounded-2xl p-6 sm:p-7 shadow-xl shadow-cyan-950/20 relative"
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Currently Learning</h3>
                    <p className="text-[11px] font-mono text-slate-400">Active study areas & coursework</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium">
                  In Progress
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-normal">
                These are my active learning areas where I dedicate daily time to build practical foundations, not expert claims:
              </p>

              <div className="space-y-3">
                {learningAreas.map((area, idx) => (
                  <div
                    key={area.name}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {area.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                        {area.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 pl-3.5">
                      {area.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
