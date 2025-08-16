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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;
