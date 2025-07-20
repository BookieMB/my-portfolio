const Skills = () => {
  const skills = [
    { icon: "devicon-html5-plain colored" },
    { icon: "devicon-css3-plain colored" },
    { icon: "devicon-javascript-plain colored" },
    { icon: "devicon-typescript-plain colored" },
    { icon: "devicon-react-original colored" },
    { icon: "devicon-nodejs-plain colored" },
    { icon: "devicon-python-plain colored" },
    { icon: "devicon-git-plain colored" },
    { icon: "devicon-github-original" },
    { icon: "devicon-tailwindcss-plain colored" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-16 bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <i key={index} className={`${skill.icon} text-7xl`}></i>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
