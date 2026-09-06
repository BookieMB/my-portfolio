import React from 'react';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 md:px-12 lg:px-20 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Briefcase className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Professional Experience</h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Bridging engineering capabilities with customer service operations to construct clean, functional tools.
          </p>
        </div>

        {/* Timeline UI */}
        <div className="relative border-l-2 border-indigo-100 dark:border-zinc-800 pl-6 sm:pl-8 space-y-12">
          
          {/* Experience Card 1 */}
          <div className="relative group">
            {/* Pulse timeline circle */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-zinc-950 group-hover:scale-125 transition-transform duration-300" />
            
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Customer Service Representative I
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/20">
                  March 2026 - Present
                </span>
              </div>
              
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm sm:text-base">
                Conduent
              </p>

              <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                <li>Delivering reliable client support operations, diagnosing inquiries, and handling customer accounts with high precision.</li>
                <li>Operating custom CRM databases, validating information, and executing workflows in alignment with customer criteria.</li>
                <li>Honing strong collaborative problem-solving skills under SLA parameters.</li>
              </ul>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-350 dark:bg-zinc-700 border-4 border-slate-50 dark:border-zinc-950 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300" />
            
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Web Developer Intern 
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-700/50">
                  May 2025
                </span>
              </div>
              
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm sm:text-base">
                Valentin IT Services
              </p>

              <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                <li>Acquired practical software development experience, helping in designing layout drafts and responsive structures.</li>
                <li>Assisted in formatting landing page components, verifying script variables, and testing API connection points.</li>
                <li>Participated in internal developer sync-ups to review requirements, user stories, and feature deployment pipelines.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
