function SectionTitle({ title, description }) {
  return (
    <div className="services-header">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;
