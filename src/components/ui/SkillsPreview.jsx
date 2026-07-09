import SectionTitle from "../../common/SectionTitle";
import Button from "../../common/Button";
import SkillCategory from "./SkillCategory";
import { skills } from "../../data/skills";

function SkillsPreview() {
  return (
    <section className="page-section">
      <div className="container">

        <SectionTitle
          title="Tech Stack"
          description="Technologies I use to build modern applications."
        />

        <div className="skills-preview">

          {skills.map((group) => (
            <SkillCategory
              key={group.category}
              title={group.category}
              skills={group.items}
            />
          ))}

        </div>

        <div className="section-actions">
          <Button to="/skills">
            View all skills
          </Button>
        </div>

      </div>
    </section>
  );
}

export default SkillsPreview;