import SectionTitle from "../common/SectionTitle";
import { experience } from "../data/experience";
import TimelineItem from "../components/ui/TimelineItem";

function Experience() {
  return (
    <section className="page-section">
      <div className="container">

        <SectionTitle
          title="Experience"
          description="Education, projects and professional experience."
        />

        <div className="timeline">

          {experience.map(item => (
            <TimelineItem
              key={item.id}
              year={item.year}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;