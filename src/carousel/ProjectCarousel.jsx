import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import { useState } from "react";
import CarouselCard from "./CarouselCard";

function ProjectCarousel() {
  const featuredProjects = projects.filter((p) => p.featured);

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % featuredProjects.length);
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const currentProject = featuredProjects[current];

  const previousProject =
    featuredProjects[
      current === 0 ? featuredProjects.length - 1 : current - 1
    ];

  const nextProject =
    featuredProjects[(current + 1) % featuredProjects.length];

  return (
    <section className="carousel-section">

      <button className="carousel-arrow left" onClick={previous}>
        ❮
      </button>

      <div className="carousel-wrapper">

        <div className="side-card left-card">
          <img
            src={previousProject.image}
            alt={previousProject.title}
          />
        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 80, scale: .9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -80, scale: .9 }}
            transition={{
              duration: .45
            }}
          >

            <CarouselCard project={currentProject} />

          </motion.div>

        </AnimatePresence>

        <div className="side-card right-card">
          <img
            src={nextProject.image}
            alt={nextProject.title}
          />
        </div>

      </div>

      <button className="carousel-arrow right" onClick={next}>
        ❯
      </button>

      <div className="carousel-dots">

        {featuredProjects.map((_, index) => (

          <button
            key={index}
            className={
              current === index
                ? "carousel-dot active"
                : "carousel-dot"
            }
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>
  );
}

export default ProjectCarousel;