import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Theme State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark mode for a modern look
  });

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active Section State (for navbar highlight)
  const [activeSection, setActiveSection] = useState('hero');

  // Back to Top FAB Visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Theme Syncing Effect
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

  // Active section tracking on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Bottom of page detection for contact section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300 bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 selection:bg-indigo-500 selection:text-white">
      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] animate-pulse duration-[8000ms]" />
        <div className="absolute top-[40%] right-[-10%] w-[45%] aspect-square rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[50%] aspect-square rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] animate-pulse duration-[10000ms]" />
      </div>

      {/* Floating Header & Navigation */}
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollTo={scrollTo}
      />

      {/* Page Sections */}
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer & Floating Action Button */}
      <Footer
        navItems={navItems}
        scrollTo={scrollTo}
        showScrollTop={showScrollTop}
      />
    </div>
  );
};

export default App;
