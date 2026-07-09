import { NavLink } from "react-router-dom";
import SectionTitle from "../../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import Magnetic from "../../motion/Magnetic";

function FeaturedProjects() {

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="featured-projects section">

      <div className="container">

        <SectionTitle
          title="Featured Projects"
          description="Some of the projects that best represent my skills and passion for software development."
        />

        <div className="featured-grid">

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        <div className="featured-button">

          <Magnetic>
          <NavLink
            to="/projects"
            className="btn btn-primary"
          >
            View All Projects
          </NavLink>
          </ Magnetic>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;