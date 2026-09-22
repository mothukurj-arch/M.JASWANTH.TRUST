import { useState } from 'react';
import { Terminal, Code, ArrowRight, Sparkles, ExternalLink, Calculator, UserCheck } from 'lucide-react';
import { ProjectModal, ProjectData } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: 'student-grade-calculator',
      type: 'grade-calculator',
      name: 'Student Grade Calculator',
      description:
        'A beginner-friendly project that calculates student grades based on marks. This project helped me practice Python programming, user input, calculations, and basic programming logic.',
      technology: 'Python',
      concepts: ['User Input', 'Arithmetic Operations', 'If-Elif-Else Conditionals', 'Data Types'],
      pythonCode: `# Student Grade Calculator
# Practicing Python basics: input, calculations, conditional logic

print("=== Student Grade Calculator ===")

try:
    # Taking marks input for subjects
    math = float(input("Enter marks for Mathematics (0-100): "))
    science = float(input("Enter marks for Science (0-100): "))
    english = float(input("Enter marks for English (0-100): "))

    # Validate range
    if any(m < 0 or m > 100 for m in [math, science, english]):
        print("Invalid marks! Please enter numbers between 0 and 100.")
    else:
        total = math + science + english
        average = total / 3

        print(f"\\nTotal Marks: {total} / 300")
        print(f"Average Percentage: {average:.2f}%")

        # Grading logic
        if average >= 90:
            grade = "A+"
        elif average >= 80:
            grade = "A"
        elif average >= 70:
            grade = "B"
        elif average >= 60:
            grade = "C"
        elif average >= 50:
            grade = "D"
        else:
            grade = "F (Fail)"

        print(f"Final Grade: {grade}")

except ValueError:
    print("Error: Please enter valid numerical values.")
`,
    },
    {
      id: 'voting-eligibility-calculator',
      type: 'voting-eligibility',
      name: 'Voting Eligibility Calculator',
      description:
        'A simple Python project that checks whether a person is eligible to vote based on their age. This project helped me understand conditional statements, user input, and basic programming logic.',
      technology: 'Python',
      concepts: ['Conditionals (if/else)', 'Integer Parsing', 'Input Validation', 'Comparison Operators'],
      pythonCode: `# Voting Eligibility Calculator
# Practicing relational operators and branch logic

print("=== Voting Eligibility Checker ===")

try:
    age = int(input("Please enter your age in years: "))

    if age < 0:
        print("Age cannot be negative! Please enter a valid age.")
    elif age >= 18:
        print(f"Eligible: At {age} years old, you are legally eligible to vote!")
    else:
        years_left = 18 - age
        print(f"Not eligible: You have {years_left} year(s) remaining before you can vote.")

except ValueError:
    print("Invalid input! Please enter a whole number for age.")
`,
    },
  ];

  return (
    <section id="projects" className="py-20 relative bg-[#0B0B14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>PRACTICAL IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            My Projects
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base mb-4">
            Small projects I've built while learning programming and technology.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              className="bg-[#12121E] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-cyan-950/30 group"
            >
              <div>
                {/* Tech Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    {/* Python Icon representation */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-yellow-500/10 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      {proj.type === 'grade-calculator' ? (
                        <Calculator className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <UserCheck className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        {proj.technology}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        Beginner Project
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    Console Script
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {proj.name}
                </h3>

                {/* Description (Exact prompt words) */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Concepts Tag List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Button (Modal viewer with Code & Live Runner, respecting no fake repo URLs) */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  id={`view-project-btn-${proj.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold font-mono transition-all duration-200 shadow-md shadow-blue-500/20 group-hover:shadow-cyan-500/30 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>

                <span className="text-[11px] font-mono text-slate-400">
                  Python 3 Script
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing code and interactive simulation */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
