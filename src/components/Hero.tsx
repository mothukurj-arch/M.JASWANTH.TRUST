import { ArrowDown, Linkedin, Github, Sparkles, Code2, Cpu, ChevronRight } from 'lucide-react';
import { NeuralBackground } from './NeuralBackground';

interface HeroProps {
  onExploreProjects: () => void;
}

export function Hero({ onExploreProjects }: HeroProps) {
  const linkedinUrl = 'https://www.linkedin.com/in/jaswanth-mothukur-a90b4b431/';
  const githubUrl = 'https://github.com/mothukurj-arch';

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Neural Background */}
      <NeuralBackground />

      {/* Subtle radial ambient gradients (not harsh, purely atmospheric) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Pill */}
        <div
          id="hero-status-pill"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-medium mb-6 shadow-sm shadow-blue-500/10"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="font-mono text-cyan-300 text-[11px] uppercase tracking-wider">
            First-Year B.Tech Computer Science Student
          </span>
        </div>

        {/* Intro */}
        <p className="text-slate-400 text-lg sm:text-xl font-medium mb-2 tracking-wide">
          Hello, I'm
        </p>

        {/* Large Heading: Name */}
        <h1
          id="hero-developer-name"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3"
        >
          M. Jaswanth
        </h1>

        {/* Main Title: ASPIRING AI ENGINEER */}
        <div className="mb-6">
          <span
            id="hero-developer-title"
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase font-mono bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent inline-block"
          >
            ASPIRING AI ENGINEER
          </span>
        </div>

        {/* Supporting description (exact user requirement) */}
        <p
          id="hero-supporting-description"
          className="max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal"
        >
          I'm a first-year B.Tech Computer Science student passionate about Artificial Intelligence, Generative AI, programming, and building practical projects while continuously learning new technologies.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreProjects}
            id="hero-explore-projects-button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Code2 className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
            Explore My Projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-connect-with-me-button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/90 transition-all duration-200 shadow-md shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <Linkedin className="w-4 h-4 text-[#0077B5] group-hover:scale-110 transition-transform" />
            Connect With Me
          </a>
        </div>

        {/* Real Social Links */}
        <div className="flex items-center gap-4 text-slate-400">
          <span className="text-xs uppercase tracking-widest font-mono text-slate-500">
            Profiles
          </span>
          <div className="h-3 w-[1px] bg-slate-700" />
          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2 text-xs font-mono group"
              title="M. Jaswanth on GitHub"
            >
              <Github className="w-4 h-4 text-slate-200 group-hover:text-cyan-400 transition-colors" />
              <span>github/mothukurj-arch</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2 text-xs font-mono group"
              title="M. Jaswanth on LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" />
              <span>linkedin/jaswanth-mothukur</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center text-slate-500">
          <span className="text-[11px] font-mono uppercase tracking-widest mb-1.5">
            Scroll to explore
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400/70" />
        </div>
      </div>
    </section>
  );
}
