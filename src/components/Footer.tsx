import { Linkedin, Github, Terminal, ArrowUp } from 'lucide-react';

export function Footer() {
  const linkedinUrl = 'https://www.linkedin.com/in/jaswanth-mothukur-a90b4b431/';
  const githubUrl = 'https://github.com/mothukurj-arch';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-[#07070B] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                M. Jaswanth
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400/90">
              Aspiring AI Engineer | B.Tech Computer Science Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-link"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-mono"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-link"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-slate-800 transition-all flex items-center gap-2 text-xs font-mono"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              id="footer-scroll-top-button"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice (exact user specification) */}
        <div className="pt-8 text-center text-xs text-slate-500 font-mono">
          <p>© 2026 M. Jaswanth. Building, learning, and growing in AI.</p>
        </div>
      </div>
    </footer>
  );
}
