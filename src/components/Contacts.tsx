import githubIcon from '../assets/github-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';

const Contacts = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-300">
          I'm currently open to work, freelance, or collaborative projects. Feel free to reach out!
        </p>

        <div className="space-y-2">
          <p className="text-gray-400">Email me directly:</p>
          <a href="mailto:your@email.com" className="text-blue-400 hover:underline">
            marvinangelo103@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://github.com/BookieMB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github-icon.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/marvin-buquis-66807a308"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
