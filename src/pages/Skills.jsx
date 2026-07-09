import SectionTitle from "../common/SectionTitle";
import { skills } from "../data/skills";
import SkillCategory from "../components/ui/SkillCategory";

function Skills() {
  return (
    <section className="page-section">
      <div className="container">

        <SectionTitle
          title="Skills"
          description="Technologies, frameworks and tools I use regularly."
        />

        <div className="skills-preview">

          {skills.map(group => (
            <SkillCategory
              key={group.category}
              title={group.category}
              skills={group.items}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;