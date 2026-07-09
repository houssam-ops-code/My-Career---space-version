import SkillBadge from "./SkillBadge";

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;