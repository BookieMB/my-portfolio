import ProjectCard from "../components/Projectcard";
import BrewGuardImage from "../assets/brewguard.png";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-8 lg:px-20">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="BrewGuard"
          description="A web app that detects coffee leaf diseases using transfer learning. Users upload an image to receive predictions."
          image={BrewGuardImage}
          tech={["Streamlit", "Python", "Transfer Learning"]}
          demoLink="https://brewguard.streamlit.app/"
          repoLink="https://github.com/FTsune/kape/tree/main"
        />
        {/* Add more <ProjectCard /> entries here */}
        <ProjectCard
          title="More Projects Coming Soon"
          description="Stay tuned for more exciting projects!"
          image="https://via.placeholder.com/300"
          tech={["React", "Tailwind CSS"]}
        />
      </div>
    </section>
  );
}

