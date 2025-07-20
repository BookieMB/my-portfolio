const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Summary */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            🎓 Bachelor of Science in Computer Science graduate
            
            👨‍💻 Aspiring AI Engineer and Software Engineer
            
            💡 Passionate about building solutions that solve real-world problems
            
            🛠️ Strong foundation in front-end development
            
            🤖 Currently diving into Artificial Intelligence and Machine Learning
            
            🌐 Enjoys crafting clean, efficient, and user-friendly interfaces
            
            📚 Committed to lifelong learning and continuous improvement
            
            🤝 Values teamwork, collaboration, and innovation
            
            🔍 Enthusiastic about exploring new technologies and ideas
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I thrive on collaboration, continuously learning, and building things that matter.
            When I’m not coding, I enjoy exploring new tech and designing playful UI concepts.
          </p>
        </div>

        {/* Right Side - Visuals */}
        <div className="grid place-items-center w-full h-full">
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-xl border-2 border-blue-500">
            <img
              src="./src/assets/Bookie.svg" // replace with your image path
              alt="Marvs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

