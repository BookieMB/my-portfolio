import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import bookieImage from '../assets/Bookie.svg';

interface HeroProps {
  scrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  return (
    <section
      id="hero"
      className="min-h-[85vh] w-full flex items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-20 relative z-10"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Hero Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Opportunities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Hi! I’m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-400">
              Marvin Buquis
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-750 dark:text-zinc-300 max-w-lg leading-relaxed">
            Software Developer & Customer Service Representative
          </p>
          <p className="text-slate-600 dark:text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
            Crafting premium interfaces, cross-platform mobile apps, and robust systems. Class of 2025 Computer Science graduate.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-slate-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-slate-100 dark:hover:bg-zinc-800/80 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Hero Avatar Illustration */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-30 scale-95" />
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 border-2 border-dashed border-indigo-500/30 dark:border-indigo-400/30 animate-[spin_60s_linear_infinite]">
            {/* Spinning background outline */}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-6 overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 bg-slate-900 dark:bg-zinc-900 flex items-center justify-center">
              <img
                src={bookieImage}
                alt="Bookie.dev Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
