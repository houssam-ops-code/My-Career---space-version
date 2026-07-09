import SectionTitle from "../common/SectionTitle";
import ProjectGrid from "../components/ui/ProjectGrid";

function Projects() {
  return (
    <section className="page-section">
      <div className="container">

        <SectionTitle
          title="Projects"
          description="A selection of projects I've worked on during my studies and personal learning journey."
        />

        <ProjectGrid />

      </div>
    </section>
  );
}

export default Projects;