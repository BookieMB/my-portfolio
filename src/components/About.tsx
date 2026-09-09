import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';
import marvsImage from '../assets/marvs-port.webp';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-12 lg:px-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Side: Summary & Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <GraduationCap className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Me
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              🎓 <strong>Education:</strong> B.S. Computer Science, FAITH Colleges (Class of 2025).
            </p>
            <p>
              💻 <strong>Tech Skills:</strong> Frontend development, React Native, and clean web portals.
            </p>
            <p>
              🩺 <strong>Current Role:</strong> Healthcare Customer Service Representative—expert at navigating critical, high-stress situations with ease and precision.
            </p>
          </div>

          {/* Certifications & Badges */}
          <div className="pt-4 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
              Certifications
            </h3>
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/30">
              <Award className="w-5 h-5 text-indigo-500 shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase">CompTIA ITF+</p>
                <p className="text-[10px] text-indigo-600/80 dark:text-indigo-400/80">IT Fundamentals Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Personal Photo (Enlarged) */}
        <div className="flex justify-center">
          <div className="relative group max-w-md w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-200/60 dark:border-zinc-800/60 shadow-2xl hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all duration-500 bg-slate-100 dark:bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent z-10 pointer-events-none" />
            <ImageWithFallback
              src={marvsImage}
              fallbackSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
              alt="Marvin Angelo G. Buquis"
              className="w-full h-full object-cover object-top scale-110 group-hover:scale-115 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
