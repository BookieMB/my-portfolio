import React from 'react';
import { ChevronUp } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

interface FooterProps {
  navItems: NavItem[];
  scrollTo: (id: string) => void;
  showScrollTop: boolean;
}

export const Footer: React.FC<FooterProps> = ({ navItems, scrollTo, showScrollTop }) => {
  return (
    <>
      <footer className="py-12 relative z-10 text-center text-xs text-slate-500 dark:text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <p className="font-semibold text-slate-700 dark:text-zinc-400 uppercase tracking-widest text-[10px]">
            Marvin Angelo G. Buquis
          </p>
          <div className="flex justify-center gap-4 text-[10px] uppercase font-bold tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="pt-4">
            &copy; {new Date().getFullYear()} Bookie.dev. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top FAB */}
      {showScrollTop && (
        <button
          onClick={() => scrollTo('hero')}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 hover:scale-110 active:scale-95 transition-all z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
