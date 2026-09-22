import { Milestone, CheckCircle2, Clock, Sparkles, Compass, Rocket } from 'lucide-react';

export function LearningJourney() {
  const steps = [
    {
      num: '01',
      title: 'Started My Computer Science Journey',
      description: 'First-year B.Tech Computer Science student beginning my journey in technology.',
      status: 'Completed',
      statusColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
      badge: 'Milestone',
    },
    {
      num: '02',
      title: 'Learning Python',
      description: 'Building programming fundamentals and understanding basic programming logic.',
      status: 'Active',
      statusColor: 'text-cyan-300 bg-cyan-950/60 border-cyan-500/40',
      badge: 'Core Focus',
    },
    {
      num: '03',
      title: 'Exploring Web Development',
      description: 'Learning the fundamentals of creating websites using HTML, CSS, and basic web technologies.',
      status: 'Active',
      statusColor: 'text-blue-300 bg-blue-950/60 border-blue-500/40',
      badge: 'Foundations',
    },
    {
      num: '04',
      title: 'Exploring Generative AI',
      description: 'Beginning to understand Generative AI and experimenting with beginner-level projects.',
      status: 'In Progress',
      statusColor: 'text-purple-300 bg-purple-950/60 border-purple-500/40',
      badge: 'Exploration',
    },
    {
      num: '05',
      title: 'Building Projects',
      description: 'Applying what I learn by creating small practical projects.',
      status: 'Ongoing Practice',
      statusColor: 'text-amber-300 bg-amber-950/60 border-amber-500/40',
      badge: 'Hands-on',
    },
    {
      num: '06',
      title: 'Future Goal',
      description: 'Continue developing my technical skills and work toward becoming an AI Engineer.',
      status: 'North Star',
      statusColor: 'text-indigo-300 bg-indigo-950/60 border-indigo-500/40',
      badge: 'Vision',
    },
  ];

  return (
    <section id="journey" className="py-20 relative bg-[#0A0A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 text-xs font-mono mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>PROGRESSION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            My Learning Journey
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base mb-4">
            A step-by-step reflection of where I started, what I am learning right now, and how I am actively progressing toward AI engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine line on desktop, left on mobile */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 opacity-40" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.num}
                  id={`journey-step-${step.num}`}
                  className="relative flex flex-col sm:flex-row items-start group"
                >
                  {/* Marker Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0A0F] border-2 border-cyan-400 flex items-center justify-center text-cyan-300 z-10 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    <span className="text-[10px] font-mono font-bold">{step.num}</span>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                      isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto text-left'
                    }`}
                  >
                    <div className="bg-[#12121E] border border-white/10 hover:border-cyan-500/40 rounded-2xl p-5 sm:p-6 shadow-xl transition-all duration-200 group-hover:-translate-y-0.5">
                      <div
                        className={`flex items-center gap-2 mb-2 flex-wrap ${
                          isEven ? 'sm:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          STAGE {step.num}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${step.statusColor}`}
                        >
                          {step.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ongoing Progress Note */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Currently pursuing B.Tech Year 1. Actively coding every week.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
