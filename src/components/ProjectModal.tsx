import { useState } from 'react';
import { X, Play, Code2, Copy, Check, Terminal, Sparkles, AlertCircle } from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  technology: string;
  concepts: string[];
  pythonCode: string;
  type: 'grade-calculator' | 'voting-eligibility';
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'code' | 'interactive'>('code');
  const [copied, setCopied] = useState(false);

  // State for Grade Calculator interactive tester
  const [marks, setMarks] = useState({ math: '85', science: '78', english: '92' });
  const [gradeResult, setGradeResult] = useState<string | null>(null);

  // State for Voting Eligibility interactive tester
  const [ageInput, setAgeInput] = useState('19');
  const [votingResult, setVotingResult] = useState<string | null>(null);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const calculateGrade = () => {
    const m1 = parseFloat(marks.math);
    const m2 = parseFloat(marks.science);
    const m3 = parseFloat(marks.english);

    if (isNaN(m1) || isNaN(m2) || isNaN(m3) || m1 < 0 || m2 < 0 || m3 < 0 || m1 > 100 || m2 > 100 || m3 > 100) {
      setGradeResult('Error: Marks must be valid numbers between 0 and 100.');
      return;
    }

    const average = (m1 + m2 + m3) / 3;
    let grade = 'F';
    let feedback = 'Needs improvement. Keep practicing!';

    if (average >= 90) {
      grade = 'A+';
      feedback = 'Outstanding performance!';
    } else if (average >= 80) {
      grade = 'A';
      feedback = 'Excellent job!';
    } else if (average >= 70) {
      grade = 'B';
      feedback = 'Good effort!';
    } else if (average >= 60) {
      grade = 'C';
      feedback = 'Satisfactory. You passed.';
    } else if (average >= 50) {
      grade = 'D';
      feedback = 'Borderline pass.';
    }

    setGradeResult(`Average: ${average.toFixed(1)}% | Grade: ${grade} (${feedback})`);
  };

  const checkVoting = () => {
    const age = parseInt(ageInput, 10);
    if (isNaN(age) || age < 0 || age > 125) {
      setVotingResult('Error: Please enter a realistic age.');
      return;
    }

    if (age >= 18) {
      setVotingResult(`Eligible! At age ${age}, you meet the legal voting age requirement (18+).`);
    } else {
      const waitYears = 18 - age;
      setVotingResult(`Not eligible yet. You need to wait ${waitYears} more year${waitYears > 1 ? 's' : ''} to vote.`);
    }
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="bg-[#12121E] border border-cyan-500/30 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/50 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#0E0E18]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {project.name}
              </h3>
              <span className="text-xs font-mono text-cyan-400">
                Technology: {project.technology}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-white/10 px-5 bg-slate-900/60">
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 text-xs font-mono font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'code'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            Python Source Code
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('interactive')}
            className={`py-3 px-4 text-xs font-mono font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'interactive'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-4 h-4" />
            Interactive Logic Simulation
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.concepts.map((concept) => (
              <span
                key={concept}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300"
              >
                {concept}
              </span>
            ))}
          </div>

          {activeTab === 'code' ? (
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#09090E]">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2">{project.id}.py</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  title="Copy code"
                >
                  {copied ? (
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
              <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>{project.pythonCode}</code>
              </pre>
            </div>
          ) : (
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/90 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Sparkles className="w-4 h-4" />
                <span>Simulated Python Runtime in Browser</span>
              </div>

              {project.type === 'grade-calculator' ? (
                <div className="space-y-3">
                  <p className="text-xs text-slate-300">
                    Enter subject scores (0-100) to test the calculation logic:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Math</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={marks.math}
                        onChange={(e) => setMarks({ ...marks, math: e.target.value })}
                        className="w-full bg-[#0A0A0F] border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono focus:border-cyan-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Science</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={marks.science}
                        onChange={(e) => setMarks({ ...marks, science: e.target.value })}
                        className="w-full bg-[#0A0A0F] border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono focus:border-cyan-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">English</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={marks.english}
                        onChange={(e) => setMarks({ ...marks, english: e.target.value })}
                        className="w-full bg-[#0A0A0F] border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono focus:border-cyan-400 outline-none"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={calculateGrade}
                    className="w-full py-2 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs font-mono transition-colors"
                  >
                    Run Grade Calculator Logic
                  </button>
                  {gradeResult && (
                    <div className="p-3 rounded-lg bg-black/60 border border-cyan-500/40 text-xs font-mono text-cyan-300">
                      {gradeResult}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-300">
                    Enter an age to test the conditional eligibility logic:
                  </p>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Person's Age</label>
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={ageInput}
                      onChange={(e) => setAgeInput(e.target.value)}
                      className="w-full bg-[#0A0A0F] border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono focus:border-cyan-400 outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={checkVoting}
                    className="w-full py-2 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs font-mono transition-colors"
                  >
                    Run Voting Check Logic
                  </button>
                  {votingResult && (
                    <div className="p-3 rounded-lg bg-black/60 border border-cyan-500/40 text-xs font-mono text-cyan-300">
                      {votingResult}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Built as a foundational Python learning project practicing user input, logic flows, and conditionals. Repository links will be linked once published.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0E0E18] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
