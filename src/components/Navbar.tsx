import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/70 dark:bg-[#1e1e1e]/70 backdrop-blur-md transition-all duration-300">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <div className="text-lg font-semibold tracking-tight dark:text-white">
          Bookie.dev
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
          <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
          <li><a href="#contacts" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 rounded-md bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
