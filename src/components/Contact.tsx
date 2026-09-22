import { useState } from 'react';
import { Linkedin, Github, ExternalLink, MessageSquare, Copy, Check, Sparkles, UserCheck } from 'lucide-react';

export function Contact() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const linkedinUrl = 'https://www.linkedin.com/in/jaswanth-mothukur-a90b4b431/';
  const githubUrl = 'https://github.com/mothukurj-arch';

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(type);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#0A0A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION &amp; NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Let's Connect
          </h2>
          <p className="max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            I'm always interested in learning, building projects, and connecting with people who share an interest in technology, Artificial Intelligence, and Generative AI.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </div>

        {/* Real Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* LinkedIn Card */}
          <div className="bg-[#12121E] border border-blue-500/30 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-blue-400/60 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-[#0A66C2]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(linkedinUrl, 'linkedin')}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
                  title="Copy LinkedIn URL"
                >
                  {copiedLink === 'linkedin' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">LinkedIn Profile</h3>
              <p className="text-xs font-mono text-cyan-400 mb-3">jaswanth-mothukur-a90b4b431</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Connect with me on LinkedIn to discuss student projects, technology learning, or professional networking in Artificial Intelligence.
              </p>
            </div>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin-button"
              className="w-full py-3 px-4 rounded-xl bg-[#0A66C2] hover:bg-[#0077B5] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 group-hover:scale-[1.01]"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-[#12121E] border border-slate-700/50 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-slate-500 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-200">
                  <Github className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(githubUrl, 'github')}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
                  title="Copy GitHub URL"
                >
                  {copiedLink === 'github' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">GitHub Profile</h3>
              <p className="text-xs font-mono text-slate-400 mb-3">mothukurj-arch</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Explore my repositories, foundational coding scripts, and practice exercises as I build and publish code throughout my B.Tech studies.
              </p>
            </div>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github-button"
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all duration-200 border border-slate-700 flex items-center justify-center gap-2 group-hover:scale-[1.01]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>
          </div>
        </div>

        {/* Honest Student Note */}
        <div className="max-w-xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
          <p className="text-xs text-slate-400 leading-normal">
            For conversations, study collaborations, or project discussions, please reach out via LinkedIn messaging.
          </p>
        </div>
      </div>
    </section>
  );
}
