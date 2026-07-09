import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {

  return (

    <article className="project-card">

      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-overlay">

        <div className="project-content">

          <h3>{project.title}</h3>

          <p>{project.shortdesc}</p>

          <div className="project-tech">

            {project.technologies?.map((tech) => (

              <span key={tech}>
                {tech}
              </span>

            ))}

          </div>

          <div className="project-buttons">

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FiExternalLink />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <FaGithub />
            </a>

          </div>

        </div>

      </div>

    </article>

  );
}

export default ProjectCard;