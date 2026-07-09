function Card({ title, description, tag ,children}) {
  return (
    <article className="card">
      {tag && <span className="card-tag">{tag}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="section-actions">
        {children}
      </div>
    </article>
  );
}

export default Card;
