import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div className="bg-white dark:bg-[#121212]">
      <Navbar />

      <main className="flex flex-col">
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-24">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen px-4 py-24">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-24">
          <Skills />
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-24">
          <Projects />
        </section>
        
        <section id="contacts" className="min-h-screen flex items-center justify-center px-4 py-24">
          <Contacts />
        </section>
      </main>
    </div>
  );
};

export default App;

