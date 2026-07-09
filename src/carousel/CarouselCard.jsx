import Button from "../../common/Button";

function CarouselCard({ project }) {
  return (
    <div className="carousel-card">

      <div className="carousel-image">

        <img
          src={project.image}
          alt={project.title}
        />

        <div className="carousel-overlay">

          <h2>{project.title}</h2>

          <p>{project.shortdesc}</p>

          <div className="carousel-tech">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="tech-pill"
              >
                {tech}
              </span>

            ))}

          </div>

          <div className="carousel-buttons">

            {project.github && (
              <Button
                to={project.github}
                variant="secondary"
              >
                GitHub
              </Button>
            )}

            {project.demo && (
              <Button
                to={project.demo}
              >
                Live Demo
              </Button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default CarouselCard;