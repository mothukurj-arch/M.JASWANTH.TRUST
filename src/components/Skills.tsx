import { Code2, Globe, Sparkles, Terminal, FileCode2, Palette, Layers, Bot, Cpu } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      icon: Terminal,
      color: 'from-blue-500/20 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      description: 'Foundational logic building, algorithmic problem solving, and script writing.',
      skills: [
        {
          name: 'Python',
          level: 'Basic',
          levelType: 'foundational',
          details: 'Syntax, variables, input handling, conditionals (if/else), basic loops, and functions.',
          highlight: 'Primary language of study',
        },
      ],
    },
    {
      category: 'Web Development',
      icon: Globe,
      color: 'from-cyan-500/20 to-teal-500/10',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      description: 'Core web technologies for building responsive visual interfaces and layouts.',
      skills: [
        {
          name: 'HTML',
          level: 'Foundational',
          levelType: 'foundational',
          details: 'Semantic tags, document structure, forms, inputs, and accessible markup.',
          highlight: 'Markup structure',
        },
        {
          name: 'CSS',
          level: 'Foundational',
          levelType: 'foundational',
          details: 'Box model, Flexbox, colors, typography, and responsive media queries.',
          highlight: 'Styling & layout',
        },
        {
          name: 'Basic Web Development',
          level: 'Learning',
          levelType: 'learning',
          details: 'Combining HTML & CSS to create clean, responsive personal web pages.',
          highlight: 'Frontend basics',
        },
      ],
    },
    {
      category: 'Artificial Intelligence',
      icon: Bot,
      color: 'from-purple-500/20 to-fuchsia-500/10',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      description: 'Exploring machine intelligence concepts and hands-on beginner Generative AI.',
      skills: [
        {
          name: 'Generative AI',
          level: 'Beginner',
          levelType: 'beginner',
          details: 'Understanding foundational LLM concepts, prompt construction, and AI capabilities.',
          highlight: 'Conceptual exploration',
        },
        {
          name: 'AI Project Development',
          level: 'Beginner',
          levelType: 'beginner',
          details: 'Exploring how to integrate beginner programming logic with AI workflows and tools.',
          highlight: 'Practical application',
        },
      ],
    },
  ];

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Basic':
        return 'bg-blue-500/15 border-blue-500/30 text-blue-300';
      case 'Foundational':
        return 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300';
      case 'Learning':
        return 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300';
      case 'Beginner':
        return 'bg-purple-500/15 border-purple-500/30 text-purple-300';
      default:
        return 'bg-slate-800 border-slate-700 text-slate-300';
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL TOOLSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base mb-4">
            Transparently organized by my current learning stage. Honest foundational skills without arbitrary percentages or exaggerated metrics.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className={`bg-[#11111B] border ${cat.borderColor} rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} border border-white/10 flex items-center justify-center ${cat.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cat.skills.length} {cat.skills.length === 1 ? 'Focus Area' : 'Focus Areas'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List inside Category */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-sm text-white">
                            {skill.name}
                          </h4>
                          <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${getBadgeStyle(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed mb-2">
                          {skill.details}
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/90">
                          <span className="w-1 h-1 rounded-full bg-cyan-400" />
                          <span>{skill.highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Proficiency standard</span>
                  <span className="text-slate-400">Student Baseline</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Beginner Stage */}
        <div className="mt-12 p-4 rounded-xl bg-[#12121D] border border-white/10 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-400">
            <span className="text-cyan-400 font-mono font-semibold">Note: </span>
            I avoid displaying arbitrary percentage bars (e.g. "Python 90%") because as a first-year student, my focus is on genuinely understanding concepts, writing clean code, and building practical projects.
          </p>
        </div>
      </div>
    </section>
  );
}
