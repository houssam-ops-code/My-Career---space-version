function SkillBadge({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="skill-badge">
      <Icon
        className="skill-icon"
        style={{ color: skill.color }}
      />

      <span>{skill.name}</span>
    </div>
  );
}

export default SkillBadge;