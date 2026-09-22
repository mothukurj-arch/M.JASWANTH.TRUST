import { Target, Compass, BookOpen, Brain, Code2, Network, Cpu, ArrowUpRight } from 'lucide-react';

export function FutureGoals() {
  const futureGoals = [
    {
      title: 'Improve Python',
      category: 'Programming',
      icon: Code2,
      description: 'Master intermediate Python, object-oriented programming (OOP), file operations, and clean modular code.',
      timeline: 'Near-term',
      accent: 'border-blue-500/30 text-blue-400',
    },
    {
      title: 'Learn Data Structures & Algorithms',
      category: 'CS Core',
      icon: Network,
      description: 'Study arrays, linked lists, stacks, queues, trees, searching, and sorting to develop strong algorithmic reasoning.',
      timeline: 'Upcoming Semester',
      accent: 'border-cyan-500/30 text-cyan-400',
    },
    {
      title: 'Strengthen Web Development',
      category: 'Frontend',
      icon: Compass,
      description: 'Deepen modern frontend foundations, responsive UI frameworks, and interactive client-side web apps.',
      timeline: 'Ongoing',
      accent: 'border-indigo-500/30 text-indigo-400',
    },
    {
      title: 'Learn Machine Learning',
      category: 'Data & ML',
      icon: Brain,
      description: 'Study mathematical foundations, linear regression, classification algorithms, and standard ML pipelines.',
      timeline: 'Future Goal',
      accent: 'border-purple-500/30 text-purple-400',
    },
    {
      title: 'Explore Generative AI',
      category: 'AI Exploration',
      icon: Cpu,
      description: 'Delve deeper into LLM architectures, prompt engineering patterns, retrieval systems, and API integration.',
      timeline: 'Active & Future',
      accent: 'border-fuchsia-500/30 text-fuchsia-400',
    },
    {
      title: 'Build AI Projects',
      category: 'Applications',
      icon: Target,
      description: 'Create functional, end-to-end small AI tools that solve real problems and reinforce learned concepts.',
      timeline: 'Continuous',
      accent: 'border-emerald-500/30 text-emerald-400',
    },
    {
      title: 'Develop Strong Computer Science Fundamentals',
      category: 'Academics',
      icon: BookOpen,
      description: 'Build rigorous understanding of computer architecture, operating systems, networking, and databases.',
      timeline: 'Degree Curriculum',
      accent: 'border-amber-500/30 text-amber-400',
    },
    {
      title: 'Become an AI Engineer',
      category: 'Career Vision',
      icon: ArrowUpRight,
      description: 'Synthesize programming, mathematics, ML/AI systems, and engineering discipline into a professional career.',
      timeline: 'Long-term Aspiration',
      accent: 'border-cyan-400/40 text-cyan-300',
    },
  ];

  return (
    <section id="goals" className="py-20 relative bg-[#0B0B13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>ROADMAP &amp; ASPIRATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Where I Want To Go
          </h2>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            My goal is to continuously strengthen my Computer Science fundamentals, improve my programming skills, explore Artificial Intelligence and Generative AI, and build meaningful projects as I progress through my B.Tech journey.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* Note on Future Goals */}
        <div className="mb-10 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-400 font-mono">
            📌 <strong className="text-slate-200">Clarification:</strong> These cards represent my future learning objectives and roadmap milestones throughout my B.Tech journey, not existing professional credentials.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureGoals.map((goal) => {
            const Icon = goal.icon;
            return (
              <div
                key={goal.title}
                className={`bg-[#12121E] border ${goal.accent} rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:-translate-y-1 hover:shadow-cyan-950/20 transition-all duration-200 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400">
                      {goal.timeline}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {goal.category}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {goal.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                  <span>Goal Objective</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
