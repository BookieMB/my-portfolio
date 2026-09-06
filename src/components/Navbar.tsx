import React from 'react';
import { Sparkles, Sun, Moon, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

interface NavbarProps {
  navItems: NavItem[];
  activeSection: string;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
  scrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  activeSection,
  darkMode,
  setDarkMode,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollTo
}) => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <nav className="w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-full border border-white/20 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/10 transition-transform duration-300 hover:scale-[1.01]">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <span>Bookie.dev</span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1 m-0 p-0 list-none">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-200/50 dark:hover:bg-zinc-800/50 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <span className="w-px h-6 bg-slate-300 dark:bg-zinc-800 mx-3" />

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-slate-600 dark:text-zinc-300 hover:bg-slate-200/50 dark:hover:bg-zinc-800/50 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-slate-600 dark:text-zinc-300 hover:bg-slate-200/50 dark:hover:bg-zinc-800/50 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-slate-700 dark:text-zinc-200 hover:bg-slate-200/50 dark:hover:bg-zinc-800/50 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 py-4 rounded-3xl border border-white/20 dark:border-zinc-800/50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col gap-2 px-4 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-5 py-3 rounded-2xl text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
