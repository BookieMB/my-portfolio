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
    <header className="fixed top-6 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-full bg-white/80 px-6 py-4 shadow-md backdrop-blur-md dark:bg-[#1e1e1e]/80 transition-all duration-300">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-tight ml-2 dark:text-white">
          Bookie.dev
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-center gap-14 text-sm font-medium dark:text-gray-200">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contacts" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
