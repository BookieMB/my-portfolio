import React from 'react';
import { Code, Layers, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-12 lg:px-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Code className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Skills & Tech Stack</h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            A breakdown of languages, development frameworks, and styling engines I use to build digital tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category 1: Frontend & Mobile */}
          <div className="p-6 rounded-3xl bg-white/40 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-800/50 shadow-md flex flex-col gap-6 hover:border-indigo-500/20 dark:hover:border-indigo-400/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Frontend & Mobile</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'React Native', icon: 'devicon-react-original colored' },
                { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
                { name: 'React', icon: 'devicon-react-original colored' },
                { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
                { name: 'HTML5', icon: 'devicon-html5-plain colored' },
                { name: 'CSS3', icon: 'devicon-css3-plain colored' },
                { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' }
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-100/60 dark:bg-zinc-850/50 p-2.5 rounded-2xl border border-slate-200/20 dark:border-zinc-700/20 hover:scale-[1.03] transition-transform select-none cursor-default">
                  <i className={`${skill.icon} text-2xl shrink-0`} />
                  <span className="text-xs font-semibold truncate">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Backend & Database */}
          <div className="p-6 rounded-3xl bg-white/40 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-800/50 shadow-md flex flex-col gap-6 hover:border-indigo-500/20 dark:hover:border-indigo-400/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Backend & Systems</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Python', icon: 'devicon-python-plain colored' },
                { name: 'Java', icon: 'devicon-java-plain colored' },
                { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
                { name: 'Git', icon: 'devicon-git-plain colored' },
                { name: 'GitHub', icon: 'devicon-github-original dark:text-white' }
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-100/60 dark:bg-zinc-850/50 p-2.5 rounded-2xl border border-slate-200/20 dark:border-zinc-700/20 hover:scale-[1.03] transition-transform select-none cursor-default">
                  <i className={`${skill.icon} text-2xl shrink-0`} />
                  <span className="text-xs font-semibold truncate">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Design & Tools */}
          <div className="p-6 rounded-3xl bg-white/40 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-800/50 shadow-md flex flex-col gap-6 hover:border-indigo-500/20 dark:hover:border-indigo-400/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Design & Tools</h3>
            </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Figma', icon: 'devicon-figma-plain colored' },
                  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
                  { name: 'Git', icon: 'devicon-git-plain colored' },
                  { name: 'GitHub', icon: 'devicon-github-original dark:text-white' }
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-100/60 dark:bg-zinc-850/50 p-2.5 rounded-2xl border border-slate-200/20 dark:border-zinc-700/20 hover:scale-[1.03] transition-transform select-none cursor-default">
                    <i className={`${skill.icon} text-2xl shrink-0`} />
                    <span className="text-xs font-semibold truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};
